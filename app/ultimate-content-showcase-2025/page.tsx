import React from 'react';
import SEO from '../../../components/SEO';
import UltimateContentShowcase2025 from '../../../components/UltimateContentShowcase2025';
import AIInnovationShowcase2025 from '../../../components/AIInnovationShowcase2025';
import InteractiveTechDemo2025 from '../../../components/InteractiveTechDemo2025';

export default function UltimateContentShowcase2025Page() {
  return (
    <>
      <SEO
        title="Ultimate Content Showcase 2025 - Revolutionary AI & Technology Solutions"
        description="Discover cutting-edge AI innovations, automation tools, and digital transformation strategies that are reshaping industries worldwide in 2025."
        keywords="AI innovation, automation solutions, digital transformation, technology showcase, business solutions, AI tools"
        url="/ultimate-content-showcase-2025"
      />
      
      <div className="min-h-screen bg-white">
        <UltimateContentShowcase2025 />
        <AIInnovationShowcase2025 />
        <InteractiveTechDemo2025 />
      </div>
    </>
  );
}