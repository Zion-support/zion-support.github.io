import React from 'react';
import { Link } from 'react-router-dom';

const AICostOptimizationBanner: React.FC = () => {
  const features = [
    {
      title: 'Cost Reduction',
      description: 'Reduce AI operational costs by up to 60%',
      icon: '💰'
    },
    {
      title: 'Efficiency Boost',
      description: 'Improve processing efficiency by 3x',
      icon: '⚡'
    },
    {
      title: 'Smart Scaling',
      description: 'Automatically scale resources based on demand',
      icon: '📈'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          AI Cost Optimization Solutions
        </h2>
        <p className="text-lg mb-8 text-center text-gray-200">
          Maximize your AI investment with our advanced cost optimization strategies
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AICostOptimizationBanner;