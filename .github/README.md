# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion Tech Group project.

## Workflows Overview

### 🔄 CI (Continuous Integration)
- **File:** `ci.yml`
- **Triggers:** Push to main/develop, Pull requests
- **Purpose:** Build, test, and validate code changes
- **Features:**
  - Linting and type checking
  - Build verification
  - Security scanning
  - Artifact uploads

### 🧪 Test Suite
- **File:** `test.yml`
- **Triggers:** Push to main/develop, Pull requests
- **Purpose:** Comprehensive testing and validation
- **Features:**
  - Jest test execution with coverage
  - Build verification
  - E2E test preparation
  - Coverage report uploads

### 🔒 Security Scan
- **File:** `security-scan.yml`
- **Triggers:** Daily at 4 AM UTC, Push/PR to main/develop
- **Purpose:** Security vulnerability detection and compliance
- **Features:**
  - NPM audit scanning
  - Snyk security analysis
  - Dependency vulnerability checks
  - License compliance verification
  - Automated issue creation for vulnerabilities

### 📦 Dependency Updates
- **File:** `dependency-updates.yml`
- **Triggers:** Weekly on Monday at 3 AM UTC
- **Purpose:** Automated dependency management
- **Features:**
  - Outdated dependency detection
  - Automated updates with PR creation
  - Update type selection (all, production, development, security)
  - Auto-merge for safe updates

### 🚀 Continuous Improvement
- **File:** `continuous-improvement.yml`
- **Triggers:** Weekly on Monday at 2 AM UTC
- **Purpose:** Code quality and maintenance automation
- **Features:**
  - Automated linting fixes
  - Security improvements
  - Code quality enhancements
  - Automated PR creation and merging

### 🔗 Link Crawler Factory
- **File:** `agent-factory.yml`
- **Triggers:** Every 6 hours
- **Purpose:** Automated link validation and broken link detection
- **Features:**
  - Parallel link checking with sharding
  - Broken link reporting
  - Automated issue creation
  - Queue management

### 📤 NPM Publish
- **File:** `npm-publish.yml`
- **Triggers:** Push to main (excluding docs and tests)
- **Purpose:** Automated package publishing
- **Features:**
  - Build verification
  - Test execution
  - Package validation
  - Automated releases

### 🔍 CodeQL Analysis
- **File:** `codeql.yml`
- **Triggers:** Push/PR to main/develop/cursor branches, Weekly
- **Purpose:** Advanced security code analysis
- **Features:**
  - JavaScript/TypeScript analysis
  - Security vulnerability detection
  - Code quality insights

## Configuration

### Node.js Version
All workflows use Node.js 20 for consistency and performance.

### Package Manager
All workflows use Yarn for dependency management.

### Caching
- Yarn cache is enabled for faster builds
- Node modules caching for improved performance

### Permissions
- **Read:** All workflows have `contents: read` permission
- **Write:** Specific workflows have additional permissions as needed
- **Security:** Security workflows have `security-events: write` permission

## Secrets Required

### NPM_TOKEN
- **Purpose:** NPM package publishing
- **Workflow:** `npm-publish.yml`

### SNYK_TOKEN
- **Purpose:** Snyk security scanning
- **Workflow:** `security-scan.yml`

### GITHUB_TOKEN
- **Purpose:** GitHub API access (automatically provided)
- **Workflows:** All workflows

## Scheduling

### Daily
- **Security Scan:** 4:00 AM UTC

### Weekly (Monday)
- **Continuous Improvement:** 2:00 AM UTC
- **Dependency Updates:** 3:00 AM UTC

### Every 6 Hours
- **Link Crawler:** 0:00, 6:00, 12:00, 18:00 UTC

## Monitoring and Maintenance

### Artifact Retention
- **Build artifacts:** 7 days
- **Security reports:** 90 days
- **Coverage reports:** 30 days

### Error Handling
- Non-critical steps use `continue-on-error: true`
- Critical security issues fail the workflow
- Automated issue creation for problems

### Concurrency Control
- CI workflows cancel in-progress runs
- Link crawler allows parallel execution
- Test workflows have separate concurrency groups

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

2. **Security Scan Failures**
   - Review vulnerability reports
   - Update affected dependencies
   - Check for false positives

3. **Dependency Update Failures**
   - Verify package.json structure
   - Check for breaking changes
   - Review test failures

### Manual Triggers

Most workflows support manual triggering via `workflow_dispatch`:
- Go to Actions tab in GitHub
- Select the workflow
- Click "Run workflow"
- Configure parameters if needed

## Contributing

When adding new workflows:
1. Follow the existing naming conventions
2. Include proper error handling
3. Add appropriate permissions
4. Document the workflow purpose
5. Test thoroughly before committing

## Support

For issues with GitHub Actions:
1. Check workflow logs for detailed error messages
2. Verify secrets are properly configured
3. Review permission requirements
4. Check for workflow syntax errors