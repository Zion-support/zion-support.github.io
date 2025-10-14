#!/usr/bin/env python3
import os
import subprocess
import sys

def run_eslint_fix():
    """Run ESLint with auto-fix to remove unused imports"""
    try:
        print("Running ESLint auto-fix to remove unused imports...")
        result = subprocess.run([
            'pnpm', 'run', 'lint:fix'
        ], capture_output=True, text=True, cwd='/workspace')
        
        print("ESLint output:")
        print(result.stdout)
        if result.stderr:
            print("ESLint errors:")
            print(result.stderr)
        
        return result.returncode == 0
    except Exception as e:
        print(f"Error running ESLint: {e}")
        return False

def main():
    print("Fixing all lint errors...")
    
    # Run ESLint auto-fix multiple times to catch all issues
    for i in range(3):
        print(f"\n--- ESLint fix attempt {i+1} ---")
        success = run_eslint_fix()
        if success:
            print("All lint errors fixed!")
            break
        else:
            print(f"Attempt {i+1} completed with some remaining issues")
    
    # Check final status
    print("\n--- Final lint check ---")
    result = subprocess.run([
        'pnpm', 'run', 'lint'
    ], capture_output=True, text=True, cwd='/workspace')
    
    if result.returncode == 0:
        print("✅ All lint errors have been resolved!")
    else:
        print("❌ Some lint errors remain:")
        print(result.stdout)
        print(result.stderr)

if __name__ == "__main__":
    main()