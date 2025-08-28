import React from 'react';
import SEO from '@/components/SEO';

export default function AiSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO
        title="AI Solutions - Zion Tech Group"
        description="Enterprise AI solutions including machine learning, computer vision, NLP, and intelligent automation."
      />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">AI Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          We design and implement end-to-end AI systems that deliver measurable business outcomes: demand forecasting,
          intelligent search, fraud detection, personalization, autonomous process optimization, and more.
        </p>
      </section>
    </div>
  );
}

