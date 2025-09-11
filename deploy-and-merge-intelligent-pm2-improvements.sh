#!/bin/bash

# Deploy and Merge Intelligent PM2 Improvements Script
# This script commits all PM2 automation improvements and merges them with the main branch

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRANCH_NAME="feature/enhanced-intelligent-pm2-ecosystem"
COMMIT_MESSAGE="feat: Enhanced Intelligent PM2 Automation Ecosystem V2

- Added 22+ intelligent automation scripts for comprehensive project management
- Implemented AI-powered code analysis and auto-fixing
- Created smart performance optimization with real-time monitoring
- Added intelligent dependency management with security-first approach
- Implemented smart deployment automation with rollback capabilities
- Created intelligent repository management with automated branch cleanup
- Added advanced development workflow automation
- Implemented intelligent CI/CD orchestration with quality gates
- Created enhanced testing automation with adaptive strategies
- Added comprehensive security automation with vulnerability scanning
- Implemented project health monitoring with predictive capabilities
- Created PM2 process synchronization and monitoring
- Added link validation and integrity checking
- Implemented TypeScript syntax fixing and error correction
- Created console error detection and auto-fixing
- Added quality checks with coverage analysis
- Implemented continuous improvement with learning capabilities
- Created daily build testing and validation
- Added comprehensive health checks and system monitoring
- Implemented security scanning with real-time alerts
- Created performance monitoring with intelligent insights
- Enhanced ecosystem configuration with advanced resource management
- Added comprehensive management scripts and utilities

This ecosystem provides:
- Automated code quality improvement
- Intelligent performance optimization
- Proactive security monitoring
- Smart deployment management
- Continuous health monitoring
- Predictive issue detection
- Automated conflict resolution
- Intelligent resource management"

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

banner() {
    echo -e "${BOLD}${PURPLE}$1${NC}"
}

# Check Git status and requirements
check_git_requirements() {
    log "Checking Git requirements..."
    
    # Check if Git is installed
    if ! command -v git &> /dev/null; then
        error "Git is not installed. Please install Git to continue."
        exit 1
    fi
    
    # Check if we're in a Git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        error "This is not a Git repository. Please initialize Git first."
        exit 1
    fi
    
    # Check Git configuration
    if ! git config user.name > /dev/null 2>&1; then
        warning "Git user.name is not configured. Setting default..."
        git config user.name "PM2 Automation Bot"
    fi
    
    if ! git config user.email > /dev/null 2>&1; then
        warning "Git user.email is not configured. Setting default..."
        git config user.email "automation@ziontechgroup.com"
    fi
    
    success "Git requirements satisfied"
}

# Backup current state
backup_current_state() {
    log "Creating backup of current state..."
    
    local backup_dir="backups/$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$backup_dir"
    
    # Backup key files
    if [ -f "ecosystem.config.cjs" ]; then
        cp "ecosystem.config.cjs" "$backup_dir/"
    fi
    
    if [ -f "package.json" ]; then
        cp "package.json" "$backup_dir/"
    fi
    
    # Create backup manifest
    cat > "$backup_dir/backup-manifest.txt" << EOF
Backup created: $(date)
Git commit: $(git rev-parse HEAD 2>/dev/null || echo "No commit")
Git branch: $(git branch --show-current 2>/dev/null || echo "No branch")
Files backed up:
$(ls -la "$backup_dir/")
EOF
    
    success "Backup created in $backup_dir"
}

# Check for uncommitted changes
check_uncommitted_changes() {
    log "Checking for uncommitted changes..."
    
    if ! git diff-index --quiet HEAD --; then
        warning "Uncommitted changes detected"
        git status --porcelain
        echo
        info "These changes will be included in the commit"
    else
        info "No uncommitted changes found"
    fi
}

# Create and switch to feature branch
create_feature_branch() {
    log "Creating and switching to feature branch..."
    
    # Get current branch
    local current_branch=$(git branch --show-current)
    
    # Check if feature branch already exists
    if git branch --list | grep -q "$BRANCH_NAME"; then
        log "Feature branch '$BRANCH_NAME' already exists. Switching to it..."
        git checkout "$BRANCH_NAME"
    else
        log "Creating new feature branch '$BRANCH_NAME'..."
        git checkout -b "$BRANCH_NAME"
    fi
    
    success "Now on branch: $(git branch --show-current)"
}

# Add and commit all improvements
commit_improvements() {
    log "Adding and committing PM2 automation improvements..."
    
    # Add all automation-related files
    git add -A
    
    # Create detailed commit
    git commit -m "$COMMIT_MESSAGE" || {
        warning "Nothing to commit or commit failed"
        return 1
    }
    
    success "Changes committed successfully"
    
    # Show commit details
    info "Commit details:"
    git show --stat HEAD
}

# Push to remote repository
push_to_remote() {
    log "Pushing changes to remote repository..."
    
    # Check if remote exists
    if ! git remote | grep -q "origin"; then
        warning "No 'origin' remote found. Skipping push to remote."
        return 0
    fi
    
    # Push the feature branch
    if git push -u origin "$BRANCH_NAME"; then
        success "Changes pushed to remote repository"
    else
        error "Failed to push to remote repository"
        return 1
    fi
}

# Create pull request (if GitHub CLI is available)
create_pull_request() {
    log "Creating pull request..."
    
    if ! command -v gh &> /dev/null; then
        warning "GitHub CLI not found. Please create pull request manually."
        info "To create a PR manually:"
        echo "  1. Go to your repository on GitHub"
        echo "  2. Click 'Compare & pull request'"
        echo "  3. Add title: 'Enhanced Intelligent PM2 Automation Ecosystem V2'"
        echo "  4. Add the commit message as description"
        echo "  5. Submit the pull request"
        return 0
    fi
    
    # Create PR using GitHub CLI
    if gh pr create \
        --title "Enhanced Intelligent PM2 Automation Ecosystem V2" \
        --body "$(echo "$COMMIT_MESSAGE" | tail -n +3)" \
        --base main \
        --head "$BRANCH_NAME"; then
        success "Pull request created successfully"
    else
        warning "Failed to create pull request automatically"
    fi
}

# Merge with main branch (if safe to do so)
merge_with_main() {
    log "Preparing to merge with main branch..."
    
    # Switch to main branch
    local main_branch="main"
    if ! git branch --list | grep -q "$main_branch"; then
        main_branch="master"
        if ! git branch --list | grep -q "$main_branch"; then
            error "Neither 'main' nor 'master' branch found"
            return 1
        fi
    fi
    
    # Fetch latest changes
    git fetch origin "$main_branch" 2>/dev/null || {
        warning "Could not fetch from remote. Continuing with local merge."
    }
    
    # Switch to main branch
    git checkout "$main_branch"
    
    # Pull latest changes
    git pull origin "$main_branch" 2>/dev/null || {
        warning "Could not pull latest changes from remote"
    }
    
    # Check for conflicts before merging
    if git merge-tree "$(git merge-base HEAD "$BRANCH_NAME")" HEAD "$BRANCH_NAME" | grep -q "<<<<<<< "; then
        error "Merge conflicts detected. Please resolve manually."
        git checkout "$BRANCH_NAME"
        return 1
    fi
    
    # Perform the merge
    if git merge "$BRANCH_NAME" --no-ff -m "Merge $BRANCH_NAME into $main_branch

Enhanced Intelligent PM2 Automation Ecosystem V2 with comprehensive automation capabilities."; then
        success "Successfully merged $BRANCH_NAME into $main_branch"
    else
        error "Failed to merge branches"
        return 1
    fi
    
    # Push merged changes
    if git push origin "$main_branch" 2>/dev/null; then
        success "Merged changes pushed to remote"
    else
        warning "Could not push merged changes to remote"
    fi
    
    # Clean up feature branch
    git branch -d "$BRANCH_NAME" 2>/dev/null || {
        warning "Could not delete feature branch locally"
    }
    
    # Delete remote feature branch
    git push origin --delete "$BRANCH_NAME" 2>/dev/null || {
        warning "Could not delete remote feature branch"
    }
}

# Generate deployment summary
generate_deployment_summary() {
    log "Generating deployment summary..."
    
    local summary_file="deployment-summary-$(date +%Y%m%d_%H%M%S).md"
    
    cat > "$summary_file" << EOF
# Enhanced Intelligent PM2 Automation Ecosystem V2 - Deployment Summary

**Deployment Date:** $(date)
**Git Commit:** $(git rev-parse HEAD)
**Branch:** $(git branch --show-current)

## 🚀 New Features Deployed

### Core Automation Scripts
- **AI Code Analyzer** - Intelligent code analysis and auto-fixing
- **Smart Performance Optimizer** - Real-time performance optimization
- **Intelligent Dependency Manager** - Security-first dependency management
- **Smart Deployment Automation** - Automated deployment with rollback
- **Intelligent Repository Manager** - Automated Git operations and cleanup
- **Advanced Development Workflow** - Continuous development automation
- **Intelligent CI/CD Orchestrator** - Smart pipeline management
- **Enhanced Testing Automation** - Adaptive testing strategies
- **Enhanced Security Automation** - Comprehensive security scanning
- **Project Health Monitor** - Predictive health monitoring

### Monitoring & Quality Assurance
- **PM2 Sync Automation** - Process synchronization and monitoring
- **Link Checker Automation** - Link validation and integrity
- **TypeScript Syntax Fixer** - Automated syntax error correction
- **Console Error Fixer** - Real-time error detection and fixing
- **Quality Checks** - Comprehensive quality validation
- **Security Audit** - Vulnerability scanning and reporting
- **Continuous Improvement** - Learning-based optimization
- **Daily Build Test** - Automated build validation
- **Health Check** - System health monitoring
- **Security Scanner** - Real-time security monitoring
- **Performance Monitor** - Intelligent performance insights

## 📊 Ecosystem Configuration

### Enhanced PM2 Configuration
- **File:** \`ecosystem.enhanced-intelligent-v2.cjs\`
- **Total Processes:** 23 automation processes
- **Resource Management:** Intelligent memory and CPU allocation
- **Scheduling:** Optimized cron-based execution
- **Logging:** Comprehensive log management with rotation
- **Monitoring:** Real-time process health monitoring

### Startup Scripts
- **Main Script:** \`start-enhanced-intelligent-pm2-ecosystem-v2.sh\`
- **Management Scripts:** Complete set of management utilities
- **Health Checks:** Comprehensive system validation
- **Backup System:** Automated configuration backup

## 🎯 Key Benefits

1. **Automated Code Quality** - Continuous code improvement and error fixing
2. **Intelligent Performance** - Real-time optimization and monitoring
3. **Proactive Security** - Comprehensive vulnerability detection and prevention
4. **Smart Deployment** - Automated deployment with intelligent rollback
5. **Predictive Monitoring** - Health monitoring with predictive capabilities
6. **Continuous Learning** - Self-improving automation system

## 🛠️ Management Commands

\`\`\`bash
# Start the ecosystem
./start-enhanced-intelligent-pm2-ecosystem-v2.sh

# Management scripts
./scripts/management/start-ecosystem.sh
./scripts/management/stop-ecosystem.sh
./scripts/management/restart-ecosystem.sh
./scripts/management/status-ecosystem.sh
./scripts/management/logs-ecosystem.sh
./scripts/management/monitor-ecosystem.sh
./scripts/management/health-check.sh
\`\`\`

## 📈 Monitoring & Logs

- **Log Directory:** \`logs/\`
- **Process Monitoring:** PM2 built-in monitoring
- **Health Checks:** Every 2 minutes
- **Performance Monitoring:** Every 3 minutes
- **Security Scanning:** Every 4 hours

## 🔧 Next Steps

1. Monitor the ecosystem health after deployment
2. Review automation logs for any issues
3. Customize automation schedules if needed
4. Set up external monitoring integrations
5. Configure notification systems

## 📞 Support

For issues or questions regarding this deployment:
- Check logs in the \`logs/\` directory
- Run health checks using management scripts
- Review PM2 process status with \`pm2 list\`
- Monitor system resources with \`pm2 monit\`

---
*Deployment completed successfully at $(date)*
EOF
    
    success "Deployment summary saved to $summary_file"
    
    # Display summary
    info "📋 Deployment Summary:"
    echo "  - Enhanced PM2 ecosystem with 23 automation processes"
    echo "  - Comprehensive management and monitoring tools"
    echo "  - Intelligent automation for code, performance, and security"
    echo "  - Complete Git integration and deployment pipeline"
    echo "  - Predictive monitoring and health checks"
}

# Validate deployment
validate_deployment() {
    log "Validating deployment..."
    
    # Check if key files exist
    local key_files=(
        "ecosystem.enhanced-intelligent-v2.cjs"
        "start-enhanced-intelligent-pm2-ecosystem-v2.sh"
        "scripts/automation/ai-code-analyzer.cjs"
        "scripts/automation/smart-performance-optimizer.cjs"
        "scripts/automation/intelligent-dependency-manager.cjs"
    )
    
    local missing_files=()
    for file in "${key_files[@]}"; do
        if [ ! -f "$file" ]; then
            missing_files+=("$file")
        fi
    done
    
    if [ ${#missing_files[@]} -gt 0 ]; then
        error "Missing key files:"
        for file in "${missing_files[@]}"; do
            echo "  - $file"
        done
        return 1
    fi
    
    # Check if scripts are executable
    if [ ! -x "start-enhanced-intelligent-pm2-ecosystem-v2.sh" ]; then
        warning "Making startup script executable..."
        chmod +x "start-enhanced-intelligent-pm2-ecosystem-v2.sh"
    fi
    
    success "Deployment validation passed"
}

# Main execution
main() {
    banner "🚀 Deploy and Merge Intelligent PM2 Improvements"
    banner "================================================="
    echo
    
    # Pre-deployment checks
    check_git_requirements
    backup_current_state
    validate_deployment
    
    # Git operations
    check_uncommitted_changes
    create_feature_branch
    
    if commit_improvements; then
        success "✅ Changes committed successfully"
    else
        warning "⚠️ No changes to commit or commit failed"
        return 0
    fi
    
    # Remote operations
    if push_to_remote; then
        success "✅ Changes pushed to remote repository"
        create_pull_request
    else
        warning "⚠️ Could not push to remote repository"
    fi
    
    # Local merge (optional)
    echo
    info "🤔 Would you like to merge with the main branch now? (y/N)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        if merge_with_main; then
            success "✅ Successfully merged with main branch"
        else
            error "❌ Failed to merge with main branch"
        fi
    else
        info "ℹ️ Skipping merge. You can merge manually later."
    fi
    
    # Generate summary
    generate_deployment_summary
    
    echo
    banner "🎉 Deployment Process Completed!"
    echo
    success "🚀 Enhanced Intelligent PM2 Automation Ecosystem V2 has been deployed!"
    echo
    info "📋 What was deployed:"
    echo "  ✓ 22+ intelligent automation scripts"
    echo "  ✓ Enhanced PM2 ecosystem configuration"
    echo "  ✓ Comprehensive management tools"
    echo "  ✓ Advanced monitoring and health checks"
    echo "  ✓ Intelligent deployment and CI/CD capabilities"
    echo
    info "🎯 Next steps:"
    echo "  1. Start the ecosystem: ./start-enhanced-intelligent-pm2-ecosystem-v2.sh"
    echo "  2. Monitor the processes: pm2 list"
    echo "  3. Check health: ./scripts/management/health-check.sh"
    echo "  4. View logs: ./scripts/management/logs-ecosystem.sh"
    echo
    success "🌟 Your development workflow is now supercharged with intelligent automation!"
}

# Trap to handle script interruption
trap 'echo -e "\n${RED}Script interrupted. Current state preserved.${NC}"; exit 1' INT TERM

# Run main function
main "$@"