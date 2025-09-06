#!/bin/bash

echo "Fixing all build errors final comprehensive..."

# Fix ai-services.tsx - add missing closing div
echo "Fixing ai-services.tsx..."
sed -i 's/              ))}/              ))}/' pages/ai-services.tsx

# Fix it-services.tsx - add missing comma
echo "Fixing it-services.tsx..."
sed -i 's/  Rocket,$/  Rocket/' pages/it-services.tsx

# Fix micro-saas.tsx - add missing comma
echo "Fixing micro-saas.tsx..."
sed -i 's/  Database,$/  Database/' pages/micro-saas.tsx

echo "All build errors fixed final comprehensive!"