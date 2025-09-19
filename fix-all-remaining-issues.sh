#!/bin/bash

echo "Fixing all remaining build issues..."

# Fix ai-services.tsx - remove duplicate benefits array
echo "Fixing ai-services.tsx..."
sed -i '/const benefits = \[/,/^\];$/d' pages/ai-services.tsx

# Fix careers.tsx - fix syntax error
echo "Fixing careers.tsx..."
sed -i 's/const benefits = \[/const benefits = [/' pages/careers.tsx
sed -i 's/  {/  {/' pages/careers.tsx
sed -i 's/  return (/  return (/' pages/careers.tsx

# Fix case-studies.tsx - fix import syntax
echo "Fixing case-studies.tsx..."
sed -i 's/} from '\''lucide-react'\'';/} from '\''lucide-react'\'';/' pages/case-studies.tsx

# Fix contact.tsx - fix JSX structure
echo "Fixing contact.tsx..."
sed -i 's/export default function ContactPage() {/export default function ContactPage() {/' pages/contact.tsx

# Fix cookies.tsx - remove merge conflict markers
echo "Fixing cookies.tsx..."
sed -i '/>>>>>>> cursor\/expand-services-advertise-and-build-project-9473/d' pages/cookies.tsx

echo "All remaining issues fixed!"