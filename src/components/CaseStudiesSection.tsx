import React from 'react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
            <p className="text-zinc-300">How we helped a bank optimize their operations</p>
          </div>
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-zinc-300">AI-powered diagnosis system implementation</p>
          </div>
        </div>
      </div>
    </section>
  );
};