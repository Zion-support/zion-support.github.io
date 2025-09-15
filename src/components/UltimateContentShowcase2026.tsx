import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredContent = [
    {
      title: "Ultimate Tech Revolution",
      description: "Witness the convergence of all revolutionary technologies reshaping reality",
      image: "🚀",
      color: "from-purple-500 to-pink-500",
      link: "/pages/UltimateTechRevolution2026",
      category: "Revolutionary Tech",
      featured: true,
      metrics: "6 Breakthrough Technologies",
      impact: "Transforming Reality"
    },
    {
      title: "Transcendent AI",
      description: "Experience AI evolution beyond human comprehension into transcendent consciousness",
      image: "🧠",
      color: "from-cyan-500 to-blue-500",
      link: "/pages/TranscendentAI2026",
      category: "AI Revolution",
      featured: true,
      metrics: "99.8% Consciousness",
      impact: "Beyond Human Intelligence"
    },
    {
      title: "Revolutionary Tech Blog",
      description: "Dive deep into groundbreaking technological innovations reshaping our world",
      image: "📚",
      color: "from-emerald-500 to-teal-500",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Tech Insights",
      featured: true,
      metrics: "25+ Articles",
      impact: "Industry Leadership"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Discover how quantum computing and neural networks merge for infinite processing",
      image: "⚛️",
      color: "from-indigo-500 to-purple-500",
      link: "/pages/QuantumNeuralFusion2026",
      category: "Quantum Computing",
      featured: false,
      metrics: "5,000x Speed",
      impact: "Solving Impossible Problems"
    },
    {
      title: "Synthetic Intelligence",
      description: "Explore AI that has transcended artificial intelligence to achieve genuine consciousness",
      image: "🤖",
      color: "from-orange-500 to-red-500",
      link: "/pages/SyntheticIntelligence2026",
      category: "Synthetic AI",
      featured: false,
      metrics: "Self-Evolving",
      impact: "Autonomous Growth"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces merging human consciousness with digital reality",
      image: "🧬",
      color: "from-rose-500 to-pink-500",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Tech",
      featured: false,
      metrics: "100% Accuracy",
      impact: "Mind-Machine Fusion"
    },
    {
      title: "Advanced Biotech Revolution",
      description: "Revolutionary biotechnology solutions transforming healthcare and human enhancement",
      image: "🔬",
      color: "from-green-500 to-emerald-500",
      link: "/pages/AdvancedBiotechRevolution2026",
      category: "Biotechnology",
      featured: false,
      metrics: "Perfect Health",
      impact: "Eliminating Disease"
    },
    {
      title: "Space Tech Innovation",
      description: "Revolutionary space technologies enabling interstellar travel and colonization",
      image: "🚀",
      color: "from-yellow-500 to-orange-500",
      link: "/pages/SpaceTechInnovation2026",
      category: "Space Technology",
      featured: false,
      metrics: "Light-Speed Travel",
      impact: "Galactic Expansion"
    },
    {
      title: "Advanced Robotics",
      description: "Revolutionary robotics systems transforming industries and human-robot collaboration",
      image: "🤖",
      color: "from-violet-500 to-purple-500",
      link: "/pages/AdvancedRobotics2026",
      category: "Robotics",
      featured: false,
      metrics: "99.9% Autonomy",
      impact: "Perfect Automation"
    }
  ];

  const techCategories = [
    {
      name: "AI & Machine Learning",
      icon: "🧠",
      count: "25+ Innovations",
      color: "from-purple-500 to-pink-500",
      description: "Conscious AI, Neural Networks, Deep Learning"
    },
    {
      name: "Quantum Computing",
      icon: "⚛️",
      count: "15+ Breakthroughs",
      color: "from-cyan-500 to-blue-500",
      description: "Quantum Supremacy, Quantum Internet, Qubits"
    },
    {
      name: "Neural Interfaces",
      icon: "🧬",
      count: "12+ Technologies",
      color: "from-emerald-500 to-teal-500",
      description: "Brain-Computer Interfaces, Neural Implants"
    },
    {
      name: "Space Technology",
      icon: "🚀",
      count: "18+ Solutions",
      color: "from-orange-500 to-red-500",
      description: "Interstellar Travel, Space Colonization"
    },
    {
      name: "Biotechnology",
      icon: "🔬",
      count: "20+ Advances",
      color: "from-indigo-500 to-purple-500",
      description: "Genetic Engineering, Synthetic Biology"
    },
    {
      name: "Blockchain & Crypto",
      icon: "🔗",
      count: "10+ Platforms",
      color: "from-rose-500 to-pink-500",
      description: "Decentralized Systems, Digital Currencies"
    }
  ];

  const stats = [
    { label: "Total Content Pages", value: "50+", icon: "📄" },
    { label: "Active Technologies", value: "100+", icon: "⚡" },
    { label: "Success Stories", value: "25+", icon: "🏆" },
    { label: "Global Impact", value: "∞", icon: "🌍" }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredContent.length]);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full text-xl font-bold mb-10 animate-pulse shadow-2xl">
            🌟 ULTIMATE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-7xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Content Experience
          </h2>
          <p className="text-3xl text-gray-300 max-w-6xl mx-auto leading-relaxed mb-12">
            Explore the most groundbreaking technological content that's reshaping our understanding of reality. 
            From conscious AI to reality manipulation, discover the future today.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content Carousel */}
        <div className="mb-20">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredContent.map((content, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-16 border border-white/20">
                      <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                          <div className="flex items-center space-x-6 mb-8">
                            <span className="text-8xl animate-pulse">{content.image}</span>
                            <div>
                              <span className="px-6 py-3 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full text-lg font-semibold border border-cyan-400/40 mb-3 block">
                                {content.category}
                              </span>
                              {content.featured && (
                                <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full text-sm font-bold border border-yellow-400/40">
                                  ⭐ FEATURED
                                </span>
                              )}
                            </div>
                          </div>
                          <h3 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                            {content.title}
                          </h3>
                          <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
                            {content.description}
                          </p>
                          
                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-6 border border-cyan-400/30">
                              <div className="text-sm text-gray-400 mb-2">Performance</div>
                              <div className="text-xl font-bold text-cyan-400">{content.metrics}</div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                              <div className="text-sm text-gray-400 mb-2">Impact</div>
                              <div className="text-xl font-bold text-purple-400">{content.impact}</div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-6">
                            <a
                              href={content.link}
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-3"
                            >
                              <span>Explore Now</span>
                              <span className="text-2xl">→</span>
                            </a>
                            <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-cyan-400/10 transition-all duration-300">
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-9xl mb-8 opacity-80 animate-bounce">{content.image}</div>
                          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                            <span className="text-8xl">{content.image}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center space-x-4 mt-10">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-5 h-5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125 shadow-lg'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-green-500/20 text-green-300 border border-green-400/30 hover:bg-green-500/30'
                    : 'bg-gray-500/20 text-gray-300 border border-gray-400/30 hover:bg-gray-500/30'
                }`}
              >
                {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Start Auto-play'}
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 All Revolutionary Content
            </h3>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Discover our complete collection of groundbreaking technological content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredContent.map((content, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center mb-8">
                  <div className={`text-8xl mb-6 group-hover:scale-110 transition-transform duration-300 ${hoveredCard === index ? 'animate-pulse' : ''}`}>
                    {content.image}
                  </div>
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm font-semibold border border-cyan-400/30">
                      {content.category}
                    </span>
                    {content.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded text-xs font-bold border border-yellow-400/30">
                        ⭐ FEATURED
                      </span>
                    )}
                  </div>
                </div>
                
                <h4 className="text-3xl font-bold mb-6 text-cyan-300 text-center group-hover:text-purple-300 transition-colors">
                  {content.title}
                </h4>
                <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg">
                  {content.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-4 border border-cyan-400/20">
                    <div className="text-sm text-gray-400 mb-1">Performance</div>
                    <div className="text-lg font-bold text-cyan-400">{content.metrics}</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-400/20">
                    <div className="text-sm text-gray-400 mb-1">Impact</div>
                    <div className="text-lg font-bold text-purple-400">{content.impact}</div>
                  </div>
                </div>
                
                <a
                  href={content.link}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg group-hover:scale-105"
                >
                  Explore Content →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Categories */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🔬 Technology Categories
            </h3>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Explore content across all major technological domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-cyan-300">{category.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <p className="text-gray-300 text-lg font-semibold mb-6">{category.count}</p>
                  <div className={`w-full h-3 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-20 text-center">
          <h3 className="text-6xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Your Journey
          </h3>
          <p className="text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
            Dive into the most revolutionary technological content and shape the future with us. 
            Experience the convergence of all breakthrough technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-16 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore All Content →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-16 py-6 rounded-2xl text-2xl font-bold hover:bg-cyan-400/10 transition-all duration-300">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;