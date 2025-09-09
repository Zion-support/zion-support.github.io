#!/bin/bash

# Zion Tech Group - PM2 Intelligent Development Workflow
# Automated development pipeline with smart code quality management

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
LOG_DIR="./logs"
PM2_CONFIG="ecosystem.config.js"
GIT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
AUTO_COMMIT=true
AUTO_PUSH=false
CODE_QUALITY_THRESHOLD=80

echo -e "${BLUE}🚀 Zion Tech Group - PM2 Development Workflow${NC}"
echo "=================================================="

# Function to check git status
check_git_status() {
    if [ ! -d ".git" ]; then
        echo -e "${YELLOW}⚠️  Not a git repository${NC}"
        return 1
    fi
    
    local status=$(git status --porcelain)
    if [ -n "$status" ]; then
        echo -e "${YELLOW}📝 Uncommitted changes detected:${NC}"
        echo "$status"
        return 0
    else
        echo -e "${GREEN}✅ Working directory is clean${NC}"
        return 1
    fi
}

# Function to run code quality checks
run_code_quality_checks() {
    echo -e "${BLUE}🔍 Running code quality checks...${NC}"
    
    local quality_score=0
    local total_checks=0
    
    # TypeScript type checking
    echo "Running TypeScript type checking..."
    if npm run type-check:all > /dev/null 2>&1; then
        echo -e "${GREEN}✅ TypeScript: PASS${NC}"
        quality_score=$((quality_score + 25))
    else
        echo -e "${RED}❌ TypeScript: FAIL${NC}"
    fi
    total_checks=$((total_checks + 1))
    
    # ESLint checking
    echo "Running ESLint..."
    if npm run lint:all > /dev/null 2>&1; then
        echo -e "${GREEN}✅ ESLint: PASS${NC}"
        quality_score=$((quality_score + 25))
    else
        echo -e "${RED}❌ ESLint: FAIL${NC}"
    fi
    total_checks=$((total_checks + 1))
    
    # Build test
    echo "Testing build process..."
    if npm run build > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Build: PASS${NC}"
        quality_score=$((quality_score + 25))
    else
        echo -e "${RED}❌ Build: FAIL${NC}"
    fi
    total_checks=$((total_checks + 1))
    
    # Test coverage (if available)
    if npm run test:coverage > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Tests: PASS${NC}"
        quality_score=$((quality_score + 25))
    else
        echo -e "${YELLOW}⚠️  Tests: SKIP (no test script)${NC}"
    fi
    total_checks=$((total_checks + 1))
    
    local percentage=$((quality_score * 100 / (total_checks * 25)))
    echo -e "\n${CYAN}📊 Code Quality Score: ${percentage}%${NC}"
    
    if [ "$percentage" -lt "$CODE_QUALITY_THRESHOLD" ]; then
        echo -e "${RED}❌ Code quality below threshold (${CODE_QUALITY_THRESHOLD}%)${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ Code quality check passed${NC}"
    return 0
}

# Function to auto-fix common issues
auto_fix_issues() {
    echo -e "${BLUE}🔧 Auto-fixing common issues...${NC}"
    
    # Auto-fix ESLint issues
    if npm run fix:all > /dev/null 2>&1; then
        echo -e "${GREEN}✅ ESLint auto-fix applied${NC}"
    fi
    
    # Format code with Prettier (if available)
    if npx prettier --write "src/**/*.{js,jsx,ts,tsx}" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Code formatting applied${NC}"
    fi
    
    # Remove unused dependencies
    if npx depcheck > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Dependency check completed${NC}"
    fi
    
    echo -e "${GREEN}✅ Auto-fix complete${NC}"
}

# Function to smart commit
smart_commit() {
    if [ "$AUTO_COMMIT" = false ]; then
        return 0
    fi
    
    local changes=$(git status --porcelain)
    if [ -n "$changes" ]; then
        echo -e "${BLUE}📝 Creating smart commit...${NC}"
        
        # Analyze changes to create meaningful commit message
        local message=""
        if echo "$changes" | grep -q "package.json\|package-lock.json"; then
            message="deps: update dependencies"
        elif echo "$changes" | grep -q "\.tsx\?$"; then
            message="feat: update TypeScript components"
        elif echo "$changes" | grep -q "\.jsx\?$"; then
            message="feat: update React components"
        elif echo "$changes" | grep -q "\.css$"; then
            message="style: update styling"
        else
            message="chore: update project files"
        fi
        
        git add .
        git commit -m "$message"
        echo -e "${GREEN}✅ Committed: $message${NC}"
    fi
}

# Function to smart push
smart_push() {
    if [ "$AUTO_PUSH" = false ]; then
        return 0
    fi
    
    echo -e "${BLUE}🚀 Pushing changes...${NC}"
    
    # Check if remote exists
    if git remote -v | grep -q origin; then
        git push origin "$GIT_BRANCH"
        echo -e "${GREEN}✅ Changes pushed to origin/$GIT_BRANCH${NC}"
    else
        echo -e "${YELLOW}⚠️  No remote origin configured${NC}"
    fi
}

# Function to setup development environment
setup_dev_environment() {
    echo -e "${BLUE}🔧 Setting up development environment...${NC}"
    
    # Install dependencies
    echo "Installing dependencies..."
    npm run install:all
    
    # Setup git hooks
    if [ -d ".git" ]; then
        echo "Setting up git hooks..."
        npx husky install 2>/dev/null || echo "Husky not configured"
    fi
    
    # Create development configuration
    if [ ! -f ".env.development" ]; then
        echo "Creating development environment file..."
        cat > .env.development << EOF
# Zion Tech Group - Development Environment
NODE_ENV=development
PORT=3000
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development
REACT_APP_DEBUG=true

# Backend Configuration
BACKEND_PORT=5000
BACKEND_NODE_ENV=development

# Development Features
REACT_APP_ENABLE_HOT_RELOAD=true
REACT_APP_ENABLE_DEBUG_TOOLS=true
EOF
        echo -e "${GREEN}✅ Development environment configured${NC}"
    fi
    
    echo -e "${GREEN}✅ Development environment setup complete${NC}"
}

# Function to run development workflow
run_dev_workflow() {
    echo -e "${BLUE}🔄 Running development workflow...${NC}"
    
    # Check git status
    check_git_status
    
    # Run code quality checks
    if ! run_code_quality_checks; then
        echo -e "${YELLOW}⚠️  Code quality issues detected, attempting auto-fix...${NC}"
        auto_fix_issues
        
        # Re-run quality checks
        if ! run_code_quality_checks; then
            echo -e "${RED}❌ Code quality issues persist after auto-fix${NC}"
            return 1
        fi
    fi
    
    # Smart commit
    smart_commit
    
    # Smart push
    smart_push
    
    echo -e "${GREEN}✅ Development workflow complete${NC}"
}

# Function to run deployment workflow
run_deployment_workflow() {
    echo -e "${BLUE}🚀 Running deployment workflow...${NC}"
    
    # Ensure we're on the right branch
    if [ "$GIT_BRANCH" != "main" ] && [ "$GIT_BRANCH" != "master" ]; then
        echo -e "${YELLOW}⚠️  Not on main/master branch (current: $GIT_BRANCH)${NC}"
        read -p "Continue with deployment? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            return 1
        fi
    fi
    
    # Run quality checks
    if ! run_code_quality_checks; then
        echo -e "${RED}❌ Deployment blocked: code quality issues${NC}"
        return 1
    fi
    
    # Build application
    echo "Building application..."
    if npm run build:hybrid; then
        echo -e "${GREEN}✅ Build successful${NC}"
    else
        echo -e "${RED}❌ Build failed${NC}"
        return 1
    fi
    
    # Deploy with PM2
    echo "Deploying with PM2..."
    if ./scripts/pm2-prod.sh; then
        echo -e "${GREEN}✅ Deployment successful${NC}"
    else
        echo -e "${RED}❌ Deployment failed${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ Deployment workflow complete${NC}"
}

# Function to show workflow status
show_workflow_status() {
    echo -e "${BLUE}📊 Workflow Status${NC}"
    echo "=================="
    
    # Git status
    echo -e "${CYAN}Git Status:${NC}"
    if [ -d ".git" ]; then
        echo "Branch: $GIT_BRANCH"
        echo "Remote: $(git remote get-url origin 2>/dev/null || echo 'Not configured')"
        echo "Last commit: $(git log -1 --format='%h - %s (%cr)' 2>/dev/null || echo 'No commits')"
    else
        echo "Not a git repository"
    fi
    
    # PM2 status
    echo -e "\n${CYAN}PM2 Status:${NC}"
    pm2 list 2>/dev/null || echo "PM2 not running"
    
    # Code quality status
    echo -e "\n${CYAN}Code Quality:${NC}"
    if run_code_quality_checks > /dev/null 2>&1; then
        echo -e "${GREEN}✅ All checks passed${NC}"
    else
        echo -e "${RED}❌ Issues detected${NC}"
    fi
    
    # Environment status
    echo -e "\n${CYAN}Environment:${NC}"
    echo "Node: $(node --version)"
    echo "NPM: $(npm --version)"
    echo "PM2: $(pm2 --version 2>/dev/null || echo 'Not installed')"
}

# Function to interactive development mode
interactive_dev_mode() {
    echo -e "${BLUE}🎮 Interactive Development Mode${NC}"
    echo "================================="
    
    while true; do
        echo ""
        echo "Select an option:"
        echo "1. Run code quality checks"
        echo "2. Auto-fix issues"
        echo "3. Run development workflow"
        echo "4. Run deployment workflow"
        echo "5. Show status"
        echo "6. Setup environment"
        echo "7. Exit"
        echo ""
        read -p "Enter your choice (1-7): " choice
        
        case $choice in
            1)
                run_code_quality_checks
                ;;
            2)
                auto_fix_issues
                ;;
            3)
                run_dev_workflow
                ;;
            4)
                run_deployment_workflow
                ;;
            5)
                show_workflow_status
                ;;
            6)
                setup_dev_environment
                ;;
            7)
                echo -e "${GREEN}👋 Goodbye!${NC}"
                exit 0
                ;;
            *)
                echo -e "${RED}❌ Invalid choice${NC}"
                ;;
        esac
        
        echo ""
        read -p "Press Enter to continue..."
    done
}

# Function to show help
show_help() {
    echo -e "${BLUE}Zion Tech Group - PM2 Workflow Help${NC}"
    echo "=========================================="
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  -d, --dev         Run development workflow"
    echo "  -p, --prod        Run production deployment workflow"
    echo "  -s, --setup       Setup development environment"
    echo "  -q, --quality     Run code quality checks"
    echo "  -f, --fix         Auto-fix common issues"
    echo "  -i, --interactive Interactive development mode"
    echo "  -t, --status      Show workflow status"
    echo "  --help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 --dev          # Run development workflow"
    echo "  $0 --prod         # Run production deployment"
    echo "  $0 --interactive  # Start interactive mode"
}

# Main execution
main() {
    # Check if we're in a git repository
    if [ ! -d ".git" ]; then
        echo -e "${YELLOW}⚠️  Not in a git repository${NC}"
        echo "Initializing git repository..."
        git init
        git add .
        git commit -m "Initial commit"
        echo -e "${GREEN}✅ Git repository initialized${NC}"
    fi
    
    # Parse command line arguments
    case "${1:-}" in
        -d|--dev)
            run_dev_workflow
            ;;
        -p|--prod)
            run_deployment_workflow
            ;;
        -s|--setup)
            setup_dev_environment
            ;;
        -q|--quality)
            run_code_quality_checks
            ;;
        -f|--fix)
            auto_fix_issues
            ;;
        -i|--interactive)
            interactive_dev_mode
            ;;
        -t|--status)
            show_workflow_status
            ;;
        --help|-h)
            show_help
            ;;
        *)
            echo -e "${BLUE}🚀 Zion Tech Group - PM2 Workflow${NC}"
            echo "=========================================="
            echo ""
            echo -e "${YELLOW}Use '$0 --help' for available options${NC}"
            echo ""
            echo "Quick start:"
            echo "  $0 --setup      # Setup development environment"
            echo "  $0 --dev        # Run development workflow"
            echo "  $0 --interactive # Start interactive mode"
            ;;
    esac
}

# Run main function
main "$@"