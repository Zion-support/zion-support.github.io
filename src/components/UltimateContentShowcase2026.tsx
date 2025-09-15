import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "🚀 Advanced Space Technology 2026",
      description: "Pioneering the next frontier with revolutionary space technologies, interplanetary systems, and cosmic AI solutions",
      image: "🛰️",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedSpaceTech2026",
      features: ["Autonomous Spacecraft", "Interplanetary Networks", "Space Manufacturing", "Solar Power Arrays"]
    },
    {
      id: 2,
      title: "🤖 Advanced Robotics Revolution 2026",
      description: "Transforming industries with autonomous robots, humanoid assistants, and intelligent automation systems",
      image: "🤖",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/AdvancedRobotics2026",
      features: ["Humanoid Robots", "Industrial Automation", "Medical Robotics", "Service Robots"]
    },
    {
      id: 3,
      title: "🧬 Advanced Biotech Revolution 2026",
      description: "Revolutionizing healthcare, agriculture, and environmental solutions with cutting-edge biotechnology",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      features: ["Gene Editing", "Personalized Medicine", "Synthetic Biology", "Neurotechnology"]
    },
    {
      id: 4,
      title: "🧠 Synthetic Intelligence 2026",
      description: "Self-evolving AI systems that transcend traditional limitations and create new possibilities",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Self-Learning AI", "Autonomous Systems", "Creative Intelligence", "Ethical AI"]
    },
    {
      id: 5,
      title: "⚛️ Quantum-Neural Fusion 2026",
      description: "The revolutionary convergence of quantum computing and neural networks for unprecedented capabilities",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum AI", "Neural Networks", "Hybrid Computing", "Quantum Learning"]
    },
    {
      id: 6,
      title: "🧬 Neural Interface Revolution 2026",
      description: "Direct brain-computer communication systems that bridge the gap between mind and machine",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Brain-Computer Interface", "Thought Control", "Neural Feedback", "Mind Uploading"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 rounded-3xl p-8 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse">
          🌟 ULTIMATE TECHNOLOGY SHOWCASE 2026
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Revolutionary Technology Experience
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Discover the most advanced technologies that will shape the future of humanity
        </p>
      </div>

      {/* Main Content Carousel */}
      <div className="relative z-10">
        <div className="relative bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 z-20"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>

          {/* Content Display */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content Info */}
            <div className="space-y-6">
              <div className="text-8xl mb-6 text-center md:text-left">
                {currentContent.image}
              </div>
              
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {currentContent.title}
              </h3>
              
              <p className="text-xl opacity-90 mb-6">
                {currentContent.description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={currentContent.link}
                className={`inline-block bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore Technology →
              </a>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentContent.gradient} rounded-2xl p-8 text-center`}>
                <div className="text-9xl mb-6 animate-bounce">
                  {currentContent.image}
                </div>
                <h4 className="text-2xl font-bold mb-4">2026 Technology</h4>
                <p className="text-lg opacity-90">
                  Experience the future today
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="relative z-10 mt-16">
        <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {contentSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
              }`}
            >
              <div className="text-3xl mb-2">{slide.image}</div>
              <div className="text-xs font-semibold text-center">{slide.title.split(' ')[1]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-16">
        <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Dive deep into the revolutionary technologies that will transform our world
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/pages/AdvancedSpaceTech2026" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🚀 Space Technology
          </a>
          <a href="/pages/AdvancedRobotics2026" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🤖 Robotics
          </a>
          <a href="/pages/AdvancedBiotechRevolution2026" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🧬 Biotechnology
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;