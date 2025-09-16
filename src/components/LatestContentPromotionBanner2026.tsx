import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Brain,
  Rocket,
  X,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface LatestContentPromotionBanner2026Props {
  onClose?: () => void;
  autoHide?: boolean;
  hideDelay?: number;
}

const LatestContentPromotionBanner2026: React.FC<LatestContentPromotionBanner2026Props> = ({ 
  onClose, 
  autoHide = true, 
  hideDelay = 10000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      icon: Brain,
      title: "AI 2026 Latest Breakthroughs",
      description: "Discover the revolutionary AI technologies transforming businesses worldwide with conscious AI systems and quantum neural networks",
      link: "/pages/AI2026LatestBreakthroughs",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      category: "New Content",
      urgency: "Hot",
      stats: "500+ Companies Transformed"
    },
    {
      icon: Award,
      title: "Fortune 500 AI Success Story",
      description: "How a Fortune 500 company achieved 2,100% ROI with AI consciousness technology - complete transformation case study",
      link: "/pages/Fortune500AITransformation2026",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      category: "Case Study",
      urgency: "Must Read",
      stats: "$847M Revenue Increase"
    },
    {
      icon: Rocket,
      title: "Quantum AI Business Revolution",
      description: "The ultimate guide to implementing quantum AI for 500% ROI and market leadership in 2026",
      link: "/pages/QuantumAIBusinessRevolution2026",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      category: "Guide",
      urgency: "Trending",
      stats: "10,000x Faster Processing"
    },
    {
      icon: Zap,
      title: "Autonomous Business Operations",
      description: "Revolutionary AI systems that manage entire business operations autonomously with 99.7% accuracy",
      link: "/pages/AutonomousBusinessOperations2026",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20",
      category: "Innovation",
      urgency: "Breakthrough",
      stats: "98% Process Automation"
    }
  ];

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
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
    onClose?.();
  };

  if (!isVisible) return null;

  const currentItem = newContent[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Content Display */}
            <div className="flex-1 flex items-center space-x-6">
              {/* Icon and Badge */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentItem.gradient} flex items-center justify-center`}>
                  <currentItem.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300">
                      {currentItem.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      currentItem.urgency === 'Hot' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                      currentItem.urgency === 'Must Read' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      currentItem.urgency === 'Trending' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    }`}>
                      {currentItem.urgency}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {currentItem.stats}
                  </div>
                </div>
              </div>

              {/* Content Info */}
              <div className="flex-1 min-w-0">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-bold text-white truncate">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm text-gray-300 truncate">
                    {currentItem.description}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Slide Indicators */}
              <div className="flex space-x-1">
                {newContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href={currentItem.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 bg-gradient-to-r ${currentItem.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <motion.div
            key={currentSlide}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className={`h-full bg-gradient-to-r ${currentItem.gradient}`}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LatestContentPromotionBanner2026;