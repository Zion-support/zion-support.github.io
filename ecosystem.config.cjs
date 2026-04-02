module.exports = {
  apps: [
    {
      name: 'continuous-improvement-loop',
      script: 'openclaw-agents/12-continuous-loop.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'master-orchestrator',
      script: 'openclaw-agents/master-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'code-auditor',
      script: 'openclaw-agents/01-code-auditor.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'bug-hunter',
      script: 'openclaw-agents/02-bug-hunter.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'performance-optimizer',
      script: 'openclaw-agents/03-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'content-enhancer',
      script: 'openclaw-agents/04-content-enhancer.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'ideas-generator',
      script: 'openclaw-agents/05-ideas-generator.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'issue-triage',
      script: 'openclaw-agents/06-issue-auto-triage.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'ci-healer',
      script: 'openclaw-agents/07-self-heal-ci.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'pm2-manager',
      script: 'openclaw-agents/08-pm2-manager.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'more-ideas',
      script: 'openclaw-agents/09-more-ideas.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'task-generator',
      script: 'openclaw-agents/10-task-generator.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'task-executor',
      script: 'openclaw-agents/11-task-executor.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'code-review',
      script: 'openclaw-agents/13-code-review.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'docs-generator',
      script: 'openclaw-agents/14-docs-generator.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'testing-agent',
      script: 'openclaw-agents/15-testing-agent.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'deployment-agent',
      script: 'openclaw-agents/16-deployment-agent.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};