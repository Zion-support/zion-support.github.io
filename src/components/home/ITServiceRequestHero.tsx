import React from 'react';

export const ITServiceRequestHero: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">IT Service Request</h2>
        <p className="text-zinc-300 mb-6">Get expert IT services for your business</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Request Service
        </button>
      </div>
    </section>
  );
};