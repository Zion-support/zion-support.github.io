import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import InteractiveTechDemo2026 from '../../components/InteractiveTechDemo2026';
import InteractiveTechDemo2026PromotionBanner from '../../components/InteractiveTechDemo2026PromotionBanner';
import AdvancedTechTrends2026 from '../../components/AdvancedTechTrends2026';
import RevolutionaryContentBanner2026 from '../../components/RevolutionaryContentBanner2026';

export default function InteractiveTechDemo2026Page() {
  return (
    <ErrorBoundary>
      <SEO
        title="Interactive Tech Demo 2026 - Experience Future Technology | Zion Tech Group"
        description="Experience cutting-edge technology through our interactive demos. Test AI solutions, explore automation tools, and see the future of business technology in action."
        keywords="interactive tech demo, AI demo, technology showcase, automation demo, future technology, tech trends 2026"
        url="/interactive-tech-demo-2026"
      />
      
      <div className="min-h-screen bg-white">
        {/* Promotion Banner */}
        <InteractiveTechDemo2026PromotionBanner />
        
        {/* Main Demo */}
        <InteractiveTechDemo2026 />
        
        {/* Advanced Tech Trends */}
        <AdvancedTechTrends2026 />
        
        {/* Revolutionary Content Banner */}
        <RevolutionaryContentBanner2026 />
      </div>
    </ErrorBoundary>
  );
}