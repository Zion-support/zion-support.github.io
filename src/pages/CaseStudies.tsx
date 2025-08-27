import React from 'react';
import { SEO } from '../components/SEO';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO title="Case Studies - Zion Tech Group" description="Client success stories and outcomes." />
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Explore how we help clients achieve measurable results with AI, cloud, and cybersecurity.
        </p>
      </section>
    </div>
  );
}