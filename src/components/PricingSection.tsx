import React from 'react';

export const PricingSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-3xl font-bold text-green-400 mb-2">$99/mo</p>
            <p className="text-zinc-300">Perfect for small businesses</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg border border-green-500/50">
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-3xl font-bold text-blue-400 mb-2">$299/mo</p>
            <p className="text-zinc-300">Ideal for growing companies</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold text-purple-400 mb-2">Custom</p>
            <p className="text-zinc-300">For large organizations</p>
          </div>
        </div>
      </div>
    </section>
  );
};