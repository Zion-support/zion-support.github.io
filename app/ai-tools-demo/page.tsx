import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import AIToolsInteractiveDemo2025 from '../../components/AIToolsInteractiveDemo2025';
import AIToolsInteractiveDemo2025PromotionBanner from '../../components/AIToolsInteractiveDemo2025PromotionBanner';

export default function AIToolsDemoPage() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI Tools Interactive Demo 2025 - Zion Tech Group"
        description="Experience cutting-edge AI tools and automation solutions. Interactive demos, live testing, and comprehensive AI tool showcase for enterprise and business applications."
        keywords="AI tools demo, interactive AI, automation tools, AI testing, enterprise AI, business AI solutions, AI showcase, AI tools 2025"
        url="/ai-tools-demo"
      />
      
      <div className="min-h-screen bg-white">
        <AIToolsInteractiveDemo2025PromotionBanner />
        <AIToolsInteractiveDemo2025 />
      </div>
    </ErrorBoundary>
  );
}