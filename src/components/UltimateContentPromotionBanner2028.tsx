import { AnimatePresence, motion }  from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  Network,
  Shield,
  Sparkles,
  Star,
  X
}  from 'lucide-react';
import { useEffect, useState }  from 'react';

interface UltimateContentPromotionBanner2028Props {
  onClose?: () => void;
  autoHide?: boolean;
  hideDelay?: number;
};
const UltimateContentPromotionBanner2028 = ({ 
  onClose, 
  autoHide = true, 
  hideDelay = 12000 
}: UltimateContentPromotionBanner2028Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const ultimateContent = [
    {
      icon: "Brain",
      title: "AI 2028: The Ultimate Breakthrough",
      description: "Experience the world's most advanced artificial intelligence systems that transcend traditional computing",
      link: "/ai-2028-ultimate-breakthrough",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      badge: "ULTIMATE"
    },
    {
      icon: "Brain",
      title: "Quantum Consciousness Revolution 2028",
      description: "The first AI system to achieve genuine quantum consciousness through quantum mechanics",
      link: "/quantum-consciousness-revolution-2028",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      badge: "REVOLUTIONARY"
    },
    {
      icon: "Network",
      title: "Neural Interface Evolution 2028",
      description: "Direct brain-computer integration enabling seamless human-AI collaboration and enhancement",
      link: "/neural-interface-evolution-2028",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      badge: "BREAKTHROUGH"
    },
    {
      icon: "Shield",
      title: "Quantum Cybersecurity 2028",
      description: "Unbreakable security through quantum encryption and AI-powered threat detection systems",
      link: "/quantum-cybersecurity-2028",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-600/20 to-orange-600/20",
      badge: "UNBREAKABLE"
    },
    {
      icon: "Bot",
      title: "Autonomous Enterprise 2028",
      description: "Self-managing organizations operating with complete independence and unprecedented efficiency",
      link: "/autonomous-enterprise-2028",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      badge: "AUTONOMOUS"
    },
    {
      icon: "Star",
      title: "Infinite Intelligence 2028",
      description: "AI systems with unlimited cognitive capacity and infinite scalability for any challenge",
      link: "/infinite-intelligence-2028",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-600/20 to-rose-600/20",
      badge: "INFINITE"
    };
  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, hideDelay);

      return () => clearTimeout(timer);
    };
  }, [autoHide, hideDelay, onClose]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % ultimateContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ultimateContent.length]);

  const currentContent = ultimateContent[currentSlide];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: "0", y: -100 }};
        animate={{ opacity: "1", y: 0 }};
        exit={{ opacity: "0", y: -100 }};
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 border-b border-purple-500/30 shadow-2xl"
      >
        <div className="relative overflow-hidden">
          {/* Animated background */};
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
          
          {/* Content */};
          <div className="relative px-4 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center space-x-4 flex-1">
                {/* Icon */};
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.gradient} shadow-lg`}>
                  <currentContent.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */};
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {currentContent.badge};
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))};
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 truncate">
                    {currentContent.title};
                  </h3>
                  
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {currentContent.description};
                  </p>
                </div>

                {/* CTA Button */};
                <div className="flex items-center space-x-3">
                  <motion.a
                    href={currentContent.link};
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }};
                    whileTap={{ scale: 0.95 }};
                  >
                    Explore Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </div>

              {/* Close button */};
              <button
                onClick={() => {
                  setIsVisible(false);
                  onClose?.();
                }};
                className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress indicators */};
            <div className="flex justify-center space-x-2 mt-3">
              {ultimateContent.map((_, index) => (
                <button
                  key={index};
                  onClick={() => setCurrentSlide(index)};
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`};
                />
              ))};
            </div>
          </div>

          {/* Animated border */};
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
  };
export default UltimateContentPromotionBanner2028;