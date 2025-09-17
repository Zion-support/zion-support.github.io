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
  Star
} from 'lucide-react';
interface NewContentBanner2026Props {
  onClose?: () => void;
  autoHide?: boolean;
  hideDelay?: number;
}
const NewContentBanner2026: React.FC<NewContentBanner2026Props> = ({ 
  onClose, 
  autoHide = true, 
  hideDelay = 8000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const newContent = [
    {
      icon: Brain,
      title: "Next-Generation Autonomous Systems 2026",
      description: "Revolutionary AI consciousness and quantum neural networks transforming enterprise operations",
      link: "/blog/ai-2026-next-generation-autonomous-systems-ultimate-breakthrough",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      icon: Bot,
      title: "Quantum AI Business Transformation Guide",
      description: "The ultimate guide to implementing quantum AI for 500% ROI and market leadership",
      link: "/blog/quantum-ai-2026-business-transformation-guide",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600/20 to-cyan-600/20"
    },
    {
      icon: Zap,
      title: "Enterprise Quantum AI Success Story",
      description: "How a Fortune 500 company achieved 400% ROI with quantum consciousness AI",
      link: "/case-studies/enterprise-quantum-ai-transformation-2026",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20"
    },
    {
      icon: TrendingUp,
      title: "Quantum Consciousness Implementation Master Guide",
      description: "Step-by-step guide to implementing quantum consciousness AI systems",
      link: "/resources/ai-2026-quantum-consciousness-implementation-master-guide",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20"
    }
  ];
  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        handleClose();
      }, hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newContent.length]);
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };
  const handleContentClick = (link: string) => {
    // Navigate to the content
    window.location.href = link;
  };
  if (!isVisible) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md border-b border-purple-500/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Content Section */}
            <div className="flex items-center space-x-6 flex-1">
              {/* New Badge */}
              <div className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-white mr-2" />
                <span className="text-white text-sm font-semibold">NEW</span>
              </div>
              {/* Content Carousel */}
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4 cursor-pointer"
                    onClick={() => handleContentClick(newContent[currentSlide].link)}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${newContent[currentSlide].gradient} p-3 flex-shrink-0`}>
                      <newContent[currentSlide].icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">
                        {newContent[currentSlide].title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {newContent[currentSlide].description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleContentClick(newContent[currentSlide].link)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Progress Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-r ${newContent[currentSlide].bgGradient} opacity-50`} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default NewContentBanner2026;
</div></div>