#!/bin/bash

echo "🔧 Fixing remaining build issues..."

# Fix duplicate imports
find /workspace -name "*.tsx" -exec sed -i 's/ArrowRight, Brain, Zap, TrendingUp, Award, ArrowRight, Brain/ArrowRight, Brain, Zap, TrendingUp, Award/g' {} \;

# Fix other common duplicate patterns
find /workspace -name "*.tsx" -exec sed -i 's/import { \([^}]*\) } from '\''lucide-react'\'';/\1/' {} \; -exec sed -i 's/\([^,]*\), \1/\1/g' {} \;

echo "✅ Remaining issues fixed!"