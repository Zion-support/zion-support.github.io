import React from 'react';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';
import AI2025UltimateTechnologyShowcase from '../../../components/AI2025UltimateTechnologyShowcase';
import InteractiveContentDiscoveryWidget2025 from '../../../components/InteractiveContentDiscoveryWidget2025';
import AI2025UltimateTechnologyShowcaseBanner from '../../../components/AI2025UltimateTechnologyShowcaseBanner';

export default function AI2025UltimateTechnologyShowcasePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI 2025 Ultimate Technology Showcase | Zion Tech Group"
        description="Discover revolutionary AI technologies that will transform industries and reshape the future of human-computer interaction. Explore cutting-edge automation, quantum computing, neural interfaces, and advanced cybersecurity solutions."
        keywords="AI 2025, technology showcase, artificial intelligence, automation, quantum computing, neural interfaces, cybersecurity, innovation, future technology"
        canonicalUrl="https://ziontechgroup.com/ai-2025-ultimate-technology-showcase"
        ogImage="https://ziontechgroup.com/api/og?title=AI%202025%20Ultimate%20Technology%20Showcase&description=Revolutionary%20AI%20technologies%20transforming%20industries"
      />
      
      <div className="min-h-screen">
        {/* Hero Banner */}
        <div className="mb-8">
          <AI2025UltimateTechnologyShowcaseBanner />
        </div>

        {/* Main Showcase */}
        <AI2025UltimateTechnologyShowcase />

        {/* Content Discovery Widget */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <InteractiveContentDiscoveryWidget2025 />
        </div>
      </div>
    </ErrorBoundary>
  );
}