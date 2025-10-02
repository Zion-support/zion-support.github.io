#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of banner components to remove (keep only essential ones)
const bannersToRemove = [
  'AI2026BreakthroughInnovationsBanner.tsx',
  'AI2027QuantumConsciousnessSingularityBanner.tsx',
  'AI2027SyntheticConsciousnessRevolutionBanner.tsx',
  'AI2027UltimateConsciousnessBreakthroughBanner.tsx',
  'AIFutureWorkforceBanner2026.tsx',
  'April2026MegaBreakthroughBanner.tsx',
  'August2026TranscendentIntelligenceBanner.tsx',
  'AutonomousAI2026RevolutionBanner.tsx',
  'AutonomousBusinessProcessBanner.tsx',
  'AutonomousEnterprise2027Banner.tsx',
  'AutonomousManufacturingRevolutionBanner.tsx',
  'AutonomyBlueprint2026Banner.tsx',
  'ContentIntelligenceBanner.tsx',
  'December2025ContentShowcaseBanner.tsx',
  'December2025UltimateAutonomousRevolutionBanner.tsx',
  'December2026QuantumConsciousnessFusionBanner.tsx',
  'December2026UltimateSingularityBanner.tsx',
  'FeaturedOctober2026Content.tsx',
  'February2026AutonomousInfrastructureBanner.tsx',
  'February2026MegaBreakthroughBanner.tsx',
  'February2026NewContentMegaBanner.tsx',
  'February2026NextGenAutonomousIntelligenceBanner.tsx',
  'February2026RevolutionaryEdgeComputingBanner.tsx',
  'February2026TranscendentAutomationBanner.tsx',
  'February2026UltimateAutonomousRevolutionBanner.tsx',
  'Fortune500TransformationShowcaseBanner.tsx',
  'InteractiveAI2026Calculator.tsx',
  'InteractiveAIROICalculator.tsx',
  'InteractiveContentShowcase2026.tsx',
  'January2025NewContentShowcaseBanner.tsx',
  'January2025QuantumNeuralRevolutionBanner.tsx',
  'January2026AutonomousBIBanner.tsx',
  'January2026AutonomousOperationsBanner.tsx',
  'January2026ContentShowcaseBanner.tsx',
  'January2026NewContentShowcaseBanner.tsx',
  'January2026NewServicesBanner.tsx',
  'January2026QuantumBreakthroughBanner.tsx',
  'January2026QuantumNeuralBanner.tsx',
  'January2026QuantumNeuralFusionBanner.tsx',
  'January2026RevolutionaryAutonomousBanner.tsx',
  'January2026RevolutionaryBreakthroughBanner.tsx',
  'January2026UltimateAIBreakthroughBanner.tsx',
  'January2026UltimateNeuralRevolutionBanner.tsx',
  'January2027RevolutionaryBreakthroughsBanner.tsx',
  'January2027UniversalConsciousnessBanner.tsx',
  'July2026UltimateAutonomousEnterpriseBanner.tsx',
  'March2026AutonomousEnterpriseBanner.tsx',
  'March2026MegaBreakthroughBanner.tsx',
  'March2026QuantumConsciousnessBanner.tsx',
  'MegaTransformationSuccessBanner.tsx',
  'NeuralOptimizationRevolutionBanner.tsx',
  'NewContent2026MegaBanners.tsx',
  'NewContent2026PromotionalBanner.tsx',
  'NewContent2026RevolutionaryBanners.tsx',
  'NewContent2026ShowcaseBanner.tsx',
  'NewContentDiscoveryHub.tsx',
  'NewContentPromotionalBanner2026.tsx',
  'NewestContent2025Banner.tsx',
  'November2026SyntheticConsciousnessBanner.tsx',
  'October2025AdaptiveLearningBanner.tsx',
  'October2025FreshContentBanner.tsx',
  'October2025RealTimeIntelligenceBanner.tsx',
  'October2026TranscendentAutomationBanner.tsx',
  'OctoberFeaturedContentBanner.tsx',
  'Revolutionary2026ContentMegaBanner.tsx',
  'Revolutionary2029ContentMegaBanner.tsx',
  'RevolutionaryAI2026BreakthroughBanner.tsx',
  'September2025FreshContentBanner.tsx',
  'September2026MegaBreakthroughBanner.tsx',
  'September30NewContent2025Banner.tsx',
  'SyntheticConsciousnessRevolutionBanner.tsx',
  'SyntheticIntelligenceRevolutionBanner.tsx',
  'Ultimate2026BreakthroughBanner.tsx',
  'Ultimate2026ContentShowcase.tsx',
  'Ultimate2030ConsciousnessBanner.tsx',
  'UltimateBusinessIntelligence2025Banner.tsx',
  'UltimateBusinessIntelligenceShowcase2025.tsx'
];

// Components to keep (essential ones)
const componentsToKeep = [
  'UnifiedBannerSystem.tsx',
  'ContentShowcase.tsx',
  'FeaturedServiceCard.tsx',
  'Navigation.tsx',
  'NewServicesHero.tsx',
  'SuccessStory.tsx',
  'UnifiedContentPromotion.tsx',
  'ComprehensiveContentShowcase.tsx'
];

const componentsDir = '/workspace/app/components';

// Function to move files to backup directory
function moveToBackup(filename) {
  const sourcePath = path.join(componentsDir, filename);
  const backupPath = path.join('/workspace/backup-banner-components', filename);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, backupPath);
      console.log(`📦 Moved ${filename} to backup`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Failed to move ${filename}: ${error.message}`);
  }
  return false;
}

// Function to clean up backup files
function cleanupBackupFiles() {
  const backupFiles = [
    'Navigation.tsx.backup.1759394372',
    'Navigation.tsx.backup.1759394381',
    'Navigation.tsx.backup.1759394384',
    'Navigation.tsx.backup.1759396185'
  ];
  
  backupFiles.forEach(filename => {
    const filePath = path.join(componentsDir, filename);
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Removed backup file: ${filename}`);
      }
    } catch (error) {
      console.log(`❌ Failed to remove ${filename}: ${error.message}`);
    }
  });
}

console.log('🧹 Starting bundle cleanup...');

// Move unnecessary banner components to backup
let movedCount = 0;
bannersToRemove.forEach(filename => {
  if (moveToBackup(filename)) {
    movedCount++;
  }
});

// Clean up backup files
cleanupBackupFiles();

console.log(`✅ Bundle cleanup complete!`);
console.log(`📦 Moved ${movedCount} banner components to backup`);
console.log(`🎯 Kept ${componentsToKeep.length} essential components`);

// Create optimized component index
const componentIndex = `// Optimized component exports
export { default as UnifiedBanner } from './UnifiedBannerSystem';
export { default as ContentShowcase } from './ContentShowcase';
export { default as FeaturedServiceCard } from './FeaturedServiceCard';
export { default as Navigation } from './Navigation';
export { default as NewServicesHero } from './NewServicesHero';
export { default as SuccessStory } from './SuccessStory';
export { default as UnifiedContentPromotion } from './UnifiedContentPromotion';
export { default as ComprehensiveContentShowcase } from './ComprehensiveContentShowcase';

// Performance components
export { default as LazyLoader } from './LazyLoader';
export { default as PerformanceMonitor } from './PerformanceMonitor';
export { default as SEOOptimizer } from './SEOOptimizer';
export { default as AccessibilityEnhancer } from './AccessibilityEnhancer';
`;

fs.writeFileSync('/workspace/app/components/index.ts', componentIndex);
console.log('📝 Created optimized component index');