import React from 'react';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Micro SAAS</h3>
            <p className="text-zinc-300">Innovative software solutions</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">IT Infrastructure</h3>
            <p className="text-zinc-300">Advanced technology services</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI Services</h3>
            <p className="text-zinc-300">Cutting-edge AI solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};