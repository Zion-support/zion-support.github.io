import React from 'react';
import { Link } from 'react-router-dom';

interface ComprehensivePromoBannerProps {
  variant?: 'hero' | 'compact' | 'featured';
  showCount?: number;
  className?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
  showStats?: boolean;
}

const ComprehensivePromoBanner: React.FC<ComprehensivePromoBannerProps> = ({
  variant = 'hero',
  showCount = 3,
  className = '',
  title = 'Transform Your Business with AI',
  description = 'Discover how our comprehensive AI solutions can revolutionize your operations and drive unprecedented growth.',
  ctaText = 'Get Started Today',
  ctaLink = '/contact',
  features = [
    'Advanced AI Integration',
    'Real-time Analytics',
    'Scalable Solutions',
    '24/7 Support',
    'Custom Development',
    'Performance Optimization'
  ],
  showStats = true
}) => {
  const stats = [
    { label: 'Clients Served', value: '500+' },
    { label: 'Projects Completed', value: '1000+' },
    { label: 'Success Rate', value: '99%' },
    { label: 'Years Experience', value: '10+' }
  ];

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900';
      case 'compact':
        return 'py-12 bg-gradient-to-r from-blue-600 to-purple-600';
      case 'featured':
        return 'py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600';
      default:
        return 'py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900';
    }
  };

  const getTitleSize = () => {
    switch (variant) {
      case 'hero':
        return 'text-5xl md:text-6xl';
      case 'compact':
        return 'text-3xl md:text-4xl';
      case 'featured':
        return 'text-4xl md:text-5xl';
      default:
        return 'text-5xl md:text-6xl';
    }
  };

  const displayFeatures = features.slice(0, showCount);

  return (
    <div className={`${getVariantStyles()} text-white px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-sm tracking-wider uppercase">
              Comprehensive AI Solutions
            </span>
          </div>

          <h2 className={`${getTitleSize()} font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent`}>
            {title}
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayFeatures.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="font-semibold">{feature}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={ctaLink}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaText}
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePromoBanner;