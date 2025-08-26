# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion Tech Group website.

## Workflows Overview

### 1. CI (Continuous Integration)
**File**: `.github/workflows/ci.yml`
- **Trigger**: Push to main branch or pull requests
- **Purpose**: Build, test, and validate code changes
- **Jobs**:
  - Build: Install dependencies, lint, type-check, and build the project
  - Test: Run tests and upload build artifacts

### 2. Test
**File**: `.github/workflows/test.yml`
- **Trigger**: Push to main branch or pull requests
- **Purpose**: Comprehensive testing and validation
- **Jobs**:
  - Main: Build, test, and verify the application

### 3. Deploy
**File**: `.github/workflows/deploy.yml`
- **Trigger**: Push to main branch or manual dispatch
- **Purpose**: Deploy the application to production
- **Jobs**:
  - Deploy: Build and deploy to Netlify/Vercel (if configured)

### 4. Security
**File**: `.github/workflows/security.yml`
- **Trigger**: Push to main branch, pull requests, or weekly schedule
- **Purpose**: Security vulnerability scanning
- **Jobs**:
  - Security: Run npm audit and security checks

### 5. CodeQL
**File**: `.github/workflows/codeql.yml`
- **Trigger**: Push to main/develop branches, pull requests, or weekly schedule
- **Purpose**: Static code analysis for security vulnerabilities
- **Jobs**:
  - Analyze: CodeQL analysis for JavaScript/TypeScript

### 6. Continuous Improvement
**File**: `.github/workflows/continuous-improvement.yml`
- **Trigger**: Every 4 hours or manual dispatch
- **Purpose**: Automated code quality improvements
- **Jobs**:
  - Improve: Run linting, type checking, and create improvement PRs

### 7. Link Checker
**File**: `.github/workflows/agent-factory.yml`
- **Trigger**: Every 6 hours or manual dispatch
- **Purpose**: Check for broken links on the website
- **Jobs**:
  - Check-links: Verify internal and external links

## Required Secrets

### For Deployment
- `NETLIFY_AUTH_TOKEN`: Netlify authentication token
- `NETLIFY_SITE_ID`: Netlify site ID
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

### For Testing (Optional)
- `CODECOV_TOKEN`: Codecov token for test coverage
- `CYPRESS_TEST_USER_EMAIL`: Test user email for Cypress
- `CYPRESS_TEST_USER_PASSWORD`: Test user password for Cypress

## Local Development

To test workflows locally, you can use [act](https://github.com/nektos/act):

```bash
# Install act
brew install act

# Run a specific workflow
act -W .github/workflows/ci.yml

# Run with specific event
act push -W .github/workflows/ci.yml
```

## Workflow Dependencies

The workflows are designed to work together:
1. **CI** runs on every push/PR
2. **Test** provides comprehensive testing
3. **Security** runs security checks
4. **Deploy** deploys successful builds
5. **Continuous Improvement** maintains code quality
6. **Link Checker** ensures website integrity

## Troubleshooting

### Common Issues

1. **Build Failures**: Check Node.js version compatibility and dependency issues
2. **Test Failures**: Ensure all tests pass locally before pushing
3. **Deployment Issues**: Verify deployment secrets are configured correctly
4. **Security Alerts**: Review npm audit output and update vulnerable dependencies

### Debugging

- Check workflow logs in the Actions tab
- Use `act` for local testing
- Review artifact uploads for debugging information
- Check issue creation for automated reports

## Contributing

When adding new workflows:
1. Follow the existing naming conventions
2. Include proper error handling
3. Add appropriate permissions
4. Document the workflow purpose
5. Test locally with `act`

## Best Practices

- Use Node.js 20 for consistency
- Cache npm dependencies for faster builds
- Upload artifacts for debugging
- Use appropriate permissions (principle of least privilege)
- Include proper error handling and continue-on-error where appropriate
- Use concurrency groups to prevent workflow conflicts