import React from 'react';

const Marketplace: React.FC = (props: any) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Marketplace</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover products, services, and talent in our comprehensive technology marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;