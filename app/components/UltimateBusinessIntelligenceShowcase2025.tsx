import React from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const features = [
    {
      id: 'real-time-analytics',
      title: 'Real-Time Analytics Engine',
      description: 'Process millions of data points in real-time with 99.99% accuracy and sub-second response times.',
      icon: '📊',
      metrics: {
        accuracy: '99.99%',
        speed: '<100ms',
        scale: '1B+ records'
      }
    },
    {
      id: 'predictive-modeling',
      title: 'Advanced Predictive Modeling',
      description: 'AI-powered forecasting with 95% accuracy for business trends, market conditions, and operational outcomes.',
      icon: '🔮',
      metrics: {
        accuracy: '95%',
        horizon: '12 months',
        confidence: '98%'
      }
    },
    {
      id: 'autonomous-insights',
      title: 'Autonomous Business Insights',
      description: 'Self-generating reports and recommendations that adapt to your business context and objectives.',
      icon: '🤖',
      metrics: {
        automation: '100%',
        insights: '500+ daily',
        relevance: '99.8%'
      }
    }
  ];

  const caseStudies = [
    {
      company: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain optimization',
      solution: 'AI-powered demand forecasting and inventory management',
      results: {
        roi: '30,000%',
        savings: '$750M',
        efficiency: '85%',
        timeline: '18 months'
      }
    },
    {
      company: 'Global Financial Services',
      industry: 'Finance',
      challenge: 'Risk management and compliance',
      solution: 'Real-time fraud detection and regulatory reporting',
      results: {
        roi: '25,000%',
        savings: '$500M',
        accuracy: '99.9%',
        timeline: '12 months'
      }
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🚀</span>
            <span className="text-cyan-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE SHOWCASE 2025
            </span>
            <span className="text-4xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Revolutionary AI-Powered Business Intelligence Platform
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of business intelligence with our cutting-edge AI platform that delivers unprecedented insights, 
            real-time analytics, and autonomous decision-making capabilities for enterprise-scale operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3">
                  {Object.entries(feature.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-cyan-400 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proven Results with Fortune 500 Companies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{study.company}</h4>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white text-sm font-semibold rounded-full">
                    {study.industry}
                  </span>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-cyan-400 mb-2">Challenge:</h5>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h5 className="text-lg font-semibold text-cyan-400 mb-2">Solution:</h5>
                  <p className="text-gray-300">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving unprecedented ROI with our revolutionary AI-powered business intelligence platform. 
            Get expert guidance from Zion Tech Group's AI transformation specialists.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-2xl">🚀</span>
              <span>Start Your Transformation</span>
            </Link>
            
            <Link
              href="/resources"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
            >
              <span>Explore Resources</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;