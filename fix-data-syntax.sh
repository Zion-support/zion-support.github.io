#!/bin/bash

echo "Fixing missing colons in data file..."

# Fix missing colons for various properties
sed -i 's/features\[/features: [/g' src/data/innovativeMicroSaasServices2025.js
sed -i 's/benefits\[/benefits: [/g' src/data/innovativeMicroSaasServices2025.js
sed -i 's/targetAudience\[/targetAudience: [/g' src/data/innovativeMicroSaasServices2025.js
sed -i 's/tags\[/tags: [/g' src/data/innovativeMicroSaasServices2025.js
sed -i 's/competitors\[/competitors: [/g' src/data/innovativeMicroSaasServices2025.js
sed -i 's/integrations\[/integrations: [/g' src/data/innovativeMicroSaasServices2025.js
sed -i 's/useCases\[/useCases: [/g' src/data/innovativeMicroSaasServices2025.js
sed -i 's/compliance\[/compliance: [/g' src/data/innovativeMicroSaasServices2025.js

echo "Fixed missing colons in data file"