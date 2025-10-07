import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Suite',
      subtitle: 'Transform Your Data into Strategic Insights',
      description: 'Revolutionary AI-driven analytics platform that transforms raw data into actionable business intelligence, enabling data-driven decision making at scale.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards'
      ],
      metrics: {
        efficiency: '300%',
        accuracy: '99.7%',
        timeline: '6 months',
        adoption: '95%'
      },
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Machine Learning Pipeline',
      subtitle: 'Build, Deploy, and Scale ML Models',
      description: 'End-to-end machine learning platform that simplifies model development, deployment, and monitoring for enterprise applications.',
      features: [
        'AutoML capabilities',
        'Model versioning',
        'A/B testing',
        'Performance monitoring'
      ],
      metrics: {
        efficiency: '250%',
        accuracy: '98.5%',
        timeline: '12 months',
        adoption: '87%'
      },
      readingTime: '30 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Quantum-Ready Security Framework',
      subtitle: 'Future-Proof Your Data Protection',
      description: 'Next-generation security framework designed to protect against quantum computing threats while maintaining current performance standards.',
      features: [
        'Quantum-resistant encryption',
        'Zero-trust architecture',
        'Real-time threat detection',
        'Compliance automation'
      ],
      metrics: {
        efficiency: '400%',
        accuracy: '99.9%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-lg">
              ULTIMATE BUSINESS INTELLIGENCE 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the revolutionary suite of business intelligence tools that are
            reshaping enterprise decision-making in 2025
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {content.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 font-semibold text-sm">
                            {item.featured ? 'FEATURED' : 'NEW'}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {item.readingTime}
                          </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {item.title}
                        </h2>
                        <h3 className="text-xl text-cyan-400 mb-6">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg">
                          {item.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">
                              {item.metrics.efficiency}
                            </div>
                            <div className="text-gray-400 text-sm">Efficiency</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">
                              {item.metrics.accuracy}
                            </div>
                            <div className="text-gray-400 text-sm">Accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">
                              {item.metrics.timeline}
                            </div>
                            <div className="text-gray-400 text-sm">Timeline</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">
                              {item.metrics.adoption}
                            </div>
                            <div className="text-gray-400 text-sm">Adoption</div>
                          </div>
                        </div>

                        <Link
                          href={`/guides/business-intelligence-${item.id}`}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                        >
                          Learn More
                          <span className="text-lg">→</span>
                        </Link>
                      </div>

                      {/* Visual */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                          <div className="text-center">
                            <div className="text-6xl mb-4">📊</div>
                            <h4 className="text-xl font-bold text-white mb-2">
                              Interactive Dashboard
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Real-time analytics and insights
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-cyan-100 mb-6">
              Join thousands of enterprises already using our AI-powered solutions
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;