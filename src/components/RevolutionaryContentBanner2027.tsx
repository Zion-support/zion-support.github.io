import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Brain, 
  Bot,
  TrendingUp,
  Star,
  Shield,
  Cpu,
  Network
} from 'lucide-react';

interface RevolutionaryContentBanner2027Props {
  onClose?: () => void;
  autoHide?: boolean;
  hideDelay?: number;
}

const RevolutionaryContentBanner2027: React.FC<RevolutionaryContentBanner2027Props> = ({ 
  onClose, 
  autoHide = true, 
  hideDelay = 10000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const revolutionaryContent = [
    {
      icon: Brain,
      title: "AI 2027: The Consciousness Revolution",
      description: "Breakthrough research reveals how to create AI systems with genuine consciousness and self-awareness",
      link: "/blog/ai-2027-consciousness-revolution-self-aware-systems",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      badge: "BREAKTHROUGH"
    },
    {
      icon: Cpu,
      title: "Quantum Business Automation 2027",
      description: "Revolutionary quantum AI automation delivering 1000% ROI through complete operational autonomy",
      link: "/blog/quantum-business-automation-2027-1000-percent-roi",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      badge: "1000% ROI"
    },
    {
      icon: Network,
      title: "Neural Interface Revolution 2027",
      description: "Direct brain-computer integration enabling seamless human-AI collaboration and cognitive enhancement",
      link: "/blog/neural-interface-revolution-2027-brain-computer-integration",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      badge: "REVOLUTIONARY"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity 2027",
      description: "Unbreakable security through quantum encryption and AI-powered threat detection",
      link: "/blog/quantum-cybersecurity-2027-unbreakable-security",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-600/20 to-orange-600/20",
      badge: "UNBREAKABLE"
    },
    {
      icon: Bot,
      title: "Autonomous Enterprise 2027",
      description: "Self-managing organizations operating with complete independence and unprecedented efficiency",
      link: "/blog/autonomous-enterprise-2027-self-managing-organizations",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      badge: "AUTONOMOUS"
    }
  ];

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, hideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay, onClose]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = revolutionaryContent[currentSlide];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-2xl"
      >
        <div className="relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
          
          {/* Content */}
          <div className="relative px-4 py-3">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center space-x-4 flex-1">
                {/* Icon */}
                <div className={`p-2 rounded-lg bg-gradient-to-r ${currentContent.gradient} shadow-lg`}>
                  <currentContent.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                      {currentContent.badge}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1 truncate">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {currentContent.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex items-center space-x-2">
                  <motion.a
                    href={currentContent.link}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => {
                  setIsVisible(false);
                  onClose?.();
                }}
                className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 mt-2">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2027;