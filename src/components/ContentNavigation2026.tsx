<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const ContentNavigation2026: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentSections = [
    { id: 'revolutionary-tech', label: 'Revolutionary Tech', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'ai-revolution', label: 'AI Revolution', icon: '🤖', color: 'from-blue-500 to-purple-500' },
    { id: 'quantum-computing', label: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { id: 'neural-interfaces', label: 'Neural Interfaces', icon: '🧠', color: 'from-purple-500 to-pink-500' },
    { id: 'space-tech', label: 'Space Technology', icon: '🚀', color: 'from-orange-500 to-red-500' },
    { id: 'biotech', label: 'Biotechnology', icon: '🧬', color: 'from-violet-500 to-purple-500' },
    { id: 'interactive-demos', label: 'Interactive Demos', icon: '🎮', color: 'from-emerald-500 to-teal-500' },
    { id: 'tech-insights', label: 'Tech Insights', icon: '🔮', color: 'from-indigo-500 to-cyan-500' }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSticky ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🌟</div>
            <span className="text-xl font-bold text-white">Zion Tech 2026</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {contentSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 space-y-2">
          {contentSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
=======
import React, { useState } from 'react';

const ContentNavigation2026: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contentCategories = [
    {
      title: 'Revolutionary Technologies',
      icon: '🚀',
      color: 'from-purple-600 to-pink-600',
      items: [
        { name: 'Revolutionary Tech Showcase', link: '/pages/RevolutionaryTechShowcase2026', badge: 'NEW' },
        { name: 'Advanced Tech Insights', link: '/pages/AdvancedTechInsights2026', badge: 'INSIGHTS' },
        { name: 'Ultimate Tech Showcase', link: '/pages/UltimateTechShowcase2026', badge: 'INTERACTIVE' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: 'from-cyan-600 to-blue-600',
      items: [
        { name: 'Advanced AI Systems 2026', link: '/pages/AdvancedAISystems2026', badge: 'AI' },
        { name: 'Synthetic Intelligence', link: '/pages/SyntheticIntelligence2026', badge: 'BREAKTHROUGH' },
        { name: 'AI Revolution 2025', link: '/pages/AIRevolution2025', badge: 'POPULAR' }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-emerald-600 to-teal-600',
      items: [
        { name: 'Advanced Quantum Computing', link: '/pages/AdvancedQuantumComputing2026', badge: 'QUANTUM' },
        { name: 'Quantum-Neural Fusion', link: '/pages/QuantumNeuralFusion2026', badge: 'FUSION' },
        { name: 'Quantum Computing Revolution', link: '/pages/QuantumComputingRevolution2026', badge: 'REVOLUTION' }
      ]
    },
    {
      title: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      items: [
        { name: 'Neural Interface Revolution', link: '/pages/NeuralInterfaceRevolution2026', badge: 'NEURAL' },
        { name: 'Neural Interface Future', link: '/pages/NeuralInterfaceFuture', badge: 'FUTURE' },
        { name: 'Neural Interface Revolution 2025', link: '/pages/NeuralInterfaceRevolution2025', badge: '2025' }
      ]
    },
    {
      title: 'Biotechnology',
      icon: '🧬',
      color: 'from-violet-600 to-purple-600',
      items: [
        { name: 'Advanced Biotech Revolution', link: '/pages/AdvancedBiotechRevolution2026', badge: 'BIOTECH' },
        { name: 'Space Tech Innovation', link: '/pages/SpaceTechInnovation2026', badge: 'SPACE' },
        { name: 'Advanced Robotics', link: '/pages/AdvancedRobotics2026', badge: 'ROBOTICS' }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🧭</span>
            <span className="text-cyan-300 font-semibold ml-2">CONTENT NAVIGATION 2026</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌟 Explore All Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive collection of revolutionary technology content
          </p>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            {isOpen ? '📚 Hide Navigation' : '🧭 Show All Content'}
          </button>
        </div>

        {/* Content Categories */}
        <div className={`grid gap-6 ${isOpen ? 'block' : 'hidden md:grid'} md:grid-cols-2 lg:grid-cols-3`}>
          {contentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.link}
                    className={`block p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      item.badge === 'NEW' || item.badge === 'BREAKTHROUGH'
                        ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/30'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200 text-sm font-medium">{item.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        item.badge === 'NEW' || item.badge === 'BREAKTHROUGH'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white/20 text-gray-300'
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

        {/* Quick Stats */}
        <div className="mt-8 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">25+</div>
              <div className="text-sm text-gray-300">Content Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">6</div>
              <div className="text-sm text-gray-300">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-gray-300">Interactive</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">2026</div>
              <div className="text-sm text-gray-300">Latest Tech</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pages/RevolutionaryTechShowcase2026"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              🚀 Start Exploring
            </a>
            <a
              href="/pages/AdvancedTechInsights2026"
              className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              📊 View Insights
            </a>
          </div>
        </div>
>>>>>>> origin/revolutionary-content-2026
      </div>
    </div>
  );
};

export default ContentNavigation2026;