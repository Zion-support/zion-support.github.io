import React, { useState, useEffect } from 'react';

const UltimateContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Showcase 2026",
      description: "Experience the most advanced technology solutions that are revolutionizing industries and transforming the future",
      image: "🚀",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechShowcase2026",
      category: "Technology Showcase",
      featured: true,
      badge: "NEW"
    },
    {
      id: 2,
      title: "Future Tech Innovation 2026",
      description: "Discover the cutting-edge innovations that are shaping tomorrow's world and revolutionizing how we live, work, and interact",
      image: "🌟",
      gradient: "from-pink-600 to-purple-600",
      link: "/pages/FutureTechInnovation2026",
      category: "Innovation",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      id: 3,
      title: "Revolutionary Services 2026",
      description: "Transform your business with our cutting-edge services that leverage the latest technologies to drive unprecedented growth",
      image: "⚡",
      gradient: "from-emerald-600 to-cyan-600",
      link: "/pages/RevolutionaryServices2026",
      category: "Services",
      featured: true,
      badge: "REVOLUTIONARY"
    },
    {
      id: 4,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with revolutionary technologies that are reshaping industries",
      image: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIRevolution2026",
      category: "AI Technology",
      featured: false,
      badge: "HOT"
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Unlock exponential computing power with quantum technology that solves impossible problems",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      featured: false,
      badge: "BREAKTHROUGH"
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct neural interfaces and brain-computer communication",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      featured: false,
      badge: "FUTURE"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Ultimate Content Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most comprehensive collection of revolutionary technology content, innovations, and services
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-12 text-center relative`}>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-8xl mb-6 animate-bounce">{item.image}</div>
                    <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{item.description}</p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={item.link}
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                      >
                        Explore {item.category} →
                      </a>
                      <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contentItems.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative`}>
              <div className="absolute top-2 right-2">
                <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold">
                  {item.badge}
                </span>
              </div>
              <div className="text-4xl mb-4 text-center">{item.image}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-white/90 mb-4 text-sm text-center">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{item.category}</span>
                <a 
                  href={item.link}
                  className="text-white hover:text-white/80 transition-colors font-semibold text-sm"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Content Impact</h3>
            <p className="text-xl opacity-90">Our revolutionary content is transforming industries worldwide</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-lg font-semibold mb-2">Content Views</div>
              <div className="text-gray-300">Monthly content engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-lg font-semibold mb-2">Active Users</div>
              <div className="text-gray-300">Regular content consumers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Satisfaction Rate</div>
              <div className="text-gray-300">User satisfaction score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Content Updates</div>
              <div className="text-gray-300">Continuous fresh content</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Ultimate Content?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive into our comprehensive collection of revolutionary technology content and discover the future today
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold text-lg">
              Get Updates
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
              Share Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase;