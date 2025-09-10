#!/usr/bin/env node;

/**;
 * Master Intelligent Automation Controller;
 * Orchestrates all intelligent automation systems and provides unified control;
 */;

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

// Import automation systems;
const IntelligentRepositoryManager = require('./intelligent-repository-manager.cjs')
const AdvancedDevelopmentIntelligence = require('./advanced-development-intelligence.cjs')
const IntelligentDeploymentOrchestrator = require('./intelligent-deployment-orchestrator.cjs')
