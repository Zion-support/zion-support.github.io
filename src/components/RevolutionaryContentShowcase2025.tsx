import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Revolutionary AI Content 2025",
      description: "Experience the most advanced AI technologies reshaping industries",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAIContent2025",
      features: ["Neural Consciousness AI", "Quantum AI Processing", "Autonomous AI Agents"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Unlock unprecedented computational power with quantum supremacy",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Quantum Optimization"]
    },
    {
      id: 3,
      title: "Advanced Biotech Solutions",
      description: "Revolutionary biotechnology transforming healthcare and life sciences",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      features: ["Gene Editing", "Personalized Medicine", "Synthetic Biology"]
    },
    {
      id: 4,
      title: "Space Technology Innovation",
      description: "Cutting-edge space technology enabling interplanetary exploration",
      image: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/SpaceTechInnovation2026",
      features: ["Mars Colonization", "Space Mining", "Interstellar Travel"]
    },
    {
      id: 5,
      title: "Advanced Robotics 2026",
      description: "Next-generation robotics with human-like capabilities and intelligence",
      image: "🤖",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedRobotics2026",
      features: ["Humanoid Robots", "Autonomous Systems", "AI Integration"]
    },
    {
      id: 6,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces revolutionizing human-computer interaction",
      image: "🧠",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Thought Control", "Memory Enhancement", "Telepathic Communication"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our latest innovations and breakthrough technologies that are 
            reshaping industries and transforming the way we live and work.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {showcaseItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-12 rounded-3xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6 animate-bounce">{item.image}</div>
                          <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                          <p className="text-xl text-white/90 mb-6">{item.description}</p>
                          <div className="space-y-2 mb-8">
                            {item.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-white/80">
                                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <Link 
                            to={item.link}
                            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                          >
                            Explore Now →
                          </Link>
                        </div>
                        <div className="hidden md:block">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                            <div className="space-y-3">
                              {item.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center">
                                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-sm">✓</span>
                                  </div>
                                  <span className="text-white/90">{feature}</span>
                                </div>
                              ))}
                            </div>
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

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                index === currentSlide ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="text-4xl mb-4">{item.image}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm mb-4">{item.description}</p>
              <div className="flex items-center text-white/60 text-sm">
                <span className="mr-2">Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Dive deeper into our revolutionary technologies and discover how they can transform your business.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              View All Technologies
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2025;