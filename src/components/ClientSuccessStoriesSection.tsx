import React from 'react';

export const ClientSuccessStoriesSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fortune 500 Company</h3>
            <p className="text-zinc-300 mb-4">Achieved 300% ROI through our AI solutions</p>
            <div className="text-sm text-zinc-400">Industry: Financial Services</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Healthcare Provider</h3>
            <p className="text-zinc-300 mb-4">Streamlined operations with quantum workflow automation</p>
            <div className="text-sm text-zinc-400">Industry: Healthcare</div>
          </div>
        </div>
      </div>
    </section>
  );
};