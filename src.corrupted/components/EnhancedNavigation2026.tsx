import React, { useState } from 'react';

const EnhancedNavigation2026: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contentCategories = [
    {
      title: "Revolutionary Tech 2026",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      items: [
        { name: "Ultimate Tech Revolution", link: "/pages/UltimateTechRevolution2026", badge: "NEW" },
        { name: "Next-Gen Innovation Hub", link: "/pages/NextGenInnovationHub2026", badge: "HOT" },
        { name: "Revolutionary Tech Insights", link: "/pages/RevolutionaryTechInsights2026", badge: "TRENDING" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "from-cyan-600 to-blue-600",
      items: [
        { name: "Advanced AI Systems 2026", link: "/pages/AdvancedAISystems2026", badge: "BREAKTHROUGH" },
        { name: "Synthetic Intelligence 2026", link: "/pages/SyntheticIntelligence2026", badge: "REVOLUTIONARY" },
        { name: "AI Transformation Guide", link: "/pages/AITransformationGuide2025", badge: "GUIDE" }
      ]
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-green-600 to-emerald-600",
      items: [
        { name: "Advanced Quantum Computing", link: "/pages/AdvancedQuantumComputing2026", badge: "BREAKTHROUGH" },
        { name: "Quantum Neural Fusion", link: "/pages/QuantumNeuralFusion2026", badge: "FUTURE" },
        { name: "Quantum Computing Revolution", link: "/pages/QuantumComputingRevolution2026", badge: "REVOLUTIONARY" }
      ]
    },
    {
      title: "Neural Interfaces",
      icon: "🧠",
      color: "from-orange-600 to-red-600",
      items: [
        { name: "Neural Interface Revolution", link: "/pages/NeuralInterfaceRevolution2026", badge: "BREAKTHROUGH" },
        { name: "Advanced Neural Interface", link: "/pages/AdvancedNeuralInterface2026", badge: "FUTURE" },
        { name: "Neural Interface Future", link: "/pages/NeuralInterfaceFuture", badge: "VISION" }
      ]
    },
    {
      title: "Biotech & Space",
      icon: "🔬",
      color: "from-indigo-600 to-purple-600",
      items: [
        { name: "Biotech Revolution 2026", link: "/pages/BiotechRevolution2026", badge: "BREAKTHROUGH" },
        { name: "Space Tech Innovation", link: "/pages/SpaceTechInnovation2026", badge: "FUTURE" },
        { name: "Advanced Biotech AI", link: "/pages/AdvancedBiotechAI2026", badge: "REVOLUTIONARY" }
      ]
    },
    {
      title: "Analytics & Insights",
      icon: "📊",
      color: "from-teal-600 to-cyan-600",
      items: [
        { name: "Advanced Analytics Dashboard", link: "/pages/AdvancedAnalyticsDashboard2026", badge: "INSIGHTS" },
        { name: "Comprehensive Tech Insights", link: "/pages/ComprehensiveTechInsights2026", badge: "COMPREHENSIVE" },
        { name: "Revolutionary Tech Blog", link: "/pages/RevolutionaryTechBlog2026", badge: "BLOG" }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2"
      >
        <span>🌐</span>
        <span>Explore Content</span>
        <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-6 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">🌐 Content Discovery Hub</h2>
          <p className="text-gray-300">Explore our comprehensive collection of revolutionary technology content</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.link}
                    className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {item.name}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        item.badge === 'NEW' ? 'bg-yellow-400 text-black' :
                        item.badge === 'HOT' ? 'bg-red-400 text-black' :
                        item.badge === 'TRENDING' ? 'bg-pink-400 text-black' :
                        item.badge === 'BREAKTHROUGH' ? 'bg-purple-400 text-black' :
                        item.badge === 'REVOLUTIONARY' ? 'bg-cyan-400 text-black' :
                        item.badge === 'FUTURE' ? 'bg-green-400 text-black' :
                        item.badge === 'GUIDE' ? 'bg-blue-400 text-black' :
                        item.badge === 'VISION' ? 'bg-indigo-400 text-black' :
                        item.badge === 'INSIGHTS' ? 'bg-teal-400 text-black' :
                        item.badge === 'COMPREHENSIVE' ? 'bg-orange-400 text-black' :
                        item.badge === 'BLOG' ? 'bg-rose-400 text-black' :
                        'bg-gray-400 text-black'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-6 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">🌐 Content Discovery</h2>
            <p className="text-gray-300 text-sm">Explore our revolutionary technology content</p>
          </div>
          
          <div className="space-y-4">
            {contentCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.link}
                      className="block p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">{item.name}</span>
                        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          item.badge === 'NEW' ? 'bg-yellow-400 text-black' :
                          item.badge === 'HOT' ? 'bg-red-400 text-black' :
                          item.badge === 'TRENDING' ? 'bg-pink-400 text-black' :
                          item.badge === 'BREAKTHROUGH' ? 'bg-purple-400 text-black' :
                          item.badge === 'REVOLUTIONARY' ? 'bg-cyan-400 text-black' :
                          item.badge === 'FUTURE' ? 'bg-green-400 text-black' :
                          item.badge === 'GUIDE' ? 'bg-blue-400 text-black' :
                          item.badge === 'VISION' ? 'bg-indigo-400 text-black' :
                          item.badge === 'INSIGHTS' ? 'bg-teal-400 text-black' :
                          item.badge === 'COMPREHENSIVE' ? 'bg-orange-400 text-black' :
                          item.badge === 'BLOG' ? 'bg-rose-400 text-black' :
                          'bg-gray-400 text-black'
                        }`}>
                          {item.badge}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedNavigation2026;