#!/bin/bash

# Clean merge script to add new content without conflicts
set -e

echo "🚀 Starting clean merge process..."

# Add the new files
echo "📁 Adding new files..."
git add src/components/RevolutionaryTech2027Banner.tsx
git add src/pages/AIConsciousnessEvolution2027.tsx
git add src/pages/InterdimensionalComputing2027.tsx
git add src/pages/QuantumRealityControl2027.tsx

# Add imports to App.tsx
echo "📝 Adding imports to App.tsx..."
sed -i '/import InnovationShowcase2026 from/a import RevolutionaryTech2027Banner from '\''./src/components/RevolutionaryTech2027Banner'\'';' App.tsx
sed -i '/import RevolutionaryTech2027Banner from/a import AIConsciousnessEvolution2027 from '\''./src/pages/AIConsciousnessEvolution2027'\'';' App.tsx
sed -i '/import AIConsciousnessEvolution2027 from/a import InterdimensionalComputing2027 from '\''./src/pages/InterdimensionalComputing2027'\'';' App.tsx
sed -i '/import InterdimensionalComputing2027 from/a import QuantumRealityControl2027 from '\''./src/pages/QuantumRealityControl2027'\'';' App.tsx

# Add routes
echo "🛣️ Adding routes..."
# Find the last route and add new ones before it
sed -i '/<Route path="\*" element={/i\          <Route path="/pages/AIConsciousnessEvolution2027" element={<AIConsciousnessEvolution2027 />} />\n          <Route path="/pages/InterdimensionalComputing2027" element={<InterdimensionalComputing2027 />} />\n          <Route path="/pages/QuantumRealityControl2027" element={<QuantumRealityControl2027 />} />' App.tsx

# Add banner to main page
echo "🎨 Adding banner to main page..."
sed -i '/<RevolutionaryAdBanner \/>/a\                \n                {/* Revolutionary Tech 2027 Banner */}\n                <RevolutionaryTech2027Banner />' App.tsx

# Commit changes
echo "💾 Committing changes..."
git add App.tsx
git commit -m "🚀 Add revolutionary 2027 technology content

- Added RevolutionaryTech2027Banner component with 2027 tech showcase
- Added AIConsciousnessEvolution2027 page with consciousness evolution content
- Added InterdimensionalComputing2027 page with interdimensional computing
- Added QuantumRealityControl2027 page with quantum reality control
- Integrated all new content into main App.tsx with proper routes
- Enhanced frontend with cutting-edge 2027 technology advertising"

echo "✅ Clean merge completed successfully!"