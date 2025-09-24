#!/usr/bin/env python3
"""
Simple script to resolve merge conflicts by keeping HEAD version
"""
import os
import re
import sys
def resolve_conflicts(file_path):
    """Resolve merge conflicts in a file by keeping HEAD version"""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        # Remove all conflict markers and keep only the HEAD version
        lines = content.split('\n')
        new_lines = []
        skip_until_marker = False
        for line in lines:
                skip_until_marker = False
                continue
            elif '>>>>>>>' in line:
                skip_until_marker = False
                continue
            if not skip_until_marker:
                new_lines.append(line)
        # Write the resolved content
        with open(file_path, 'w') as f:
            f.write('\n'.join(new_lines))
        print(f"✅ Resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"❌ Error resolving conflicts in {file_path}: {e}")
        return False
def main():
    # Files with conflicts
    conflict_files = [
        "./app.disabled/components/ROICalculator.tsx",
        "./app.disabled/components/ScrollReveal.tsx",
        "./app.disabled/components/AI2026AutonomousSystemsBanner.tsx",
        "./app.disabled/components/AI2026QuantumRevolutionBanner.tsx",
        "./app.disabled/components/StructuredData.tsx",
        "./app.disabled/components/AI2026UltimateShowcaseBanner.tsx",
        "./app.disabled/components/RevolutionaryAIContent2026Banner.tsx",
        "./app.disabled/components/PerformanceMetrics.tsx",
        "./app.disabled/components/AI2026QuantumRevolutionUltimateBanner.tsx",
        "./app.disabled/layout.tsx"
    ]
    print("🔧 Resolving merge conflicts...")
    resolved_count = 0
    for file_path in conflict_files:
        if os.path.exists(file_path):
            if resolve_conflicts(file_path):
                resolved_count += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    print(f"🎉 Resolved conflicts in {resolved_count} files")
    return resolved_count > 0
if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)