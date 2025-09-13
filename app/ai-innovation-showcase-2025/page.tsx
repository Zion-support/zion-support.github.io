import React from 'react';
import SEO from '../../../components/SEO';
import AIInnovationShowcase2025 from '../../../components/AIInnovationShowcase2025';
import InteractiveTechDemo2025 from '../../../components/InteractiveTechDemo2025';

export default function AIInnovationShowcase2025Page() {
  return (
    <>
      <SEO
        title="AI Innovation Showcase 2025 - Cutting-Edge AI Technologies"
        description="Explore the latest breakthroughs in artificial intelligence that are revolutionizing how businesses operate, compete, and grow in the digital age."
        keywords="AI innovation, artificial intelligence, machine learning, neural networks, AI technologies, business AI"
        url="/ai-innovation-showcase-2025"
      />
      
      <div className="min-h-screen bg-white">
        <AIInnovationShowcase2025 />
        <InteractiveTechDemo2025 />
      </div>
    </>
  );
}