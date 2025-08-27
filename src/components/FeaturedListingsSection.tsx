import React from 'react';

export const FeaturedListingsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">QuantumFlow Pro</h3>
            <p className="text-zinc-300">Quantum workflow automation</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">NeuroSync AI</h3>
            <p className="text-zinc-300">Brain-computer interface</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">SpaceTech Analytics</h3>
            <p className="text-zinc-300">Space data analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};