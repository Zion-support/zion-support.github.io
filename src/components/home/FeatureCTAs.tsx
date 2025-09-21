import React from 'react';

export const FeatureCTAs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600">Choose the best way to connect with our team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-600 text-white p-8 rounded-xl hover:scale-105 transition-transform block text-center">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Schedule a Demo</h3>
            <p className="mb-4">See our solutions in action</p>
          </div>
          <div className="bg-green-600 text-white p-8 rounded-xl hover:scale-105 transition-transform block text-center">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
            <p className="mb-4">Custom pricing for your needs</p>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-xl hover:scale-105 transition-transform block text-center">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="text-xl font-semibold mb-2">Contact Sales</h3>
            <p className="mb-4">Speak with our experts</p>
          </div>
        </div>
      </div>
    </div>
  );
};