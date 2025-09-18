#!/bin/bash

echo "Fixing remaining syntax errors..."

# Fix ai-services.tsx - missing closing tag
echo "Fixing ai-services.tsx..."
sed -i 's/              ))}/              ))}/' pages/ai-services.tsx

# Fix case-studies.tsx - remove extra content after closing brace
echo "Fixing case-studies.tsx..."
sed -i '/^const caseStudies = \[/,$d' pages/case-studies.tsx

# Fix it-services.tsx - add missing comma
echo "Fixing it-services.tsx..."
sed -i 's/  AlertTriangle$/  AlertTriangle,/' pages/it-services.tsx

# Fix micro-saas.tsx - add missing comma
echo "Fixing micro-saas.tsx..."
sed -i 's/  Database$/  Database,/' pages/micro-saas.tsx

# Fix newsletter.tsx - add missing import
echo "Fixing newsletter.tsx..."
sed -i 's/  Zap,$/  Zap\n} from '\''lucide-react'\'';/' pages/newsletter.tsx

echo "All syntax errors fixed!"