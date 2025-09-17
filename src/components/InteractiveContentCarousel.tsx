import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Transform your business operations with intelligent automation that learns and adapts to your specific needs.",
      image: "🤖",
      gradient: "from-blue-600 to-purple-600",
      category: "Business AI",
      features: ["Process Automation", "Intelligent Analytics", "Predictive Insights", "Cost Optimization"],
      stats: "85% efficiency increase",
      link: "/pages/AIRevolution2025"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing to solve complex problems that are impossible for classical computers.",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      category: "Quantum Tech",
      features: ["Exponential Speed", "Complex Simulation", "Cryptography", "Optimization"],
      stats: "1000x faster processing",
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable thought-based control and enhanced cognitive abilities.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      category: "Neural Tech",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking", "Medical Applications"],
      stats: "Revolutionary breakthrough",
      link: "/pages/NeuralInterfaceFuture"
    },
    {
      id: 4,
      title: "Advanced Analytics Platform",
      description: "Comprehensive analytics platform that provides deep insights into your business data and operations.",
      image: "📊",
      gradient: "from-orange-600 to-red-600",
      category: "Analytics",
      features: ["Real-time Insights", "Predictive Modeling", "Data Visualization", "Custom Dashboards"],
      stats: "95% accuracy improvement",
      link: "/pages/AdvancedAnalytics2025"
    },
    {
      id: 5,
      title: "Cybersecurity Fortress",
      description: "Advanced cybersecurity solutions that protect your digital assets with AI-powered threat detection.",
      image: "🛡️",
      gradient: "from-red-600 to-pink-600",
      category: "Security",
      features: ["Threat Detection", "Real-time Monitoring", "Automated Response", "Compliance"],
      stats: "99.9% threat prevention",
      link: "/pages/CybersecurityFortress2025"
    },
    {
      id: 6,
      title: "Cloud Migration Services",
      description: "Seamless migration to cloud infrastructure with zero downtime and enhanced performance.",
      image: "☁️",
      gradient: "from-indigo-600 to-purple-600",
      category: "Cloud Services",
      features: ["Zero Downtime", "Performance Optimization", "Cost Reduction", "Scalability"],
      stats: "60% cost reduction",
      link: "/pages/ComprehensiveServices2025"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 text-white animate-pulse"
          >
            🌟 INTERACTIVE CONTENT SHOWCASE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Revolutionary Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our cutting-edge technology solutions that are transforming industries and driving innovation
          </motion.p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                        {contentItems[currentSlide].category}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {contentItems[currentSlide].title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {contentItems[currentSlide].description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {contentItems[currentSlide].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">📈</span>
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            {contentItems[currentSlide].stats}
                          </div>
                          <div className="text-sm text-green-700">Proven Results</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex space-x-4">
                      <a
                        href={contentItems[currentSlide].link}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
                      >
                        Explore Solution →
                      </a>
                      <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`bg-gradient-to-br ${contentItems[currentSlide].gradient} p-12 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-9xl mb-6 animate-bounce">
                        {contentItems[currentSlide].image}
                      </div>
                      <div className="text-white/90 text-lg font-semibold">
                        {contentItems[currentSlide].category}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-lg transition-all duration-300 z-20"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-lg transition-all duration-300 z-20"
          >
            →
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-3 mb-8">
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? 'ring-4 ring-blue-500 scale-110'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl`}>
                {item.image}
              </div>
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mb-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          <button
            onClick={() => setCurrentSlide(0)}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentCarousel;