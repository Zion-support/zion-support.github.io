import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredContent = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological breakthroughs that are reshaping reality itself.",
      image: "🌟",
      color: "from-yellow-500 to-orange-500",
      link: "/pages/UltimateTechBreakthrough2026",
      badge: "BREAKTHROUGH",
      features: ["Consciousness Transfer", "Quantum Computing", "Neural Interfaces", "Conscious AI"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2026",
      description: "Interactive demos of conscious AI, quantum neural networks, and neural interfaces.",
      image: "🚀",
      color: "from-purple-500 to-pink-500",
      link: "/pages/RevolutionaryTechShowcase2026",
      badge: "SHOWCASE",
      features: ["Interactive Demos", "Conscious AI", "Quantum Neural Networks", "Neural Interfaces"]
    },
    {
      id: 3,
      title: "Advanced AI Solutions 2026",
      description: "Conscious AI systems, quantum neural networks, and autonomous agents.",
      image: "🤖",
      color: "from-cyan-500 to-blue-500",
      link: "/pages/AdvancedAISolutions2026",
      badge: "AI SOLUTIONS",
      features: ["Conscious AI", "Quantum Processing", "Neural Interface", "Autonomous Agents"]
    },
    {
      id: 4,
      title: "Revolutionary Tech Blog 2026",
      description: "Latest insights on AI consciousness, quantum computing, and neural interfaces.",
      image: "📝",
      color: "from-emerald-500 to-teal-500",
      link: "/pages/RevolutionaryTechBlog2026",
      badge: "INSIGHTS",
      features: ["Tech Insights", "AI Consciousness", "Quantum Computing", "Neural Interfaces"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH INNOVATION
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2026
          </h2>
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto">
            Discover our most advanced technologies and insights that are reshaping the future of human-AI collaboration
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-6xl">{featuredContent[currentSlide].image}</span>
                    <div>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-bold">
                        {featuredContent[currentSlide].badge}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">{featuredContent[currentSlide].title}</h3>
                  <p className="text-xl text-purple-100 mb-6">{featuredContent[currentSlide].description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {featuredContent[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-green-400 text-lg">✓</span>
                        <span className="text-purple-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={featuredContent[currentSlide].link}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className={`bg-gradient-to-br ${featuredContent[currentSlide].color} rounded-2xl p-8 text-center`}>
                    <div className="text-8xl mb-4">{featuredContent[currentSlide].image}</div>
                    <h4 className="text-2xl font-bold mb-2">{featuredContent[currentSlide].title}</h4>
                    <p className="text-lg opacity-90">{featuredContent[currentSlide].description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">All Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-4 text-center">{content.image}</div>
                <div className="text-center mb-3">
                  <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-bold">
                    {content.badge}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-center">{content.title}</h4>
                <p className="text-purple-100 text-sm text-center mb-4">{content.description}</p>
                <div className="text-center">
                  <a
                    href={content.link}
                    className="text-purple-300 hover:text-white font-semibold text-sm"
                  >
                    Explore →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-purple-100 mb-8">
              Join us in revolutionizing technology and shaping the future of human-AI collaboration.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;