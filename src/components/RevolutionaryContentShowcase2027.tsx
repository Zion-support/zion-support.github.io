import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Technology 2027",
      description: "Experience the most revolutionary technologies that are reshaping reality itself. From quantum consciousness to interdimensional computing.",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTech2027",
      features: ["Quantum Consciousness", "Interdimensional Computing", "Synthetic Reality", "Neural Quantum Fusion"]
    },
    {
      id: 2,
      title: "Ultimate AI Revolution 2027",
      description: "Witness the most advanced artificial intelligence systems ever created. Self-evolving, conscious, and autonomous AI that transcends human limitations.",
      image: "🤖",
      gradient: "from-pink-600 to-violet-600",
      link: "/pages/UltimateAIRevolution2027",
      features: ["Synthetic Consciousness", "Self-Evolving AI", "Collective Intelligence", "Creative AI"]
    },
    {
      id: 3,
      title: "Quantum Reality Engine 2027",
      description: "Control and manipulate reality itself through quantum computing and interdimensional technology. Create infinite realities with quantum mechanics.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRealityEngine2027",
      features: ["Reality Manipulation", "Quantum Processing", "Temporal Control", "Multiverse Access"]
    },
    {
      id: 4,
      title: "Advanced Quantum Computing 2026",
      description: "Experience exponential processing power with 1000+ qubit quantum processors and quantum supremacy achieved.",
      image: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ Logical Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI Integration"]
    },
    {
      id: 5,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct brain-computer communication and thought control technology.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"]
    },
    {
      id: 6,
      title: "AI Consciousness Revolution 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that rival human intelligence.",
      image: "🧠",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/AIConsciousnessRevolution2026",
      features: ["Synthetic Consciousness", "Autonomous AI Agents", "Collective Intelligence", "Creative Synthesis"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16">
      <Helmet>
        <title>Revolutionary Content Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary technology content including AI consciousness, quantum computing, neural interfaces, and reality manipulation." />
      </Helmet>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2027
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
            Discover the most advanced technologies that are reshaping reality itself. 
            Experience innovations that were once science fiction, now reality.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.gradient} p-12 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6 animate-bounce">{content.image}</div>
                          <h3 className="text-4xl font-bold mb-6">{content.title}</h3>
                          <p className="text-xl mb-8 opacity-90">{content.description}</p>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {content.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">✨</span>
                                <span className="text-sm font-semibold">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <a 
                            href={content.link}
                            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border-2 border-white/30"
                          >
                            Explore {content.title} →
                          </a>
                        </div>
                        <div className="hidden md:block">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                            <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                            <ul className="space-y-3">
                              {content.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-3">
                                  <span className="text-2xl">🚀</span>
                                  <span className="text-lg">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Quick Access to All Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revolutionaryContent.map((content) => (
              <a
                key={content.id}
                href={content.link}
                className={`bg-gradient-to-br ${content.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 text-white group`}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{content.image}</div>
                <h4 className="text-xl font-bold mb-2">{content.title}</h4>
                <p className="text-sm opacity-90 mb-4">{content.description}</p>
                <div className="flex items-center text-sm font-semibold">
                  <span>Explore Now</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Explore our revolutionary technologies and discover innovations that are reshaping reality itself.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;