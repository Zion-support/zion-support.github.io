# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion Tech Group website.

## Workflows Overview

### 🔄 CI (Continuous Integration)
- **File**: `ci.yml`
- **Triggers**: Push to main, Pull requests to main
- **Purpose**: Automated testing and building on every code change
- **Jobs**:
  - Build: Lint, type-check, and build the project
  - Test: Run tests in parallel

### 🧪 Test
- **File**: `test.yml`
- **Triggers**: Push to main, Pull requests to main
- **Purpose**: Comprehensive testing with coverage and build verification
- **Jobs**:
  - Main: Build, test, and verify build output
  - Uploads build artifacts for inspection

### 🔒 Security
- **File**: `security.yml`
- **Triggers**: Push to main, Pull requests to main, Weekly schedule
- **Purpose**: Security auditing and dependency vulnerability scanning
- **Jobs**:
  - Security Audit: npm audit, outdated packages check
  - Dependency Review: Automated dependency review on PRs

### 🚀 Deploy
- **File**: `deploy.yml`
- **Triggers**: Push to main, Manual dispatch
- **Purpose**: Automated deployment pipeline
- **Jobs**:
  - Deploy: Build and prepare for deployment
  - Uploads build artifacts for manual deployment

### 🔍 CodeQL
- **File**: `codeql.yml`
- **Triggers**: Push to main/develop, Pull requests, Weekly schedule
- **Purpose**: Static code analysis for security vulnerabilities
- **Jobs**:
  - Analyze: JavaScript/TypeScript security analysis

### 🔗 Link Crawler Factory
- **File**: `agent-factory.yml`
- **Triggers**: Every 6 hours, Manual dispatch
- **Purpose**: Automated link checking and broken link detection
- **Jobs**:
  - Generate Matrix: Create parallel processing matrix
  - Agent: Parallel link crawling using linkinator
  - Aggregate: Merge results and create reports

### 📈 Continuous Improvement
- **File**: `continuous-improvement.yml`
- **Triggers**: Every 4 hours, Manual dispatch
- **Purpose**: Automated code quality improvements
- **Jobs**:
  - Improve: Run quality checks and create improvement PRs

### 📦 NPM Publish (Disabled)
- **File**: `npm-publish.yml`
- **Status**: Disabled (private package)
- **Purpose**: Would publish to npm if this were a public package

## Configuration

### Node.js Version
All workflows use Node.js 20.x for consistency with the project requirements.

### Caching
- npm dependencies are cached using `actions/setup-node@v4`
- Build artifacts are uploaded and can be downloaded for inspection

### Permissions
- Most workflows use minimal permissions (`contents: read`)
- Security workflows require `security-events: write`
- Some workflows require `contents: write` for automated PR creation

## Usage

### Manual Triggers
Most workflows can be triggered manually via the GitHub Actions tab:
1. Go to Actions tab in the repository
2. Select the workflow you want to run
3. Click "Run workflow"
4. Configure any required inputs

### Scheduled Runs
- **Security**: Weekly on Mondays at 2 AM UTC
- **CodeQL**: Weekly on Mondays at 1:33 AM UTC
- **Link Crawler**: Every 6 hours
- **Continuous Improvement**: Every 4 hours

## Monitoring

### Artifacts
- Build outputs are uploaded as artifacts
- Security reports are preserved for 30 days
- Link crawling reports are available for inspection

### Notifications
- Failed workflows will show in the Actions tab
- Security issues are reported in the Security tab
- Broken links are automatically reported as GitHub issues

## Troubleshooting

### Common Issues
1. **Build Failures**: Check the build logs for compilation errors
2. **Test Failures**: Review test output and fix failing tests
3. **Permission Errors**: Ensure workflows have appropriate permissions
4. **Dependency Issues**: Run `npm ci` locally to verify dependencies

### Local Testing
Before pushing, test locally:
```bash
npm ci
npm run lint
npm run type-check
npm run build
npm test
```

## Contributing

When adding new workflows:
1. Follow the existing naming conventions
2. Use the latest action versions
3. Include appropriate permissions
4. Add documentation here
5. Test thoroughly before committing