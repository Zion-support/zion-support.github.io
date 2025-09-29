# GitHub Actions Workflows

This repository contains several GitHub Actions workflows to automate various aspects of development, testing, and deployment.

## Workflows Overview

### 🔄 CI (Continuous Integration)
**File:** `ci.yml`
- **Triggers:** Push to main, Pull requests to main
- **Purpose:** Automated testing and building on every code change
- **Jobs:**
  - Build: Lint, type-check, build, and test
  - Test: Separate test execution with timeout protection

### 🧪 Test
**File:** `test.yml`
- **Triggers:** Push to main, Pull requests to main
- **Purpose:** Comprehensive testing with build verification
- **Features:**
  - Build verification
  - Asset path validation
  - Test execution with coverage
  - Build artifact upload

### 🔒 Security
**File:** `security.yml`
- **Triggers:** Weekly schedule, Push to main, Pull requests to main
- **Purpose:** Security vulnerability scanning and dependency review
- **Features:**
  - npm audit scanning
  - Dependency vulnerability checks
  - Automated dependency review on PRs
  - Security report generation

### 🚀 Deploy
**File:** `deploy.yml`
- **Triggers:** Push to main, Manual dispatch
- **Purpose:** Production deployment automation
- **Features:**
  - Production build verification
  - Sitemap generation
  - Build artifact preparation
  - Deployment platform integration ready

### 🔗 Link Crawler Factory
**File:** `agent-factory.yml`
- **Triggers:** Every 30 minutes, Manual dispatch
- **Purpose:** Automated link checking and site crawling
- **Features:**
  - Parallel link checking with configurable shards
  - Broken link detection and reporting
  - Queue management for large sites
  - Automated issue creation for broken links

### 📦 NPM Publish
**File:** `npm-publish.yml`
- **Triggers:** Push to main (excluding markdown files)
- **Purpose:** Automated npm package publishing
- **Features:**
  - Automatic testing before publish
  - npm registry integration
  - Secure token handling

### 🔄 Continuous Improvement
**File:** `continuous-improvement.yml`
- **Triggers:** Every 4 hours, Manual dispatch
- **Purpose:** Automated site improvement and analysis
- **Features:**
  - Site analysis automation
  - Link scanning
  - Automated PR creation
  - Auto-merge capabilities

## Workflow Dependencies

### Required Secrets
- `NPM_TOKEN`: For npm package publishing
- `GITHUB_TOKEN`: Automatically provided by GitHub

### Required Scripts (package.json)
The workflows depend on these npm scripts being available:
- `npm run lint`: ESLint execution
- `npm run typecheck`: TypeScript type checking
- `npm run build`: Project build
- `npm test`: Test execution
- `npm run analyze:site`: Site analysis
- `npm run links:scan`: Link scanning
- `npm run sitemap`: Sitemap generation

## Usage

### Manual Workflow Dispatch
Most workflows support manual triggering:
1. Go to Actions tab in GitHub
2. Select the workflow
3. Click "Run workflow"
4. Configure parameters if needed
5. Click "Run workflow"

### Workflow Concurrency
- **CI workflows:** Cancel in-progress runs when new commits are pushed
- **Link crawler:** Allow parallel execution for different shards
- **Deployment:** Single deployment at a time

### Environment Protection
- **Production deployment:** Requires environment approval
- **Security scanning:** Fails on high-severity vulnerabilities
- **Dependency review:** Blocks PRs with moderate+ severity issues

## Customization

### Adding New Workflows
1. Create new `.yml` file in `.github/workflows/`
2. Follow the established patterns
3. Update this README
4. Test with manual dispatch

### Modifying Existing Workflows
1. Update the workflow file
2. Test changes with manual dispatch
3. Update documentation if needed
4. Monitor execution logs

### Environment Variables
- Use `${{ secrets.SECRET_NAME }}` for sensitive data
- Use `${{ github.event.inputs.INPUT_NAME }}` for workflow inputs
- Use `${{ needs.job_name.outputs.output_name }}` for job outputs

## Troubleshooting

### Common Issues
1. **Build failures:** Check Node.js version compatibility
2. **Permission errors:** Verify workflow permissions
3. **Secret errors:** Ensure required secrets are configured
4. **Timeout issues:** Adjust `timeout-minutes` in job configuration

### Debugging
1. Check workflow run logs
2. Verify script availability in package.json
3. Test scripts locally
4. Check GitHub Actions status page

## Best Practices

1. **Keep workflows focused:** Each workflow should have a single responsibility
2. **Use concurrency controls:** Prevent resource conflicts
3. **Fail fast:** Stop execution on critical errors
4. **Provide clear feedback:** Use descriptive step names and error messages
5. **Cache dependencies:** Use GitHub's caching features for faster builds
6. **Security first:** Always scan for vulnerabilities before deployment

## Support

For workflow issues:
1. Check the workflow logs
2. Verify all required scripts exist
3. Ensure secrets are properly configured
4. Test workflows manually
5. Review GitHub Actions documentation