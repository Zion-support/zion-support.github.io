import React from 'react';

export const InnovationResearchSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Innovation Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI Research</h3>
            <p className="text-zinc-300">Cutting-edge artificial intelligence development</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
            <p className="text-zinc-300">Next-generation computing solutions</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Blockchain Innovation</h3>
            <p className="text-zinc-300">Decentralized technology advancement</p>
          </div>
        </div>
      </div>
    </section>
  );
};