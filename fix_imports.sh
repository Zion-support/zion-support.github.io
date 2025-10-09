#!/bin/bash

echo "Fixing missing imports..."

# Fix ai-data-analytics page
echo "Fixing ai-data-analytics page..."
sed -i 's/import { CheckCircle, Database } from '\''lucide-react'\'';/import { CheckCircle, Database, Brain } from '\''lucide-react'\'';/' /workspace/app/ai-data-analytics/page.tsx

# Fix docs page - remove problematic imports
echo "Fixing docs page..."
sed -i '/import.*auth/d' /workspace/app/docs/page.tsx
sed -i '/import.*firebase/d' /workspace/app/docs/page.tsx

echo "Fixed missing imports"
