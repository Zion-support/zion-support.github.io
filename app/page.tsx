import React from 'react';
import UnifiedContentPromotion from '../components/UnifiedContentPromotion';
import ContentShowcase from '../components/ContentShowcase';
import AI2026RevolutionaryAutonomousEnterpriseBanner from '../components/AI2026RevolutionaryAutonomousEnterpriseBanner';
import October2025NewContentBanner from '../components/October2025NewContentBanner';
import NewContentAdvertisingBanner from '../components/NewContentAdvertisingBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>
      
      {/* Revolutionary New Content - Featured First */}
      <AI2026RevolutionaryAutonomousEnterpriseBanner />
      <October2025NewContentBanner />
      <NewContentAdvertisingBanner />
      
      {/* Additional Content Banners (temporarily disabled if not present) */}
      
      <UnifiedContentPromotion />

      <ContentShowcase />
    </main>
  );
}