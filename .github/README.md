# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion Tech Group website.

## Workflows Overview

### 🔄 CI (Continuous Integration)
- **File**: `.github/workflows/ci.yml`
- **Trigger**: Push to main branch or pull requests
- **Purpose**: Build verification, linting, and type checking
- **Jobs**: Build and Test

### 🧪 Test
- **File**: `.github/workflows/test.yml`
- **Trigger**: Push to main branch or pull requests
- **Purpose**: Comprehensive testing and build verification
- **Jobs**: Main testing job with build artifacts

### 🔒 CodeQL Security Analysis
- **File**: `.github/workflows/codeql.yml`
- **Trigger**: Push to main/develop branches, pull requests, and weekly schedule
- **Purpose**: Security vulnerability scanning using GitHub's CodeQL
- **Jobs**: JavaScript/TypeScript security analysis

### 📦 NPM Package Check
- **File**: `.github/workflows/npm-publish.yml`
- **Trigger**: Push to main branch (excluding markdown files)
- **Purpose**: Package verification and build testing
- **Jobs**: Package validation and build verification

### 🚀 Deploy to Production
- **File**: `.github/workflows/deploy.yml`
- **Trigger**: Push to main branch or manual dispatch
- **Purpose**: Production deployment with build verification
- **Jobs**: Production deployment with artifacts

### 🔍 Dependency Review
- **File**: `.github/workflows/dependency-review.yml`
- **Trigger**: Pull requests to main/develop branches
- **Purpose**: Security vulnerability checking in dependencies
- **Jobs**: Dependency security analysis

### ✅ Quality Check
- **File**: `.github/workflows/quality-check.yml`
- **Trigger**: Push to main/develop branches and pull requests
- **Purpose**: Code quality, linting, and security audits
- **Jobs**: Comprehensive quality assurance

### 🔄 Continuous Improvement
- **File**: `.github/workflows/continuous-improvement.yml`
- **Trigger**: Every 4 hours and manual dispatch
- **Purpose**: Automated improvement suggestions and PR creation
- **Jobs**: Improvement automation with auto-merge

### 🕷️ Link Crawler Factory
- **File**: `.github/workflows/agent-factory.yml`
- **Trigger**: Every 30 minutes and manual dispatch
- **Purpose**: Automated link checking and broken link detection
- **Jobs**: Distributed link crawling with issue reporting

## Configuration Files

### CodeQL Configuration
- **File**: `.github/codeql/codeql-config.yml`
- **Purpose**: Security analysis configuration for TypeScript/React projects

## Scripts Required

The following npm scripts must be available in `package.json`:

```json
{
  "scripts": {
    "test": "echo 'No tests configured yet'",
    "test:ci": "echo 'CI tests placeholder'",
    "security:scan": "echo 'Security scan placeholder'",
    "cypress:run": "echo 'Cypress tests placeholder'",
    "automation:improvement": "echo 'Automation improvement placeholder'",
    "diversify": "echo 'Diversification placeholder'"
  }
}
```

## Environment Variables

The following secrets may be required (depending on your setup):

- `GITHUB_TOKEN` - Automatically provided by GitHub
- `NPM_TOKEN` - For NPM package publishing (if applicable)
- `CYPRESS_*` - For Cypress testing (if applicable)
- `CODECOV_TOKEN` - For code coverage reporting (if applicable)

## Branch Protection

Recommended branch protection rules for `main`:

- Require status checks to pass before merging
- Require branches to be up to date before merging
- Require pull request reviews before merging
- Require conversation resolution before merging

## Monitoring

- All workflows run on Ubuntu latest with Node.js 20
- Build artifacts are uploaded for inspection
- Security scans run automatically
- Quality checks run on every push and PR

## Troubleshooting

### Common Issues

1. **Build Failures**: Check Node.js version compatibility
2. **Missing Scripts**: Ensure all required npm scripts exist
3. **Permission Errors**: Verify workflow permissions are correctly set
4. **Timeout Issues**: Increase timeout values for long-running jobs

### Debug Mode

To debug workflows, add `ACTIONS_STEP_DEBUG: true` to your repository secrets.

## Contributing

When adding new workflows:

1. Follow the existing naming conventions
2. Include proper error handling and continue-on-error where appropriate
3. Add comprehensive documentation
4. Test workflows in a fork before submitting

## Support

For workflow issues, check:
1. GitHub Actions logs for detailed error messages
2. Required scripts and dependencies
3. Permission configurations
4. Environment variable requirements