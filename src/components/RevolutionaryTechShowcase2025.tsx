import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    {
      id: 'ai-metaverse',
      title: 'AI-MetaVerse Integration',
      subtitle: 'Intelligent Virtual Worlds',
      description: 'Experience the convergence of AI and VR where digital worlds become adaptive and intelligent.',
      icon: '🌐',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-100 to-pink-100',
      link: '/pages/AIMetaVerseIntegration2025',
      features: ['Intelligent Virtual Beings', 'Adaptive Virtual Worlds', 'Seamless Reality Bridge'],
      stats: { value: '95%', label: 'User Engagement' }
    },
    {
      id: 'biotech-ai',
      title: 'BioTech AI Revolution',
      subtitle: 'Healthcare Transformation',
      description: 'AI-powered biotechnology revolutionizing drug discovery and personalized medicine.',
      icon: '🧬',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'from-emerald-100 to-green-100',
      link: '/pages/BiotechAIRevolution2025',
      features: ['AI Drug Discovery', 'Genomic Analysis', 'Synthetic Biology'],
      stats: { value: '92%', label: 'Success Rate' }
    },
    {
      id: 'space-tech',
      title: 'SpaceTech AI 2025',
      subtitle: 'Space Exploration Frontier',
      description: 'Pioneering space exploration with AI-powered autonomous systems and interplanetary missions.',
      icon: '🚀',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-100 to-indigo-100',
      link: '/pages/SpaceTechAI2025',
      features: ['Mars Colonization', 'Deep Space Exploration', 'Asteroid Mining'],
      stats: { value: '3x', label: 'Mission Efficiency' }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
          🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">🚀 Next-Generation Technology Showcase</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Experience the most advanced AI, biotechnology, and space technologies that are reshaping our world
        </p>
      </div>

      {/* Interactive Tech Selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-2xl p-2 shadow-lg">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content Display */}
      <div className="relative">
        {technologies.map((tech, index) => (
          <div
            key={tech.id}
            className={`transition-all duration-700 ${
              activeTech === index
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-10 scale-95 absolute inset-0'
            }`}
          >
            <div className={`bg-gradient-to-br ${tech.bgColor} rounded-3xl p-12 shadow-2xl`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="text-6xl">{tech.icon}</div>
                    <div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                      <p className="text-xl text-gray-600">{tech.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-4xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                          {tech.stats.value}
                        </div>
                        <div className="text-gray-600 font-medium">{tech.stats.label}</div>
                      </div>
                      <div className="text-4xl opacity-20">{tech.icon}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-4">
                    <a
                      href={tech.link}
                      className={`bg-gradient-to-r ${tech.color} text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105`}
                    >
                      Explore {tech.title} →
                    </a>
                    <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-400 transition-colors font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="relative">
                  <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="text-8xl mb-6 text-center opacity-80">{tech.icon}</div>
                      <div className="space-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-sm opacity-90 mb-1">Technology Stack</div>
                          <div className="text-lg font-semibold">AI + Advanced Computing</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-sm opacity-90 mb-1">Innovation Level</div>
                          <div className="text-lg font-semibold">Breakthrough</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-sm opacity-90 mb-1">Market Impact</div>
                          <div className="text-lg font-semibold">Revolutionary</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Background Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTech(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeTech === index
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-6">
          Ready to experience the future of technology?
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/pages/InnovationLanding2025"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Explore All Innovations →
          </a>
          <a
            href="/contact"
            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;