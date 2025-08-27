import React from 'react';

export const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Global Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">North America</h3>
            <p className="text-zinc-300">United States & Canada</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Europe</h3>
            <p className="text-zinc-300">UK, Germany, France</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Asia Pacific</h3>
            <p className="text-zinc-300">Japan, Singapore, Australia</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Middle East</h3>
            <p className="text-zinc-300">UAE, Saudi Arabia</p>
          </div>
        </div>
      </div>
    </section>
  );
};