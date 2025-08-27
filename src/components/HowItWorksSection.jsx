import React from 'react';

export const HowItWorksSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p className="text-zinc-300">Choose your service</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p className="text-zinc-300">Get customized solution</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p className="text-zinc-300">Deploy and scale</p>
          </div>
        </div>
      </div>
    </section>
  );
};