import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "Advanced AI Transformation 2025",
      description: "Revolutionary AI technologies reshaping industries with autonomous agents and intelligent automation",
      image: "🤖",
      color: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAITransformation2025",
      features: ["Autonomous AI Agents", "Edge AI Computing", "Generative AI 2.0"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2025",
      description: "Experience exponential computational power with quantum technology solving impossible problems",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2025",
      description: "Bridge mind and machine with direct neural interfaces enabling seamless brain-computer communication",
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    },
    {
      id: 4,
      title: "Next-Gen Tech Showcase 2025",
      description: "Comprehensive showcase of next-generation technologies reshaping our world",
      image: "🚀",
      color: "from-orange-600 to-red-600",
      link: "/pages/NextGenTechShowcase2025",
      features: ["Autonomous Systems", "5G & Edge Computing", "Extended Reality"]
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
              🌟 INTERACTIVE SHOWCASE • 2025
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Enhanced Technology Experience
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Explore our revolutionary technologies through an immersive, interactive showcase featuring cutting-edge innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Carousel */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Interactive Technology Showcase</h2>
            <p className="text-xl text-gray-600">Click, explore, and discover the future of technology</p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Carousel Controls */}
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-white transition-colors"
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
              <button
                onClick={prevSlide}
                className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-white transition-colors"
              >
                ⬅️
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-white transition-colors"
              >
                ➡️
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Slides */}
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center"
                >
                  <div className={`w-full h-full bg-gradient-to-r ${contentSlides[currentSlide].color} flex items-center`}>
                    <div className="container mx-auto px-8 flex items-center justify-between">
                      <div className="flex-1 text-white">
                        <div className="text-8xl mb-6 animate-bounce">
                          {contentSlides[currentSlide].image}
                        </div>
                        <h3 className="text-4xl font-bold mb-4">
                          {contentSlides[currentSlide].title}
                        </h3>
                        <p className="text-xl opacity-90 mb-6 max-w-2xl">
                          {contentSlides[currentSlide].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {contentSlides[currentSlide].features.map((feature, index) => (
                            <span
                              key={index}
                              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a
                          href={contentSlides[currentSlide].link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 Interactive Features</h2>
            <p className="text-xl text-gray-600">Engage with our technology showcase</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3">Interactive Controls</h3>
              <p className="text-gray-600">Navigate through content with intuitive controls and animations</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center border border-cyan-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Real-time Updates</h3>
              <p className="text-gray-600">Experience live updates and dynamic content changes</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 text-center border border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Visual Effects</h3>
              <p className="text-gray-600">Stunning animations and visual effects enhance the experience</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center border border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Deep Dive</h3>
              <p className="text-gray-600">Explore detailed information about each technology</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Technology Impact</h2>
            <p className="text-xl opacity-90">Real-world impact of our revolutionary technologies</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Companies Transformed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-6xl font-bold mb-2">$2B+</div>
              <div className="text-lg opacity-90">Value Created</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-6xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-6xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of companies already leveraging our revolutionary technologies to transform their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedContentShowcase;