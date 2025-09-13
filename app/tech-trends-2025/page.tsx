import React from 'react';
import SEO from '../../../components/SEO';
import RevolutionaryTechTrends2025 from '../../../components/RevolutionaryTechTrends2025';
import NewContent2025ShowcaseBanner from '../../../components/NewContent2025ShowcaseBanner';
import EnterpriseSuccessStories from '../../../components/EnterpriseSuccessStories';

export default function TechTrends2025Page() {
  return (
    <>
      <SEO
        title="Revolutionary Tech Trends 2025 - Future Technology | Zion Tech Group"
        description="Explore the most revolutionary technology trends of 2025. Discover quantum AI integration, autonomous systems, synthetic intelligence, and neural interface breakthroughs."
        keywords="tech trends 2025, technology trends, quantum AI, autonomous systems, synthetic intelligence, neural interfaces, future technology"
        url="/tech-trends-2025"
      />
      
      <div className="min-h-screen bg-white">
        <NewContent2025ShowcaseBanner />
        <RevolutionaryTechTrends2025 />
        <EnterpriseSuccessStories />
      </div>
    </>
  );
}