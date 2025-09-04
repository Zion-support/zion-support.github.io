#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

class GitWorkflow {
	constructor() {
		this.branch = 'main'
	}

	log(message, type = 'INFO') {
		const icons = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌', WARNING: '⚠️', PROGRESS: '🔄' }
		console.log(`${icons[type] || ''} ${message}`)
	}

	checkGitRepository() {
		const isRepo = fs.existsSync(path.join('.git', 'HEAD'))
		if (!isRepo) this.log('Not in a git repository', 'WARNING')
		else this.log('Git repository found', 'SUCCESS')
		return isRepo
	}

	generateCommitMessage() {
		const timestamp = new Date().toISOString()
		const changes = [
			'Automated improvements and optimizations',
			'Enhanced automation scripts',
			'Added comprehensive testing suite',
			'Improved security configurations',
			'Performance optimizations',
		]
		return `${changes.join(', ')} - ${timestamp}`
	}

	createGitIgnore() {
		const gitignoreContent = `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
.next/
out/
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage
coverage/
*.lcov
.nyc_output

# Caches
.cache
.parcel-cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Editors
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Automation reports
*-report.json
automation-reports/
ai-analysis-reports/
.ai-optimization-backups/

# PM2
.pm2/

# Security reports
security-reports/
`
		if (!fs.existsSync('.gitignore')) {
			fs.writeFileSync('.gitignore', gitignoreContent)
			this.log('Created .gitignore file', 'SUCCESS')
		} else {
			this.log('.gitignore already exists', 'INFO')
		}
	}

	createReadme() {
		const readmeContent = `# Zion Tech Group - Automation & Testing Suite

See package.json scripts for usage.`
		if (!fs.existsSync('README-AUTOMATION.md')) {
			fs.writeFileSync('README-AUTOMATION.md', readmeContent)
			this.log('Created README-AUTOMATION.md', 'SUCCESS')
		} else {
			this.log('README-AUTOMATION.md already exists', 'INFO')
		}
	}

	createPackageJsonScripts() {
		try {
			const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
			packageJson.scripts = packageJson.scripts || {}
			const newScripts = {
				'automation:git': 'node git-workflow.cjs',
			}
			let updated = false
			for (const [k, v] of Object.entries(newScripts)) {
				if (!packageJson.scripts[k]) {
					packageJson.scripts[k] = v
					updated = true
				}
			}
			if (updated) {
				fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2))
				this.log('Updated package.json with automation scripts', 'SUCCESS')
			} else {
				this.log('Package.json already has automation scripts', 'INFO')
			}
		} catch (error) {
			this.log(`Error updating package.json: ${error.message}`, 'ERROR')
		}
	}

	generateGitCommands() {
		const scriptContent = `#!/bin/bash
# Git workflow automation script
set -euo pipefail

echo "🚀 Starting git workflow..."

echo "📝 Adding changes..."
git add .

echo "💾 Committing changes..."
if ! git diff --cached --quiet; then
	git commit -m "${this.generateCommitMessage()}"
else
	echo "No changes to commit"
fi

echo "🚀 Pushing to ${this.branch}..."
git push origin ${this.branch}

echo "✅ Git workflow completed successfully"`
		fs.writeFileSync('git-workflow.sh', scriptContent)
		fs.chmodSync('git-workflow.sh', '755')
		this.log('Created git-workflow.sh script', 'SUCCESS')
	}

	generateReport() {
		const report = {
			timestamp: new Date().toISOString(),
			gitRepository: this.checkGitRepository(),
			filesCreated: ['.gitignore', 'README-AUTOMATION.md', 'git-workflow.sh'],
			packageJsonUpdated: true,
			commitMessage: this.generateCommitMessage(),
		}
		fs.writeFileSync('git-workflow-report.json', JSON.stringify(report, null, 2))
		this.log('📊 Git Workflow Report Generated', 'SUCCESS')
	}

	async run() {
		this.log('🔄 Starting Git Workflow Automation...', 'PROGRESS')
		this.createGitIgnore()
		this.createReadme()
		this.createPackageJsonScripts()
		this.generateGitCommands()
		this.generateReport()
		this.log('✅ Git Workflow Automation Completed', 'SUCCESS')
	}
}

if (require.main === module) {
	const workflow = new GitWorkflow()
	workflow.run().catch(error => {
		console.error('Git workflow failed:', error)
		process.exit(1)
	})
}

module.exports = GitWorkflow