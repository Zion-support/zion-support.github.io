import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: "Revolutionary Breakthroughs",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      items: [
        {
          title: "AI 2026 Revolutionary Breakthrough Predictions",
          description: "Quantum-neural fusion, consciousness integration, and 15,000% ROI opportunities",
          link: "/blog/ai-2026-revolutionary-breakthrough-predictions",
          badge: "NEW",
          badgeColor: "bg-purple-500",
          metrics: "15,000% ROI"
        },
        {
          title: "AI 2025 Ultimate Breakthrough Announcement",
          description: "Revolutionary technology delivering 10,000% ROI and transforming industries",
          link: "/blog/ai-2025-ultimate-breakthrough-announcement",
          badge: "BREAKTHROUGH",
          badgeColor: "bg-red-500",
          metrics: "10,000% ROI"
        },
        {
          title: "Quantum-Neural Fusion Revolution",
          description: "The convergence of quantum computing and neural networks for unprecedented power",
          link: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
          badge: "REVOLUTIONARY",
          badgeColor: "bg-blue-500",
          metrics: "1000x Faster"
        }
      ]
    },
    success: {
      title: "Success Stories",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      items: [
        {
          title: "Global Transformation Breakthrough",
          description: "How Fortune 500 companies achieved 10,000% ROI with our AI technology",
          link: "/case-studies/ai-2025-global-transformation-breakthrough",
          badge: "SUCCESS",
          badgeColor: "bg-green-500",
          metrics: "10,000% ROI"
        },
        {
          title: "Healthcare Revolution Success",
          description: "99.9% diagnostic accuracy and 95% faster treatment with AI breakthrough",
          link: "/case-studies/ai-2025-healthcare-revolution-success",
          badge: "BREAKTHROUGH",
          badgeColor: "bg-blue-500",
          metrics: "99.9% Accuracy"
        },
        {
          title: "Manufacturing Transformation",
          description: "Zero-defect production and 90% cost reduction with AI optimization",
          link: "/case-studies/ai-2025-manufacturing-transformation",
          badge: "SUCCESS",
          badgeColor: "bg-green-500",
          metrics: "90% Cost Reduction"
        }
      ]
    },
    future: {
      title: "Future Predictions",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      items: [
        {
          title: "AI 2027 Future Predictions",
          description: "Advanced neural synthesis and quantum-AI fusion revolutionizing industries",
          link: "/blog/ai-2027-future-predictions-revolutionary",
          badge: "FUTURE",
          badgeColor: "bg-blue-500",
          metrics: "99.7% Accuracy"
        },
        {
          title: "AI 2030 Revolutionary Showcase",
          description: "Consciousness AI and dimensional processing transforming reality itself",
          link: "/ai-2030-future-revolutionary-showcase",
          badge: "REVOLUTIONARY",
          badgeColor: "bg-purple-500",
          metrics: "∞ ROI"
        },
        {
          title: "AI 2035 Breakthrough Showcase",
          description: "Matter creation and quantum consciousness enabling infinite possibilities",
          link: "/ai-2035-breakthrough-showcase",
          badge: "BREAKTHROUGH",
          badgeColor: "bg-pink-500",
          metrics: "INFINITE ROI"
        }
      ]
    }
  };

  const currentCategory = contentCategories[activeTab];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI content, breakthrough technologies, and success stories 
            that are reshaping industries and creating unprecedented opportunities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            {Object.entries(contentCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${currentCategory.bgColor} border ${currentCategory.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {item.badge}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  {item.metrics}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {item.description}
              </p>
              
              <Link
                href={item.link}
                className={`inline-block bg-gradient-to-r ${currentCategory.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Content Carousel */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">AI 2026 Breakthrough Predictions</h4>
              <p className="text-purple-100 mb-4">Quantum-neural fusion and consciousness integration</p>
              <div className="text-2xl font-bold text-yellow-300">15,000% ROI</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Global Transformation Success</h4>
              <p className="text-green-100 mb-4">Fortune 500 companies achieving unprecedented results</p>
              <div className="text-2xl font-bold text-yellow-300">10,000% ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Future AI Predictions</h4>
              <p className="text-blue-100 mb-4">Revolutionary technologies reshaping reality</p>
              <div className="text-2xl font-bold text-yellow-300">∞ ROI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Explore Revolutionary AI Content?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of professionals discovering the future of AI technology and business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2026-breakthrough-revolutionary-content"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;