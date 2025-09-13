# GitHub Actions Workflows

This directory contains all GitHub Actions workflows for the Zion Tech Group application.

## Workflow Overview

### 🚀 **Deploy** (`deploy.yml`)
**Main deployment workflow** - Handles building, testing, and deploying the application.

- **Triggers**: Push to main/develop, PRs, manual dispatch
- **Jobs**: 
  - `build-and-test`: Builds app, runs tests, security scans
  - `deploy-preview`: Deploys PR previews
  - `deploy-production`: Deploys to production (main branch only)
- **Node.js**: 18.x
- **Artifacts**: Build outputs, test results

### 🔄 **CI** (`ci.yml`)
**Continuous Integration** - Runs on every push and PR.

- **Triggers**: Push to main/develop/cursor branches, PRs
- **Jobs**:
  - `build`: Lint, type-check, build
  - `test`: Run test suite
- **Node.js**: 18.x
- **Features**: Error handling, non-blocking failures

### 🧪 **Test** (`test.yml`)
**Dedicated testing workflow** - Comprehensive testing with coverage.

- **Triggers**: Push to main/develop/cursor branches, PRs
- **Jobs**:
  - `test`: Build, verify, test, upload artifacts
- **Node.js**: 18.x
- **Features**: Build verification, test results upload

### 🔍 **CodeQL** (`codeql.yml`)
**Security analysis** - Automated security scanning.

- **Triggers**: Push/PR to main/develop/cursor branches, weekly schedule
- **Jobs**:
  - `analyze`: JavaScript/TypeScript security analysis
- **Features**: Language-specific security scanning

### 🤖 **Agent Factory** (`agent-factory.yml`)
**Link crawler automation** - Monitors and reports broken links.

- **Triggers**: Every 30 minutes, manual dispatch
- **Jobs**:
  - `generate-matrix`: Creates parallel processing matrix
  - `agent`: Parallel link crawling
  - `aggregate`: Merges results, creates issues
- **Features**: Parallel processing, broken link reporting

### 📈 **Continuous Improvement** (`continuous-improvement.yml`)
**Automated improvements** - Runs automation scripts and creates PRs.

- **Triggers**: Every 4 hours, manual dispatch
- **Jobs**:
  - `improve`: Runs automation, creates auto-merge PRs
- **Features**: Auto-PR creation, auto-merge

### 📊 **Health Check** (`health-check.yml`)
**Workflow monitoring** - Monitors health of all other workflows.

- **Triggers**: Every 6 hours, manual dispatch
- **Jobs**:
  - `health-check`: Analyzes workflow success rates
- **Features**: Health reporting, issue creation for failures

### 📦 **NPM Publish** (`npm-publish.yml`)
**Package publishing** - Publishes npm packages on main branch.

- **Triggers**: Push to main (excluding markdown files)
- **Jobs**:
  - `publish`: Test, build, publish to npm
- **Node.js**: 18.x

## Configuration

### Node.js Version
All workflows use **Node.js 18.x** for compatibility with Next.js and dependencies.

### Permissions
- `contents: read` - Repository access
- `actions: read` - Workflow status access
- `security-events: write` - CodeQL results
- `pull-requests: write` - PR creation (continuous improvement)
- `issues: write` - Issue creation (health check, agent factory)

### Concurrency
- Most workflows use concurrency groups to prevent parallel runs
- Agent factory allows parallel processing for scalability

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Test Failures**
   - Ensure Jest configuration is correct
   - Check for missing test dependencies
   - Verify test environment variables

3. **Permission Errors**
   - Verify workflow permissions in repository settings
   - Check if secrets are properly configured
   - Ensure workflow has access to required resources

4. **Node.js Compatibility**
   - All workflows use Node 18.x
   - Update local development to match
   - Check package.json engines field

### Debugging Steps

1. **Check Workflow Logs**
   - Go to Actions tab in GitHub
   - Click on failed workflow run
   - Review step-by-step logs

2. **Verify Dependencies**
   - Check package.json for missing scripts
   - Ensure all required packages are installed
   - Verify Node.js version compatibility

3. **Test Locally**
   - Run `npm run build` locally
   - Run `npm test` locally
   - Check for environment-specific issues

4. **Review Configuration**
   - Verify workflow YAML syntax
   - Check trigger conditions
   - Review job dependencies

## Maintenance

### Regular Tasks
- Monitor workflow success rates
- Update Node.js versions when needed
- Review and update dependencies
- Check for security vulnerabilities

### Updates
- Keep actions up to date (check for updates monthly)
- Review workflow performance metrics
- Optimize build and test times
- Add new workflows as needed

## Support

For workflow issues:
1. Check the health check workflow for alerts
2. Review recent workflow runs
3. Check GitHub Actions documentation
4. Create an issue with workflow logs

## Security

- All workflows use minimal required permissions
- Secrets are stored in GitHub repository secrets
- CodeQL provides automated security scanning
- Regular security audits are performed