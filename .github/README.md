# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion Tech Group application. All workflows have been optimized for Node.js 20 and use Yarn as the package manager.

## Workflow Overview

### 🔄 **CI (Continuous Integration)**
- **File**: `ci.yml`
- **Triggers**: Push to main, Pull requests to main
- **Purpose**: Main CI pipeline for building and testing
- **Features**:
  - Linting and type checking
  - Build verification
  - Test execution (if available)
  - Build artifact upload

### 🧪 **Test**
- **File**: `test.yml`
- **Triggers**: Push to main, Pull requests to main
- **Purpose**: Dedicated testing workflow
- **Features**:
  - Build verification
  - Test execution
  - Build artifact upload

### 🚀 **Deploy**
- **File**: `deploy.yml`
- **Triggers**: Push to main, Pull requests to main, Manual dispatch
- **Purpose**: Deployment pipeline with preview and production stages
- **Features**:
  - Build and test verification
  - Security scanning
  - Preview deployment for PRs
  - Production deployment for main branch
  - PR commenting with build status

### 🔍 **CodeQL Security Analysis**
- **File**: `codeql.yml`
- **Triggers**: Push to main/develop, Pull requests, Daily schedule
- **Purpose**: Automated security vulnerability scanning
- **Features**:
  - JavaScript/TypeScript analysis
  - Daily scheduled scans
  - Security event reporting

### 🔗 **Link Crawler Factory**
- **File**: `agent-factory.yml`
- **Triggers**: Daily schedule (6 AM UTC), Manual dispatch
- **Purpose**: Automated link checking and broken link detection
- **Features**:
  - Parallel URL checking with sharding
  - Broken link reporting
  - Automatic issue creation
  - Queue management for URLs

### 🔄 **Continuous Improvement**
- **File**: `continuous-improvement.yml`
- **Triggers**: Daily schedule (2 AM UTC), Manual dispatch
- **Purpose**: Automated code improvement suggestions
- **Features**:
  - Build verification
  - Improvement checks
  - Automated PR creation
  - Auto-merge capability

### 📦 **NPM Publish**
- **File**: `npm-publish.yml`
- **Triggers**: Push to main (excluding docs and GitHub files)
- **Purpose**: Automated NPM package publishing
- **Features**:
  - Build verification
  - Test execution
  - NPM publishing
  - Yarn-based workflow

### 🔧 **Dependency Update**
- **File**: `dependency-update.yml`
- **Triggers**: Weekly schedule (Monday 4 AM UTC), Manual dispatch
- **Purpose**: Automated dependency updates
- **Features**:
  - Outdated package detection
  - Automated updates
  - Build verification
  - PR creation with detailed information

### ✨ **Code Quality**
- **File**: `code-quality.yml`
- **Triggers**: Push to main/develop, Pull requests, Manual dispatch
- **Purpose**: Comprehensive code quality checks
- **Features**:
  - ESLint and TypeScript checking
  - Code formatting verification
  - Console statement detection
  - TODO comment tracking
  - Bundle size verification

## Common Features

### 🔧 **Environment Setup**
- **Node.js Version**: 20.x
- **Package Manager**: Yarn
- **Cache Strategy**: Yarn cache for faster builds

### 📊 **Artifact Management**
- Build outputs stored for 7 days
- Separate artifacts for different job types
- Efficient artifact upload/download

### 🚦 **Concurrency Control**
- Prevents multiple workflows from running simultaneously
- Cancels in-progress workflows when new ones start
- Optimized for resource usage

### 🔒 **Security**
- Minimal required permissions
- Security scanning integration
- Vulnerability reporting

## Usage

### Manual Trigger
All workflows can be triggered manually via the GitHub Actions tab:
1. Go to Actions tab in your repository
2. Select the desired workflow
3. Click "Run workflow"
4. Choose branch and any required inputs

### Scheduled Runs
- **Link Crawler**: Daily at 6 AM UTC
- **Continuous Improvement**: Daily at 2 AM UTC
- **Dependency Updates**: Weekly on Monday at 4 AM UTC
- **CodeQL**: Daily at 1:33 AM UTC

### Branch Protection
- Main branch workflows run on push and PR
- Develop branch workflows run on push and PR
- Feature branches can trigger specific workflows

## Configuration

### Required Secrets
- `NPM_TOKEN`: For NPM publishing (if applicable)
- `GITHUB_TOKEN`: Automatically provided by GitHub

### Environment Variables
- Production environment for deployment workflows
- Branch-specific configurations
- Workflow-specific variables

## Monitoring

### Workflow Status
- All workflows provide detailed logging
- Artifact uploads for debugging
- Failure notifications via GitHub

### Performance Metrics
- Build times tracked
- Cache hit rates monitored
- Resource usage optimized

## Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version compatibility
2. **Cache Issues**: Clear Yarn cache if needed
3. **Permission Errors**: Verify workflow permissions
4. **Timeout Issues**: Adjust workflow timeouts

### Debug Steps
1. Check workflow logs in Actions tab
2. Verify artifact contents
3. Test locally with same Node.js version
4. Check Yarn lock file consistency

## Best Practices

### ✅ **Do's**
- Keep workflows focused and single-purpose
- Use proper concurrency controls
- Implement proper error handling
- Cache dependencies for faster builds
- Use latest GitHub Actions versions

### ❌ **Don'ts**
- Don't run workflows unnecessarily
- Don't skip security checks
- Don't ignore build failures
- Don't use deprecated actions
- Don't hardcode secrets

## Support

For workflow issues or improvements:
1. Check the workflow logs
2. Review the workflow configuration
3. Test changes in a feature branch
4. Create an issue for complex problems

---

*Last updated: $(date)*
*Workflow count: 9 active workflows*