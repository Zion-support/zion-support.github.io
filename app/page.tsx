import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// Import working components only
import NewContent2025UltimateShowcaseBanner from '../components/NewContent2025UltimateShowcaseBanner';
import RevolutionaryContent2025Showcase from '../components/RevolutionaryContent2025Showcase';
import UltimateContentDiscoveryWidget2025 from '../components/UltimateContentDiscoveryWidget2025';


export default function HomePage() {
  return (
    <div>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions | Neural Superintelligence Breakthrough"
        description="Transform your business with cutting-edge AI, neural superintelligence, and micro SaaS solutions. Expert consulting and implementation services with proven 2,400% ROI results."
        keywords="AI automation, neural superintelligence, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation, AI ROI, quantum AI, AI implementation, business automation, AI consulting, consciousness AI"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
        {/* NEW CONTENT 2025 ULTIMATE SHOWCASE BANNER - NEWEST FEATURED */}
        <NewContent2025UltimateShowcaseBanner />
        
        {/* REVOLUTIONARY CONTENT 2025 SHOWCASE - NEWEST FEATURED */}
        <RevolutionaryContent2025Showcase />
        
        {/* ULTIMATE CONTENT DISCOVERY WIDGET 2025 - NEWEST FEATURED */}
        <UltimateContentDiscoveryWidget2025 />
      </div>
    </div>
  );
}
