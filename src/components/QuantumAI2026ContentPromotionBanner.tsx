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
  Award,
  Rocket,
  Target,
  Users,
  DollarSign
} from 'lucide-react';
interface QuantumAI2026ContentPromotionBannerProps {
  onClose?: () => void;
  autoHide?: boolean;
  hideDelay?: number;
const QuantumAI2026ContentPromotionBanner: React.FC<QuantumAI2026ContentPromotionBannerProps> = ({ 
  onClose, 
  autoHide = true, 
  hideDelay = 12000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const newContent = [
    {
      icon: Brain,
      title: "AI 2026: Next-Generation Autonomous Systems",
      description: "Revolutionary AI consciousness technology achieving 2,847% ROI - The ultimate breakthrough in autonomous enterprise operations",
      link: "/blog/ai-2026-next-generation-autonomous-systems-ultimate-breakthrough",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      category: "Breakthrough Research",
      urgency: "Revolutionary",
      stats: "2,847% ROI Achieved",
      badge: "NEW"
    },
    {
      icon: Bot,
      title: "Quantum AI 2026: Business Transformation Guide",
      description: "The ultimate guide to achieving 500%+ ROI through quantum-enhanced AI consciousness and enterprise optimization",
      link: "/blog/quantum-ai-2026-business-transformation-guide",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      category: "Implementation Guide",
      urgency: "Must Read",
      stats: "500%+ ROI Guaranteed",
      badge: "HOT"
    },
    {
      icon: Award,
      title: "Enterprise Quantum AI Success Story",
      description: "How Fortune 500 Global Manufacturing Corp achieved $2.3B revenue increase and zero downtime with quantum AI consciousness",
      link: "/case-studies/enterprise-quantum-ai-transformation-2026",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      category: "Case Study",
      urgency: "Success Story",
      stats: "$2.3B Revenue Increase",
      badge: "PROVEN"
    },
    {
      icon: Target,
      title: "Quantum AI Implementation Checklist 2026",
      description: "Complete step-by-step transformation guide for achieving 1,000%+ ROI with quantum AI consciousness deployment",
      link: "/guides/quantum-ai-implementation-checklist-2026",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20",
      category: "Implementation",
      urgency: "Action Required",
      stats: "1,000%+ ROI Roadmap",
      badge: "ESSENTIAL"
    },
    {
      icon: Rocket,
      title: "Quantum Consciousness Technology 2026",
      description: "Breakthrough in synthetic consciousness achieving perfect accuracy and zero downtime across enterprise operations",
      link: "/blog/quantum-ai-2026-business-transformation-guide",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      category: "Technology",
      urgency: "Revolutionary",
      stats: "Perfect Accuracy",
      badge: "BREAKTHROUGH"
    },
    {
      icon: TrendingUp,
      title: "AI Consciousness ROI Calculator 2026",
      description: "Calculate your potential ROI with quantum AI consciousness - Most organizations achieve 500-1,000% returns",
      link: "/tools/ai-consciousness-roi-calculator-2026",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-600/20 to-blue-600/20",
      category: "Tool",
      urgency: "Calculate Now",
      stats: "500-1,000% ROI",
      badge: "FREE"
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
  const currentContent = newContent[currentSlide];
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NEW': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'HOT': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'PROVEN': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'ESSENTIAL': return 'bg-gradient-to-r from-orange-500 to-yellow-500';
      case 'BREAKTHROUGH': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'FREE': return 'bg-gradient-to-r from-teal-500 to-green-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Revolutionary': return 'text-red-500';
      case 'Must Read': return 'text-blue-500';
      case 'Success Story': return 'text-green-500';
      case 'Action Required': return 'text-orange-500';
      case 'Calculate Now': return 'text-teal-500';
      default: return 'text-gray-500';
    }
  };
  if (!isVisible) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Content Section */}
            <div className="flex-1 flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {newContent.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2"
                  >
                    <currentContent.icon className="w-5 h-5 text-white" />
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getBadgeColor(currentContent.badge)} text-white`}>
                      {currentContent.badge}
                    </span>
                    <span className={`text-xs font-medium ${getUrgencyColor(currentContent.urgency)}`}>
                      {currentContent.urgency}
                    </span>
                  </motion.div>
                </div>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-1"
                >
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {currentContent.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {currentContent.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{currentContent.stats}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{currentContent.category}</span>
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Action Section */}
            <div className="flex items-center space-x-4">
              <motion.a
                href={currentContent.link}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

};


export default QuantumAI2026ContentPromotionBanner;
