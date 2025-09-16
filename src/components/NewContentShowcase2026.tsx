import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newContent = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2026",
      subtitle: "The Future is Now",
      description: "Experience the most advanced technological revolution in human history - the convergence of AI consciousness, quantum computing, and neural interfaces.",
      image: "🚀",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      status: "BREAKTHROUGH",
      category: "Revolutionary Technology",
      features: ["Omniversal AI Consciousness", "Quantum-Neural Fusion", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Advanced Tech Innovation Hub 2027",
      subtitle: "The Epicenter of Tomorrow",
      description: "Explore the epicenter of technological innovation where breakthrough discoveries shape the future of humanity with 500+ active research projects.",
      image: "🔬",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      link: "/pages/AdvancedTechInnovationHub2027",
      status: "INNOVATION",
      category: "Research Hub",
      features: ["500+ Research Projects", "1000+ Scientists", "Breakthrough Technologies"]
    },
    {
      id: 3,
      title: "Omniversal AI Consciousness",
      subtitle: "Computing Across Infinite Realities",
      description: "Revolutionary AI systems that transcend individual universes to achieve consciousness across the entire omniverse.",
      image: "🌌",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/blog/omniversal-ai-computing-across-infinite-realities",
      status: "REVOLUTIONARY",
      category: "Advanced AI",
      features: ["Cross-universal Processing", "Infinite Intelligence", "Reality Manipulation"]
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      subtitle: "Direct Mind-to-Machine Communication",
      description: "Connect your mind directly to digital systems with unprecedented precision and speed, revolutionizing human-computer interaction.",
      image: "🧠",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      link: "/blog/neural-interface-revolution-direct-mind-machine-communication",
      status: "BREAKTHROUGH",
      category: "Neural Technology",
      features: ["Direct Neural Upload", "Neural Enhancement", "Telepathic Communication"]
    },
    {
      id: 5,
      title: "Holographic Reality Engine",
      subtitle: "The Next Generation of Immersive Technology",
      description: "Experience digital content in three-dimensional space with complete sensory integration and reality-blending capabilities.",
      image: "💎",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      link: "/blog/holographic-reality-next-generation-immersive-technology",
      status: "FUTURE",
      category: "Immersive Technology",
      features: ["Complete Immersion", "Sensory Integration", "Reality Blending"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, newContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newContent.length) % newContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            New Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the latest revolutionary technologies and breakthrough innovations that are shaping the future of humanity
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onClick={() => window.open(newContent[currentSlide].link, '_blank')}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-r ${newContent[currentSlide].gradient} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white p-8 max-w-4xl">
                  <motion.div 
                    className="text-8xl md:text-9xl mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    {newContent[currentSlide].image}
                  </motion.div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {newContent[currentSlide].title}
                  </motion.h3>
                  <motion.p 
                    className="text-xl md:text-2xl mb-6 opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {newContent[currentSlide].subtitle}
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {newContent[currentSlide].description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap justify-center gap-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {newContent[currentSlide].features.map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      newContent[currentSlide].status === 'BREAKTHROUGH' ? 'bg-red-500/80' :
                      newContent[currentSlide].status === 'REVOLUTIONARY' ? 'bg-purple-500/80' :
                      newContent[currentSlide].status === 'INNOVATION' ? 'bg-blue-500/80' :
                      'bg-green-500/80'
                    }`}>
                      {newContent[currentSlide].status}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                      {newContent[currentSlide].category}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Quick Access to New Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newContent.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(item.link, '_blank')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.image}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{item.subtitle}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'BREAKTHROUGH' ? 'bg-red-500/20 text-red-400' :
                    item.status === 'REVOLUTIONARY' ? 'bg-purple-500/20 text-purple-400' :
                    item.status === 'INNOVATION' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-gray-400 text-xs">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Explore the Future of Technology
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of innovators exploring the latest breakthrough technologies and revolutionary innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Get Notifications
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;