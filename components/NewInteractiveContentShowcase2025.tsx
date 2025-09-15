'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewInteractiveContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('trends');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    trends: {
      title: "🚀 Latest AI Trends 2025",
      description: "Discover the cutting-edge AI technologies reshaping industries",
      items: [
        {
          title: "Neural Superintelligence Breakthrough",
          description: "Revolutionary AI systems achieving human-level consciousness",
          roi: "50,000%",
          category: "Breakthrough"
        },
        {
          title: "Quantum-Neural Fusion",
          description: "Combining quantum computing with neural networks",
          roi: "25,000%",
          category: "Revolutionary"
        },
        {
          title: "Autonomous Business Ecosystems",
          description: "Self-managing AI systems for enterprise operations",
          roi: "15,000%",
          category: "Transformation"
        }
      ]
    },
    caseStudies: {
      title: "📊 Success Stories",
      description: "Real-world transformations with measurable results",
      items: [
        {
          title: "Fortune 500 Manufacturing Revolution",
          description: "Complete automation transformation with 2,500% ROI",
          roi: "2,500%",
          category: "Manufacturing"
        },
        {
          title: "Global Financial Services AI",
          description: "AI-powered trading systems generating $500M revenue",
          roi: "1,200%",
          category: "Finance"
        },
        {
          title: "Healthcare AI Breakthrough",
          description: "Diagnostic accuracy improved by 340%",
          roi: "850%",
          category: "Healthcare"
        }
      ]
    },
    tools: {
      title: "🛠️ Interactive Tools",
      description: "Try our AI-powered calculators and demos",
      items: [
        {
          title: "ROI Calculator",
          description: "Calculate your potential AI transformation ROI",
          roi: "Free",
          category: "Calculator"
        },
        {
          title: "AI Readiness Assessment",
          description: "Evaluate your 'organization', 's AI readiness",
          roi: "Free",
          category: "Assessment"
        },
        {
          title: "Automation Demo",
          description: "Experience AI automation in action",
          roi: "Free",
          category: "Demo"
        }
      ]
    }
  };

  return (
    <div className={`py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI innovations, success stories, and interactive tools designed to transform your business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {contentSections[activeTab as keyof typeof contentSections].title}
            </h3>
            <p className="text-gray-600">
              {contentSections[activeTab as keyof typeof contentSections].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentSections[activeTab as keyof typeof contentSections].items.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    {item.roi}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInteractiveContentShowcase2025;