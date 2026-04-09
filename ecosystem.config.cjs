module.exports = {
  "apps": [
    {
      "name": "frontend-content-advertiser",
      "script": "automation/frontend-content-advertiser.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production",
        "NEXT_TELEMETRY_DISABLED": "1"
      }
    },
    {
      "name": "ai-pm2-optimization",
      "script": "automation/ai-pm2-optimization.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-dependency-manager",
      "script": "automation/ai-dependency-manager.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-autonomous-developer",
      "script": "automation/ai-autonomous-developer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-super-orchestrator",
      "script": "automation/ai-super-orchestrator.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-supreme",
      "script": "automation/ai-supreme.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-performance-profiler",
      "script": "automation/ai-performance-profiler.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-speed-accelerator",
      "script": "automation/ai-speed-accelerator.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-ultra-fast-runner",
      "script": "automation/ai-ultra-fast-runner.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-layout-improvement",
      "script": "automation/ai-layout-improvement.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-broken-link-fixer",
      "script": "automation/ai-broken-link-fixer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-build-fixer",
      "script": "automation/ai-build-fixer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-bundle-optimizer",
      "script": "automation/ai-bundle-optimizer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-complexity-analyzer",
      "script": "automation/ai-complexity-analyzer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-content-organizer",
      "script": "automation/ai-content-organizer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-continuous-improvement",
      "script": "automation/ai-continuous-improvement.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-deploy-hook-availability-guard",
      "script": "automation/ai-deploy-hook-availability-guard.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-documentation-generator",
      "script": "automation/ai-documentation-generator.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-git-workflow",
      "script": "automation/ai-git-workflow.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-image-optimizer",
      "script": "automation/ai-image-optimizer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-layout-design-automation",
      "script": "automation/ai-layout-design-automation.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-netlify-hook-smoke-agent",
      "script": "automation/ai-netlify-hook-smoke-agent.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-security-scanner",
      "script": "automation/ai-security-scanner.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-smart-dependency-manager",
      "script": "automation/ai-smart-dependency-manager.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-test-automation",
      "script": "automation/ai-test-automation.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "openclaw-autonomous-prompts",
      "script": "automation/openclaw-autonomous-prompts.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "continuous-improvement-loop",
      "script": "openclaw-agents/12-continuous-loop.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "master-orchestrator",
      "script": "openclaw-agents/master-orchestrator.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "code-auditor",
      "script": "openclaw-agents/01-code-auditor.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "bug-hunter",
      "script": "openclaw-agents/02-bug-hunter.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "performance-optimizer",
      "script": "openclaw-agents/03-performance-optimizer.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "content-enhancer",
      "script": "openclaw-agents/04-content-enhancer.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ideas-generator",
      "script": "openclaw-agents/05-ideas-generator.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "issue-triage",
      "script": "openclaw-agents/06-issue-auto-triage.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ci-healer",
      "script": "openclaw-agents/07-self-heal-ci.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "pm2-manager",
      "script": "openclaw-agents/08-pm2-manager.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "more-ideas",
      "script": "openclaw-agents/09-more-ideas.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "task-generator",
      "script": "openclaw-agents/10-task-generator.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "task-executor",
      "script": "openclaw-agents/11-task-executor.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "code-review",
      "script": "openclaw-agents/13-code-review.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "docs-generator",
      "script": "openclaw-agents/14-docs-generator.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "testing-agent",
      "script": "openclaw-agents/15-testing-agent.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "deployment-agent",
      "script": "openclaw-agents/16-deployment-agent.cjs",
      "instances": 1,
      "autorestart": true,
      "max_memory_restart": "1G",
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-frontend-advertiser",
      "script": "automation/ai-frontend-advertiser.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-performance-optimizer",
      "script": "automation/ai-performance-optimizer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-pm2-config-drift-guard",
      "script": "automation/ai-pm2-config-drift-guard.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-pm2-priority-throttler",
      "script": "automation/ai-pm2-priority-throttler.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-pm2-restart-guardian",
      "script": "automation/ai-pm2-restart-guardian.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-pm2-slo-agent",
      "script": "automation/ai-pm2-slo-agent.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-pm2-slo-escalation-agent",
      "script": "automation/ai-pm2-slo-escalation-agent.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    {
      "name": "ai-route-optimizer",
      "script": "automation/ai-route-optimizer.cjs",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "env": {
        "NODE_ENV": "production"
      }
    }
  ]
}