import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

// Import new advanced AI components
import AdvancedContentRecommendationEngine from '../components/AdvancedContentRecommendationEngine';
import RealTimePerformanceDashboard from '../components/RealTimePerformanceDashboard';
import IntelligentSearchEngine from '../components/IntelligentSearchEngine';
import AdvancedAIAssistant from '../components/AdvancedAIAssistant';
import BusinessIntelligenceDashboard from '../components/BusinessIntelligenceDashboard';
import AdvancedSecurityMonitor from '../components/AdvancedSecurityMonitor';
import AdvancedAnalyticsEngine from '../components/AdvancedAnalyticsEngine';
import AutomationWorkflowEngine from '../components/AutomationWorkflowEngine';
import EnterpriseDataManagement from '../components/EnterpriseDataManagement';
import APIManagementSystem from '../components/APIManagementSystem';

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
import EnhancedContentPromotionBanner from '../components/EnhancedContentPromotionBanner';
import NewContent2026Showcase from '../components/NewContent2026Showcase';
import FeaturedContentShowcase2026 from '../components/FeaturedContentShowcase2026';
import EnhancedContentPromotionBanner2026 from '../components/EnhancedContentPromotionBanner2026';
import ComprehensiveContentShowcase2026 from '../components/ComprehensiveContentShowcase2026';
import RevolutionaryContent2025Banner from '../components/RevolutionaryContent2025Banner';
// Import new 2026 promotional components
import UltimatePromotionBanner2026 from '../components/UltimatePromotionBanner2026';
import SuccessMetricsShowcase2026 from '../components/SuccessMetricsShowcase2026';
// Import new 2025 revolutionary content components
import RevolutionaryContentShowcase2025 from '../components/RevolutionaryContentShowcase2025';
import RevolutionaryContent2026Banner from '../components/RevolutionaryContent2026Banner';

// Import additional promotional components
import AI2025BreakthroughBanner from '../components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';
import NewContent2025UltimateShowcaseBanner from '../components/NewContent2025UltimateShowcaseBanner';
import QuantumAI2026BreakthroughBanner from '../components/QuantumAI2026BreakthroughBanner';
import RevolutionaryContentBanner2025 from '../components/RevolutionaryContentBanner2025';

// Import new 2025 breakthrough promotional components
import QuantumRevolution2025Banner from '../components/QuantumRevolution2025Banner';
import GenerativeAI2025Banner from '../components/GenerativeAI2025Banner';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
