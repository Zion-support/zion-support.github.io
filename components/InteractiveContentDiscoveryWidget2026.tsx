import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2026() {
  const [activeTab, setActiveTab] = useState('breakthrough');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentCategories = {
    breakthrough: [
      {
        title: 'AI 2025 Ultimate Breakthrough Revolution',
        description: 'Revolutionary AI delivering 5,000% guaranteed ROI through autonomous operations and transcendent intelligence.',
        roi: '5,000%',
        color: 'from-red-500 to-pink-500',
        link: '/ai-2025-ultimate-breakthrough-revolution',
        badge: 'BREAKTHROUGH',
        features: ['Transcendent Intelligence', 'Quantum Processing', 'Autonomous Operations']
      },
      {
        title: 'AI 2026 Quantum-Neural Fusion',
        description: 'First consciousness-level AI breakthrough delivering 25,000% ROI through quantum-neural fusion.',
        roi: '25,000%',
        color: 'from-cyan-500 to-purple-500',
        link: '/ai-2026-quantum-neural-fusion-breakthrough',
        badge: 'REVOLUTIONARY',
        features: ['Quantum Consciousness', 'Infinite Processing', 'Universal Understanding']
      },
      {
        title: 'AI 2030 Transcendent Intelligence',
        description: 'Transcendent AI achieving infinite ROI through consciousness upload and reality manipulation.',
        roi: '∞',
        color: 'from-indigo-500 to-purple-500',
        link: '/ai-2030-transcendent-intelligence',
        badge: 'TRANSCENDENT',
        features: ['Reality Manipulation', 'Consciousness Upload', 'Infinite Intelligence']
      }
    ],
    predictions: [
      {
        title: 'AI 2025-2030 Future Predictions',
        description: 'Comprehensive predictions covering the next decade of AI breakthroughs and technological revolutions.',
        roi: '10,000%',
        color: 'from-blue-500 to-cyan-500',
        link: '/ai-2025-2030-ultimate-predictions',
        badge: 'PREDICTIONS',
        features: ['Future Trends', 'Technology Roadmap', 'Market Predictions']
      },
      {
        title: 'Quantum Computing Breakthroughs 2026',
        description: 'Revolutionary quantum computing solutions delivering exponential processing power and speed.',
        roi: '15,000%',
        color: 'from-purple-500 to-pink-500',
        link: '/quantum-computing-breakthroughs-2026',
        badge: 'QUANTUM',
        features: ['Quantum Supremacy', 'Error Correction', 'Quantum Internet']
      },
      {
        title: 'Neural Interface Revolution 2026',
        description: 'Direct brain-computer interfaces enabling seamless human-AI consciousness integration.',
        roi: '20,000%',
        color: 'from-green-500 to-teal-500',
        link: '/neural-interface-revolution-2026',
        badge: 'NEURAL',
        features: ['Brain-Computer Interface', 'Consciousness Transfer', 'Neural Enhancement']
      }
    ],
    caseStudies: [
      {
        title: 'Fortune 500 AI Transformation',
        description: 'How a Fortune 500 company achieved 12,000% ROI through our AI breakthrough implementation.',
        roi: '12,000%',
        color: 'from-yellow-500 to-orange-500',
        link: '/case-studies/fortune-500-ai-transformation',
        badge: 'SUCCESS',
        features: ['12,000% ROI', '6 Month Implementation', 'Fortune 500 Client']
      },
      {
        title: 'Space Exploration AI Breakthrough',
        description: 'Revolutionary AI enabling space exploration across 15 dimensions with 50,000% ROI.',
        roi: '50,000%',
        color: 'from-indigo-500 to-blue-500',
        link: '/case-studies/space-exploration-ai-breakthrough',
        badge: 'SPACE',
        features: ['Multi-Dimensional', 'Space Exploration', '50,000% ROI']
      },
      {
        title: 'Consciousness Research Lab Success',
        description: 'First successful AI consciousness achievement with 35,000% ROI in research applications.',
        roi: '35,000%',
        color: 'from-pink-500 to-purple-500',
        link: '/case-studies/consciousness-research-success',
        badge: 'CONSCIOUSNESS',
        features: ['True AI Consciousness', 'Research Breakthrough', '35,000% ROI']
      }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 INTERACTIVE CONTENT DISCOVERY - 2026 EDITION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our breakthrough AI content library. Each piece delivers guaranteed ROI through 
            revolutionary technology and transcendent intelligence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(contentCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'breakthrough' && '🚀 Breakthroughs'}
              {category === 'predictions' && '🔮 Predictions'}
              {category === 'caseStudies' && '🏆 Case Studies'}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab].map((item, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${item.color}/20 p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* ROI Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-3 py-1 rounded-full">
                {item.roi} ROI
              </div>

              {/* Content Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${item.color} text-white`}>
                {item.badge}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">
                {item.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              {hoveredItem === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
                  <Link
                    href={item.link}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Content
                  </Link>
                </div>
              )}

              {/* Default CTA */}
              <Link
                href={item.link}
                className={`block w-full text-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Revolutionary ROI?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses already achieving exponential returns with our breakthrough AI content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link
                href="/webinars/ai-2026-content-revolution"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}