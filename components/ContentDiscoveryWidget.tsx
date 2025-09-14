import React, { useState } from 'react';
import Link from 'next/link';

export default function ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthrough Ultimate",
      description: "The most advanced AI technology ever created, delivering 15,000% ROI through quantum-neural fusion.",
      category: "ai-2025",
      type: "breakthrough",
      roi: "15,000%",
      accuracy: "99.9%",
      link: "/ai-2025-revolutionary-breakthrough-ultimate",
      image: "🚀",
      badge: "BREAKTHROUGH",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs 2030",
      description: "Revolutionary quantum technology with infinite processing power and perfect security.",
      category: "quantum",
      type: "technology",
      roi: "∞",
      accuracy: "99.99%",
      link: "/quantum-computing-breakthroughs-2030",
      image: "⚛️",
      badge: "REVOLUTIONARY",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2030",
      description: "Direct brain-computer interface technology achieving 95% patient recovery rates.",
      category: "neural",
      type: "medical",
      roi: "5,000%",
      accuracy: "95%",
      link: "/neural-interface-revolution-2030",
      image: "🧠",
      badge: "FUTURE",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Advanced Automation Solutions 2025",
      description: "Fully autonomous operations delivering 8,500% ROI with zero human intervention.",
      category: "automation",
      type: "business",
      roi: "8,500%",
      accuracy: "100%",
      link: "/advanced-automation-solutions-2025",
      image: "🤖",
      badge: "AUTOMATION",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "AI 2026 Future Predictions",
      description: "Comprehensive predictions for AI development and breakthrough technologies in 2026.",
      category: "ai-2026",
      type: "predictions",
      roi: "2,500%",
      accuracy: "92%",
      link: "/ai-2026-future-predictions-breakthrough",
      image: "🔮",
      badge: "PREDICTIONS",
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 6,
      title: "Quantum-AI Fusion Technology",
      description: "The ultimate combination of quantum computing and AI delivering infinite capabilities.",
      category: "quantum",
      type: "fusion",
      roi: "∞",
      accuracy: "99.99%",
      link: "/quantum-ai-fusion-technology",
      image: "⚛️🧠",
      badge: "FUSION",
      color: "from-pink-600 to-purple-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-2025', name: 'AI 2025', count: contentItems.filter(item => item.category === 'ai-2025').length },
    { id: 'quantum', name: 'Quantum', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'neural', name: 'Neural', count: contentItems.filter(item => item.category === 'neural').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'ai-2026', name: 'AI 2026', count: contentItems.filter(item => item.category === 'ai-2026').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Revolutionary Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our breakthrough content library featuring the most advanced AI, quantum computing, 
            and automation technologies that are transforming industries worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color}`}>
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-green-400 font-bold">{item.roi}</span>
                    <span className="text-gray-400 ml-1">ROI</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 font-bold">{item.accuracy}</span>
                    <span className="text-gray-400 ml-1">Accuracy</span>
                  </div>
                </div>
                <div className="text-cyan-400 group-hover:text-white transition-colors">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Discover how our revolutionary technologies can deliver unprecedented results 
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}