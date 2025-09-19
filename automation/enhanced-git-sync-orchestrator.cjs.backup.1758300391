#!/usr/bin/env node
/**
 * Enhanced Git Sync Orchestrator
 * Coordinates all git sync automation scripts and provides a unified interface
 */

<<<<<<< HEAD
const { execSync, spawn } = require('child_process');
=======
const { spawn } = require('child_process');
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
            fs.appendFileSync(this.logFile, logMessage + '\n');
=======
            try { fs.appendFileSync(this.logFile, logMessage + '\n'); } catch {}
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        
=======
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        
=======
>>>>>>> origin/auto/autonomy-17186719616
        try {
            const conflictScript = path.join(this.scriptsDir, 'auto-conflict-resolver.sh');
            if (fs.existsSync(conflictScript)) {
                await this.runCommand(`chmod +x "${conflictScript}" && "${conflictScript}"`);
                this.log('✅ Conflict resolution completed');
                return true;
            } else {
                this.log('⚠️  Conflict resolver script not found, checking manually...');
<<<<<<< HEAD
                
                // Check for conflict markers
                const hasConflicts = await this.runCommand('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.txt" 2>/dev/null || true', { logOutput: false });
                
=======
                const hasConflicts = await this.runCommand('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.txt" 2>/dev/null || true', { logOutput: false });
>>>>>>> origin/auto/autonomy-17186719616
                if (hasConflicts.stdout.trim()) {
                    this.log('❌ Conflicts detected, manual resolution required');
                    return false;
                }
<<<<<<< HEAD
                
=======
>>>>>>> origin/auto/autonomy-17186719616
                this.log('✅ No conflicts detected');
                return true;
            }
        } catch (error) {
            this.log(`❌ Conflict resolution failed: ${error.message}`);
            return false;
        }
    }

    async performGitSync() {
        this.log('🚀 Starting enhanced git sync process...');
<<<<<<< HEAD
        
=======
>>>>>>> origin/auto/autonomy-17186719616
        try {
            const syncScript = path.join(this.scriptsDir, 'enhanced-git-sync.sh');
            if (fs.existsSync(syncScript)) {
                await this.runCommand(`chmod +x "${syncScript}" && "${syncScript}"`);
                this.log('✅ Git sync completed successfully');
                return true;
            } else {
                this.log('⚠️  Enhanced git sync script not found, running basic sync...');
                return await this.basicGitSync();
            }
        } catch (error) {
            this.log(`❌ Enhanced git sync failed: ${error.message}`);
            this.log('🔄 Falling back to basic git sync...');
            return await this.basicGitSync();
        }
    }

    async basicGitSync() {
        this.log('🔄 Running basic git sync...');
<<<<<<< HEAD
        
        try {
            // Check current branch
            const branchResult = await this.runCommand('git branch --show-current', { logOutput: false });
            const currentBranch = branchResult.stdout.trim();
            
            this.log(`📍 Current branch: ${currentBranch}`);
            
=======
        try {
            const branchResult = await this.runCommand('git branch --show-current', { logOutput: false });
            const currentBranch = branchResult.stdout.trim();
            this.log(`📍 Current branch: ${currentBranch}`);
>>>>>>> origin/auto/autonomy-17186719616
            if (currentBranch !== 'main') {
                this.log('🔄 Switching to main branch...');
                await this.runCommand('git checkout main');
            }
<<<<<<< HEAD
            
            // Pull latest changes
            this.log('📥 Pulling latest changes...');
            await this.runCommand('git pull origin main');
            
            // Check for conflicts
            const hasConflicts = await this.runCommand('git status --porcelain | grep -E "^UU|^AA|^DD" || true', { logOutput: false });
            
=======
            this.log('📥 Pulling latest changes...');
            await this.runCommand('git pull origin main');
            const hasConflicts = await this.runCommand('git status --porcelain | grep -E "^UU|^AA|^DD" || true', { logOutput: false });
>>>>>>> origin/auto/autonomy-17186719616
            if (hasConflicts.stdout.trim()) {
                this.log('❌ Conflicts detected after pull');
                return false;
            }
<<<<<<< HEAD
            
=======
>>>>>>> origin/auto/autonomy-17186719616
            this.log('✅ Basic git sync completed');
            return true;
        } catch (error) {
            this.log(`❌ Basic git sync failed: ${error.message}`);
            return false;
        }
    }

    async cleanupGitLocks() {
        this.log('🧹 Cleaning up git locks...');
<<<<<<< HEAD
        
=======
>>>>>>> origin/auto/autonomy-17186719616
        try {
            const locks = [
                '.git/index.lock',
                '.git/rebase-merge',
                '.git/rebase-apply',
                '.git/merge-HEAD',
                '.git/CHERRY_PICK_HEAD'
            ];
<<<<<<< HEAD
            
=======
>>>>>>> origin/auto/autonomy-17186719616
            for (const lock of locks) {
                if (fs.existsSync(lock)) {
                    if (fs.lstatSync(lock).isDirectory()) {
                        fs.rmSync(lock, { recursive: true, force: true });
                    } else {
                        fs.unlinkSync(lock);
                    }
                    this.log(`🗑️  Removed: ${lock}`);
                }
            }
<<<<<<< HEAD
            
=======
>>>>>>> origin/auto/autonomy-17186719616
            this.log('✅ Git locks cleaned up');
            return true;
        } catch (error) {
            this.log(`❌ Failed to clean up git locks: ${error.message}`);
            return false;
        }
    }

<<<<<<< HEAD
    async createBackupBranch() {
        this.log('💾 Creating backup branch...');
        
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupBranch = `sync-backup-${timestamp}`;
            
            await this.runCommand(`git branch "${backupBranch}"`);
            this.log(`✅ Backup branch created: ${backupBranch}`);
            return backupBranch;
        } catch (error) {
            this.log(`❌ Failed to create backup branch: ${error.message}`);
            return null;
        }
    }

    async getSyncStatus() {
        this.log('📊 Getting sync status...');
        
=======
    async getSyncStatus() {
        this.log('📊 Getting sync status...');
>>>>>>> origin/auto/autonomy-17186719616
        try {
            const status = await this.runCommand('git status --porcelain', { logOutput: false });
            const branch = await this.runCommand('git branch --show-current', { logOutput: false });
            const remote = await this.runCommand('git remote -v', { logOutput: false });
<<<<<<< HEAD
            
=======
>>>>>>> origin/auto/autonomy-17186719616
            const result = {
                workingTreeClean: !status.stdout.trim(),
                currentBranch: branch.stdout.trim(),
                hasRemotes: remote.stdout.includes('origin'),
                modifiedFiles: status.stdout.split('\n').filter(line => line.trim()).length,
                timestamp: new Date().toISOString()
            };
<<<<<<< HEAD
            
=======
>>>>>>> origin/auto/autonomy-17186719616
            this.log(`📋 Sync status: ${JSON.stringify(result, null, 2)}`);
            return result;
        } catch (error) {
            this.log(`❌ Failed to get sync status: ${error.message}`);
            return null;
        }
    }

    async runFullSync() {
        this.log('🚀 Starting full git sync orchestration...');
<<<<<<< HEAD
        
=======
>>>>>>> origin/auto/autonomy-17186719616
        const startTime = Date.now();
        const results = {
            healthCheck: false,
            conflictResolution: false,
            gitSync: false,
            totalTime: 0,
            errors: []
        };
<<<<<<< HEAD
        
        try {
            // Step 1: Health Check
            this.log('📋 Step 1/4: Git Health Check');
            results.healthCheck = await this.checkGitHealth();
            
            // Step 2: Clean up locks
            this.log('📋 Step 2/4: Cleanup Git Locks');
            await this.cleanupGitLocks();
            
            // Step 3: Conflict Resolution
            this.log('📋 Step 3/4: Conflict Resolution');
            results.conflictResolution = await this.resolveConflicts();
            
            // Step 4: Git Sync
            this.log('📋 Step 4/4: Git Sync');
            results.gitSync = await this.performGitSync();
            
            results.totalTime = Date.now() - startTime;
            
=======
        try {
            this.log('📋 Step 1/4: Git Health Check');
            results.healthCheck = await this.checkGitHealth();
            this.log('📋 Step 2/4: Cleanup Git Locks');
            await this.cleanupGitLocks();
            this.log('📋 Step 3/4: Conflict Resolution');
            results.conflictResolution = await this.resolveConflicts();
            this.log('📋 Step 4/4: Git Sync');
            results.gitSync = await this.performGitSync();
            results.totalTime = Date.now() - startTime;
>>>>>>> origin/auto/autonomy-17186719616
            if (results.healthCheck && results.conflictResolution && results.gitSync) {
                this.log('🎉 Full git sync orchestration completed successfully!');
                this.log(`⏱️  Total time: ${results.totalTime}ms`);
            } else {
                this.log('⚠️  Some steps failed during orchestration');
                this.log(`📊 Results: ${JSON.stringify(results, null, 2)}`);
            }
<<<<<<< HEAD
            
            return results;
            
        } catch (error) {
            results.errors.push(error.message);
            results.totalTime = Date.now() - startTime;
            
            this.log(`❌ Full sync orchestration failed: ${error.message}`);
            this.log(`📊 Results: ${JSON.stringify(results, null, 2)}`);
            
=======
            return results;
        } catch (error) {
            results.errors.push(error.message);
            results.totalTime = Date.now() - startTime;
            this.log(`❌ Full sync orchestration failed: ${error.message}`);
            this.log(`📊 Results: ${JSON.stringify(results, null, 2)}`);
>>>>>>> origin/auto/autonomy-17186719616
            return results;
        }
    }

    async generateReport() {
        this.log('📊 Generating sync report...');
<<<<<<< HEAD
        
=======
>>>>>>> origin/auto/autonomy-17186719616
        try {
            const status = await this.getSyncStatus();
            const report = {
                timestamp: new Date().toISOString(),
                repository: path.basename(process.cwd()),
                status,
                logFile: this.logFile,
                summary: {
                    success: status && status.workingTreeClean,
                    message: status && status.workingTreeClean ? 'Repository is synced and clean' : 'Repository needs attention'
                }
            };
<<<<<<< HEAD
            
            const reportFile = path.join(this.logsDir, `sync-report-${Date.now()}.json`);
            fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
            
            this.log(`📄 Report saved to: ${reportFile}`);
            return report;
            
=======
            const reportFile = path.join(this.logsDir, `sync-report-${Date.now()}.json`);
            fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
            this.log(`📄 Report saved to: ${reportFile}`);
            return report;
>>>>>>> origin/auto/autonomy-17186719616
        } catch (error) {
            this.log(`❌ Failed to generate report: ${error.message}`);
            return null;
        }
    }
}

<<<<<<< HEAD
// CLI interface
async function main() {
    const orchestrator = new EnhancedGitSyncOrchestrator();
    
    const command = process.argv[2] || 'full-sync';
    
=======
async function main() {
    const orchestrator = new EnhancedGitSyncOrchestrator();
    const command = process.argv[2] || 'full-sync';
>>>>>>> origin/auto/autonomy-17186719616
    try {
        switch (command) {
            case 'health-check':
                await orchestrator.checkGitHealth();
                break;
<<<<<<< HEAD
                
            case 'resolve-conflicts':
                await orchestrator.resolveConflicts();
                break;
                
            case 'cleanup-locks':
                await orchestrator.cleanupGitLocks();
                break;
                
            case 'basic-sync':
                await orchestrator.basicGitSync();
                break;
                
            case 'full-sync':
                await orchestrator.runFullSync();
                break;
                
            case 'status':
                await orchestrator.getSyncStatus();
                break;
                
            case 'report':
                await orchestrator.generateReport();
                break;
                
=======
            case 'resolve-conflicts':
                await orchestrator.resolveConflicts();
                break;
            case 'cleanup-locks':
                await orchestrator.cleanupGitLocks();
                break;
            case 'basic-sync':
                await orchestrator.basicGitSync();
                break;
            case 'full-sync':
                await orchestrator.runFullSync();
                break;
            case 'status':
                await orchestrator.getSyncStatus();
                break;
            case 'report':
                await orchestrator.generateReport();
                break;
>>>>>>> origin/auto/autonomy-17186719616
            default:
                console.log('Available commands:');
                console.log('  health-check     - Run git health check');
                console.log('  resolve-conflicts - Resolve git conflicts');
                console.log('  cleanup-locks    - Clean up git locks');
                console.log('  basic-sync       - Run basic git sync');
                console.log('  full-sync        - Run full orchestrated sync');
                console.log('  status           - Get current sync status');
                console.log('  report           - Generate sync report');
                break;
        }
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
}

<<<<<<< HEAD
// Run if called directly
=======
>>>>>>> origin/auto/autonomy-17186719616
if (require.main === module) {
    main();
}

module.exports = EnhancedGitSyncOrchestrator;
<<<<<<< HEAD
=======


>>>>>>> origin/auto/autonomy-17186719616
