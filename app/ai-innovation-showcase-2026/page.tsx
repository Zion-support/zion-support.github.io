import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import AIInnovationShowcase2026 from '../../components/AIInnovationShowcase2026';
import AIInnovationShowcase2026PromotionBanner from '../../components/AIInnovationShowcase2026PromotionBanner';
import InteractiveTechDemo2026 from '../../components/InteractiveTechDemo2026';
import AdvancedTechTrends2026 from '../../components/AdvancedTechTrends2026';
import RevolutionaryContentBanner2026 from '../../components/RevolutionaryContentBanner2026';

export default function AIInnovationShowcase2026Page() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI Innovation Showcase 2026 - Revolutionary Technology Solutions | Zion Tech Group"
        description="Discover the latest AI innovations and breakthrough technologies for 2026. Explore interactive demos, advanced tech trends, and revolutionary solutions that will transform your business."
        keywords="AI innovation 2026, breakthrough technology, interactive demos, advanced tech trends, revolutionary solutions, AI showcase, technology innovation"
        url="/ai-innovation-showcase-2026"
      />
      
      <div className="min-h-screen bg-white">
        {/* Promotion Banner */}
        <AIInnovationShowcase2026PromotionBanner />
        
        {/* Main Showcase */}
        <AIInnovationShowcase2026 />
        
        {/* Interactive Tech Demo */}
        <InteractiveTechDemo2026 />
        
        {/* Advanced Tech Trends */}
        <AdvancedTechTrends2026 />
        
        {/* Revolutionary Content Banner */}
        <RevolutionaryContentBanner2026 />
      </div>
    </ErrorBoundary>
  );
}