# GitHub Actions Workflows

This directory contains comprehensive GitHub Actions workflows for the Zion Tech Group application.

## Workflows Overview

### 1. CI/CD Pipeline (`ci-cd.yml`)
**Purpose**: Main continuous integration and deployment pipeline
**Triggers**: Push to main/develop, pull requests, manual dispatch
**Features**:
- Code quality & security checks
- Multi-platform build & testing
- Performance testing with Lighthouse
- Automated deployment to Vercel and GitHub Pages
- Post-deployment health checks

### 2. Security & Dependency Management (`security.yml`)
**Purpose**: Security scanning and dependency management
**Triggers**: Daily schedule, push to main/develop, pull requests, manual dispatch
**Features**:
- Dependency vulnerability scanning
- Code security analysis with Semgrep
- Container security scanning with Trivy
- Automated dependency updates
- Security policy compliance checks

### 3. Testing & Quality Assurance (`testing.yml`)
**Purpose**: Comprehensive testing automation
**Triggers**: Push to main/develop, pull requests, weekly schedule, manual dispatch
**Features**:
- Unit, integration, and E2E testing
- Performance testing
- Accessibility testing
- Test coverage reporting
- Quality gates enforcement

### 4. Release Management (`release.yml`)
**Purpose**: Automated release process
**Triggers**: Version tags, manual dispatch
**Features**:
- Automated version management
- Release artifact creation
- GitHub release creation
- Automated deployment
- Post-release tasks

### 5. Dependency Management (`dependencies.yml`)
**Purpose**: Automated dependency updates
**Triggers**: Daily schedule, manual dispatch
**Features**:
- Outdated package detection
- Security vulnerability scanning
- Automated update PR creation
- Breaking change detection
- Team notifications

## Configuration

### Environment Variables
The workflows use the following environment variables:
- `NODE_VERSION`: Node.js version (default: 20.18.1)
- `NPM_VERSION`: npm version (default: 10.0.0)

### Secrets Required
The following secrets need to be configured in your repository:

#### Vercel Deployment
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

#### Code Coverage
- `CODECOV_TOKEN`: Codecov authentication token

#### Security Scanning
- `GITHUB_TOKEN`: GitHub authentication token (automatically provided)

## Usage

### Manual Workflow Dispatch
You can manually trigger workflows from the GitHub Actions tab:

1. Go to **Actions** tab in your repository
2. Select the workflow you want to run
3. Click **Run workflow**
4. Fill in the required parameters
5. Click **Run workflow**

### Scheduled Workflows
- **Security scanning**: Daily at 2 AM UTC
- **Dependency updates**: Daily at 4 AM UTC
- **Testing**: Weekly on Sundays at 3 AM UTC

### Branch Protection
The workflows are designed to work with branch protection rules:
- Require status checks to pass before merging
- Require up-to-date branches before merging
- Enforce review requirements

## Customization

### Adding New Workflows
1. Create a new `.yml` file in `.github/workflows/`
2. Follow the existing workflow structure
3. Add appropriate triggers and jobs
4. Test locally with `act` if possible

### Modifying Existing Workflows
1. Update the workflow file
2. Test the changes
3. Commit and push to trigger the workflow
4. Monitor the execution

### Environment-Specific Configurations
You can create environment-specific configurations by:
1. Adding environment blocks in workflows
2. Using environment variables for configuration
3. Creating environment-specific secrets

## Monitoring & Troubleshooting

### Workflow Status
- Monitor workflow execution in the **Actions** tab
- Check job logs for detailed information
- Review artifacts for test results and reports

### Common Issues
1. **Build failures**: Check Node.js version compatibility
2. **Test failures**: Review test output and fix issues
3. **Deployment failures**: Verify secrets and permissions
4. **Timeout issues**: Adjust timeout values if needed

### Performance Optimization
- Use caching for dependencies
- Parallel job execution where possible
- Optimize build steps
- Use appropriate runner types

## Security Considerations

### Secret Management
- Never hardcode secrets in workflows
- Use repository secrets for sensitive data
- Rotate secrets regularly
- Limit secret access to necessary workflows

### Code Scanning
- Enable automated security scanning
- Review security alerts promptly
- Fix vulnerabilities in a timely manner
- Maintain security policy compliance

## Support

For questions or issues with GitHub Actions:
1. Check the workflow logs for error details
2. Review GitHub Actions documentation
3. Contact the development team
4. Create an issue with detailed information

## Contributing

When contributing to workflows:
1. Follow the existing patterns and structure
2. Test changes thoroughly
3. Update documentation as needed
4. Ensure security best practices are followed