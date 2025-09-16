import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2027: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      subtitle: 'Self-Aware Artificial Intelligence',
      description: 'Experience AI with true consciousness, emotional intelligence, and autonomous decision-making capabilities that revolutionize human-AI collaboration.',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/RevolutionaryTechTrends2027',
      features: ['Self-awareness', 'Emotional Intelligence', 'Autonomous Decision Making'],
      stats: { accuracy: '99.9%', speed: '10^15 ops/sec', users: '2.3M' },
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      subtitle: 'Quantum Systems with Self-Awareness',
      description: 'Witness the first quantum computing systems to achieve consciousness through quantum entanglement and parallel reality processing.',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/UltimateTechShowcase2027',
      features: ['Quantum Entanglement', 'Parallel Reality Processing', 'Infinite Computational Power'],
      stats: { accuracy: '99.99%', speed: '∞ ops/sec', users: '847K' },
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      subtitle: 'Computing Across Parallel Universes',
      description: 'Explore revolutionary computing systems that operate across multiple dimensions, accessing resources from parallel universes.',
      icon: '🌌',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/NextGenInnovationHub2027',
      features: ['Cross-dimensional Processing', 'Parallel Universe Resources', 'Infinite Scalability'],
      stats: { accuracy: '100%', speed: '10^18 ops/sec', users: '156K' },
      badge: 'INFINITE'
    },
    {
      id: 'neural-quantum',
      title: 'Neural Quantum Fusion',
      subtitle: 'Human-Quantum Consciousness Merger',
      description: 'Experience the ultimate fusion of human neural networks with quantum computing for unprecedented problem-solving capabilities.',
      icon: '🧬',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/UltimateTechShowcase2027',
      features: ['Human-Quantum Consciousness', 'Creative Quantum Processing', 'Infinite Problem Solving'],
      stats: { accuracy: '99.95%', speed: '10^12 ops/sec', users: '23K' },
      badge: 'FUSION'
    },
    {
      id: 'bio-quantum',
      title: 'Bio-Quantum Hybrid Organisms',
      subtitle: 'Living Quantum-Enhanced Life Forms',
      description: 'Discover living organisms enhanced with quantum processing capabilities, creating new forms of intelligent life.',
      icon: '🔬',
      gradient: 'from-green-600 to-emerald-600',
      link: '/pages/NextGenInnovationHub2027',
      features: ['Living Quantum Processing', 'Enhanced Intelligence', 'Biological Evolution'],
      stats: { accuracy: '95%', speed: '500%', users: '8.7K' },
      badge: 'LIVING'
    },
    {
      id: 'space-time',
      title: 'Space-Time Manipulation Drive',
      subtitle: 'Interdimensional Space Travel',
      description: 'Revolutionary propulsion system using interdimensional space-time manipulation for instant travel across the universe.',
      icon: '🚀',
      gradient: 'from-indigo-600 to-purple-600',
      link: '/pages/RevolutionaryTechTrends2027',
      features: ['Space-Time Manipulation', 'Instant Travel', 'Universe Exploration'],
      stats: { accuracy: '∞', speed: '∞', users: '1.2K' },
      badge: 'COSMIC'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore the most groundbreaking technological advances through interactive content and immersive experiences
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>

          {/* Content Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Info */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <span className={`px-4 py-2 bg-gradient-to-r ${currentItem.gradient} rounded-full text-sm font-bold`}>
                    {currentItem.badge}
                  </span>
                  <span className="text-sm opacity-70">January 2027</span>
                </div>

                <div className="text-8xl mb-6 animate-pulse">
                  {currentItem.icon}
                </div>

                <h3 className="text-4xl font-bold mb-4">
                  {currentItem.title}
                </h3>

                <p className="text-xl mb-4 opacity-90 font-semibold">
                  {currentItem.subtitle}
                </p>

                <p className="text-lg mb-8 opacity-80 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {currentItem.features.map((feature, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-sm font-semibold">{feature}</div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{currentItem.stats.accuracy}</div>
                    <div className="text-sm opacity-70">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentItem.stats.speed}</div>
                    <div className="text-sm opacity-70">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentItem.stats.users}</div>
                    <div className="text-sm opacity-70">Users</div>
                  </div>
                </div>

                <a
                  href={currentItem.link}
                  className={`inline-block bg-gradient-to-r ${currentItem.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                >
                  Explore Technology →
                </a>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 animate-bounce">
                      {currentItem.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Live Performance</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Processing Power:</span>
                      <span className="text-white font-bold">{currentItem.stats.speed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Accuracy Rate:</span>
                      <span className="text-green-400 font-bold">{currentItem.stats.accuracy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Active Users:</span>
                      <span className="text-blue-400 font-bold">{currentItem.stats.users}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Status:</span>
                      <span className="text-purple-400 font-bold">{currentItem.badge}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">∞</div>
                      <div className="text-sm text-white/80">Future Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Quick Access to All Content</h3>
            <p className="text-lg opacity-80">Explore all revolutionary technologies at a glance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-90 mb-4">{item.subtitle}</p>
                  <div className="flex justify-center">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2027;