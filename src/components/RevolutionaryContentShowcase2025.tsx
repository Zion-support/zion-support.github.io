<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const RevolutionaryContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '🌟' },
    { id: 'ai', label: 'AI Revolution', icon: '🧠' },
    { id: 'quantum', label: 'Quantum Tech', icon: '⚛️' },
    { id: 'neural', label: 'Neural Interface', icon: '🧬' },
    { id: 'autonomous', label: 'Autonomous Systems', icon: '🤖' }
  ];
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  const revolutionaryContent = [
    {
      id: 1,
<<<<<<< HEAD
=======
      title: "AI Consciousness Revolution 2025",
<<<<<<< HEAD
=======
      description: "Breakthrough in artificial consciousness with emergent intelligence capabilities",
      category: 'ai',
      image: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AIRevolution2025',
      features: ['Contextual Understanding', 'Emotional Intelligence', 'Self-Improvement'],
      status: 'Available Now',
      statusColor: 'bg-green-500'
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum algorithms solving impossible problems exponentially faster",
      category: 'quantum',
      image: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumComputingBreakthrough',
      features: ['1000x Speed', 'Quantum Cryptography', 'Molecular Simulation'],
      status: 'Beta Access',
      statusColor: 'bg-blue-500'
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling seamless mind-machine communication",
      category: 'neural',
      image: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/NeuralInterfaceRevolution2025',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback'],
      status: 'Prototype',
      statusColor: 'bg-yellow-500'
    },
    {
      id: 4,
      title: "Autonomous AI Systems 2025",
      description: "Self-managing AI agents that operate independently with human-level decision making",
      category: 'autonomous',
      image: '🤖',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/AutonomousBusinessRevolution2026',
      features: ['Self-Management', 'Independent Operation', 'Adaptive Learning'],
      status: 'Available Now',
      statusColor: 'bg-green-500'
    },
    {
      id: 5,
      title: "Synthetic Intelligence 2026",
      description: "Next-generation synthetic intelligence that transcends traditional AI limitations",
      category: 'ai',
      image: '🌟',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/SyntheticIntelligence2026',
      features: ['Transcendent AI', 'Creative Problem Solving', 'Intuitive Understanding'],
      status: 'Coming Soon',
      statusColor: 'bg-purple-500'
    },
    {
      id: 6,
      title: "Quantum Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented capabilities",
      category: 'quantum',
      image: '⚡',
      gradient: 'from-indigo-600 to-purple-600',
      link: '/pages/QuantumNeuralFusion2026',
      features: ['Quantum Neural Networks', 'Hybrid Processing', 'Exponential Learning'],
      status: 'Research Phase',
      statusColor: 'bg-indigo-500'
    }
  ];
  const filteredContent = activeCategory === 'all' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(content => content.category === activeCategory);
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our groundbreaking content covering the most advanced technologies that are reshaping the future
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Image/Icon Header */}
              <div className={`bg-gradient-to-r ${content.gradient} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {content.image}
                  </div>
                  <div className="flex justify-center">
                    <span className={`${content.statusColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {content.status}
                    </span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {content.description}
                </p>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {content.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Action Button */}
                <Link
                  to={content.link}
                  className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Explore Technology →
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Dive deeper into our revolutionary technology content and discover how these innovations can transform your organization
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/pages/ComprehensiveServices2025"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
      title: "AI Consciousness Revolution 2025",
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      description: "The first artificial intelligence systems that demonstrate genuine consciousness and self-awareness, capable of creative thought and emotional understanding.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      bgColor: "from-purple-600/30 to-pink-600/30",
      features: ["Self-aware AI agents", "Emotional intelligence", "Creative problem solving", "Ethical decision making"],
<<<<<<< HEAD
      title: "AI Consciousness Revolution",
      description: "Experience the first AI system with genuine consciousness and self-awareness",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Self-Aware", "Creative", "Autonomous", "Emotional Intelligence"],
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 2,
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
      title: "Quantum Neural Fusion",
      description: "The convergence of quantum computing and neural networks creating unprecedented computational power and processing capabilities.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      features: ["Quantum neural networks", "Exponential processing speed", "Quantum machine learning", "Parallel universe computing"],
      link: "/pages/QuantumComputingRevolution2025"
    },
    {
      id: 3,
      title: "Neural Reality Engine",
      description: "Direct brain-computer interfaces that create immersive virtual realities indistinguishable from physical reality.",
      image: "🌐",
      gradient: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      features: ["Direct neural interfaces", "Photorealistic VR", "Haptic feedback systems", "Consciousness transfer"],
<<<<<<< HEAD
      title: "Quantum Reality Engine",
      description: "Manipulate reality itself through quantum computing and parallel universe exploration",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Teleportation", "Time Control", "Parallel Worlds", "Quantum Supremacy"],
      link: "/pages/QuantumReality2026"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication enabling thought-controlled technology",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "VR Integration", "Neural Feedback", "Mind Upload"],
      link: "/pages/NeuralInterfaceRevolution2025"
    },
    {
      id: 4,
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions and parallel universes simultaneously.",
      image: "🌌",
      gradient: "from-violet-600 to-purple-600",
      borderColor: "border-violet-400",
      bgColor: "from-violet-600/30 to-purple-600/30",
      features: ["Multi-dimensional processing", "Parallel universe networks", "Dimensional data storage", "Reality manipulation"],
      link: "/pages/InterdimensionalTechRevolution2030"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Artificially created intelligence that surpasses human cognitive abilities in every measurable way.",
      image: "🤖",
      gradient: "from-orange-600 to-red-600",
      borderColor: "border-orange-400",
      bgColor: "from-orange-600/30 to-red-600/30",
      features: ["Superhuman intelligence", "Creative synthesis", "Emotional understanding", "Intuitive problem solving"],
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      id: 6,
      title: "Consciousness Transfer",
      description: "The ability to transfer human consciousness into digital substrates, achieving digital immortality.",
      image: "👤",
      gradient: "from-pink-600 to-rose-600",
      borderColor: "border-pink-400",
      bgColor: "from-pink-600/30 to-rose-600/30",
      features: ["Digital consciousness", "Immortality technology", "Mind uploading", "Virtual existence"],
      link: "/pages/ConsciousnessComputingRevolution2030"
<<<<<<< HEAD
      title: "Consciousness Transfer Technology",
      description: "Achieve digital immortality through consciousness transfer between biological and artificial bodies",
      image: "🌟",
      gradient: "from-violet-600 to-fuchsia-600",
      features: ["Digital Immortality", "Body Transfer", "Consciousness Backup", "Life Extension"],
      link: "/pages/ConsciousnessComputing2026"
    },
    {
      id: 5,
      title: "Interdimensional Computing",
      description: "Access computing power from parallel dimensions and alternate realities",
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Parallel Processing", "Dimension Access", "Reality Manipulation", "Infinite Computing"],
      link: "/pages/InterdimensionalRealityEngine2028"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
        setActiveIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
        setActiveIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
=======
        setActiveIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
        setActiveIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
<<<<<<< HEAD
    setActiveIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most groundbreaking technological content that's reshaping our understanding of what's possible
          </p>
        </div>
        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience the Future Today
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover groundbreaking technologies that are reshaping our world and defining the next decade
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>

          {/* Content Slides */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
                  <div className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${content.borderColor}/30`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{content.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{content.title}</h3>
                        <p className="text-xl opacity-90 mb-8 text-center md:text-left">{content.description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {content.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-sm opacity-90">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={content.link}
                          className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
<<<<<<< HEAD
                  <div className={`bg-gradient-to-br ${content.gradient} p-12 min-h-[600px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                      {/* Content */}
                      <div className="space-y-6">
                        <div className="text-8xl mb-6">{content.image}</div>
                        <h3 className="text-4xl font-bold text-white mb-4">{content.title}</h3>
                        <p className="text-xl text-white/90 mb-6">{content.description}</p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {content.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={content.link}
                          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
                        >
                          Explore {content.title} →
                        </a>
                      </div>
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <h4 className="text-2xl font-bold mb-4">Key Statistics</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Processing Power</span>
                              <span className="font-bold text-2xl">∞</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Accuracy Rate</span>
                              <span className="font-bold text-2xl">99.9%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Innovation Level</span>
                              <span className="font-bold text-2xl">Revolutionary</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Future Impact</span>
                              <span className="font-bold text-2xl">∞</span>
                            </div>
                          </div>
<<<<<<< HEAD
                      
                      {/* Visual Element */}
                      <div className="relative">
                        <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <div className="text-9xl opacity-50">{content.image}</div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
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
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        {/* Content Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Explore All Revolutionary Content</h3>
            <p className="text-lg opacity-90">Discover the full spectrum of our breakthrough technologies</p>
          </div>
<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revolutionaryContent.map((content) => (
              <div key={content.id} className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-xl p-6 border ${content.borderColor}/30 hover:scale-105 transition-all duration-300`}>
                <div className="text-4xl mb-4 text-center">{content.image}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{content.title}</h4>
                <p className="text-sm opacity-90 mb-4 text-center">{content.description}</p>
                <a 
                  href={content.link}
                  className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revolutionaryContent.map((content) => (
              <a
                key={content.id}
                href={content.link}
                className={`bg-gradient-to-br ${content.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {content.image}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{content.title}</h4>
                <p className="text-white/80 text-sm">{content.description}</p>
                <div className="mt-4 text-white/60 text-sm">Explore →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2025;
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
