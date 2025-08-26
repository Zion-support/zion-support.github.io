#!/bin/bash

# Create backup directory for all problematic pages
mkdir -p src/pages/problematic-pages-backup

echo "Moving all problematic pages to backup directory..."

# Move all the problematic pages that are causing build errors
mv src/pages/pricing-enhanced-2026.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "pricing-enhanced-2026.tsx not found"
mv src/pages/revolutionary-2025-pricing.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2025-pricing.tsx not found"
mv src/pages/revolutionary-2025-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2025-services-showcase.tsx not found"
mv src/pages/revolutionary-2026-services-showcase-v4.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2026-services-showcase-v4.tsx not found"
mv src/pages/revolutionary-2026-services.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2026-services.tsx not found"
mv src/pages/revolutionary-2027-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2027-services-showcase.tsx not found"
mv src/pages/2026-services-showcase-enhanced.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-services-showcase-enhanced.tsx not found"
mv src/pages/2026-services-showcase-v4.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-services-showcase-v4.tsx not found"
mv src/pages/2026-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-services-showcase.tsx not found"
mv src/pages/2026-ultimate-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-ultimate-services-showcase.tsx not found"

# Also move the old App.tsx since it's using React Router
mv src/App.tsx src/App.tsx.backup 2>/dev/null || echo "App.tsx not found"

echo "All problematic pages moved to backup directory."
echo "You can restore them later by moving them back from src/pages/problematic-pages-backup/"