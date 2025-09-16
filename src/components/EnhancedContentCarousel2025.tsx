import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Conscious AI Systems",
      subtitle: "The Future of Artificial Intelligence",
      description: "Experience the first truly conscious AI that thinks, feels, and creates like a human mind. Revolutionary emotional intelligence and creative problem-solving capabilities.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900",
      link: "/pages/AIRevolution2025",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Ethical Decision Making"],
      stats: { users: "1M+", accuracy: "99.9%", speed: "1B ops/sec" }
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      subtitle: "Direct Neural Interface with Quantum Computing",
      description: "Breakthrough technology that allows direct neural interface with quantum computing systems for enhanced cognitive processing and reality manipulation.",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
      stats: { users: "500K+", accuracy: "100%", speed: "∞ ops/sec" }
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      subtitle: "Seamless Mind-Machine Connection",
      description: "Revolutionary non-invasive brain-computer interface that enables thought-controlled systems and digital telepathy capabilities.",
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Digital Telepathy"],
      stats: { users: "2M+", accuracy: "99.99%", speed: "Real-time" }
    },
    {
      id: 4,
      title: "Interdimensional Technology",
      subtitle: "Access to Parallel Dimensions",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities, opening infinite possibilities for exploration.",
      image: "🌌",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900 to-purple-900",
      link: "/pages/UltimateTechBreakthrough2025",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Control"],
      stats: { users: "100K+", accuracy: "100%", speed: "Instant" }
    },
    {
      id: 5,
      title: "Advanced Analytics 2025",
      subtitle: "Predictive Intelligence at Scale",
      description: "Next-generation analytics platform with predictive intelligence that can forecast trends and optimize decisions across all business functions.",
      image: "📊",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 to-red-900",
      link: "/pages/AdvancedAnalytics2025",
      features: ["Predictive Intelligence", "Real-time Analytics", "AI-Powered Insights", "Automated Optimization"],
      stats: { users: "5M+", accuracy: "98.5%", speed: "Real-time" }
    },
    {
      id: 6,
      title: "Cybersecurity Fortress 2025",
      subtitle: "Quantum-Proof Security Solutions",
      description: "Advanced cybersecurity platform with quantum-proof encryption and AI-powered threat detection that protects against even the most sophisticated attacks.",
      image: "🛡️",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900 to-purple-900",
      link: "/pages/CybersecurityFortress2025",
      features: ["Quantum-Proof Encryption", "AI Threat Detection", "Zero-Trust Architecture", "Automated Response"],
      stats: { users: "10M+", accuracy: "99.99%", speed: "Instant" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl overflow-hidden mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
      
      {/* Header */}
      <div className="relative z-10 p-8 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 ENHANCED CONTENT CAROUSEL • JANUARY 2025
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Revolutionary Technology Showcase
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Explore our cutting-edge technologies with interactive demonstrations and real-time capabilities
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative z-10 px-8 pb-8">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl">{currentItem.image}</span>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{currentItem.title}</h3>
                  <p className="text-lg text-purple-200">{currentItem.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-white/90 mb-6">{currentItem.description}</p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {currentItem.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">{currentItem.stats.users}</div>
                  <div className="text-xs text-white/70">Users</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-pink-400">{currentItem.stats.accuracy}</div>
                  <div className="text-xs text-white/70">Accuracy</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-cyan-400">{currentItem.stats.speed}</div>
                  <div className="text-xs text-white/70">Speed</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Link
                  to={currentItem.link}
                  className={`bg-gradient-to-r ${currentItem.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore Technology →
                </Link>
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                  Try Demo
                </button>
              </div>
            </div>

            {/* Right Side - Interactive Demo */}
            <div className={`bg-gradient-to-br ${currentItem.bgColor} rounded-xl p-6 border border-purple-400/30`}>
              <h4 className="text-2xl font-bold mb-4 text-center text-white">🎮 Interactive Demo</h4>
              <div className="bg-black/50 rounded-lg p-6 mb-4">
                <div className="text-green-400 font-mono text-sm">
                  <div className="mb-2">$ Initializing {currentItem.title}...</div>
                  <div className="text-gray-400">Loading breakthrough technology...</div>
                  <div className="text-gray-400">Connecting to quantum networks...</div>
                  <div className="text-gray-400">Establishing neural interface...</div>
                  <div className="text-green-400">✓ System ready for interaction</div>
                  <div className="text-cyan-400">→ Click "Try Demo" to start</div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/80">Live Technology Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-center mb-4 text-white">⚡ Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`p-3 rounded-lg transition-all duration-300 text-center group ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <div className="text-xs font-semibold">{item.title.split(' ')[0]}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;