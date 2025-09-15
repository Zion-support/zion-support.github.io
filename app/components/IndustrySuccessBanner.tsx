'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface IndustryMetric {
  industry: string;
  roi: string;
  savings: string;
  companies: string;
  icon: string;
  color: string;
}

const IndustrySuccessBanner: React.FC = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const industryMetrics: IndustryMetric[] = [
    {
      industry: 'Healthcare',
      roi: '580%',
      savings: '$115.9M',
      companies: '50+',
      icon: '🏥',
      color: 'from-red-500 to-pink-500'
    },
    {
      industry: 'Manufacturing',
      roi: '620%',
      savings: '$313.3M',
      companies: '75+',
      icon: '🏭',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'Retail',
      roi: '450%',
      savings: '$16.8M',
      companies: '200+',
      icon: '🛍️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Financial Services',
      roi: '520%',
      savings: '$67M',
      companies: '100+',
      icon: '🏦',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      industry: 'Enterprise',
      roi: '500%',
      savings: '$14M',
      companies: '500+',
      icon: '🏢',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prevIndex) => (prevIndex + 1) % industryMetrics.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = industryMetrics[currentIndustry];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full animate-spin"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 border border-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📈 INDUSTRY SUCCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven AI Success Across Industries
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Real results from real companies. See how AI transformation delivers 
            measurable ROI across every major industry.
          </p>
        </div>

        {/* Industry Showcase */}
        <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Industry Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="text-6xl">{current.icon}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {current.industry}
                  </h3>
                  <p className="text-lg opacity-90">
                    Industry Leaders Achieving Breakthrough Results
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">
                    {current.roi}
                  </div>
                  <div className="text-sm opacity-90">Average ROI</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {current.savings}
                  </div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    {current.companies}
                  </div>
                  <div className="text-sm opacity-90">Companies Transformed</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={`/case-studies?industry=${current.industry.toLowerCase()}`}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View {current.industry} Case Studies
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Start Your Transformation
                </Link>
              </div>
            </div>

            {/* Industry Stats Grid */}
            <div className="lg:w-96">
              <h4 className="text-xl font-bold mb-6 text-center">Industry Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                {industryMetrics.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndustry(index)}
                    className={`p-4 rounded-lg transition-all ${
                      index === currentIndustry
                        ? 'bg-white bg-opacity-20 scale-105'
                        : 'bg-white bg-opacity-5 hover:bg-opacity-10'
                    }`}
                  >
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <div className="text-sm font-medium">{industry.industry}</div>
                    <div className="text-xs opacity-75">{industry.roi} ROI</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-sm opacity-90">Companies Transformed</div>
          </div>
          <div className="bg-white bg-opacity-5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">$2.3B+</div>
            <div className="text-sm opacity-90">Total Savings Generated</div>
          </div>
          <div className="bg-white bg-opacity-5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">98%</div>
            <div className="text-sm opacity-90">Client Satisfaction</div>
          </div>
          <div className="bg-white bg-opacity-5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-sm opacity-90">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Success Stories
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get Your Industry Assessment
            </Link>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IndustrySuccessBanner;