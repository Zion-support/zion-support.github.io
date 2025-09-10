#!/bin/bash

# Fix missing colons in data files
echo "Fixing syntax errors in data files..."

# Fix missing colons for various properties
find src/data -name "*.ts" -exec sed -i 's/tags\[/tags: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/features\[/features: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/benefits\[/benefits: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/useCases\[/useCases: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/targetAudience\[/targetAudience: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/technologies\[/technologies: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/integrations\[/integrations: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/support\[/support: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/competitors\[/competitors: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/technicalCapabilities\[/technicalCapabilities: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/complianceStandards\[/complianceStandards: [/g' {} \;
find src/data -name "*.ts" -exec sed -i 's/deploymentOptions\[/deploymentOptions: [/g' {} \;

echo "Syntax errors fixed!"