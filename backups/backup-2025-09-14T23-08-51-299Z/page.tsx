import React from 'react';
import { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

// Import new advanced enhancement components
import AdvancedPerformanceOptimizer from '../components/AdvancedPerformanceOptimizer';
import AIContentGenerator from '../components/AIContentGenerator';
import AdvancedAnalyticsDashboard from '../components/AdvancedAnalyticsDashboard';
import EnhancedSEO from '../components/EnhancedSEO';
import PerformanceMonitor from '../components/PerformanceMonitor';
import EnhancedLoadingSpinner from '../components/EnhancedLoadingSpinner';
import EnhancedErrorBoundary from '../components/EnhancedErrorBoundary';
import InteractiveAICalculator from '../components/InteractiveAICalculator';

// Import new 2026 AI breakthrough promotional components
import AI2026RevolutionaryBreakthroughUltimatePromotionBanner from '../components/AI2026RevolutionaryBreakthroughUltimatePromotionBanner';
import AI2026GlobalTransformation800ROISuccessBanner from '../components/AI2026GlobalTransformation800ROISuccessBanner';
import AI2026ImplementationFrameworkUltimatePromotionBanner from '../components/AI2026ImplementationFrameworkUltimatePromotionBanner';

// Import existing promotional banners
import RevolutionaryContent2026Banner from '../components/RevolutionaryContent2026Banner';
import FeaturedContentShowcase2026 from '../components/FeaturedContentShowcase2026';

// Import working components only
import NewContent2025UltimateShowcaseBanner from '../components/NewContent2025UltimateShowcaseBanner';
import RevolutionaryContent2025Showcase from '../components/RevolutionaryContent2025Showcase';
import UltimateContentDiscoveryWidget2025 from '../components/UltimateContentDiscoveryWidget2025';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));
const PerformanceMetrics = lazy(() => import('../components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));

// Import key promotional components
import NewContentPromotionBanner from '../components/NewContentPromotionBanner';
import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';
import ComprehensiveSolutionsBanner2025 from '../components/ComprehensiveSolutionsBanner2025';
import NewServicesShowcase2025 from '../components/NewServicesShowcase2025';
import EnhancedContentPromotionBanner2026 from '../components/EnhancedContentPromotionBanner2026';
import ComprehensiveContentShowcase2026 from '../components/ComprehensiveContentShowcase2026';
import RevolutionaryContent2025Banner from '../components/RevolutionaryContent2025Banner';
import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';
import UltimateContent2025PromotionBanner from '../components/UltimateContent2025PromotionBanner';
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';

// Import comprehensive merged content banner
import ComprehensiveContentMerged2025Banner from '../components/ComprehensiveContentMerged2025Banner';

// Import new 2026 promotional components
import UltimatePromotionBanner2026 from '../components/UltimatePromotionBanner2026';
import UltimateContentShowcase2026 from '../components/UltimateContentShowcase2026';
import SuccessMetricsShowcase2026 from '../components/SuccessMetricsShowcase2026';

// Import new ultimate breakthrough promotional components
import NewContent2025UltimateBreakthroughBanner from './components/NewContent2025UltimateBreakthroughBanner';
import UltimateContentShowcase2025Banner from './components/UltimateContentShowcase2025Banner';
import UltimateBreakthroughContentShowcase2025 from './components/UltimateBreakthroughContentShowcase2025';

// Import new AI 2026 Revolution components
import UltimateAI2026RevolutionBanner from '../components/UltimateAI2026RevolutionBanner';
import QuantumNeuralFusion2026Banner from '../components/QuantumNeuralFusion2026Banner';
import AutonomousBusinessEcosystem2026Banner from '../components/AutonomousBusinessEcosystem2026Banner';
import NewContentPromotionBanner2026 from '../components/NewContentPromotionBanner2026';

// Import new content revolution components
import AI2025ContentRevolutionUltimateBanner from '../components/AI2025ContentRevolutionUltimateBanner';
import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';
import InteractiveContentDiscoveryWidget2025 from '../components/InteractiveContentDiscoveryWidget2025';

// Import new AI Content Revolution promotional components
import AIContentRevolution2025Banner from '../components/AIContentRevolution2025Banner';
import AIContentRevolutionShowcase2025 from '../components/AIContentRevolutionShowcase2025';

// Import new Quantum-Neural Fusion promotional components
import QuantumNeuralFusionRevolutionBanner from '../components/QuantumNeuralFusionRevolutionBanner';
import QuantumNeuralFusionShowcase from '../components/QuantumNeuralFusionShowcase';

// Import new Ultimate Autonomous Business Revolution promotional components
import UltimateAutonomousBusinessRevolutionBanner from '../components/UltimateAutonomousBusinessRevolutionBanner';
import UltimateAutonomousBusinessShowcase from '../components/UltimateAutonomousBusinessShowcase';

// Import new Ultimate AI Revolution promotional components
import AI2025UltimateRevolutionBanner from '../components/AI2025UltimateRevolutionBanner';
import UltimateAIRevolutionShowcase from '../components/UltimateAIRevolutionShowcase';

// Import new AI 2026 Future Predictions promotional components
import AI2026FuturePredictionsUltimateBreakthroughBanner from '../components/AI2026FuturePredictionsUltimateBreakthroughBanner';

// Import new Ultimate Digital Transformation promotional components
import UltimateDigitalTransformation2025Banner from '../components/UltimateDigitalTransformation2025Banner';
import UltimateDigitalTransformationShowcase2025 from '../components/UltimateDigitalTransformationShowcase2025';

// Import new Ultimate Enterprise Transformation components
import AI2025UltimateEnterpriseTransformationBanner from '../components/AI2025UltimateEnterpriseTransformationBanner';
import UltimateEnterpriseTransformationShowcase from '../components/UltimateEnterpriseTransformationShowcase';
// Import new AI 2025 Ultimate Breakthrough Revolution components
import AI2025UltimateBreakthroughRevolutionBanner from './components/AI2025UltimateBreakthroughRevolutionBanner';

// Import additional promotional components
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import AI2025UltimateBreakthroughBanner from '../components/AI2025UltimateBreakthroughBanner';

// Import new 2025 breakthrough promotional components
import QuantumAI2025BreakthroughPromotionBanner from '../components/QuantumAI2025BreakthroughPromotionBanner';
import AutonomousBusinessOperationsPromotionBanner from '../components/AutonomousBusinessOperationsPromotionBanner';
import AI1000ROISuccessStoryBanner from '../components/AI1000ROISuccessStoryBanner';

export default function HomePage() {
  return (
    <EnhancedErrorBoundary>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800'>
        <EnhancedSEO 
          title="AI-Powered Business Solutions - 2026 Revolutionary Breakthrough"
          description="Discover the ultimate AI-powered business solutions with 800% ROI success stories. Revolutionary breakthrough technology for 2026."
          keywords={['AI', 'business solutions', 'ROI', '2026', 'breakthrough', 'revolutionary']}
        />
        
        <Suspense fallback={<EnhancedLoadingSpinner variant="fullscreen" />}>
          {/* Advanced Performance Monitoring */}
          <PerformanceMonitor />
          
          {/* AI 2026 Revolutionary Breakthrough Ultimate Promotion Banner - NEW */}
          <AI2026RevolutionaryBreakthroughUltimatePromotionBanner />
          
          {/* AI 2026 Global Transformation 800% ROI Success Banner - NEW */}
          <AI2026GlobalTransformation800ROISuccessBanner />
          
          {/* AI 2026 Implementation Framework Ultimate Promotion Banner - NEW */}
          <AI2026ImplementationFrameworkUltimatePromotionBanner />
          
          {/* Advanced Performance Optimizer */}
          <AdvancedPerformanceOptimizer />
          
          {/* AI Content Generator */}
          <AIContentGenerator />
          
          {/* Advanced Analytics Dashboard */}
          <AdvancedAnalyticsDashboard />
          
          {/* Interactive AI Calculator */}
          <InteractiveAICalculator />
          
          {/* AI 2025 Ultimate Breakthrough Banner - NEW */}
          <AI2025UltimateBreakthroughBanner />
          
          {/* Revolutionary Content 2025 Banner */}
          <RevolutionaryContent2025Banner />
          
          {/* AI 2025 Breakthrough Banner */}
          <AI2025BreakthroughBanner />
          
          {/* New Content 2025 Promotion Banner */}
          <NewContent2025PromotionBanner />
          
          {/* Latest Content Showcase 2025 */}
          <LatestContentShowcase2025 />
          
          {/* Quantum AI 2025 Breakthrough Promotion Banner - NEW */}
          <QuantumAI2025BreakthroughPromotionBanner />
          
          {/* Autonomous Business Operations Promotion Banner - NEW */}
          <AutonomousBusinessOperationsPromotionBanner />
          
          {/* AI 1000% ROI Success Story Banner - NEW */}
          <AI1000ROISuccessStoryBanner />
          
          {/* Content Promotion Banners */}
          <UltimateContentShowcase2025 />
          
          <RevolutionaryContent2026Banner />
          <FeaturedContentShowcase2026 />
          <EnhancedContentPromotionBanner2026 />
          <ComprehensiveContentShowcase2026 />
        </Suspense>
      </div>
    </EnhancedErrorBoundary>
  );
}
