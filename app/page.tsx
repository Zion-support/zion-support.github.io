import React from 'react';
import UnifiedContentPromotion from '../components/UnifiedContentPromotion';
import January2026NeuralArchitectureSearchBanner from '../components/January2026NeuralArchitectureSearchBanner';
import January2026FederatedLearningBanner from '../components/January2026FederatedLearningBanner';
import January2026MegaContentShowcaseBanner from './components/January2026MegaContentShowcaseBanner';
import RevolutionaryAI2026BreakthroughBanner from './components/RevolutionaryAI2026BreakthroughBanner';
import Fortune500SuccessShowcaseBanner from './components/Fortune500SuccessShowcaseBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>
      
      {/* New Content Banners */}
      <January2026NeuralArchitectureSearchBanner />
      <January2026FederatedLearningBanner />
      
      {/* January 2026 Mega Content Showcase */}
      <January2026MegaContentShowcaseBanner />
      
      {/* Revolutionary AI 2026 Breakthrough Banner */}
      <RevolutionaryAI2026BreakthroughBanner />
      
      {/* Fortune 500 Success Showcase Banner */}
      <Fortune500SuccessShowcaseBanner />
      
      <UnifiedContentPromotion />
    </main>
  );
}