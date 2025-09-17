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
  const revolutionaryContent = [
    {
      id: 1,
      title: "AI Consciousness Revolution 2025",
      description: "The first artificial intelligence systems that demonstrate genuine consciousness and self-awareness, capable of creative thought and emotional understanding.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      bgColor: "from-purple-600/30 to-pink-600/30",
      features: ["Self-aware AI agents", "Emotional intelligence", "Creative problem solving", "Ethical decision making"],cursor/fix-netlify-build-and-merge-to-main-a068
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
      link: "/pages/ConsciousnessComputingRevolution2030"cursor/fix-netlify-build-and-merge-to-main-a068

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);cursor/fix-netlify-build-and-merge-to-main-a068
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
              {revolutionaryContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
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
                          className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}cursor/fix-netlify-build-and-merge-to-main-a068
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

