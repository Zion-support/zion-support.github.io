import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "AI Innovation 2027",
      description: "Conscious AI systems with quantum processing and reality manipulation",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovation2027",
      features: ["Conscious AI", "Quantum Processing", "Reality Manipulation"]
    },
    {
      id: 2,
      title: "Quantum Consciousness 2028",
      description: "Universal awareness breakthrough with quantum mind networks",
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumConsciousness2028",
      features: ["Universal Consciousness", "Quantum Networks", "Mind Integration"]
    },
    {
      id: 3,
      title: "Neural Reality 2027",
      description: "Thought-controlled reality interfaces and neural augmentation",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralReality2027",
      features: ["Neural Control", "Reality Interface", "Brain Augmentation"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 mb-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

<<<<<<< HEAD
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            🌟 Ultimate Content Showcase 2027 🌟
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the most revolutionary technological breakthroughs of 2027-2028
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {showcaseItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 relative"
                >
                  <div className={`h-full bg-gradient-to-r ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center text-white p-8 max-w-4xl mx-auto">
                      <div className="text-8xl mb-6 animate-bounce">
                        {item.image}
                      </div>
                      <h3 className="text-5xl font-bold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-2xl mb-6 opacity-90">
                        {item.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {item.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-semibold border border-white/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href={item.link}
                        className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
                      >
                        Explore {item.title} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/50'
                  : 'bg-red-500/20 hover:bg-red-500/30 border border-red-500/50'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Start Auto-play'}
            </button>
          </div>
        </div>
=======
        {/* Dynamic Feature Display */}
        <div className="mb-12">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className={`inline-block bg-gradient-to-r ${features[currentFeature].color} text-white px-12 py-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105`}>
              <div className="text-8xl mb-4 animate-bounce">{features[currentFeature].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{features[currentFeature].title}</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                {features[currentFeature].description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentFeature === index
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block bg-gradient-to-r ${feature.color} text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg border-2 border-white/30 hover:border-white/50`}
            >
              {feature.icon} Explore {feature.title} →
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Revolutionary Content Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-300">More Revolutionary Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/pages/AdvancedQuantumComputing2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              ⚛️ Quantum 2026
            </a>
            <a href="/pages/NeuralInterfaceRevolution2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              🧬 Neural 2026
            </a>
            <a href="/pages/AdvancedAISystems2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              🤖 AI Systems
            </a>
            <a href="/pages/SyntheticIntelligence2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              🧠 Synthetic AI
            </a>
          </div>
        </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-c963
      </div>
    </div>
  );
};


export default UltimateContentShowcase2027;
