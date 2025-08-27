import React from 'react';

export const FeatureHighlights: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-zinc-300">Cutting-edge technology</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-zinc-300">Enterprise-grade solutions</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-zinc-300">24/7 expert assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};