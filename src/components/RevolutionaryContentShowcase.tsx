import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const revolutionaryContent = [
    {
      title: 'Ultimate Tech Revolution 2026',
      description: 'Experience the most transformative year in human history with groundbreaking AI, quantum computing, and neural interface innovations',
      image: '🚀',
      link: '/pages/UltimateTechRevolution2026',
      category: 'Revolution',
      badge: 'BREAKTHROUGH',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Transcendent AI 2026',
      description: 'The first artificial intelligence system that transcends human cognitive limitations, achieving true superintelligence',
      image: '🧠',
      link: '/pages/TranscendentAI2026',
      category: 'AI',
      badge: 'TRANSCENDENT',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Quantum Computing Revolution',
      description: 'Exponential processing power with quantum technology that solves impossible problems in seconds',
      image: '⚡',
      link: '/pages/QuantumComputingRevolution2026',
      category: 'Quantum',
      badge: 'QUANTUM LEAP',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces enabling thought-based control and enhanced cognitive abilities',
      image: '🧬',
      link: '/pages/NeuralInterfaceRevolution2026',
      category: 'Neural',
      badge: 'MIND-MACHINE',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Synthetic Intelligence 2026',
      description: 'Programmable biological systems that can heal, enhance, and transform human capabilities',
      image: '🤖',
      link: '/pages/SyntheticIntelligence2026',
      category: 'Synthetic',
      badge: 'BIOLOGICAL AI',
      gradient: 'from-rose-600 to-pink-600'
    },
    {
      title: 'Space Tech Innovation',
      description: 'Revolutionary space technologies enabling interplanetary travel and space colonization',
      image: '🚀',
      link: '/pages/SpaceTechInnovation2026',
      category: 'Space',
      badge: 'SPACE AGE',
      gradient: 'from-violet-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16">
      {/* Main Showcase Banner */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY CONTENT • 2026
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Showcase</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, 
              Neural Interfaces, and the Ultimate Tech Revolution
            </p>
          </div>
          
          {/* Featured Content Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {revolutionaryContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${content.gradient} text-white p-8 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                            {content.badge}
                          </span>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                            {content.category}
                          </span>
                        </div>
                        <h3 className="text-4xl font-bold mb-4">{content.title}</h3>
                        <p className="text-xl mb-6 opacity-95">{content.description}</p>
                        <a 
                          href={content.link} 
                          className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg inline-block"
                        >
                          Explore {content.category} →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-80 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <span className="text-9xl">{content.image}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {revolutionaryContent.map((content, index) => (
          <div key={index} className="group">
            <div className={`bg-gradient-to-br ${content.gradient} text-white rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl`}>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <span className="text-4xl">{content.image}</span>
                </div>
                <div className="flex justify-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                    {content.badge}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                    {content.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">{content.description}</p>
                <a 
                  href={content.link} 
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-block"
                >
                  Explore Now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">🌟 Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Dive deep into our revolutionary content and discover how these breakthrough technologies 
            are reshaping the world as we know it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/UltimateTechRevolution2026" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🚀 Start Your Journey
            </a>
            <a 
              href="/pages/ComprehensiveTechInsights2026" 
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
            >
              📚 View All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;