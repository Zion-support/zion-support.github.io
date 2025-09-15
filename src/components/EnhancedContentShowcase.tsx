import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026",
      description: "Experience the future with AI agents that possess synthetic consciousness and autonomous capabilities",
      icon: "🤖",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/SyntheticIntelligence2026",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented processing power",
      icon: "⚛️",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/QuantumNeuralFusion2026",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-gradient-to-r from-green-400 to-blue-500"
    },
    {
      id: 3,
      title: "Next-Gen Tech Trends",
      description: "Discover the revolutionary technologies that will reshape our world in 2026 and beyond",
      icon: "🚀",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/NextGenTechTrends2026",
      badge: "NEW",
      badgeColor: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "AI Transformation Mastery",
      description: "Master the art of AI transformation with our comprehensive framework and proven methodologies",
      icon: "🧠",
      gradient: "from-rose-600 via-pink-600 to-purple-600",
      link: "/pages/AITransformationMastery2026",
      badge: "HOT",
      badgeColor: "bg-gradient-to-r from-red-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isVisible) return null;

  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-4xl animate-bounce">🌟</span>
              <h3 className="text-3xl font-bold">ENHANCED CONTENT SHOWCASE 2026</h3>
              <span className="text-4xl animate-bounce">🌟</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ENHANCED CONTENT SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Enhanced Content Showcase
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience our most advanced and revolutionary content featuring cutting-edge technologies that are reshaping the future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Showcase Carousel */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Technology Showcase</h2>
          <p className="text-xl text-purple-200">Interactive exploration of breakthrough technologies</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Showcase Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-6f13
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ENHANCED CONTENT SHOWCASE • 2026
>>>>>>> cursor/create-and-deploy-new-content-c439
          </div>
          
          <p className="text-xl opacity-95 mb-8 max-w-4xl">
            Experience the future of technology with our groundbreaking enhanced content. 
            From synthetic intelligence to quantum-neural fusion, explore innovations that will reshape tomorrow.
          </p>

<<<<<<< HEAD
          {/* Carousel */}
          <div className="relative">
=======
        {/* Main Showcase Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
<<<<<<< HEAD
>>>>>>> 3e300034bdd48cd59b35fa6cf75b67483babd4a1
=======
>>>>>>> cursor/create-and-deploy-new-content-6f13
>>>>>>> cursor/create-and-deploy-new-content-c439
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl">{featuredContent[currentSlide].icon}</span>
                      <h4 className="text-2xl font-bold">{featuredContent[currentSlide].title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${featuredContent[currentSlide].badgeColor}`}>
                        {featuredContent[currentSlide].badge}
                      </span>
                    </div>
<<<<<<< HEAD
                    <p className="text-lg opacity-90 mb-4">{featuredContent[currentSlide].description}</p>
                    <a
                      href={featuredContent[currentSlide].link}
                      className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold"
                    >
                      Explore Now →
                    </a>
=======
                    
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-4">Key Highlights</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Revolutionary breakthrough technology</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Industry-leading performance</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Proven real-world applications</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Expert-backed research</span>
                          </li>
                        </ul>
                      </div>
                    </div>
<<<<<<< HEAD
>>>>>>> 3e300034bdd48cd59b35fa6cf75b67483babd4a1
=======
>>>>>>> cursor/create-and-deploy-new-content-6f13
>>>>>>> cursor/create-and-deploy-new-content-c439
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              →
            </button>
<<<<<<< HEAD
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
=======

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm"
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Content Categories */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Content Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['AI & Machine Learning', 'Quantum Computing', 'Neural Interfaces', 'Synthetic Intelligence', 'Technology Showcase', 'Revolutionary Tech'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 text-center">🚀</div>
                <h4 className="text-xl font-bold mb-3 text-center">{category}</h4>
                <p className="text-sm opacity-90 text-center mb-4">Explore cutting-edge content in this category</p>
                <div className="text-center">
                  <span className="text-purple-300 font-semibold">Explore Category →</span>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-3 text-center">{item.image}</div>
                <h3 className="text-lg font-bold mb-2 text-center text-white">{item.title}</h3>
                <p className="text-white/80 mb-4 text-sm text-center">
                  {item.description.substring(0, 80)}...
                </p>
                <a 
                  href={item.link}
                  className="block w-full bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center text-sm"
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">✨ Enhanced Features</h2>
            <p className="text-xl text-purple-200">Experience interactive technology exploration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4 text-center">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Interactive Experience</h3>
              <p className="text-purple-200 text-center">
                Navigate through revolutionary technologies with intuitive controls and smooth animations
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Real-time Updates</h3>
              <p className="text-purple-200 text-center">
                Stay current with the latest breakthroughs and technology advancements as they happen
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4 text-center">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Immersive Design</h3>
              <p className="text-purple-200 text-center">
                Experience stunning visual design with gradient backgrounds and smooth transitions
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore the Future?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Dive deeper into our revolutionary technologies and discover how they can transform your business
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Your Journey →
            </a>
            <a href="/pages/NextGenTechShowcase2026" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
              View All Innovations
            </a>
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-6f13
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
>>>>>>> cursor/create-and-deploy-new-content-c439
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {featuredContent.map((content, index) => (
          <motion.a
            key={content.id}
            href={content.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${content.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-2xl mb-2">{content.icon}</div>
              <div className="text-sm font-bold mb-1">{content.title}</div>
              <div className="text-xs opacity-90">{content.description}</div>
              <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold ${content.badgeColor}`}>
                {content.badge}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Interactive Stats */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white mb-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Enhanced Content Metrics</h3>
          <p className="text-gray-300">Real-time engagement and performance data</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">3.2M+</div>
            <div className="text-sm text-gray-300">Enhanced Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">99.2%</div>
            <div className="text-sm text-gray-300">User Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">67K+</div>
            <div className="text-sm text-gray-300">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-1">200+</div>
            <div className="text-sm text-gray-300">Enhanced Articles</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Experience Enhanced Technology</h3>
        <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
          Join thousands of professionals who rely on our enhanced content to stay informed 
          about the latest technological breakthroughs and industry trends.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Explore Enhanced Content
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            Download All Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;