import React from 'react';
import SEO from '../../src/components/SEO';
import NewYear2025PromotionBanner from '../../src/components/NewYear2025PromotionBanner';
import RevolutionaryTechShowcase from '../../src/components/RevolutionaryTechShowcase';
import InteractiveServiceSelector from '../../src/components/InteractiveServiceSelector';

const RevolutionaryTechShowcasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO 
        title="Revolutionary Technology Showcase - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, and autonomous solutions that redefine what's possible in technology. Transform your business with our revolutionary tech stack."
        keywords="AI technology, quantum computing, autonomous systems, edge computing, revolutionary technology, Zion Tech Group"
        canonical="/revolutionary-tech-showcase"
      />
      
      <main>
        {/* Hero Banner */}
        <NewYear2025PromotionBanner />
        
        {/* Technology Showcase */}
        <RevolutionaryTechShowcase />
        
        {/* Interactive Service Selector */}
        <InteractiveServiceSelector />
      </main>
    </div>
  );
};

export default RevolutionaryTechShowcasePage;