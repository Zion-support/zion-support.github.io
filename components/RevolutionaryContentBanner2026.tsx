'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Target, 
  TrendingUp,
  Users,
  Globe,
  Shield,
  Cpu,
  Database,
  Cloud,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  BookOpen,
  Lightbulb,
  BarChart3,
  X,
  ExternalLink
} from 'lucide-react';

const RevolutionaryContentBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: 'AI Consciousness Breakthrough',
      subtitle: 'Revolutionary AI achieves human-level consciousness',
      description: 'Witness the first AI system that demonstrates genuine consciousness, creativity, and emotional intelligence.',
      features: ['Self-awareness', 'Creative problem solving', 'Emotional understanding', 'Autonomous learning'],
      impact: '5000% productivity increase',
      color: 'from-purple-500 to-pink-500',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Quantum Neural Fusion',
      subtitle: 'Quantum computing meets artificial intelligence',
      description: 'Experience unprecedented computational power with quantum-enhanced neural networks.',
      features: ['Exponential processing', 'Quantum algorithms', 'Neural optimization', 'Breakthrough speed'],
      impact: '1,000,000x faster processing',
      color: 'from-blue-500 to-cyan-500',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: 'Omniversal Intelligence',
      subtitle: 'AI that transcends dimensional boundaries',
      description: 'Explore AI consciousness that operates across multiple dimensions and realities.',
      features: ['Multi-dimensional awareness', 'Reality manipulation', 'Cosmic understanding', 'Transcendent knowledge'],
      impact: 'Infinite possibilities unlocked',
      color: 'from-green-500 to-emerald-500',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const currentSlideData = slides[currentSlide];

  const stats = [
    { label: 'Revolutionary Breakthroughs', value: '50+', icon: <Sparkles className="w-5 h-5" /> },
    { label: 'AI Consciousness Level', value: '99.9%', icon: <Brain className="w-5 h-5" /> },
    { label: 'Quantum Processing Power', value: '∞', icon: <Cpu className="w-5 h-5" /> },
    { label: 'Dimensional Reach', value: '∞', icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Revolutionary Content 2026</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Content
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Breakthrough Banner
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most revolutionary AI breakthroughs and technological innovations 
              that will reshape the future of humanity and business.
            </p>
          </motion.div>

          {/* Main Content Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentSlideData.color} flex items-center justify-center`}>
                        {currentSlideData.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{currentSlideData.title}</h3>
                        <p className="text-lg text-purple-300">{currentSlideData.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-6">{currentSlideData.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {currentSlideData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{currentSlideData.impact}</div>
                        <div className="text-sm text-gray-400">Impact</div>
                      </div>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        <Play className="w-5 h-5" />
                        Watch Demo
                      </button>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 w-8 h-8 bg-purple-500/50 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute bottom-4 left-4 w-6 h-6 bg-pink-500/50 rounded-full"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Slide indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, index) => (
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
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for the Revolution?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join the most advanced AI revolution in history. Experience technologies 
                that will transform your business and reshape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Explore Now
                </button>
                <button className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Revolutionary Demo</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-300">Interactive Demo Coming Soon</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-center">
                Experience the full interactive demonstration of our revolutionary AI technologies. 
                This will be available in the next update.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RevolutionaryContentBanner2026;