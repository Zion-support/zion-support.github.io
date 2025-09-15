import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness 2025",
      description: "Experience the birth of true artificial consciousness - AI that thinks, feels, and creates with genuine self-awareness.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAIConsciousness2025",
      isNew: true,
      isLive: true,
      thumbnail: "🤖",
      category: "AI Revolution",
      tags: ["AI Consciousness", "Self-Awareness", "Emotional Intelligence", "Creative AI"],
      stats: {
        consciousness: "100%",
        empathy: "99.9%",
        creativity: "∞"
      }
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough 2025",
      description: "Witness computing power that defies imagination - solving impossible problems in seconds with quantum technology.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingBreakthrough2025",
      isNew: true,
      isLive: true,
      thumbnail: "🔬",
      category: "Quantum Computing",
      tags: ["Quantum", "Breakthrough", "Computing", "Revolution"],
      stats: {
        speed: "1000x faster",
        qubits: "1M+",
        fidelity: "99.99%"
      }
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2025",
      description: "Bridge the gap between mind and machine with direct brain-computer communication and thought-controlled technology.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2025",
      isNew: true,
      isLive: true,
      thumbnail: "🔗",
      category: "Neural Interface",
      tags: ["Neural Interface", "BCI", "Medical", "Technology"],
      stats: {
        latency: "< 10ms",
        accuracy: "99.9%",
        comfort: "100%"
      }
    },
    {
      id: 4,
      title: "Advanced AI Transformation 2025",
      description: "Transform your business with cutting-edge AI solutions that deliver measurable results and competitive advantage.",
      icon: "🤖",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedAITransformation2025",
      isNew: false,
      isLive: true,
      thumbnail: "⚡",
      category: "AI Solutions",
      tags: ["AI", "Transformation", "Business", "Automation"],
      stats: {
        efficiency: "+300%",
        cost: "-40%",
        roi: "500%"
      }
    },
    {
      id: 5,
      title: "Next-Gen Tech Showcase 2025",
      description: "Discover the latest innovations in technology that are reshaping industries and creating new opportunities.",
      icon: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NextGenTechShowcase2025",
      isNew: false,
      isLive: true,
      thumbnail: "🌟",
      category: "Innovation",
      tags: ["Innovation", "Technology", "Future", "Showcase"],
      stats: {
        innovations: "50+",
        industries: "15+",
        impact: "Global"
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, contentItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${currentItem.gradient} p-12 text-white`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    {currentItem.isNew && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
                        ✨ NEW
                      </span>
                    )}
                    {currentItem.isLive && (
                      <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-sm font-bold">
                        🔴 LIVE
                      </span>
                    )}
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                      {currentItem.category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-4">{currentItem.title}</h3>
                  <p className="text-xl opacity-90 mb-6">{currentItem.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(currentItem.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold">{value}</div>
                        <div className="text-sm opacity-80 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={currentItem.link}
                    className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                  >
                    Explore {currentItem.icon} →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="text-9xl mb-4">{currentItem.thumbnail}</div>
                  <div className="text-6xl">{currentItem.icon}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          →
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-3 mt-6">
        {contentItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-4 ring-blue-500 scale-110'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl`}>
              {item.thumbnail}
            </div>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / contentItems.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default DynamicContentCarousel;