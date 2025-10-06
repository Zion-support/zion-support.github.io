import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Discover cutting-edge AI solutions that are transforming industries and driving unprecedented growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Autonomous Operations</h3>
            <p className="text-gray-200 mb-4">
              Self-managing systems that optimize performance and reduce human intervention.
            </p>
            <button className="text-blue-300 hover:text-white font-medium transition-colors">
              Learn More →
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
            <p className="text-gray-200 mb-4">
              Advanced forecasting capabilities that anticipate trends and opportunities.
            </p>
            <button className="text-blue-300 hover:text-white font-medium transition-colors">
              Learn More →
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Intelligent Automation</h3>
            <p className="text-gray-200 mb-4">
              Smart workflows that adapt and improve over time without manual intervention.
            </p>
            <button className="text-blue-300 hover:text-white font-medium transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedContentPromotion;