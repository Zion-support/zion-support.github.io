import React from 'react';
import { Link } from 'react-router-dom';

const AICostOptimizationBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            AI Cost Optimization Solutions
          </h2>
          <p className="text-xl mb-8">
            Reduce operational costs with intelligent automation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Resource Optimization</h3>
              <p className="text-sm opacity-90">
                Automatically scale resources based on demand
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
              <p className="text-sm opacity-90">
                Reduce energy consumption with smart algorithms
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
              <p className="text-sm opacity-90">
                Streamline workflows to minimize manual effort
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link 
              to="/services" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICostOptimizationBanner;