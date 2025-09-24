    # Test automation scripts
    test_automation_scripts() {
        log "Testing automation scripts..."
        
        local scripts=(
            "automation/health-check.sh"
            "automation/automation-controller.sh"
            "scripts/automation/project-health-monitor.cjs"
            "scripts/automation/typescript-syntax-fixer.cjs"
            "scripts/automation/dependency-manager.cjs"
            "scripts/automation/automation-dashboard.cjs"
        )
        
        local success_count=0
        local total_count=${#scripts[@]}
        
        for script in "${scripts[@]}"; do
            if [ -f "$PROJECT_ROOT/$script" ]; then
                if [ -r "$PROJECT_ROOT/$script" ]; then
                    log "✓ $script: EXISTS and READABLE" "INFO"
                    ((success_count++))
                else
                    log "✗ $script: EXISTS but NOT READABLE" "ERROR"
                fi
            else
                log "✗ $script: NOT FOUND" "ERROR"
            fi
        done
        
        log "Automation Scripts: $success_count/$total_count accessible" "INFO"
        
        if [ "$success_count" -eq "$total_count" ]; then
            return 0
        else
            return 1
        fi
    }
