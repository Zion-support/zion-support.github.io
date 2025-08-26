# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion Tech Group project.

## Workflows Overview

### 🔄 CI (Continuous Integration)
- **File**: `ci.yml`
- **Trigger**: Push to main branch or pull requests
- **Purpose**: Build, lint, and type-check the project
- **Features**:
  - Automated dependency installation
  - Linting and type checking
  - Build verification
  - Test execution (if available)

### 🧪 Test
- **File**: `test.yml`
- **Trigger**: Push to main branch or pull requests
- **Purpose**: Comprehensive testing and build verification
- **Features**:
  - Build verification
  - Asset path validation
  - Test execution with coverage
  - Build artifact upload

### 🔒 CodeQL Security Analysis
- **File**: `codeql.yml`
- **Trigger**: Push to main/develop branches, pull requests, and weekly schedule
- **Purpose**: Automated security vulnerability scanning
- **Features**:
  - JavaScript/TypeScript analysis
  - Automated vulnerability detection
  - Security event reporting

### 🚀 Continuous Improvement
- **File**: `continuous-improvement.yml`
- **Trigger**: Every 4 hours and manual dispatch
- **Purpose**: Automated code quality improvements
- **Features**:
  - Automated linting and type checking
  - Pull request creation for improvements
  - Auto-merge capabilities

### 📦 NPM Package Publishing
- **File**: `npm-publish.yml`
- **Trigger**: Push to main branch (excluding markdown files)
- **Purpose**: Automated npm package publishing
- **Features**:
  - Test execution before publishing
  - Build verification
  - Secure npm publishing

### 🕷️ Link Crawler Factory
- **File**: `agent-factory.yml`
- **Trigger**: Every 30 minutes and manual dispatch
- **Purpose**: Automated link checking and broken link detection
- **Features**:
  - Parallel link crawling
  - Broken link reporting
  - Automated issue creation
  - Queue management

### 🌐 Deployment
- **File**: `deploy.yml`
- **Trigger**: Push to main branch and manual dispatch
- **Purpose**: Production deployment automation
- **Features**:
  - Test execution
  - Build verification
  - Deployment tracking
  - Environment management

### 🔍 Dependency Review
- **File**: `dependency-review.yml`
- **Trigger**: Pull requests to main/develop
- **Purpose**: Security and license compliance checking
- **Features**:
  - Dependency vulnerability scanning
  - License compliance verification
  - Security policy enforcement

### 🤖 Dependabot Auto-merge
- **File**: `dependabot-auto-merge.yml`
- **Trigger**: Dependabot pull requests
- **Purpose**: Automated dependency updates
- **Features**:
  - Auto-merge for passing PRs
  - Squash merge strategy
  - Dependency update automation

## Configuration

### Required Secrets

The following secrets need to be configured in your repository:

- `NPM_TOKEN`: NPM authentication token for package publishing
- `GITHUB_TOKEN`: Automatically provided by GitHub

### Environment Variables

- `NODE_VERSION`: Set to '20' for all workflows
- `NPM_CACHE`: Enabled for faster builds

## Usage

### Manual Workflow Dispatch

Most workflows support manual triggering:

1. Go to the Actions tab in your repository
2. Select the desired workflow
3. Click "Run workflow"
4. Configure any required inputs
5. Click "Run workflow"

### Workflow Dependencies

- **CI** and **Test** workflows run independently
- **Deployment** depends on successful CI builds
- **Continuous Improvement** runs on a schedule
- **Link Crawler** runs independently for link monitoring

## Customization

### Adding New Workflows

1. Create a new `.yml` file in `.github/workflows/`
2. Follow the existing workflow patterns
3. Update this README with workflow details
4. Test the workflow with a pull request

### Modifying Existing Workflows

1. Make changes to the workflow file
2. Test with a pull request
3. Update this README if necessary
4. Merge when tests pass

## Troubleshooting

### Common Issues

1. **Build Failures**: Check Node.js version and dependencies
2. **Test Failures**: Verify test configuration and dependencies
3. **Permission Errors**: Check workflow permissions and secrets
4. **Timeout Issues**: Adjust workflow timeout settings

### Debug Mode

Enable debug logging by setting the secret `ACTIONS_STEP_DEBUG` to `true`.

## Best Practices

1. **Always test workflows** with pull requests
2. **Use specific action versions** for stability
3. **Implement proper error handling** in workflows
4. **Monitor workflow performance** and optimize as needed
5. **Keep workflows focused** on single responsibilities
6. **Use concurrency controls** to prevent conflicts

## Support

For workflow issues or questions:

1. Check the workflow logs for error details
2. Review the workflow configuration
3. Consult GitHub Actions documentation
4. Create an issue with detailed error information