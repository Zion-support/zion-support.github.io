#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Cleanup script to remove excessive banner components and optimize the codebase
 */

const COMPONENTS_DIR = path.join(__dirname, '../components');
const BACKUP_DIR = path.join(__dirname, '../components-backup');

// Create backup directory if it doesn't exist
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// List of banner components to remove (excessive/redundant ones)
const componentsToRemove = [
  // AI 2026 banners (many are redundant)
  'AI2026BreakthroughBanner.tsx',
  'AI2026ContentShowcaseBanner.tsx',
  'AI2026FutureTrendsBanner.tsx',
  'AI2026InnovationShowcaseBanner.tsx',
  'AI2026RevolutionaryAutonomousSystemsBanner.tsx',
  'AI2026RevolutionaryBreakthroughBanner.tsx',
  'AI2026TrendsShowcaseBanner.tsx',
  'AI2026UltimateAutonomousEnterpriseBanner.tsx',
  
  // AI 2027 banners (many are redundant)
  'AI2027AutonomousEnterpriseBanner.tsx',
  'AI2027BreakthroughBanner.tsx',
  'AI2027RevolutionaryBreakthroughBanner.tsx',
  'AI2027RevolutionaryBreakthroughShowcaseBanner.tsx',
  'AI2027UltimateBreakthroughBanner.tsx',
  
  // AI 2028 banners (many are redundant)
  'AI2028AutonomousEnterpriseRevolutionaryBanner.tsx',
  'AI2028ContentShowcaseBanner.tsx',
  'AI2028RevolutionaryBreakthroughBanner.tsx',
  
  // Monthly banners (many are redundant)
  'April2026MegaBreakthroughBanner.tsx',
  'April2026RevolutionaryBreakthroughBanner.tsx',
  'April2026UltimateBreakthroughBanner.tsx',
  'August2026MegaBreakthroughBanner.tsx',
  'August2026RevolutionaryBreakthroughBanner.tsx',
  'December2026MegaBreakthroughBanner.tsx',
  'December2026UltimateBreakthroughBanner.tsx',
  'February2026MegaBreakthroughBanner.tsx',
  'February2026RevolutionaryBreakthroughBanner.tsx',
  'July2026MegaBreakthroughBanner.tsx',
  'June2026UltimateBreakthroughBanner.tsx',
  'March2026MegaBreakthroughBanner.tsx',
  'May2026RevolutionaryBreakthroughBanner.tsx',
  
  // Other redundant banners
  'AutonomousEnterpriseBreakthroughBanner.tsx',
  'AutonomousEnterpriseOperationsBanner.tsx',
  'AutonomousEnterpriseSystemsBanner.tsx',
  'AutonomousEnterpriseTransformation2026Banner.tsx',
  'AutonomousIntelligenceRevolutionBanner.tsx',
  'AutonomousOperations2026Banner.tsx',
  'EnterpriseAutomationBanner.tsx',
  'EnterpriseSolutionsBanner.tsx',
  'EnterpriseTransformation2027Banner.tsx',
];

console.log('🧹 Starting component cleanup...');

let removedCount = 0;
let errorCount = 0;

componentsToRemove.forEach(componentName => {
  const componentPath = path.join(COMPONENTS_DIR, componentName);
  const backupPath = path.join(BACKUP_DIR, componentName);
  
  try {
    if (fs.existsSync(componentPath)) {
      // Move to backup instead of deleting
      fs.copyFileSync(componentPath, backupPath);
      fs.unlinkSync(componentPath);
      console.log(`✅ Moved ${componentName} to backup`);
      removedCount++;
    } else {
      console.log(`⚠️  ${componentName} not found`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${componentName}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Cleanup Summary:`);
console.log(`   Components moved to backup: ${removedCount}`);
console.log(`   Errors encountered: ${errorCount}`);
console.log(`   Backup location: ${BACKUP_DIR}`);

// Clean up empty directories
console.log('\n🧹 Cleaning up empty directories...');
try {
  const dirs = fs.readdirSync(COMPONENTS_DIR);
  dirs.forEach(dir => {
    const dirPath = path.join(COMPONENTS_DIR, dir);
    if (fs.statSync(dirPath).isDirectory()) {
      const files = fs.readdirSync(dirPath);
      if (files.length === 0) {
        fs.rmdirSync(dirPath);
        console.log(`✅ Removed empty directory: ${dir}`);
      }
    }
  });
} catch (error) {
  console.error('❌ Error cleaning directories:', error.message);
}

console.log('\n🎉 Cleanup completed!');
console.log('💡 Next steps:');
console.log('   1. Update imports in page.tsx to use simplified components');
console.log('   2. Test the application to ensure everything works');
console.log('   3. Run npm run build to verify the build process');