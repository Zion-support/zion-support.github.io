#!/bin/bash

# Create backup directory for problematic pages
mkdir -p src/pages/problematic-pages-backup

echo "Moving problematic pages to backup directory..."

# Move all the problematic pages that are causing build errors
mv src/pages/2026-innovations-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-innovations-showcase.tsx not found"
mv src/pages/2026-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-services-showcase.tsx not found"
mv src/pages/2026-services-showcase-enhanced.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-services-showcase-enhanced.tsx not found"
mv src/pages/2026-services-showcase-v4.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-services-showcase-v4.tsx not found"
mv src/pages/2026-ultimate-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "2026-ultimate-services-showcase.tsx not found"
mv src/pages/autonomous-manufacturing.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "autonomous-manufacturing.tsx not found"
mv src/pages/pricing-enhanced-2026.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "pricing-enhanced-2026.tsx not found"
mv src/pages/quantum-cybersecurity.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "quantum-cybersecurity.tsx not found"
mv src/pages/quantum-logistics.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "quantum-logistics.tsx not found"
mv src/pages/revolutionary-2025-pricing.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2025-pricing.tsx not found"
mv src/pages/revolutionary-2025-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2025-services-showcase.tsx not found"
mv src/pages/revolutionary-2026-services.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2026-services.tsx not found"
mv src/pages/revolutionary-2026-services-showcase-v4.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2026-services-showcase-v4.tsx not found"
mv src/pages/revolutionary-2027-services-showcase.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "revolutionary-2027-services-showcase.tsx not found"
mv src/pages/services-2024.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "services-2024.tsx not found"
mv src/pages/solutions.tsx src/pages/problematic-pages-backup/ 2>/dev/null || echo "solutions.tsx not found"

echo "Problematic pages moved to src/pages/problematic-pages-backup/"
echo "You can restore them later by moving them back when the data issues are resolved."