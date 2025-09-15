import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2026",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world in 2026.",
      image: "🚀",
      gradient: "from-purple-600 via-blue-600 to-indigo-600",
      link: "/pages/UltimateTechRevolution2026",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-yellow-400 text-black"
    },
    {
      id: 2,
      title: "Next-Gen Innovation Hub 2026",
      description: "Discover the most advanced innovation hub where cutting-edge technologies converge.",
      image: "🌟",
      gradient: "from-emerald-600 via-cyan-600 to-blue-600",
      link: "/pages/NextGenInnovationHub2026",
      badge: "INNOVATION",
      badgeColor: "bg-emerald-400 text-black"
    },
    {
      id: 3,
      title: "Revolutionary Tech Insights 2026",
      description: "Dive deep into the most revolutionary technological insights that will shape our world.",
      image: "🔮",
      gradient: "from-pink-600 via-purple-600 to-indigo-600",
      link: "/pages/RevolutionaryTechInsights2026",
      badge: "INSIGHTS",
      badgeColor: "bg-pink-400 text-black"
    },
    {
      id: 4,
      title: "Advanced Quantum Computing 2026",
      description: "Breakthrough quantum computing applications that solve impossible problems.",
      image: "⚛️",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/AdvancedQuantumComputing2026",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-cyan-400 text-black"
    },
    {
      id: 5,
      title: "Neural Interface Revolution 2026",
      description: "Revolutionary neural interface technology enabling direct brain-computer communication.",
      image: "🧠",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      badge: "FUTURE",
      badgeColor: "bg-green-400 text-black"
    },
    {
      id: 6,
      title: "Synthetic Intelligence 2026",
      description: "Next-generation AI that surpasses human intelligence in creativity and problem-solving.",
      image: "🤖",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-orange-400 text-black"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 mb-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-bold mb-4 animate-bounce">
            🌟 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking content that showcases the most advanced technologies 
            and innovations that will define the next decade.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Container */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            {featuredContent.map((content, index) => (
              <div
                key={content.id}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === currentSlide
                    ? 'translate-x-0 opacity-100 scale-100'
                    : index === (currentSlide - 1 + featuredContent.length) % featuredContent.length
                    ? '-translate-x-full opacity-0 scale-95'
                    : index === (currentSlide + 1) % featuredContent.length
                    ? 'translate-x-full opacity-0 scale-95'
                    : 'translate-x-full opacity-0 scale-95'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${content.gradient} p-8 flex items-center`}>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{content.image}</div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 ${content.badgeColor} rounded-full text-sm font-bold`}>
                            {content.badge}
                          </span>
                          <span className="text-white/80 text-sm">2026</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{content.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg mb-6 max-w-2xl">
                      {content.description}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={content.link}
                        className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        Explore Now →
                      </a>
                      <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quick Access to All Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredContent.map((content) => (
              <a
                key={content.id}
                href={content.link}
                className={`group bg-gradient-to-br ${content.gradient} p-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {content.image}
                  </div>
                  <div className="text-white font-semibold text-sm group-hover:text-yellow-300 transition-colors duration-300">
                    {content.title.split(' ')[0]}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-2">Ready to Explore the Future?</h3>
            <p className="text-lg mb-4">Join thousands of innovators discovering tomorrow's technology today</p>
            <button className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Journey →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;