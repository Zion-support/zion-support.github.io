'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewSuccessStoriesShowcase2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      company: "Fortune 500 Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual processes causing 40% efficiency loss",
      solution: "AI-powered automation and predictive maintenance",
      results: {
        roi: "2,500%",
        efficiency: "+340%",
        costSavings: "$50M",
        timeframe: "6 months"
      },
      testimonial: "The AI transformation exceeded our wildest expectations. We achieved 2,500% ROI in just 6 months.",
      author: "Sarah Johnson, CTO",
      logo: "🏭"
    },
    {
      id: 2,
      company: "Global Financial Services",
      industry: "Finance",
      challenge: "Trading algorithms underperforming market",
      solution: "Quantum-enhanced AI trading systems",
      results: {
        roi: "1,200%",
        efficiency: "+280%",
        costSavings: "$500M",
        timeframe: "8 months"
      },
      testimonial: "Our AI trading systems now outperform traditional methods by 280%. Revenue increased by $500M.",
      author: "Michael Chen, CEO",
      logo: "🏦"
    },
    {
      id: 3,
      company: "Healthcare Network",
      industry: "Healthcare",
      challenge: "Diagnostic accuracy below industry standards",
      solution: "Neural interface diagnostic AI systems",
      results: {
        roi: "850%",
        efficiency: "+340%",
        costSavings: "$25M",
        timeframe: "4 months"
      },
      testimonial: "Diagnostic accuracy improved by 340%. We're saving lives and reducing costs simultaneously.",
      author: "Dr. Emily Rodriguez, Chief Medical Officer",
      logo: "🏥"
    },
    {
      id: 4,
      company: "Retail Chain",
      industry: "Retail",
      challenge: "Inventory management causing 30% waste",
      solution: "AI-powered supply chain optimization",
      results: {
        roi: "1,800%",
        efficiency: "+250%",
        costSavings: "$75M",
        timeframe: "5 months"
      },
      testimonial: "Inventory waste reduced by 90%. Our supply chain is now perfectly optimized.",
      author: "David Kim, Operations Director",
      logo: "🛍️"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`py-16 bg-gray-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🏆 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are achieving extraordinary results with our AI solutions.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-4 py-2 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {story.company}
            </button>
          ))}
        </div>

        {/* Active Story Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story Details */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{successStories[activeStory].logo}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {successStories[activeStory].company}
                  </h3>
                  <p className="text-gray-600">{successStories[activeStory].industry}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-gray-600 mb-4">{successStories[activeStory].challenge}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                <p className="text-gray-600">{successStories[activeStory].solution}</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {successStories[activeStory].results.roi}
                    </div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {successStories[activeStory].results.efficiency}
                    </div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {successStories[activeStory].results.costSavings}
                    </div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {successStories[activeStory].results.timeframe}
                    </div>
                    <div className="text-sm text-gray-600">Timeframe</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
              <div className="text-6xl text-purple-200 mb-4">"</div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                {successStories[activeStory].testimonial}
              </blockquote>
              <div className="border-t border-purple-200 pt-4">
                <div className="font-semibold text-gray-900">
                  {successStories[activeStory].author}
                </div>
                <div className="text-gray-600">
                  {successStories[activeStory].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                activeStory === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setActiveStory(index)}
            >
              <div className="text-3xl mb-3">{story.logo}</div>
              <h4 className="font-bold text-gray-900 mb-2">{story.company}</h4>
              <p className="text-sm text-gray-600 mb-3">{story.industry}</p>
              <div className="text-2xl font-bold text-green-600 mb-1">
                {story.results.roi}
              </div>
              <div className="text-sm text-gray-500">ROI</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join these companies and transform your business with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSuccessStoriesShowcase2025;