import React from 'react';
import { Link } from 'react-router-dom';

interface PerformanceOptimizationBannerProps {
  className?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showMetrics?: boolean;
}

const PerformanceOptimizationBanner: React.FC<PerformanceOptimizationBannerProps> = ({
  className = '',
  title = 'Optimize Your Performance',
  description = 'Boost your application performance by up to 300% with our advanced optimization solutions.',
  ctaText = 'Get Performance Audit',
  ctaLink = '/services/performance-optimization',
  showMetrics = true
}) => {
  const metrics = [
    { label: 'Load Time', value: '2.3s', improvement: '-67%' },
    { label: 'Core Web Vitals', value: '95/100', improvement: '+25' },
    { label: 'Bundle Size', value: '1.2MB', improvement: '-45%' },
    { label: 'Lighthouse Score', value: '98/100', improvement: '+18' }
  ];

  return (
    <div className={`bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-sm tracking-wider uppercase">
              Performance Optimization
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            {title}
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to={ctaLink}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaText}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {showMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold mb-1">
                  {metric.label}
                </div>
                <div className="text-green-300 text-sm font-medium">
                  {metric.improvement} improvement
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Speed Optimization</h3>
              <p className="text-sm opacity-90">
                Advanced techniques to reduce load times and improve user experience
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Performance Monitoring</h3>
              <p className="text-sm opacity-90">
                Real-time monitoring and analytics to track performance metrics
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold mb-2">Code Optimization</h3>
              <p className="text-sm opacity-90">
                Expert code review and optimization for maximum efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizationBanner;