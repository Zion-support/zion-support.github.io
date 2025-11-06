module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: '/Users/miami2/zion-app-clone',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '77MB',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
    },

    // Comprehensive Continuous Automation - Master orchestrator (ULTRA-FAST - every 1 minute)
    {
      name: 'continuous-automation',
      script: './scripts/automation/comprehensive-continuous-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_SPEED: 'ultra-fast',
        RUN_CONTINUOUSLY: 'true',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './logs/continuous-automation-error.log',
      out_file: './logs/continuous-automation-out.log',
      log_file: './logs/continuous-automation.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/1 * * * *', // Every 1 minute - ULTRA-FAST continuous operation
      pmx: true,
    },

    // Error Monitor - ULTRA-FAST error detection (every 1 minute)
    {
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '1',
        AUTO_FIX: 'true',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      log_file: './logs/error-monitor.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/1 * * * *', // Every 1 minute - ULTRA-FAST
      pmx: true,
    },

    // Health Checker - Continuous health monitoring (every 3 minutes)
    {
      name: 'health-checker',
      script: './scripts/automation/health-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        CHECK_INTERVAL: '3',
      },
      error_file: './logs/health-checker-error.log',
      out_file: './logs/health-checker-out.log',
      log_file: './logs/health-checker.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '30s',
      restart_delay: 2000,
      cron_restart: '*/3 * * * *', // Every 3 minutes
      pmx: true,
    },

    // Auto Fixer - ULTRA-FAST automated fixes (every 2 minutes)
    {
      name: 'auto-fixer',
      script: './scripts/automation/auto-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true',
        FIX_INTERVAL: '2',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './logs/auto-fixer-error.log',
      out_file: './logs/auto-fixer-out.log',
      log_file: './logs/auto-fixer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 3000,
      cron_restart: '*/2 * * * *', // Every 2 minutes - ULTRA-FAST fixing
      pmx: true,
    },

    // Syntax Fixer - Fast syntax error fixing (every 15 minutes)
    {
      name: 'syntax-fixer',
      script: './scripts/automation/syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
        FIX_ON_DETECT: 'true',
      },
      error_file: './logs/syntax-fixer-error.log',
      out_file: './logs/syntax-fixer-out.log',
      log_file: './logs/syntax-fixer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 3000,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      pmx: true,
    },

    // Dependency Manager - Hourly dependency checks
    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production',
        AUTO_UPDATE: 'false', // Safety: don't auto-update dependencies
      },
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      log_file: './logs/dependency-manager.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 * * * *', // Every hour
      pmx: true,
    },

    // Build Monitor - Fast build monitoring (every 10 minutes)
    {
      name: 'build-monitor',
      script: './scripts/automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        MONITOR_CONTINUOUSLY: 'true',
      },
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 2000,
      cron_restart: '*/10 * * * *', // Every 10 minutes
      pmx: true,
    },

    // Log Cleaner - Daily at 2 AM
    {
      name: 'log-cleaner',
      script: './scripts/automation/log-cleaner.cjs',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        KEEP_DAYS: '7',
      },
      error_file: './logs/log-cleaner-error.log',
      out_file: './logs/log-cleaner-out.log',
      log_file: './logs/log-cleaner.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 2000,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      pmx: true,
    },

    // LinkedIn Automation - Continuous marketing
    {
      name: 'linkedin-automation',
      script: './automation/ai-social-media-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PLATFORM: 'linkedin',
        AUTOMATION_ENABLED: 'true',
      },
      error_file: './logs/linkedin-automation-error.log',
      out_file: './logs/linkedin-automation-out.log',
      log_file: './logs/linkedin-automation.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      cron_restart: '0 */4 * * *', // Every 4 hours
      pmx: true,
    },

    // Instagram Automation - Continuous marketing
    {
      name: 'instagram-automation',
      script: './automation/ai-social-media-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PLATFORM: 'instagram',
        AUTOMATION_ENABLED: 'true',
      },
      error_file: './logs/instagram-automation-error.log',
      out_file: './logs/instagram-automation-out.log',
      log_file: './logs/instagram-automation.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      cron_restart: '30 */4 * * *', // Every 4 hours (offset from LinkedIn)
      pmx: true,
    },

    // Frontend Content Advertiser - Continuously advertises ALL frontend pages
    {
      name: 'frontend-content-advertiser',
      script: './automation/frontend-content-advertiser.js',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MIN_DELAY_MS: '5000', // 5 seconds minimum between posts
        MAX_DELAY_MS: '30000', // 30 seconds maximum
        BATCH_SIZE: '10', // Post 10 pages per cycle
        PARALLEL_POSTS: '3', // Post to 3 platforms simultaneously
      },
      error_file: './logs/frontend-advertiser-error.log',
      out_file: './logs/frontend-advertiser-out.log',
      log_file: './logs/frontend-advertiser.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000,
      // No cron - runs continuously at maximum speed
      pmx: true,
    },

    // Intelligent Orchestrator - Master coordination
    {
      name: 'intelligent-orchestrator',
      script: './scripts/automation/intelligent-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATE_CONTINUOUSLY: 'true',
        OPTIMIZATION_MODE: 'aggressive',
      },
      error_file: './logs/intelligent-orchestrator-error.log',
      out_file: './logs/intelligent-orchestrator-out.log',
      log_file: './logs/intelligent-orchestrator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '*/20 * * * *', // Every 20 minutes
      pmx: true,
    },

    // Automation Dashboard - Real-time monitoring
    {
      name: 'automation-dashboard',
      script: './scripts/automation/automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        DASHBOARD_PORT: '3001',
        REFRESH_INTERVAL: '30',
      },
      error_file: './logs/automation-dashboard-error.log',
      out_file: './logs/automation-dashboard-out.log',
      log_file: './logs/automation-dashboard.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 3000,
      pmx: true,
    },

    // AI Content Generator - ULTRA-FAST CONTINUOUS content generation
    {
      name: 'ai-content-generator',
      script: './automation/ai-content-generator-automation.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CONTENT_GENERATION_ENABLED: 'true',
        CONTINUOUS_MODE: 'true',
        FAST_MODE: 'true',
        ULTRA_FAST_MODE: 'true',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './logs/ai-content-generator-error.log',
      out_file: './logs/ai-content-generator-out.log',
      log_file: './logs/ai-content-generator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      // No cron - runs continuously at maximum speed
      pmx: true,
    },

    // AI Development Agent - Autonomous code development (CONTINUOUS FAST MODE)
    {
      name: 'ai-development-agent',
      script: './automation/ai-development-agent.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        CONTINUOUS_MODE: 'true',
        FAST_MODE: 'true',
        MAX_CHANGES_PER_RUN: '20',
      },
      error_file: './logs/ai-development-agent-error.log',
      out_file: './logs/ai-development-agent-out.log',
      log_file: './logs/ai-development-agent.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 3000,
      pmx: true,
    },

    // AI Code Generator - Advanced AI-powered code generation (CONTINUOUS FAST MODE)
    {
      name: 'ai-code-generator',
      script: './automation/ai-code-generator.cjs',
      args: 'features',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        CONTINUOUS_MODE: 'true',
        FAST_MODE: 'true',
      },
      error_file: './logs/ai-code-generator-error.log',
      out_file: './logs/ai-code-generator-out.log',
      log_file: './logs/ai-code-generator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000,
      cron_restart: '*/2 * * * *', // Every 2 hours - continuous feature generation
      pmx: true,
    },

    // AI Master Orchestrator - Coordinates all AI agents (CONTINUOUS FAST MODE)
    {
      name: 'ai-master-orchestrator',
      script: './automation/ai-master-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_CONCURRENT_TASKS: '10',
        CONTINUOUS_MODE: 'true',
        FAST_MODE: 'true',
        ORCHESTRATION_INTERVAL: '120000',
      },
      error_file: './logs/ai-master-orchestrator-error.log',
      out_file: './logs/ai-master-orchestrator-out.log',
      log_file: './logs/ai-master-orchestrator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 3000,
      pmx: true,
    },

    // AI Continuous Improvement Agent - ULTRA-FAST AUTONOMOUS MODE
    {
      name: 'ai-continuous-improvement',
      script: './automation/ai-continuous-improvement-agent.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G', // Increased for more parallel operations
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_MODE: 'true',
        INTERVAL_MINUTES: '1', // ⚡ MAXIMUM SPEED: Run every 1 minute
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_FIXES_PER_RUN: '100', // Maximum fixes for fastest improvements
        PRIORITY_MODE: 'all', // Process all priorities
        PARALLEL_PROCESSING: 'true', // Enable parallel processing
        FAST_MODE: 'true', // Fast mode enabled
      },
      error_file: './logs/ai-continuous-improvement-error.log',
      out_file: './logs/ai-continuous-improvement-out.log',
      log_file: './logs/ai-continuous-improvement.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts - NEVER STOP
      min_uptime: '2s', // Ultra-fast restart threshold
      restart_delay: 500, // Maximum speed restart delay
      cron_restart: '*/1 * * * *', // Every 1 minute - ULTRA-FAST continuous improvement
      pmx: true,
    },

    // AI PM2 Optimization Agent - Meta-automation to continuously improve PM2 ecosystem
    {
      name: 'ai-pm2-optimization',
      script: './automation/ai-pm2-optimization-agent.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '768M',
      env: {
        NODE_ENV: 'production',
        AUTO_OPTIMIZE: 'true',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        FAST_MODE: 'true',
        INTERVAL_SECONDS: '10', // ⚡ Every 10 seconds - MAXIMUM SPEED
        CONTINUOUS_MODE: 'true',
      },
      error_file: './logs/ai-pm2-optimization-error.log',
      out_file: './logs/ai-pm2-optimization-out.log',
      log_file: './logs/ai-pm2-optimization.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 20, // More resilient
      min_uptime: '5s', // Faster restart
      restart_delay: 1000, // 1 second delay
      // No cron - runs continuously at MAXIMUM SPEED
      pmx: true,
      kill_timeout: 3000, // Faster shutdown
    },

    // AI SEO Monitor & Optimizer - MAXIMUM SPEED AUTONOMOUS continuous SEO monitoring
    {
      name: 'ai-seo-monitor',
      script: './automation/ai-seo-monitor-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true',           // Auto-fix issues immediately
        AUTO_COMMIT: 'true',       // Auto-commit fixes
        AUTO_PUSH: 'true',         // Auto-push commits
        CHECK_INTERVAL: '30',      // Check every 30 seconds - MAXIMUM SPEED
        CONTINUOUS_MODE: 'true',   // Continuous operation
        FAST_MODE: 'true',         // Fast mode enabled
        AUTONOMOUS: 'true',        // Fully autonomous operation
        MAX_SPEED: 'true',         // Maximum speed mode
      },
      error_file: './logs/ai-seo-monitor-error.log',
      out_file: './logs/ai-seo-monitor-out.log',
      log_file: './logs/ai-seo-monitor.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999,        // Unlimited restarts - NEVER STOP
      min_uptime: '2s',           // Ultra-fast restart threshold (2 seconds)
      restart_delay: 200,         // Maximum speed restart delay (0.2 seconds)
      // No cron_restart - runs continuously forever autonomously
      pmx: true,
    },

    // AI App Improvement Specialist - MAXIMUM SPEED AUTONOMOUS continuous improvement
    {
      name: 'ai-app-improvement-specialist',
      script: './automation/ai-app-improvement-specialist.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        AAIS_MODE: 'aggressive',              // Aggressive mode for maximum improvements
        AAIS_CONTINUOUS: 'true',             // Continuous operation enabled
        AAIS_INTERVAL: '1',                  // Check every 1 minute - MAXIMUM SPEED
        AAIS_AUTO_COMMIT: 'true',            // Auto-commit all changes
        AAIS_AUTO_PUSH: 'true',              // Auto-push to main
        AAIS_MAX_IMPROVEMENTS: '30',         // Max improvements per cycle (increased for speed)
        AAIS_MIN_HEALTH: '95',               // Higher target for aggressive improvement
        FAST_MODE: 'true',                   // Fast mode enabled
        AUTONOMOUS: 'true',                   // Fully autonomous operation
        MAX_SPEED: 'true',                    // Maximum speed mode
        PARALLEL_PROCESSING: 'true',          // Enable parallel processing
      },
      error_file: './logs/ai-app-improvement-specialist-error.log',
      out_file: './logs/ai-app-improvement-specialist-out.log',
      log_file: './logs/ai-app-improvement-specialist.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999,                   // Unlimited restarts - NEVER STOP
      min_uptime: '2s',                      // Ultra-fast restart threshold (2 seconds)
      restart_delay: 200,                    // Maximum speed restart delay (0.2 seconds)
      kill_timeout: 5000,                    // Faster shutdown
      // No cron_restart - runs continuously forever autonomously at maximum speed
      pmx: true,
    },

    // AI Smart Dependency Manager - ULTRA-FAST continuous autonomous dependency security & optimization
    {
      name: 'ai-dependency-manager',
      script: './automation/ai-smart-dependency-manager.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '768M',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_MODE: 'true',
        FAST_MODE: 'true',
        INTERVAL_MINUTES: '5', // Check every 5 minutes in fast mode
        AUTO_FIX: 'true',
        AUTO_REMOVE_UNUSED: 'true',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        SECURITY_THRESHOLD: 'moderate',
      },
      error_file: './automation/logs/ai-dependency-manager-error.log',
      out_file: './automation/logs/ai-dependency-manager-out.log',
      log_file: './automation/logs/ai-dependency-manager.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '30s',
      restart_delay: 3000,
      pmx: true,
    },

    // AI Autonomous Developer - ULTIMATE: Self-improving AI developer with LLM reasoning
    // OPTIMIZED FOR MAXIMUM SPEED - RUNS CONTINUOUSLY EVERY 2 MINUTES
    {
      name: 'ai-autonomous-developer',
      script: './automation/ai-autonomous-developer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G', // Increased for more parallel operations
      env: {
        NODE_ENV: 'production',
        AI_PROVIDER: 'anthropic', // or 'openai'
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_CHANGES_PER_RUN: '50', // Increased for maximum speed
        CONTINUOUS_MODE: 'true', // Always continuous
        INTERVAL_MINUTES: '2', // Run every 2 minutes for maximum speed
        FAST_MODE: 'true',
        PARALLEL_ANALYSIS: 'true',
        MAX_CONCURRENT_TASKS: '10', // Increased for maximum speed
      },
      error_file: './automation/logs/ai-autonomous-developer-error.log',
      out_file: './automation/logs/ai-autonomous-developer-out.log',
      log_file: './automation/logs/ai-autonomous-developer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts
      min_uptime: '2s', // Ultra-fast restart
      restart_delay: 500, // Maximum speed restart delay
      // No cron - runs continuously at maximum speed
      pmx: true,
    },

    // AI Super Orchestrator - MASTER: Coordinates all AI agents with intelligent prioritization
    // OPTIMIZED FOR MAXIMUM SPEED - RUNS CONTINUOUSLY EVERY 5 MINUTES
    {
      name: 'ai-super-orchestrator',
      script: './automation/ai-super-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G', // Increased for more concurrent operations
      env: {
        NODE_ENV: 'production',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_CONCURRENT_AGENTS: '10', // Increased for maximum speed
        CONTINUOUS_MODE: 'true', // Always continuous
        INTERVAL_MINUTES: '5', // Run every 5 minutes for maximum speed
      },
      error_file: './automation/logs/ai-super-orchestrator-error.log',
      out_file: './automation/logs/ai-super-orchestrator-out.log',
      log_file: './automation/logs/ai-super-orchestrator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts
      min_uptime: '2s', // Ultra-fast restart
      restart_delay: 500, // Maximum speed restart delay
      // No cron - runs continuously at maximum speed
      pmx: true,
    },

    // AI SUPREME AGENT - The Best AI System Possible - ULTRA-FAST CONTINUOUS MODE
    {
      name: 'ai-supreme',
      script: './automation/ai-supreme-agent.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        AI_PROVIDER: 'anthropic',
        CONTINUOUS_MODE: 'true',
        AGGRESSIVE_MODE: 'true',
        PARALLEL_MODE: 'true',
        LEARNING_MODE: 'true',
        AUTONOMOUS_MODE: 'true',
        INTERVAL_MINUTES: '1',
        MAX_EXECUTION_MINUTES: '10',
        MAX_FIXES_PER_RUN: '100', // Increased for maximum speed
        MAX_FILES_TOUCHED: '300', // Increased for maximum speed
        MAX_CONCURRENT_TASKS: '10', // Increased for maximum speed
        MAX_CONCURRENT_AI: '5', // Increased for maximum speed
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        AUTO_FIX_ERRORS: 'true',
        AUTO_OPTIMIZE: 'true',
        AI_DELAY_MS: '200', // Reduced for speed
        GIT_DELAY_MS: '500', // Reduced for speed
      },
      error_file: './logs/ai-supreme-error.log',
      out_file: './logs/ai-supreme-out.log',
      log_file: './logs/ai-supreme.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999,
      min_uptime: '2s', // Faster restart
      restart_delay: 500, // Faster restart delay
      cron_restart: '*/1 * * * *',
      pmx: true,
      kill_timeout: 1000, // Faster kill timeout
    },

    // AI Development Speed Accelerator - ULTRA-FAST feature generation with AI
    // OPTIMIZED FOR MAXIMUM SPEED - RUNS CONTINUOUSLY EVERY 5 SECONDS
    {
      name: 'ai-speed-accelerator',
      script: './automation/ai-development-speed-accelerator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        AI_PROVIDER: 'anthropic',
        CONTINUOUS_MODE: 'true', // ALWAYS CONTINUOUS
        INTERVAL_SECONDS: '5', // Run every 5 seconds for MAXIMUM SPEED
        PARALLEL_TASKS: '15', // Process 15 features in parallel for maximum throughput
        MAX_FEATURES_PER_RUN: '30', // Generate 30 features per run
        AUTO_COMMIT: 'true', // ALWAYS AUTO-COMMIT
        AUTO_PUSH: 'true', // ALWAYS AUTO-PUSH
        FAST_MODE: 'true', // Skip non-critical checks
        SKIP_TESTS: 'true', // Skip tests for maximum speed
      },
      error_file: './automation/logs/ai-speed-accelerator-error.log',
      out_file: './automation/logs/ai-speed-accelerator-out.log',
      log_file: './automation/logs/ai-speed-accelerator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts for maximum uptime
      min_uptime: '2s', // Ultra-fast restart
      restart_delay: 500, // Maximum speed restart delay
      pmx: true,
    },

    // AI ULTRA-FAST RUNNER - Master Automation Script Executor - MAXIMUM SPEED
    {
      name: 'ai-ultra-fast-runner',
      script: './automation/ai-ultra-fast-runner.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '3G', // Increased for more concurrent scripts
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_MODE: 'true',
        INTERVAL_SECONDS: '1', // Run every 1 second - MAXIMUM SPEED
        MAX_CONCURRENT_SCRIPTS: '20', // Run 20 scripts concurrently - MAXIMUM SPEED
        EXECUTION_TIMEOUT: '90000', // 1.5 minutes per script (reduced for speed)
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './automation/logs/ultra-fast-runner-error.log',
      out_file: './automation/logs/ultra-fast-runner-out.log',
      log_file: './automation/logs/ultra-fast-runner.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999,
      min_uptime: '1s', // Ultra-fast restart threshold
      restart_delay: 100, // 0.1 seconds restart delay - MAXIMUM SPEED
      // No cron - runs continuously at MAXIMUM SPEED
      pmx: true,
      kill_timeout: 500, // Faster kill timeout
    },

    // AI Bundle Optimizer - Autonomous bundle size optimization
    {
      name: 'ai-bundle-optimizer',
      script: './automation/ai-bundle-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '768M',
      env: {
        NODE_ENV: 'production',
        INTERVAL_MINUTES: '60',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './automation/logs/bundle-optimizer-error.log',
      out_file: './automation/logs/bundle-optimizer-out.log',
      log_file: './automation/logs/bundle-optimizer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 */2 * * *', // Every 2 hours
      pmx: true,
    },

    // AI Image Optimizer - Autonomous image optimization
    {
      name: 'ai-image-optimizer',
      script: './automation/ai-image-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        INTERVAL_MINUTES: '120',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './automation/logs/image-optimizer-error.log',
      out_file: './automation/logs/image-optimizer-out.log',
      log_file: './automation/logs/image-optimizer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 */4 * * *', // Every 4 hours
      pmx: true,
    },

    // AI Route Optimizer - Autonomous Next.js route optimization
    {
      name: 'ai-route-optimizer',
      script: './automation/ai-route-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        INTERVAL_MINUTES: '120',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './automation/logs/route-optimizer-error.log',
      out_file: './automation/logs/route-optimizer-out.log',
      log_file: './automation/logs/route-optimizer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 */6 * * *', // Every 6 hours
      pmx: true,
    },

    // AI Complexity Analyzer - Autonomous code complexity analysis
    {
      name: 'ai-complexity-analyzer',
      script: './automation/ai-complexity-analyzer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '768M',
      env: {
        NODE_ENV: 'production',
        INTERVAL_MINUTES: '240',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './automation/logs/complexity-analyzer-error.log',
      out_file: './automation/logs/complexity-analyzer-out.log',
      log_file: './automation/logs/complexity-analyzer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 */12 * * *', // Every 12 hours
      pmx: true,
    },

    // AI Content Organizer - ULTRA-FAST autonomous content organization
    {
      name: 'ai-content-organizer',
      script: './automation/ai-content-organizer-agent.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_MODE: 'true',
        INTERVAL_SECONDS: '15', // Run every 15 seconds - MAXIMUM SPEED
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_ORGANIZATIONS_PER_RUN: '100', // Process up to 100 organizations per run for maximum speed
        PARALLEL_PROCESSING: 'true',
        MAX_CONCURRENT_FILES: '20', // Process 20 files concurrently for maximum speed
      },
      error_file: './automation/logs/ai-content-organizer-error.log',
      out_file: './automation/logs/ai-content-organizer-out.log',
      log_file: './automation/logs/ai-content-organizer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts - NEVER STOP
      min_uptime: '2s', // Ultra-fast restart threshold (2 seconds)
      restart_delay: 500, // 0.5 second delay for MAXIMUM SPEED
      // No cron_restart - runs continuously forever autonomously at maximum speed
      pmx: true,
      kill_timeout: 3000, // Faster shutdown
    },

    // AI Broken Link Fixer - ULTRA-FAST continuous broken link detection and fixing
    {
      name: 'ai-broken-link-fixer',
      script: './automation/ai-broken-link-fixer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_MODE: 'true',
        INTERVAL_SECONDS: '15', // ⚡ MAXIMUM SPEED: Run every 15 seconds
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_LINKS_PER_RUN: '500', // Check up to 500 links per run for maximum speed
        CHECK_EXTERNAL: 'true', // Check external links
        EXTERNAL_TIMEOUT: '3000', // 3 second timeout for faster external link checks
        MAX_CONCURRENT_CHECKS: '50', // Check 50 links concurrently for maximum speed
        PARALLEL_PROCESSING: 'true', // Enable parallel processing
        MAX_CONCURRENT_FILES: '20', // Process 20 files concurrently for maximum speed
      },
      error_file: './automation/logs/ai-broken-link-fixer-error.log',
      out_file: './automation/logs/ai-broken-link-fixer-out.log',
      log_file: './automation/logs/ai-broken-link-fixer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts - NEVER STOP
      min_uptime: '2s', // Ultra-fast restart threshold (2 seconds)
      restart_delay: 500, // 0.5 second delay for MAXIMUM SPEED
      // No cron_restart - runs continuously forever autonomously at maximum speed
      pmx: true,
      kill_timeout: 3000, // Faster shutdown
    },

    // AI Layout Improvement Agent - MAXIMUM SPEED continuous layout improvements
    {
      name: 'ai-layout-improvement',
      script: './automation/ai-layout-improvement-agent.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_MODE: 'true',
        INTERVAL_SECONDS: '10', // ⚡ MAXIMUM SPEED: Run every 10 seconds
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_IMPROVEMENTS_PER_RUN: '50', // MAXIMUM SPEED: Up to 50 improvements per run
        PRIORITY_MODE: 'all', // Process all priorities
      },
      error_file: './automation/logs/ai-layout-improvement-error.log',
      out_file: './automation/logs/ai-layout-improvement-out.log',
      log_file: './automation/logs/ai-layout-improvement.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts - NEVER STOP
      min_uptime: '2s', // MAXIMUM SPEED: Ultra-fast restart threshold (2 seconds)
      restart_delay: 500, // MAXIMUM SPEED: Fast restart delay (0.5 seconds)
      // No cron - runs continuously at MAXIMUM SPEED
      pmx: true,
      kill_timeout: 2000, // Faster shutdown for MAXIMUM SPEED
    },

    // AI Performance Optimizer Agent - ULTRA-FAST continuous performance optimization
    {
      name: 'ai-performance-optimizer',
      script: './automation/ai-performance-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_MODE: 'true',
        INTERVAL_SECONDS: '30', // ⚡ ULTRA-FAST: Run every 30 seconds for MAXIMUM SPEED
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_OPTIMIZATIONS_PER_RUN: '50', // Up to 50 optimizations per run for MAXIMUM SPEED
        PRIORITY_MODE: 'all', // Process all priorities
        PARALLEL_ANALYSIS: 'true', // Enable parallel analysis for speed
      },
      error_file: './automation/logs/ai-performance-optimizer-error.log',
      out_file: './automation/logs/ai-performance-optimizer-out.log',
      log_file: './automation/logs/ai-performance-optimizer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts - NEVER STOP
      min_uptime: '2s', // ⚡ Ultra-fast restart threshold for MAXIMUM SPEED
      restart_delay: 500, // ⚡ Ultra-fast restart delay
      // No cron - runs continuously every 30 seconds internally for MAXIMUM SPEED
      pmx: true,
      kill_timeout: 3000, // Faster shutdown
    },

    // AI Build Fixer Agent - ULTRA-FAST AUTONOMOUS continuous build fixing
    // OPTIMIZED FOR MAXIMUM SPEED - RUNS CONTINUOUSLY EVERY 30 SECONDS
    {
      name: 'ai-build-fixer',
      script: './automation/ai-build-fixer-agent.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G', // Increased for parallel fixes
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_BUILD_FIXER: 'true',
        BUILD_CHECK_INTERVAL: '30', // ⚡ MAXIMUM SPEED: Check every 30 seconds
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_FIX_ATTEMPTS: '20', // Increased for faster fixes
        CLEAN_BUILD_ON_FAIL: 'true',
        FAST_MODE: 'true',
        PARALLEL_FIXES: 'true',
        MAX_CONCURRENT_FIXES: '10', // Process 10 fixes concurrently
      },
      error_file: './automation/logs/ai-build-fixer-error.log',
      out_file: './automation/logs/ai-build-fixer-out.log',
      log_file: './automation/logs/ai-build-fixer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 999999, // Unlimited restarts - NEVER STOP
      min_uptime: '2s', // ⚡ Ultra-fast restart threshold (2 seconds)
      restart_delay: 500, // ⚡ Maximum speed restart delay (0.5 seconds)
      // No cron_restart - runs continuously forever autonomously at maximum speed
      pmx: true,
      kill_timeout: 2000, // Faster shutdown
    },
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production',
    },
  },
};

