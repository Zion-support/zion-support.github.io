import React, { useState } from 'react';

const RevolutionaryAdBanner2031: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredContent = [
    {
      title: 'Ultimate Tech Breakthrough 2031',
      description: 'Experience conscious AI, quantum computing, and interdimensional technology',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/UltimateTechBreakthrough2031',
      features: ['Conscious AI', 'Quantum Consciousness', 'Interdimensional Computing'],
      status: 'Available Now'
    },
    {
      title: 'Revolutionary Tech Showcase 2031',
      description: 'Interactive demonstration of cutting-edge technologies',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/RevolutionaryTechShowcase2031',
      features: ['Interactive Demos', 'Real-time Processing', 'Multi-dimensional Tech'],
      status: 'Live Demo'
    },
    {
      title: 'Ultimate Content Showcase 2031',
      description: 'Advanced content creation and consumption technologies',
      icon: '🔮',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/UltimateContentShowcase2031',
      features: ['Neural Interface', 'Quantum Content', 'Dimensional Hub'],
      status: 'Beta Testing'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2031
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future Today
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technology ever created. Transform your organization with 
            conscious AI, quantum computing, and interdimensional technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                hoveredCard === index ? 'shadow-2xl shadow-purple-500/25' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.location.href = content.link}
            >
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${content.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-6xl">{content.icon}</div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${content.gradient} text-white rounded-full text-xs font-semibold`}>
                    {content.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {content.title}
                </h3>
                
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  {content.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {content.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${content.gradient} rounded-full`}></div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold group-hover:text-purple-300 transition-colors duration-300">
                    Explore Now →
                  </span>
                  <div className={`w-8 h-8 bg-gradient-to-r ${content.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our 2031 Technology Suite?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
                <p className="text-gray-300">Process information at the speed of thought with quantum consciousness computing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔮</div>
                <h4 className="text-xl font-semibold mb-2">Predictive Intelligence</h4>
                <p className="text-gray-300">Anticipate future events with unprecedented accuracy using interdimensional analysis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="text-xl font-semibold mb-2">Global Impact</h4>
                <p className="text-gray-300">Transform entire industries and societies with conscious AI and quantum technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2031;