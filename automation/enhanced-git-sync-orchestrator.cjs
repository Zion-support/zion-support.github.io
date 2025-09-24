#!/usr/bin/env node
/**
 * Enhanced Git Sync Orchestrator
 * Coordinates all git sync automation scripts and provides a unified interface
 */
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
class EnhancedGitSyncOrchestrator {
    constructor() {
        this.scriptsDir = path.join(__dirname, 'scripts');
        this.logsDir = path.join(__dirname, 'logs');
        this.ensureDirectories();
        this.setupLogging();
    }
    ensureDirectories() {
        if (!fs.existsSync(this.logsDir)) {
            fs.mkdirSync(this.logsDir, { recursive: true });
        }
    }
    setupLogging() {
        this.logFile = path.join(this.logsDir, `git-sync-${Date.now()}.log`);
        this.log = (message) => {
            const timestamp = new Date().toISOString();
            const logMessage = `[${timestamp}] ${message}`;
            console.log(logMessage);
            fs.appendFileSync(this.logFile, logMessage + '\n');
        };
    }
    async runCommand(command, options = {}) {
        return new Promise((resolve, reject) => {
            const child = spawn('bash', ['-c', command], {
                stdio: ['inherit', 'pipe', 'pipe'],
                ...options
            });
            let stdout = '';
            let stderr = '';
            child.stdout.on('data', (data) => {
                stdout += data.toString();
                if (options.logOutput !== false) {
                    this.log(`STDOUT: ${data.toString().trim()}`);
                }
            });
            child.stderr.on('data', (data) => {
                stderr += data.toString();
                if (options.logOutput !== false) {
                    this.log(`STDERR: ${data.toString().trim()}`);
                }
            });
            child.on('close', (code) => {
                if (code === 0) {
                    resolve({ stdout, stderr, code });
                } else {
                    reject(new Error(`Command failed with code ${code}: ${stderr}`));
                }
            });
            child.on('error', (error) => {
                reject(error);
            });
        });
    }
    async checkGitHealth() {
        this.log('🔍 Running git health check...');
        try {
            const healthScript = path.join(this.scriptsDir, 'git-health-checker-simple.sh');
            if (fs.existsSync(healthScript)) {
                await this.runCommand(`chmod +x "${healthScript}" && "${healthScript}"`);
                this.log('✅ Git health check completed');
                return true;
            } else {
                this.log('⚠️  Git health checker script not found, running basic checks...');
                await this.runCommand('git status');
                return true;
            }
        } catch (error) {
            this.log(`❌ Git health check failed: ${error.message}`);
            return false;
        }
    }
    async resolveConflicts() {
        this.log('🔄 Checking for conflicts...');
        try {
            const conflictScript = path.join(this.scriptsDir, 'auto-conflict-resolver.sh');
            if (fs.existsSync(conflictScript)) {
                await this.runCommand(`chmod +x "${conflictScript}" && "${conflictScript}"`);
                this.log('✅ Conflict resolution completed');
                return true;
            } else {
                this.log('⚠️  Conflict resolver script not found, checking manually...');
                // Check for conflict markers
