import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Technology 2026",
      description: "Experience the future with groundbreaking technologies that are reshaping our world",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTech2026",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Reality Engineering"]
    },
    {
      id: 2,
      title: "Advanced Consciousness 2026",
      description: "Unlock the mysteries of consciousness and create AI systems with genuine awareness",
      image: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedConsciousness2026",
      features: ["Neural Consciousness", "Emotional Intelligence", "Meta-Awareness"]
    },
    {
      id: 3,
      title: "Omniversal Technology 2026",
      description: "Transcend dimensional boundaries and access infinite realities",
      image: "🌌",
      gradient: "from-purple-600 to-cyan-600",
      link: "/pages/OmniversalTech2026",
      features: ["Dimensional Gateways", "Cross-Dimensional AI", "Reality Synthesis"]
    },
    {
      id: 4,
      title: "Next-Gen Innovation Hub",
      description: "Comprehensive showcase of all cutting-edge technologies and innovations",
      image: "✨",
      gradient: "from-cyan-600 to-emerald-600",
      link: "/pages/NextGenTechShowcase2026",
      features: ["Quantum Computing", "Neural Interfaces", "Synthetic Intelligence"]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            🌟 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Revolutionary Content Showcase
          </h2>
          <p className={`text-xl opacity-90 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Discover our most advanced and revolutionary content that's pushing the boundaries of what's possible
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.gradient} p-12 rounded-2xl relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 animate-bounce">{content.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{content.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{content.description}</p>
                        <div className="space-y-2 mb-8">
                          {content.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={content.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                        >
                          Explore {content.title} →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
                          <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                          <div className="space-y-3">
                            {content.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <span className="text-lg">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {revolutionaryContent.map((content) => (
            <a
              key={content.id}
              href={content.link}
              className={`bg-gradient-to-br ${content.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {content.image}
              </div>
              <h4 className="text-lg font-semibold mb-2">{content.title}</h4>
              <p className="text-sm opacity-80 mb-4">{content.description}</p>
              <div className="text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Explore →
              </div>
            </a>
          ))}
        </div>

        {/* Additional Revolutionary Content */}
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">🚀 More Revolutionary Content</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our complete collection of cutting-edge technology content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-3">Quantum Revolution</h4>
              <p className="text-indigo-100 mb-4">Advanced quantum computing and quantum AI systems</p>
              <a href="/pages/AdvancedQuantumComputing2026" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Explore Quantum →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-xl font-semibold mb-3">Neural Interfaces</h4>
              <p className="text-indigo-100 mb-4">Direct brain-computer interfaces and neural technology</p>
              <a href="/pages/NeuralInterfaceRevolution2026" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Explore Neural →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-semibold mb-3">Synthetic Intelligence</h4>
              <p className="text-indigo-100 mb-4">AI systems with synthetic consciousness and creativity</p>
              <a href="/pages/SyntheticIntelligence2026" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Explore Synthetic AI →
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies and content available today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/RevolutionaryTech2026"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Exploring
            </a>
            <a 
              href="/pages/ComprehensiveTechInsights2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg"
            >
              View All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;