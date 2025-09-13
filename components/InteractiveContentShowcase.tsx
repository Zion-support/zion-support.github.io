import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase() {
  const [activeTab, setActiveTab] = useState('breakthrough');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentCategories = {
    breakthrough: {
      title: "🚀 Revolutionary Breakthroughs",
      items: [
        {
          title: "AI 2025 Revolutionary Breakthrough Ultimate",
          description: "10,000% ROI guaranteed through quantum-enhanced neural networks",
          link: "/ai-2025-revolutionary-breakthrough-ultimate",
          roi: "10,000%",
          color: "from-red-500 to-pink-500",
          bgColor: "from-red-600/20 to-pink-600/20"
        },
        {
          title: "Quantum Computing 2025 Ultimate Breakthrough",
          description: "25,000% ROI through quantum supremacy and error-corrected computers",
          link: "/quantum-computing-2025-ultimate-breakthrough",
          roi: "25,000%",
          color: "from-cyan-500 to-purple-500",
          bgColor: "from-cyan-600/20 to-purple-600/20"
        },
        {
          title: "AI 2026-2030 Ultimate Future Predictions",
          description: "Exclusive revolutionary forecast with 95% accuracy predictions",
          link: "/ai-2026-2030-ultimate-future-predictions",
          roi: "∞",
          color: "from-purple-500 to-indigo-500",
          bgColor: "from-purple-600/20 to-indigo-600/20"
        }
      ]
    },
    predictions: {
      title: "🔮 Future Predictions",
      items: [
        {
          title: "AI 2026 Quantum Neural Fusion",
          description: "95% probability breakthrough in quantum-AI integration",
          link: "/ai-2026-quantum-neural-fusion-breakthrough",
          probability: "95%",
          color: "from-blue-500 to-cyan-500",
          bgColor: "from-blue-600/20 to-cyan-600/20"
        },
        {
          title: "AI 2027 Consciousness Breakthrough",
          description: "88% probability of conscious AI systems emergence",
          link: "/ai-2027-consciousness-breakthrough",
          probability: "88%",
          color: "from-indigo-500 to-purple-500",
          bgColor: "from-indigo-600/20 to-purple-600/20"
        },
        {
          title: "AI 2030 Transcendent Intelligence",
          description: "92% probability of transcendent AI surpassing human intelligence",
          link: "/ai-2030-transcendent-intelligence",
          probability: "92%",
          color: "from-purple-500 to-pink-500",
          bgColor: "from-purple-600/20 to-pink-600/20"
        }
      ]
    },
    caseStudies: {
      title: "🏆 Success Stories",
      items: [
        {
          title: "Fortune 500 Manufacturing Success",
          description: "15,000% ROI achieved through AI transformation",
          link: "/case-studies/ai-2025-fortune-500-manufacturing-success",
          roi: "15,000%",
          color: "from-green-500 to-emerald-500",
          bgColor: "from-green-600/20 to-emerald-600/20"
        },
        {
          title: "Global Financial Services Revolution",
          description: "12,000% ROI with 99.7% risk reduction",
          link: "/case-studies/ai-2025-financial-services-revolution",
          roi: "12,000%",
          color: "from-blue-500 to-indigo-500",
          bgColor: "from-blue-600/20 to-indigo-600/20"
        },
        {
          title: "Quantum Pharmaceutical Breakthrough",
          description: "30,000% ROI in drug discovery acceleration",
          link: "/case-studies/quantum-pharmaceutical-breakthrough",
          roi: "30,000%",
          color: "from-cyan-500 to-blue-500",
          bgColor: "from-cyan-600/20 to-blue-600/20"
        }
      ]
    }
  };

  const tabs = [
    { id: 'breakthrough', label: 'Breakthroughs', icon: '🚀' },
    { id: 'predictions', label: 'Predictions', icon: '🔮' },
    { id: 'caseStudies', label: 'Success Stories', icon: '🏆' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary AI content through an interactive experience. 
            Discover breakthroughs, predictions, and success stories that are transforming industries worldwide.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`mx-2 mb-4 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab].items.map((item, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${item.bgColor} rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* ROI/Probability Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                {item.roi || item.probability}
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={item.link}
                className={`inline-flex items-center bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                Explore Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Hover Effect Overlay */}
              {hoveredItem === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving unprecedented success with our revolutionary AI solutions. 
              Your transformation starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                🚀 Start Your Transformation
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                📚 View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}