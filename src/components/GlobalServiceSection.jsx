import React from 'react';

export const GlobalServiceSection = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Global IT Services
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          We provide comprehensive IT services worldwide, ensuring your business has the technology support it needs, wherever you are.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Worldwide Coverage</h3>
            <p className="text-blue-100">Services available globally</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-blue-100">Round-the-clock assistance</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
            <p className="text-blue-100">Certified professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};