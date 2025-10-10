import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Flexible pricing plans for every business size
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;