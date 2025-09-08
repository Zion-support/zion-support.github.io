# GitHub Actions Workflows

This repository contains comprehensive GitHub Actions workflows for automated CI/CD, testing, security, and dependency management.

## 🚀 Workflow Overview

### 1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
**Purpose**: Main continuous integration and deployment pipeline
**Triggers**: Push to main/develop/feature/*/hotfix/*, PRs, manual dispatch
**Jobs**:
- **Code Quality & Security**: ESLint, TypeScript checking, security audit, secrets detection
- **Build & Test**: Multi-platform build testing (Ubuntu, Windows, Node 18.x, 20.x)
- **Performance Testing**: Lighthouse CI performance analysis
- **Deployment**: Vercel and GitHub Pages deployment
- **Post-Deployment**: Health checks and monitoring setup

### 2. **Testing & Quality Assurance** (`.github/workflows/testing.yml`)
**Purpose**: Comprehensive testing and quality checks
**Triggers**: Push to main/develop/feature/*/hotfix/*, PRs, weekly schedule, manual dispatch
**Jobs**:
- **Code Quality**: ESLint and TypeScript type checking
- **Build Testing**: Multi-platform build verification
- **Performance Tests**: Lighthouse performance analysis
- **Security Tests**: npm audit and secrets detection
- **Quality Gates**: Overall quality assessment

### 3. **CI** (`.github/workflows/ci.yml`)
**Purpose**: Lightweight continuous integration
**Triggers**: Push to main, PRs to main
**Jobs**:
- **Build**: Lint, type-check, and build verification
- **Test**: Build verification and output validation

### 4. **Test** (`.github/workflows/test.yml`)
**Purpose**: Build testing and verification
**Triggers**: Push to main, PRs to main
**Jobs**:
- **Main Job**: Build, verify output, check assets, upload artifacts

### 5. **Security & Dependency Management** (`.github/workflows/security.yml`)
**Purpose**: Security scanning and dependency management
**Triggers**: Daily schedule, push to main/develop, PRs, manual dispatch
**Jobs**:
- **Dependency Vulnerability Scan**: npm audit and vulnerability detection
- **Code Security Scan**: TruffleHog secrets detection, Semgrep security analysis
- **Container Security**: Trivy vulnerability scanning
- **Dependency Updates**: Automated dependency update PRs
- **Security Policy Compliance**: Policy validation
- **Security Notifications**: Team alerts for security issues

### 6. **Release Management** (`.github/workflows/release.yml`)
**Purpose**: Automated release creation and deployment
**Triggers**: Version tags, manual dispatch
**Jobs**:
- **Version Management**: Version bumping and changelog updates
- **Build Release**: Release build creation and analysis
- **Create GitHub Release**: Automated release notes and assets
- **Deploy Release**: Production deployment to Vercel and GitHub Pages
- **Post-Release**: Status updates and team notifications

### 7. **Dependency Management** (`.github/workflows/dependencies.yml`)
**Purpose**: Automated dependency updates and management
**Triggers**: Daily schedule, manual dispatch
**Jobs**:
- **Check Dependencies**: Outdated package detection and security scanning
- **Update Dependencies**: Automated dependency updates
- **Create Update PR**: Pull request creation for dependency updates
- **Auto-Merge**: Optional automated merging
- **Team Notifications**: Update summaries and alerts

### 8. **CodeQL** (`.github/workflows/codeql.yml`)
**Purpose**: Advanced security code analysis
**Triggers**: Push to main/develop/cursor/**, PRs, weekly schedule
**Jobs**:
- **Analyze**: JavaScript/TypeScript security analysis using GitHub's CodeQL

## 🔧 Configuration

### Environment Variables
- `NODE_VERSION`: Node.js version (20.18.1)
- `NPM_VERSION`: npm version (10.0.0)
- `NODE_OPTIONS`: Memory and OpenSSL configuration

### Required Secrets
- `GITHUB_TOKEN`: GitHub authentication token
- `VERCEL_TOKEN`: Vercel deployment token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

### Build Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Memory Limit**: 6GB (`--max-old-space-size=6144`)
- **OpenSSL**: Legacy provider support

## 📋 Available Scripts

The workflows use the following npm scripts from `package.json`:
- `npm run lint`: ESLint code quality checking
- `npm run type-check`: TypeScript type checking
- `npm run build`: Production build
- `npm start`: Development server (for testing)

## 🎯 Quality Gates

All workflows implement quality gates to ensure:
- ✅ Code quality standards are met
- ✅ Build processes complete successfully
- ✅ Security scans pass
- ✅ Performance benchmarks are achieved
- ✅ Dependencies are up-to-date and secure

## 🚨 Error Handling

- **Non-blocking failures**: Some checks continue on warnings
- **Artifact retention**: Build artifacts kept for 7-90 days
- **Team notifications**: Automated alerts for critical issues
- **Fallback strategies**: Multiple deployment targets

## 📊 Monitoring & Reporting

- **Build artifacts**: Uploaded for analysis and debugging
- **Performance metrics**: Lighthouse scores and build sizes
- **Security reports**: Vulnerability scans and audit results
- **Dependency tracking**: Outdated package monitoring

## 🔄 Workflow Dependencies

```
ci-cd.yml ← Main pipeline
├── code-quality
├── build-test
├── performance
├── deploy
└── post-deployment

testing.yml ← Quality assurance
├── code-quality
├── build-test
├── performance-tests
├── security-tests
└── quality-gates

security.yml ← Security scanning
├── dependency-scan
├── code-security
├── container-security
├── dependency-updates
├── security-compliance
└── security-notifications

release.yml ← Release management
├── version-management
├── build-release
├── create-release
├── deploy-release
└── post-release

dependencies.yml ← Dependency management
├── check-dependencies
├── update-dependencies
├── create-update-pr
├── auto-merge
└── notify-team
```

## 🚀 Getting Started

1. **Fork/Clone** the repository
2. **Set up secrets** in your GitHub repository settings
3. **Push to main** to trigger the CI/CD pipeline
4. **Monitor workflows** in the Actions tab
5. **Review artifacts** and reports for quality insights

## 📝 Customization

- **Modify triggers**: Adjust branch names and schedules
- **Add environments**: Configure staging/production deployments
- **Customize quality gates**: Adjust thresholds and requirements
- **Extend notifications**: Add Slack, email, or other alert systems

## 🤝 Contributing

When contributing to workflows:
1. Test changes in a fork first
2. Follow the existing naming conventions
3. Add appropriate error handling
4. Update this documentation
5. Ensure backward compatibility

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Actions](https://github.com/amondnet/vercel-action)
- [GitHub Pages Actions](https://github.com/peaceiris/actions-gh-pages)
- [CodeQL Documentation](https://docs.github.com/en/code-security/code-scanning)
- [TruffleHog](https://github.com/trufflesecurity/trufflehog)
- [Semgrep](https://semgrep.dev/)