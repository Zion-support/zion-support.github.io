import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Heart, 
  Star, 
  MessageCircle, 
  Share2,
  Bookmark,
  Eye,
  ThumbsUp,
  TrendingUp,
  Users,
  Target,
  Award,
  Lightbulb,
  Rocket,
  Globe,
  Clock,
  CheckCircle,
  X
} from 'lucide-react';

interface UserInteraction {
  type: 'like' | 'share' | 'bookmark' | 'view';
  timestamp: Date;
  count: number;
}

interface UserEngagement {
  timeOnPage: number;
  scrollDepth: number;
  interactions: UserInteraction[];
  satisfaction: number;
}

export function InteractiveUserExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const [engagement, setEngagement] = useState<UserEngagement>({
    timeOnPage: 0,
    scrollDepth: 0,
    interactions: [],
    satisfaction: 0
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<string>('');

  // Motion values for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  // Track user engagement
  useEffect(() => {
    let startTime = Date.now();
    let scrollTimer: NodeJS.Timeout;

    const updateTimeOnPage = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      setEngagement(prev => ({ ...prev, timeOnPage: timeSpent }));
    };

    const updateScrollDepth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      setEngagement(prev => ({ ...prev, scrollDepth: scrollPercent }));
    };

    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateScrollDepth, 100);
    };

    const timeInterval = setInterval(updateTimeOnPage, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mouse tracking for 3D effects
  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // User interaction handlers
  const handleInteraction = (type: UserInteraction['type']) => {
    const newInteraction: UserInteraction = {
      type,
      timestamp: new Date(),
      count: 1
    };

    setEngagement(prev => ({
      ...prev,
      interactions: [...prev.interactions, newInteraction]
    }));

    // Show feedback
    setCurrentFeature(type);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={toggleVisibility}
        aria-label="Open Interactive Experience"
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <>
      {/* Main Panel */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl max-w-md"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <h3 className="font-semibold text-white">Interactive Experience</h3>
          </div>
          <button
            onClick={toggleVisibility}
            className="p-1 hover:bg-slate-700 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Engagement Stats */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Your Engagement
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-zion-cyan">
                  {Math.floor(engagement.timeOnPage / 60)}:{(engagement.timeOnPage % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-slate-400">Time on Page</div>
              </div>
              
              <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-zion-cyan">
                  {engagement.scrollDepth}%
                </div>
                <div className="text-xs text-slate-400">Scroll Depth</div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Quick Actions
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInteraction('like')}
                className="flex items-center gap-2 p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm text-white">Like</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInteraction('share')}
                className="flex items-center gap-2 p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white">Share</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInteraction('bookmark')}
                className="flex items-center gap-2 p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <Bookmark className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white">Save</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInteraction('view')}
                className="flex items-center gap-2 p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">View</span>
              </motion.button>
            </div>
          </div>

          {/* 3D Interactive Card */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Interactive Card
            </h4>
            
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 p-4 rounded-xl border border-zion-cyan/30 cursor-pointer"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-2">AI-Powered Solutions</h5>
                <p className="text-slate-300 text-sm">
                  Experience the future of technology with our cutting-edge AI services
                </p>
              </div>
            </motion.div>
          </div>

          {/* Satisfaction Rating */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Rate Your Experience
            </h4>
            
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <motion.button
                  key={rating}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setEngagement(prev => ({ ...prev, satisfaction: rating }))}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    rating <= engagement.satisfaction
                      ? 'bg-yellow-400 text-yellow-900'
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  <Star className="w-4 h-4 fill-current" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Interactions */}
          {engagement.interactions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Recent Activity
              </h4>
              
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {engagement.interactions.slice(-3).map((interaction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-xs text-slate-400"
                  >
                    <div className="w-2 h-2 bg-zion-cyan rounded-full" />
                    <span className="capitalize">{interaction.type}</span>
                    <span>•</span>
                    <span>{interaction.timestamp.toLocaleTimeString()}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Achievement Badges */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Achievements
            </h4>
            
            <div className="flex gap-2">
              {engagement.timeOnPage > 60 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-8 h-8 bg-yellow-500/20 border border-yellow-500/30 rounded-full flex items-center justify-center"
                  title="Time Explorer - Spent over 1 minute on page"
                >
                  <Clock className="w-4 h-4 text-yellow-400" />
                </motion.div>
              )}
              
              {engagement.scrollDepth > 50 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center"
                  title="Scroll Master - Scrolled over 50% of page"
                >
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </motion.div>
              )}
              
              {engagement.interactions.length > 2 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center"
                  title="Engagement Champion - Multiple interactions"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feedback Toast */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-full shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">
                {currentFeature === 'like' && 'Thanks for the like! ❤️'}
                {currentFeature === 'share' && 'Sharing is caring! 📤'}
                {currentFeature === 'bookmark' && 'Saved for later! 🔖'}
                {currentFeature === 'view' && 'Great exploration! 👀'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}