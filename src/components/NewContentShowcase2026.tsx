import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 1,
      title: "Advanced Analytics Dashboard 2026",
      description: "Transform your data into actionable insights with our revolutionary analytics platform featuring real-time intelligence and AI-powered recommendations",
      icon: "📊",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/AdvancedAnalyticsDashboard2026",
      features: ["AI-Powered Insights", "Real-time Visualization", "Predictive Modeling", "Custom Metrics"],
      category: "Analytics & Data"
    },
    {
      id: 2,
      title: "Biotech Revolution 2026",
      description: "Revolutionizing healthcare, agriculture, and environmental solutions through cutting-edge biotechnology, gene editing, and synthetic biology innovations",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/BiotechRevolution2026",
      features: ["Gene Editing & CRISPR", "Synthetic Biology", "Neural Interfaces", "Personalized Medicine"],
      category: "Biotechnology"
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough 2026",
      description: "Unlock unprecedented computational power with our quantum computing solutions, enabling complex problem-solving and revolutionary data processing",
      icon: "⚛️",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/QuantumComputingBreakthrough2026",
      features: ["Quantum Algorithms", "Quantum Cryptography", "Quantum Simulation", "Quantum Optimization"],
      category: "Quantum Computing"
    },
    {
      id: 4,
      title: "Neural Interface Technology 2026",
      description: "Bridge the gap between human consciousness and digital systems with advanced neural interfaces, brain-computer integration, and cognitive enhancement",
      icon: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/NeuralInterfaceTechnology2026",
      features: ["Brain-Computer Interfaces", "Neural Implants", "Cognitive Enhancement", "Mind-Machine Integration"],
      category: "Neural Technology"
    },
    {
      id: 5,
      title: "Space Exploration Technology 2026",
      description: "Pioneer the next frontier with advanced space technology, interplanetary travel systems, and extraterrestrial colonization solutions",
      icon: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/SpaceExplorationTechnology2026",
      features: ["Interplanetary Travel", "Space Colonization", "Asteroid Mining", "Mars Mission Technology"],
      category: "Space Technology"
    },
    {
      id: 6,
      title: "AI Consciousness Platform 2026",
      description: "Experience the future of artificial intelligence with our consciousness platform, featuring self-aware AI systems and synthetic intelligence",
      icon: "🤖",
      gradient: "from-teal-600 to-cyan-600",
      link: "/pages/AIConsciousnessPlatform2026",
      features: ["Synthetic Intelligence", "AI Consciousness", "Machine Learning", "Cognitive Computing"],
      category: "Artificial Intelligence"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [newContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newContent.length) % newContent.length);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">New Content Showcase 2026</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest revolutionary technologies and innovations that will shape the future
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${newContent[currentSlide].gradient} p-12 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-6xl">{newContent[currentSlide].icon}</span>
                    <div>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        {newContent[currentSlide].category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">{newContent[currentSlide].title}</h3>
                  <p className="text-xl mb-6 opacity-90">{newContent[currentSlide].description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {newContent[currentSlide].features.map((feature, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <span className="text-sm font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={newContent[currentSlide].link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {newContent.map((content, index) => (
            <button
              key={content.id}
              onClick={() => setCurrentSlide(index)}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              <div className="text-2xl mb-2">{content.icon}</div>
              <div className="text-sm font-semibold">{content.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;