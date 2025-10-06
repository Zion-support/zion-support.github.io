import React from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Real-Time Analytics',
      description: 'Get instant insights with sub-second query performance across petabytes of data.',
      icon: '⚡',
      metrics: {
        speed: '99.9% faster',
        scale: '1B+ records',
        accuracy: '99.99%'
      }
    },
    {
      id: 2,
      title: 'Predictive Intelligence',
      description: 'AI-powered forecasting with 95% accuracy for business planning and decision making.',
      icon: '🔮',
      metrics: {
        accuracy: '95%',
        roi: '300%+',
        savings: '$2M+'
      }
    },
    {
      id: 3,
      title: 'Autonomous Reporting',
      description: 'Self-generating reports and dashboards that adapt to your business needs automatically.',
      icon: '🤖',
      metrics: {
        automation: '100%',
        time: '90% saved',
        insights: '10x more'
      }
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE SHOWCASE 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary AI-Powered
            </span>
            <br />
            <span className="text-white">
              Business Intelligence Platform
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of business intelligence with our cutting-edge AI platform that delivers unprecedented insights, real-time analytics, and autonomous decision-making capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2">
                  {Object.entries(feature.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-cyan-400 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies achieving unprecedented ROI with our revolutionary AI-powered business intelligence platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">🚀</span>
              <span>Start Your Transformation</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '30,000%', label: 'Average ROI' },
            { value: '$750B+', label: 'Total Savings' },
            { value: '99.99%', label: 'Accuracy Rate' },
            { value: '500+', label: 'Enterprise Clients' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;