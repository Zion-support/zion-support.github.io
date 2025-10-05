import React from 'react';
import { Link } from 'react-router-dom';

interface AICostOptimizationBannerProps {
  className?: string;
}

const AICostOptimizationBanner: React.FC<AICostOptimizationBannerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            AI Cost Optimization Solutions
          </h2>
          <p className="text-xl mb-6">
            Reduce your AI infrastructure costs by up to 70% with our intelligent optimization strategies
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/services/ai-optimization"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICostOptimizationBanner;