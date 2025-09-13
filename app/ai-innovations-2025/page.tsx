import React from 'react';
import SEO from '../../../components/SEO';
import AI2025LatestInnovationsShowcase from '../../../components/AI2025LatestInnovationsShowcase';
import NewContent2025ShowcaseBanner from '../../../components/NewContent2025ShowcaseBanner';
import EnterpriseSuccessStories from '../../../components/EnterpriseSuccessStories';

export default function AIIInnovations2025Page() {
  return (
    <>
      <SEO
        title="AI Innovations 2025 - Revolutionary Breakthroughs | Zion Tech Group"
        description="Discover the latest AI innovations and breakthroughs in 2025. Explore quantum-neural AI fusion, autonomous business orchestration, and synthetic intelligence platforms."
        keywords="AI innovations 2025, artificial intelligence breakthroughs, quantum AI, autonomous systems, synthetic intelligence, AI technology trends"
        url="/ai-innovations-2025"
      />
      
      <div className="min-h-screen bg-white">
        <NewContent2025ShowcaseBanner />
        <AI2025LatestInnovationsShowcase />
        <EnterpriseSuccessStories />
      </div>
    </>
  );
}