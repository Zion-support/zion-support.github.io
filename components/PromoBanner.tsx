import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">
              🚀 NEW: 50+ AI Micro SaaS Solutions - 
              <Link to="/services" className="underline hover:no-underline ml-1">
                Explore Now
              </Link>
              <span className="mx-2">•</span>
              <Link to="/services/ai-customer-feedback-analyzer" className="underline hover:no-underline">
                AI Feedback Analyzer - $149/month
              </Link>
              <span className="mx-2">•</span>
              <Link to="/services/ai-quantum-optimization-engine" className="underline hover:no-underline">
                Quantum AI Engine - $9,999/month
              </Link>
            </span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;