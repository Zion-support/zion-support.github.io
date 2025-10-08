#!/usr/bin/env python3
import re

# Fix App.tsx logger issues
with open('app/App.tsx', 'r') as f:
    content = f.read()

# Fix logger calls
content = content.replace(
    "logger.lifecycle('initialized', 'App')",
    "logger.info('App initialized')"
)
content = content.replace(
    "logger.lifecycle('performance monitoring initialized', 'App')",
    "logger.info('Performance monitoring initialized')"
)

# Fix other logger issues
content = re.sub(
    r"logger\.info\('🚀[^']+', 'App'\)",
    "logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring')",
    content
)

content = re.sub(
    r"logger\.error\('Application Error', 'ErrorBoundary', \{[^}]+\}\)",
    "logger.error(new Error('Application Error'))",
    content
)

content = re.sub(
    r"logger\.performance\([^)]+\)",
    "logger.info('Performance Metrics')",
    content
)

with open('app/App.tsx', 'w') as f:
    f.write(content)

print("Fixed App.tsx")
