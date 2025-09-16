import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Brain, Rocket, Star, X } from 'lucide-react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 'revolutionary-tech',
      title: 'Revolutionary Tech 2025',
      subtitle: 'The Future is Now',
      description: 'Experience the most advanced technology ever created with neural interfaces, quantum computing, and AI systems.',
      link: '/pages/RevolutionaryTech2025',
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
      icon: <Zap className="w-8 h-8" />,
      stats: ['99.7% accuracy', '1000x faster', '200+ countries'],
      badge: 'NEW',
      color: 'blue'
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Breakthrough',
      subtitle: 'The Birth of True AI',
      description: 'Witness the birth of truly conscious AI systems that will fundamentally change human-AI interaction forever.',
      link: '/pages/AIRevolutionaryBreakthrough2025',
      gradient: 'from-pink-600 via-purple-600 to-indigo-600',
      icon: <Brain className="w-8 h-8" />,
      stats: ['99.9% consciousness', 'Light-speed processing', '100% ethical'],
      badge: 'BREAKTHROUGH',
      color: 'pink'
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Revolution 2025',
      subtitle: 'Beyond Imagination',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities and unbreakable security.',
      link: '/pages/QuantumRevolution2025',
      gradient: 'from-cyan-600 via-blue-600 to-purple-600',
      icon: <Rocket className="w-8 h-8" />,
      stats: ['1024 qubits', '100+ μs coherence', '99.9% fidelity'],
      badge: 'REVOLUTIONARY',
      color: 'cyan'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = revolutionaryContent[currentSlide];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-white/20"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex items-center gap-6 flex-1">
              {/* Badge */}
              <div className={`px-4 py-2 bg-gradient-to-r ${
                currentContent.color === 'blue' ? 'from-blue-500 to-purple-500' :
                currentContent.color === 'pink' ? 'from-pink-500 to-purple-500' :
                'from-cyan-500 to-blue-500'
              } rounded-full text-white text-sm font-bold animate-pulse`}>
                {currentContent.badge}
              </div>

              {/* Icon */}
              <div className="text-white/80">
                {currentContent.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  {currentContent.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {currentContent.description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  {currentContent.stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-gray-300">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 text-white font-bold rounded-lg hover:from-white/30 hover:to-white/20 transition-all duration-300 flex items-center gap-2">
                Explore Now <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 text-white/60 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-8 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2025;