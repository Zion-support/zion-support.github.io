import React from 'react';
import UnifiedContentPromotion from '../components/UnifiedContentPromotion';
import NewContent20252026MegaBanner from '../components/NewContent20252026MegaBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>
      <NewContent20252026MegaBanner />
      <UnifiedContentPromotion />
    </main>
  );
}