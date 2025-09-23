"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025UltimateDiscoveryBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const newContent = [
    {
      title: "AI 2025 Ultimate Content Revolution",
      description: "Transform your business with revolutionary AI-powered content strategies",
      type: "Blog Post",
      roi: "5000%",
      link: "/blog/ai-2025-ultimate-content-revolution",
      featured: true
    },
    {
      title: "AI Content Revolution: 5000% ROI Success",
      description: "Real Fortune 500 case study showing unprecedented results",
      type: "Case Study",
      roi: "5000%",
      link: "/case-studies/ai-2025-content-revolution-5000-roi-success",
      featured: true
    },
    {
      title: "AI 2025 Enterprise Automation Revolution",
      description: "Complete guide to enterprise AI automation implementation",
      type: "Guide",
      roi: "10,000%",
      link: "/blog/ai-2025-enterprise-automation-revolution",
      featured: false
    },
    {
      title: "Quantum AI 2026 Business Transformation",
      description: "Next-generation quantum AI solutions for business",
      type: "Future Tech",
      roi: "15,000%",
      link: "/blog/quantum-ai-2026-business-transformation-ultimate-guide",
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Our Latest AI Content Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Explore groundbreaking content 'that', 's transforming businesses worldwide with unprecedented ROI results
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {newContent.filter(item => item.featured).map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm font-medium">
                  {item.type}
                </div>
                <div className="bg-green-500 text-white rounded-full px-4 py-1 text-sm font-bold">
                  {item.roi} ROI
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-lg opacity-90 mb-4">
                {item.description}
              </p>
              <div className="flex items-center text-yellow-300 font-semibold">
                Read More →
              </div>
            </Link>
          ))}
        </div>

        {/* Expandable Content Section */}
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full px-8 py-3 font-semibold transition-all duration-300 mb-8"
          >
            {isExpanded ? 'Show Less' : 'Discover More Content'} {isExpanded ? '↑' : '↓'}
          </button>

          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {newContent.filter(item => !item.featured).map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-xs font-medium">
                      {item.type}
                    </div>
                    <div className="bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                      {item.roi} ROI
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm opacity-90 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-yellow-300 text-sm font-semibold">
                    Explore →
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of companies already experiencing the AI content revolution with unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NewContent2025UltimateDiscoveryBanner;