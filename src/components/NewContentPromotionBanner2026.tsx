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
  Clock,
  Users,
  Award,
  Rocket
} from 'lucide-react';

interface NewContentPromotionBanner2026Props {
  onClose?: () => void;
  autoHide?: boolean;
  hideDelay?: number;
}

const NewContentPromotionBanner2026: React.FC<NewContentPromotionBanner2026Props> = ({ 
  onClose, 
  autoHide = true, 
  hideDelay = 10000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      icon: Brain,
      title: "AI Business Automation Suite 2026",
      description: "Transform your operations with 300% efficiency gains and 50% cost reduction",
      link: "/services/ai-automation-suite-2026",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      badge: "NEW",
      price: "$25,000"
    },
    {
      icon: Zap,
      title: "Quantum Optimization Platform",
      description: "Revolutionary quantum computing with 10x performance improvements",
      link: "/services/quantum-optimization-platform",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      badge: "BREAKTHROUGH",
      price: "$100,000"
    },
    {
      icon: Bot,
      title: "Neural Interface Development",
      description: "Cutting-edge brain-computer interfaces for medical and commercial applications",
      link: "/services/neural-interface-development",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      badge: "INNOVATION",
      price: "$75,000"
    },
    {
      icon: Award,
      title: "Sustainable AI Platform",
      description: "Environmentally conscious AI with 50% energy reduction and carbon-neutral operations",
      link: "/services/sustainable-ai-platform",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20",
      badge: "GREEN",
      price: "$35,000"
    },
    {
      icon: Rocket,
      title: "Edge AI Deployment Suite",
      description: "Real-time intelligence at the edge with sub-millisecond latency",
      link: "/services/edge-ai-deployment-suite",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      badge: "EDGE",
      price: "$45,000"
    }
  ];

  const blogPosts = [
    {
      icon: TrendingUp,
      title: "AI-Powered Business Automation: Complete 2026 Guide",
      description: "Transform operations with cutting-edge AI automation solutions",
      link: "/blog/ai-powered-business-automation-2026-complete-guide",
      readTime: "12 min read",
      category: "AI Automation"
    },
    {
      icon: Clock,
      title: "Quantum Computing in Enterprise: Practical Applications",
      description: "Explore quantum computing with real-world ROI outcomes",
      link: "/blog/quantum-computing-enterprise-practical-applications-roi",
      readTime: "15 min read",
      category: "Quantum Computing"
    },
    {
      icon: Users,
      title: "Neural Interface Technology: Future of Human-Computer Interaction",
      description: "Discover seamless human-computer interactions",
      link: "/blog/neural-interface-technology-future-human-computer-interaction",
      readTime: "10 min read",
      category: "Neural Interfaces"
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
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white shadow-2xl"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
                <span className="font-bold text-lg">NEW IN 2026</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6 flex-1">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${newContent[currentSlide].bgGradient}`}>
                    <newContent[currentSlide].icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full">
                        {newContent[currentSlide].badge}
                      </span>
                      <span className="text-sm font-bold text-green-400">
                        {newContent[currentSlide].price}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm">{newContent[currentSlide].title}</h3>
                    <p className="text-xs text-gray-300">{newContent[currentSlide].description}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <span className="text-sm text-gray-300">Latest Articles:</span>
                {blogPosts.slice(0, 2).map((post, index) => (
                  <motion.a
                    key={index}
                    href={post.link}
                    className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <post.icon className="h-4 w-4" />
                    <span className="hidden xl:inline">{post.title}</span>
                  </motion.a>
                ))}
              </div>
              
              <motion.a
                href="/services"
                className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore All</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden mt-4">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-3"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${newContent[currentSlide].bgGradient}`}>
                <newContent[currentSlide].icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full">
                    {newContent[currentSlide].badge}
                  </span>
                  <span className="text-xs font-bold text-green-400">
                    {newContent[currentSlide].price}
                  </span>
                </div>
                <h3 className="font-bold text-sm">{newContent[currentSlide].title}</h3>
                <p className="text-xs text-gray-300">{newContent[currentSlide].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;