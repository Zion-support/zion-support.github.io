#!/bin/bash

# Fix ai-social-media-scheduler
echo "Fixing ai-social-media-scheduler..."
sed -i 's/<\/div>\s*<h3 className="text-lg font-semibold text-gray-900 mb-2">3x More Engagement<\/h3>/<\/div>\n          <\/div>\n          <div class="text-center p-6">\n            <h3 class="text-lg font-semibold text-gray-900 mb-2">3x More Engagement<\/h3>/' app/services/ai-social-media-scheduler/page.tsx

# Fix devops-automation
echo "Fixing devops-automation..."
sed -i 's/<\/section>\s*<div class="text-center">/<\/section>\n      <\/div>\n      <div class="text-center">/' app/services/devops-automation/page.tsx

# Fix fintech
echo "Fixing fintech..."
sed -i '/^function FinTechCategory/,/^}/d' app/services/fintech/page.tsx

# Fix it-services
echo "Fixing it-services..."
sed -i '/^    <\/div>\s*$/d' app/services/it-services/page.tsx
sed -i '/^  \);\s*$/d' app/services/it-services/page.tsx
sed -i '/^}\s*$/d' app/services/it-services/page.tsx

echo "Fixed remaining syntax issues!"