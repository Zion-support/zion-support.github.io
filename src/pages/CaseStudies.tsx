import React from 'react';
import { SEO } from '@/components/SEO';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <SEO title="Case Studies - Zion Tech Group" description="Success stories from our clients across industries." />
      <div className="container-responsive text-white">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-lg text-gray-300 max-w-2xl">Read about measurable outcomes we've delivered. Expanded case studies will be added soon.</p>
      </div>
    </div>
  );
}
