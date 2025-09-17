import React, { lazy, Suspense } from 'react';
import LazyComponent from './LazyComponent';
// Lazy load heavy components
const EnhancedHeroSection = lazy(() => import('./EnhancedHeroSection'));
const FeaturedContentSection = lazy(() => import('./FeaturedContentSection'));
const DynamicContentCarousel = lazy(() => import('./DynamicContentCarousel'));
const InteractiveTechShowcase = lazy(() => import('./InteractiveTechShowcase'));
const NewContentShowcase2026 = lazy(() => import('./NewContentShowcase2026'));
const TrendingContentSection = lazy(() => import('./TrendingContentSection'));
const RevolutionaryContentShowcase2026 = lazy(() => import('./RevolutionaryContentShowcase2026'));
const RevolutionaryAdvertisingBanner2026 = lazy(() => import('./RevolutionaryAdvertisingBanner2026'));
const AI2026NextGenContentShowcase = lazy(() => import('./AI2026NextGenContentShowcase'));
const AutonomousBusinessOperations2026Showcase = lazy(() => import('./AutonomousBusinessOperations2026Showcase'));
const InteractiveContentDiscovery2026 = lazy(() => import('./InteractiveContentDiscovery2026'));
const QuantumNeuralRevolutionBanner = lazy(() => import('./QuantumNeuralRevolutionBanner'));
const InteractiveTechShowcase2027 = lazy(() => import('./InteractiveTechShowcase2027'));
const QuantumAIBreakthroughBanner = lazy(() => import('./QuantumAIBreakthroughBanner'));
const RevolutionaryTechShowcase2026 = lazy(() => import('./RevolutionaryTechShowcase2026'));
const UltimateContentShowcase2026 = lazy(() => import('./UltimateContentShowcase2026'));
const AdvancedTechAdvertising2027 = lazy(() => import('./AdvancedTechAdvertising2027'));
const UltimateRevolutionaryTechShowcase2027 = lazy(() => import('./UltimateRevolutionaryTechShowcase2027'));
const InterdimensionalTechShowcase2027 = lazy(() => import('./InterdimensionalTechShowcase2027'));
const TranscendentTechnologyShowcase2028 = lazy(() => import('./TranscendentTechnologyShowcase2028'));
const OmniversalTechShowcase2029 = lazy(() => import('./OmniversalTechShowcase2029'));
const InfiniteTechShowcase2030 = lazy(() => import('./InfiniteTechShowcase2030'));
const AbsoluteTechShowcase2031 = lazy(() => import('./AbsoluteTechShowcase2031'));
const NewsletterSignup = lazy(() => import('./NewsletterSignup'));
const RevolutionaryContentBanner2027 = lazy(() => import('./RevolutionaryContentBanner2027'));
const FuturisticTechPromotionBanner2035 = lazy(() => import('./FuturisticTechPromotionBanner2035'));
const QuantumComputingBreakthrough2035 = lazy(() => import('./QuantumComputingBreakthrough2035'));
const NeuralInterfaceRevolution2036 = lazy(() => import('./NeuralInterfaceRevolution2036'));
const InterdimensionalTechShowcase2037 = lazy(() => import('./InterdimensionalTechShowcase2037'));
const PromotionalBanner = lazy(() => import('./PromotionalBanner'));
// Banner components (lighter, can load immediately)
const AdvancedTechBreakthroughBanner = lazy(() => import('./AdvancedTechBreakthroughBanner'));
const InnovationShowcaseBanner = lazy(() => import('./InnovationShowcaseBanner'));
// Homepage sections component
const HomePageSections: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section - Load immediately */}
      <LazyComponent>
        <EnhancedHeroSection />
      </LazyComponent>
      {/* Banner sections - Load with priority */}
      <LazyComponent className="mb-12">
        <AdvancedTechBreakthroughBanner />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <InnovationShowcaseBanner />
      </LazyComponent>
      {/* Core content sections - Lazy load */}
      <LazyComponent className="mb-12">
        <FeaturedContentSection />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <DynamicContentCarousel />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <InteractiveTechShowcase />
      </LazyComponent>
      {/* 2026 Content Showcases - Lazy load */}
      <LazyComponent className="mb-12">
        <NewContentShowcase2026 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <TrendingContentSection />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <RevolutionaryContentShowcase2026 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <RevolutionaryAdvertisingBanner2026 />
      </LazyComponent>
      {/* AI 2026 Content - Lazy load */}
      <LazyComponent className="mb-12">
        <AI2026NextGenContentShowcase />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <AutonomousBusinessOperations2026Showcase />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <InteractiveContentDiscovery2026 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <QuantumNeuralRevolutionBanner />
      </LazyComponent>
      {/* Future Tech Showcases - Lazy load with lower priority */}
      <LazyComponent className="mb-12">
        <InteractiveTechShowcase2027 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <QuantumAIBreakthroughBanner />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <RevolutionaryTechShowcase2026 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <UltimateContentShowcase2026 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <AdvancedTechAdvertising2027 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <UltimateRevolutionaryTechShowcase2027 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <InterdimensionalTechShowcase2027 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <TranscendentTechnologyShowcase2028 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <OmniversalTechShowcase2029 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <InfiniteTechShowcase2030 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <AbsoluteTechShowcase2031 />
      </LazyComponent>
      {/* Newsletter and final sections */}
      <LazyComponent className="mb-12">
        <NewsletterSignup />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <RevolutionaryContentBanner2027 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <FuturisticTechPromotionBanner2035 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <QuantumComputingBreakthrough2035 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <NeuralInterfaceRevolution2036 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <InterdimensionalTechShowcase2037 />
      </LazyComponent>
      <LazyComponent className="mb-12">
        <PromotionalBanner />
      </LazyComponent>
    </div>
  );

};

export default HomePageSections;
