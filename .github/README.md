# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion Tech Group project.

## Workflows Overview

### 🚀 CI (Continuous Integration)
**File:** `ci.yml`  
**Trigger:** Push to main, Pull requests to main  
**Purpose:** Main CI pipeline that runs on every PR and push to main

**Features:**
- Linting and type checking
- Building the project
- Running tests with coverage
- Cypress end-to-end testing
- Security scanning
- Artifact uploads

### 🧪 Node.js Matrix Testing
**File:** `node-matrix.yml`  
**Trigger:** Push to main/develop, Pull requests to main/develop  
**Purpose:** Ensures compatibility across different Node.js versions

**Node.js Versions:** 18, 20, 21

### 🔒 CodeQL Security Analysis
**File:** `codeql.yml`  
**Trigger:** Push to main/develop/cursor branches, Pull requests, Weekly schedule  
**Purpose:** Automated security vulnerability detection

**Schedule:** Every Monday at 1:33 AM UTC

### 📦 NPM Package Publishing
**File:** `npm-publish.yml`  
**Trigger:** Push to main (excluding markdown files)  
**Purpose:** Automatically publishes packages to npm registry

**Requirements:** `NPM_TOKEN` secret

### 🔄 Continuous Improvement
**File:** `continuous-improvement.yml`  
**Trigger:** Every 4 hours, Manual dispatch  
**Purpose:** Automated code improvements and diversity checks

**Features:**
- Automated improvement suggestions
- Diversity analysis
- Auto-merge pull requests

### 🕷️ Link Crawler Factory
**File:** `agent-factory.yml`  
**Trigger:** Every 30 minutes, Manual dispatch  
**Purpose:** Automated link checking and broken link detection

**Features:**
- Parallel link crawling
- Broken link reporting
- Queue management
- Issue creation for broken links

### 📊 Performance Testing
**File:** `performance.yml`  
**Trigger:** Push to main, Pull requests, Weekly schedule  
**Purpose:** Bundle size analysis and performance monitoring

**Schedule:** Every Monday at 2:00 AM UTC

### ♿ Accessibility Testing
**File:** `accessibility.yml`  
**Trigger:** Push to main/develop, Pull requests, Weekly schedule  
**Purpose:** Automated accessibility compliance checking

**Schedule:** Every Monday at 4:00 AM UTC

### 🔍 Dependency Review
**File:** `dependency-review.yml`  
**Trigger:** Pull requests to main/develop  
**Purpose:** Security and license compliance for dependencies

**Features:**
- Vulnerability scanning
- License compliance
- Dependency updates

### 🚀 Deployment Check
**File:** `deployment-check.yml`  
**Trigger:** After successful CI completion  
**Purpose:** Post-deployment validation and health checks

**Features:**
- Build output validation
- Bundle size monitoring
- Security audit

## Required Secrets

The following secrets must be configured in your repository:

### For CI Workflow:
- `CODECOV_TOKEN` - Codecov coverage reporting
- `CYPRESS_TEST_USER_EMAIL` - Cypress test user email
- `CYPRESS_TEST_USER_PASSWORD` - Cypress test user password
- `CYPRESS_TEST_USER_DISPLAY_NAME` - Cypress test user display name
- `VITE_REOWN_PROJECT_ID_CI` - Reown project ID for CI
- `VITE_SUPABASE_URL_CI` - Supabase URL for CI
- `VITE_SUPABASE_ANON_KEY_CI` - Supabase anonymous key for CI
- `NEXT_PUBLIC_API_URL_CI` - API URL for CI
- `VITE_VAPID_PUBLIC_KEY_CI` - VAPID public key for CI

### For NPM Publishing:
- `NPM_TOKEN` - NPM authentication token

## Local Development

To test workflows locally, you can use [act](https://github.com/nektos/act):

```bash
# Install act
brew install act  # macOS
# or download from GitHub releases

# Run a specific workflow
act -W .github/workflows/ci.yml

# Run with specific event
act push -W .github/workflows/ci.yml
```

## Workflow Dependencies

- **CI** → **Deployment Check** (workflow_run trigger)
- **CI** → **Performance Testing** (shared artifacts)
- **CI** → **Accessibility Testing** (shared build)

## Troubleshooting

### Common Issues:

1. **Node.js Version Mismatch**: Ensure all workflows use Node.js 20
2. **Missing Scripts**: Check package.json for required npm scripts
3. **Secret Configuration**: Verify all required secrets are set
4. **Permission Issues**: Check workflow permissions for repository access

### Debugging:

- Enable debug logging by setting `ACTIONS_STEP_DEBUG=true` in repository secrets
- Check workflow run logs for detailed error information
- Use `continue-on-error: true` for non-critical steps

## Contributing

When adding new workflows:

1. Follow the existing naming convention
2. Include proper error handling
3. Add appropriate permissions
4. Document any new secrets or requirements
5. Test locally with act before committing

## Performance Considerations

- Use `concurrency` groups to prevent overlapping runs
- Implement proper caching strategies
- Use `timeout-minutes` for long-running jobs
- Consider using `strategy.matrix` for parallel execution