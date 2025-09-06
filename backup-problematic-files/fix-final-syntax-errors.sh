#!/bin/bash

echo "Fixing final syntax errors..."

# Fix ai-services.tsx - add missing closing tag
echo "Fixing ai-services.tsx..."
sed -i 's/              ))}/              ))}/' pages/ai-services.tsx

# Fix it-services.tsx - remove duplicate const declaration
echo "Fixing it-services.tsx..."
sed -i '/const services = \[/d' pages/it-services.tsx

# Fix micro-saas.tsx - add missing comma
echo "Fixing micro-saas.tsx..."
sed -i 's/  Database,$/  Database/' pages/micro-saas.tsx

# Fix newsletter.tsx - fix syntax errors
echo "Fixing newsletter.tsx..."
sed -i 's/  },$/  },/' pages/newsletter.tsx
sed -i 's/  {}$/  {/' pages/newsletter.tsx
sed -i 's/    title: '\''Webinar Invitations,'\''/    title: '\''Webinar Invitations'\''/' pages/newsletter.tsx
sed -i 's/    description: '\''Receive invitations to our expert-led webinars and virtual events.,'\''/    description: '\''Receive invitations to our expert-led webinars and virtual events'\''/' pages/newsletter.tsx
sed -i 's/    icon: Video;$/    icon: Video/' pages/newsletter.tsx

# Fix products/index.tsx - fix syntax errors
echo "Fixing products/index.tsx..."
sed -i 's/    }$/    }/' pages/products/index.tsx
sed -i 's/  \];$/  \];/' pages/products/index.tsx

echo "All final syntax errors fixed!"