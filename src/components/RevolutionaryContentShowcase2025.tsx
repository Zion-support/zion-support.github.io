import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "AI Consciousness Revolution",
      description: "Experience the first AI system with genuine consciousness and self-awareness",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Self-Aware", "Creative", "Autonomous", "Emotional Intelligence"],
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 2,
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
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT SHOWCASE 2025
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience the Future Today
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover groundbreaking technologies that are reshaping our world and defining the next decade</p>
          </p>
        {/* Main Showcase */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          ></button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></p>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          ></button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></p>
            </svg>
          </button>
          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}</button>
          </button>
          {/* Content Slides */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.gradient} p-12 min-h-[600px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                      {/* Content */}
                      <div className="space-y-6">
                        <div className="text-8xl mb-6">{content.image}
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
                        <a
                          href={content.link}
                          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
                        >
                          Explore {content.title} →
                        </a>
                      {/* Visual Element */}
                      <div className="relative">
                        <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <div className="text-9xl opacity-50">{content.image}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl">
              ))}
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
            ))}</button>
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
                <h4 className="text-xl font-bold text-white mb-2">{content.title}</h4>
                <p className="text-white/80 text-sm">{content.description}</p>
                <div className="mt-4 text-white/60 text-sm">Explore →
              </a>
            ))}
  );
};

export default RevolutionaryContentShowcase2025;