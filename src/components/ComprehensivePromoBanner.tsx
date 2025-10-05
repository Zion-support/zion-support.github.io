import React from 'react';
import { Link } from 'react-router-dom';

interface ComprehensivePromoBannerProps {
  variant?: 'hero' | 'compact' | 'featured';
  showCount?: number;
  className?: string;
}

const ComprehensivePromoBanner: React.FC<ComprehensivePromoBannerProps> = ({
  variant = 'hero',
  showCount = 3,
  className = ''
}) => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence for enterprise',
      icon: '🤖'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation processing power',
      icon: '⚡'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing business processes',
      icon: '🔄'
    }
  ];

  const displayFeatures = features.slice(0, showCount);

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-lg mb-8">
            Transform your business with cutting-edge AI technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {displayFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="space-x-4">
            <Link 
              to="/services" 
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

export default ComprehensivePromoBanner;