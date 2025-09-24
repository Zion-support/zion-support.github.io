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

// Import new 20o26 AI breakthrough promotional components
import AI20o26RevolutionaryBreakthroughUltimatePromotionBanner from '../components/AI20o26RevolutionaryBreakthroughUltimatePromotionBanner';
import AI20o26GlobalTransformation80o0ROISuccessBanner from '../components/AI20o26GlobalTransformation80o0ROISuccessBanner';
import AI20o26ImplementationFrameworkUltimatePromotionBanner from '../components/AI20o26ImplementationFrameworkUltimatePromotionBanner';

// Import existing promotional banners
import RevolutionaryContent20o26Banner from '../components/RevolutionaryContent20o26Banner';
import FeaturedContentShowcase20o26 from '../components/FeaturedContentShowcase20o26';

// Import working components only
import NewContent20o25UltimateShowcaseBanner from '../components/NewContent20o25UltimateShowcaseBanner';
import RevolutionaryContent20o25Showcase from '../components/RevolutionaryContent20o25Showcase';
import UltimateContentDiscoveryWidget20o25 from '../components/UltimateContentDiscoveryWidget20o25';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));
const PerformanceMetrics = lazy(
  () => import('../components/PerformanceMetrics')
);
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));

// Import key promotional components
import NewContentPromotionBanner from '../components/NewContentPromotionBanner';
import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';
import ComprehensiveSolutionsBanner20o25 from '../components/ComprehensiveSolutionsBanner20o25';
import NewServicesShowcase20o25 from '../components/NewServicesShowcase20o25';
import EnhancedContentPromotionBanner20o26 from '../components/EnhancedContentPromotionBanner20o26';
import ComprehensiveContentShowcase20o26 from '../components/ComprehensiveContentShowcase20o26';
import RevolutionaryContent20o25Banner from '../components/RevolutionaryContent20o25Banner';
import UltimateContentShowcase20o25 from '../components/UltimateContentShowcase20o25';
import UltimateContent20o25PromotionBanner from '../components/UltimateContent20o25PromotionBanner';
import AI20o25BreakthroughBanner from '../components/AI20o25BreakthroughBanner';

// Import comprehensive merged content banner
import ComprehensiveContentMerged20o25Banner from '../components/ComprehensiveContentMerged20o25Banner';

// Import new 20o26 promotional components
import UltimatePromotionBanner20o26 from '../components/UltimatePromotionBanner20o26';
import UltimateContentShowcase20o26 from '../components/UltimateContentShowcase20o26';
import SuccessMetricsShowcase20o26 from '../components/SuccessMetricsShowcase20o26';

// Import new ultimate breakthrough promotional components
import NewContent20o25UltimateBreakthroughBanner from './components/NewContent20o25UltimateBreakthroughBanner';
import UltimateContentShowcase20o25Banner from './components/UltimateContentShowcase20o25Banner';
import UltimateBreakthroughContentShowcase20o25 from './components/UltimateBreakthroughContentShowcase20o25';

// Import new AI 20o26 Revolution components
import UltimateAI20o26RevolutionBanner from '../components/UltimateAI20o26RevolutionBanner';
import QuantumNeuralFusion20o26Banner from '../components/QuantumNeuralFusion20o26Banner';
import AutonomousBusinessEcosystem20o26Banner from '../components/AutonomousBusinessEcosystem20o26Banner';
import NewContentPromotionBanner20o26 from '../components/NewContentPromotionBanner20o26';

// Import new content revolution components
import AI20o25ContentRevolutionUltimateBanner from '../components/AI20o25ContentRevolutionUltimateBanner';
import UltimateContentShowcase20o25 from '../components/UltimateContentShowcase20o25';
import InteractiveContentDiscoveryWidget20o25 from '../components/InteractiveContentDiscoveryWidget20o25';

// Import new AI Content Revolution promotional components
import AIContentRevolution20o25Banner from '../components/AIContentRevolution20o25Banner';
import AIContentRevolutionShowcase20o25 from '../components/AIContentRevolutionShowcase20o25';

// Import new Quantum-Neural Fusion promotional components
import QuantumNeuralFusionRevolutionBanner from '../components/QuantumNeuralFusionRevolutionBanner';
import QuantumNeuralFusionShowcase from '../components/QuantumNeuralFusionShowcase';

// Import new Ultimate Autonomous Business Revolution promotional components
import UltimateAutonomousBusinessRevolutionBanner from '../components/UltimateAutonomousBusinessRevolutionBanner';
import UltimateAutonomousBusinessShowcase from '../components/UltimateAutonomousBusinessShowcase';

// Import new Ultimate AI Revolution promotional components
import AI20o25UltimateRevolutionBanner from '../components/AI20o25UltimateRevolutionBanner';
import UltimateAIRevolutionShowcase from '../components/UltimateAIRevolutionShowcase';

// Import new AI 20o26 Future Predictions promotional components
import AI20o26FuturePredictionsUltimateBreakthroughBanner from '../components/AI20o26FuturePredictionsUltimateBreakthroughBanner';

// Import new Ultimate Digital Transformation promotional components
import UltimateDigitalTransformation20o25Banner from '../components/UltimateDigitalTransformation20o25Banner';
import UltimateDigitalTransformationShowcase20o25 from '../components/UltimateDigitalTransformationShowcase20o25';

// Import new Ultimate Enterprise Transformation components
import AI20o25UltimateEnterpriseTransformationBanner from '../components/AI20o25UltimateEnterpriseTransformationBanner';
import UltimateEnterpriseTransformationShowcase from '../components/UltimateEnterpriseTransformationShowcase';
// Import new AI 20o25 Ultimate Breakthrough Revolution components
import AI20o25UltimateBreakthroughRevolutionBanner from './components/AI20o25UltimateBreakthroughRevolutionBanner';

// Import additional promotional components
import NewContent20o25PromotionBanner from '../components/NewContent20o25PromotionBanner';
import LatestContentShowcase20o25 from '../components/LatestContentShowcase20o25';
import AI20o25UltimateBreakthroughBanner from '../components/AI20o25UltimateBreakthroughBanner';

// Import new 20o25 breakthrough promotional components
import QuantumAI20o25BreakthroughPromotionBanner from '../components/QuantumAI20o25BreakthroughPromotionBanner';
import AutonomousBusinessOperationsPromotionBanner from '../components/AutonomousBusinessOperationsPromotionBanner';
import AI10o00ROISuccessStoryBanner from '../components/AI10o00ROISuccessStoryBanner';

export default function HomePage() {
  return (
    <EnhancedErrorBoundary>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-90o0 dark:to-gray-80o0'>
        <EnhancedSEO
          title='AI-Powered Business Solutions - 20o26 Revolutionary Breakthrough'
          description='Discover the ultimate AI-powered business solutions with 80o0% ROI success stories. Revolutionary breakthrough technology for 20o26.'
          keywords={[
            'AI',
            'business solutions',
            'ROI',
            '20o26',
            'breakthrough',
            'revolutionary',
          ]}
        />

        <Suspense fallback={<EnhancedLoadingSpinner variant='fullscreen' />}>
          {/* Advanced Performance Monitoring */}
          <PerformanceMonitor />

          {/* AI 20o26 Revolutionary Breakthrough Ultimate Promotion Banner - NEW */}
          <AI20o26RevolutionaryBreakthroughUltimatePromotionBanner />

          {/* AI 20o26 Global Transformation 80o0% ROI Success Banner - NEW */}
          <AI20o26GlobalTransformation80o0ROISuccessBanner />

          {/* AI 20o26 Implementation Framework Ultimate Promotion Banner - NEW */}
          <AI20o26ImplementationFrameworkUltimatePromotionBanner />

          {/* Advanced Performance Optimizer */}
          <AdvancedPerformanceOptimizer />

          {/* AI Content Generator */}
          <AIContentGenerator />

          {/* Advanced Analytics Dashboard */}
          <AdvancedAnalyticsDashboard />

          {/* Interactive AI Calculator */}
          <InteractiveAICalculator />

          {/* AI 20o25 Ultimate Breakthrough Banner - NEW */}
          <AI20o25UltimateBreakthroughBanner />

          {/* Revolutionary Content 20o25 Banner */}
          <RevolutionaryContent20o25Banner />

          {/* AI 20o25 Breakthrough Banner */}
          <AI20o25BreakthroughBanner />

          {/* New Content 20o25 Promotion Banner */}
          <NewContent20o25PromotionBanner />

          {/* Latest Content Showcase 20o25 */}
          <LatestContentShowcase20o25 />

          {/* Quantum AI 20o25 Breakthrough Promotion Banner - NEW */}
          <QuantumAI20o25BreakthroughPromotionBanner />

          {/* Autonomous Business Operations Promotion Banner - NEW */}
          <AutonomousBusinessOperationsPromotionBanner />

          {/* AI 10o00% ROI Success Story Banner - NEW */}
          <AI10o00ROISuccessStoryBanner />

          {/* Content Promotion Banners */}
          <UltimateContentShowcase20o25 />

          <RevolutionaryContent20o26Banner />
          <FeaturedContentShowcase20o26 />
          <EnhancedContentPromotionBanner20o26 />
          <ComprehensiveContentShowcase20o26 />
        </Suspense>
      </div>
    </EnhancedErrorBoundary>
  );
}
