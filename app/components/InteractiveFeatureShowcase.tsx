'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Feature {
  id: string,
  title: string,
  description: string,
  icon: string,
  benefits: string[],
  link: string,
  color: string,
}

const InteractiveFeatureShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features: Feature[] = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Transform your business processes with intelligent automation that learns and adapts.',
      icon: '🤖',
      benefits: [
        'Reduce manual work by 80%',
        'Improve accuracy by 95%',
        'Scale operations instantly',
        '24/7 intelligent monitoring'
      ],
      link: '/ai-2025',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Deploy powerful, scalable SaaS applications tailored to your specific business needs.',
      icon: '⚡',
      benefits: [
        'Rapid deployment in 2-4 weeks',
        'Scalable cloud infrastructure',
        'Custom integrations',
        'Ongoing support & updates'
      ],
      link: '/automation',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'enterprise-ai',
      title: 'Enterprise AI Platform',
      description: 'Comprehensive AI solutions designed for enterprise-scale operations and maximum ROI.',
      icon: '🚀',
      benefits: [
        'Enterprise-grade security',
        'Custom AI model training',
        'Advanced analytics dashboard',
        'Dedicated success team'
      ],
      link: '/autonomous-systems-2026',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-tools',
      title: 'AI Assessment Tools',
      description: 'Interactive tools to evaluate your AI readiness and calculate potential ROI.',
      icon: '📊',
      benefits: [
        'AI readiness assessment',
        'ROI calculator',
        'Implementation roadmap',
        'Free consultation'
      ],
      link: '/tools',
      color: 'from-orange-500 to-red-600'
    }
  ]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => { clearInterval(interval); };
  }, [features.length]);

  return (
    <section className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interactive Solution Explorer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge AI solutions can transform your business. 
            Click on any solution to explore detailed benefits and get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 transform ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-2xl scale-105`
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-4xl ${activeFeature === index ? 'animate-bounce' : ''}`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${activeFeature === index ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`${activeFeature === index ? 'text-blue-100' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 min-h-[400px]">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-pulse">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-lg text-gray-600">
                  {features[activeFeature].description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href={features[activeFeature].link}
                  className={`inline-block bg-gradient-to-r ${features[activeFeature].color} text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover: scale-105 hover:shadow-lg`}
                >
                  Explore This Solution
                </Link>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">2-4</div>
            <div className="text-gray-600">Weeks to Deploy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatureShowcase;