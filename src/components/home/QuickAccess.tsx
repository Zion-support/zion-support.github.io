import React from 'react';

export const QuickAccess: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <p className="text-zinc-300">View all services</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <p className="text-zinc-300">See pricing guide</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-zinc-300">Get in touch</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-zinc-300">Learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
};