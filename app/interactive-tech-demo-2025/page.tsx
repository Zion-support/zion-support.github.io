import React from 'react';
import SEO from '../../../components/SEO';
import InteractiveTechDemo2025 from '../../../components/InteractiveTechDemo2025';
import AIInnovationShowcase2025 from '../../../components/AIInnovationShowcase2025';

export default function InteractiveTechDemo2025Page() {
  return (
    <>
      <SEO
        title="Interactive Tech Demo 2025 - Experience Technology in Action"
        description="Get hands-on with our cutting-edge AI and automation solutions through interactive demonstrations and real-time simulations."
        keywords="interactive demo, tech demo, AI demo, automation demo, technology showcase, hands-on demo"
        url="/interactive-tech-demo-2025"
      />
      
      <div className="min-h-screen bg-white">
        <InteractiveTechDemo2025 />
        <AIInnovationShowcase2025 />
      </div>
    </>
  );
}