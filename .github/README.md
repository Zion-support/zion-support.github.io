# GitHub Actions Workflows

This repository contains several GitHub Actions workflows to automate various aspects of development, testing, and deployment.

## Workflows Overview

### 1. CI (Continuous Integration)
**File:** `.github/workflows/ci.yml`
**Triggers:** Push to main/develop, Pull requests to main/develop
**Purpose:** Build, test, and verify the application

**Features:**
- Builds the project with Vite
- Runs linting and type checking
- Performs security audits
- Uploads build artifacts
- Runs on Ubuntu with Node.js 20

### 2. Test
**File:** `.github/workflows/test.yml`
**Triggers:** Push to main/develop, Pull requests to main/develop
**Purpose:** Comprehensive testing and validation

**Features:**
- Builds the project
- Verifies build output structure
- Runs linting and type checking
- Uploads test artifacts
- Ensures build quality

### 3. Deploy
**File:** `.github/workflows/deploy.yml`
**Triggers:** Push to main, Manual dispatch
**Purpose:** Production deployment

**Features:**
- Builds and validates the project
- Supports multiple deployment platforms:
  - Netlify (if configured)
  - Vercel (if configured)
- Uploads production build artifacts
- Only runs on main branch

### 4. CodeQL
**File:** `.github/workflows/codeql.yml`
**Triggers:** Push to main/develop, Pull requests to main/develop, Weekly schedule
**Purpose:** Security code analysis

**Features:**
- Analyzes JavaScript/TypeScript code
- Identifies security vulnerabilities
- Runs weekly automated scans
- Generates security reports

### 5. Continuous Improvement
**File:** `.github/workflows/continuous-improvement.yml`
**Triggers:** Weekly schedule (Monday 2 AM), Manual dispatch
**Purpose:** Repository maintenance

**Features:**
- Security audits
- Package dependency checks
- Linting and type checking
- Build verification
- Creates maintenance reports
- Opens PRs for review

### 6. Link Checker
**File:** `.github/workflows/agent-factory.yml`
**Triggers:** Weekly schedule (Monday 6 AM), Manual dispatch
**Purpose:** External link validation

**Features:**
- Checks external links for validity
- Generates link health reports
- Creates issues for broken links
- Monitors social media and external references

### 7. NPM Publish
**File:** `.github/workflows/npm-publish.yml`
**Triggers:** Push to main (excluding docs and GitHub files)
**Purpose:** Package publishing

**Features:**
- Automatically detects private packages
- Skips publishing for private packages
- Runs tests and builds before publishing
- Publishes to npm registry

## Configuration

### Required Secrets

For full functionality, configure these secrets in your repository:

```bash
# NPM Publishing
NPM_TOKEN=your_npm_token_here

# Netlify Deployment
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_SITE_ID=your_site_id

# Vercel Deployment
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

### Environment Variables

The workflows use these environment variables:

- `NODE_VERSION`: Set to 20 (latest LTS)
- `CACHE_KEY`: Uses npm cache for faster builds

## Usage

### Manual Triggers

Most workflows can be triggered manually:

1. Go to Actions tab in GitHub
2. Select the workflow
3. Click "Run workflow"
4. Choose branch and options
5. Click "Run workflow"

### Scheduled Runs

- **Continuous Improvement**: Every Monday at 2 AM
- **Link Checker**: Every Monday at 6 AM
- **CodeQL**: Every Monday at 1:33 AM

## Customization

### Adding New Workflows

1. Create a new `.yml` file in `.github/workflows/`
2. Follow the existing pattern
3. Add appropriate triggers and permissions
4. Test with a small change first

### Modifying Existing Workflows

1. Make changes to the workflow file
2. Test with a pull request
3. Monitor the Actions tab for any issues
4. Merge when satisfied

### Branch Protection

Consider enabling branch protection rules:

- Require status checks to pass
- Require branches to be up to date
- Restrict pushes to protected branches

## Troubleshooting

### Common Issues

1. **Build Failures**: Check Node.js version and dependencies
2. **Permission Errors**: Verify workflow permissions
3. **Secret Issues**: Ensure secrets are properly configured
4. **Timeout Errors**: Increase timeout values if needed

### Debugging

1. Check workflow logs in the Actions tab
2. Use `continue-on-error: true` for non-critical steps
3. Add debug output with `echo` statements
4. Test workflows on feature branches first

## Best Practices

1. **Keep workflows focused**: Each workflow should have a single responsibility
2. **Use caching**: Cache dependencies and build outputs
3. **Fail fast**: Stop early if critical steps fail
4. **Document changes**: Update this README when workflows change
5. **Test thoroughly**: Test workflows before merging to main

## Support

For issues with GitHub Actions:

1. Check GitHub Actions documentation
2. Review workflow logs for error details
3. Test workflows in isolation
4. Consider using GitHub's workflow debug mode

---

*Last updated: January 2025*