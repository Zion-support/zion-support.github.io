import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack,
  HelpCircle,
  Star,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Zap,
  Target,
  TrendingUp,
  Users,
  Globe,
  Award
} from 'lucide-react';

interface TourStep {
  id: string;
  title: string;
  description: string;
  target: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  action?: string;
  actionUrl?: string;
}

interface InteractiveFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  action: () => void;
  isActive: boolean;
}

export function InteractiveUserExperience() {
  const [showTour, setShowTour] = useState(false);
  const [currentTourStep, setCurrentTourStep] = useState(0);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'positive' | 'negative' | 'suggestion'>('positive');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [userEngagement, setUserEngagement] = useState({
    timeOnPage: 0,
    interactions: 0,
    pagesVisited: 1,
    satisfaction: 0
  });

  const tourSteps: TourStep[] = [
    {
      id: 'hero',
      title: 'Welcome to Zion Tech Group',
      description: 'Discover our cutting-edge AI solutions and technology services. This is where innovation meets business transformation.',
      target: '.hero-section',
      position: 'bottom',
      action: 'Explore Services',
      actionUrl: '/services'
    },
    {
      id: 'ai-services',
      title: 'AI-Powered Solutions',
      description: 'Our AI services help businesses automate processes, gain insights, and drive innovation across all departments.',
      target: '.ai-services-section',
      position: 'top',
      action: 'Learn More',
      actionUrl: '/ai-services'
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      description: 'Ready to transform your business? Our experts are here to help you implement the right solutions.',
      target: '.contact-section',
      position: 'left',
      action: 'Contact Us',
      actionUrl: '/contact'
    }
  ];

  const interactiveFeatures: InteractiveFeature[] = [
    {
      id: 'quick-demo',
      title: 'Quick Demo',
      description: 'See our solutions in action',
      icon: Play,
      action: () => window.open('/demo', '_blank'),
      isActive: true
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      description: 'Real success stories',
      icon: Star,
      action: () => window.open('/case-studies', '_blank'),
      isActive: true
    },
    {
      id: 'live-chat',
      title: 'Live Chat',
      description: 'Get instant help',
      icon: MessageCircle,
      action: () => setShowFeedback(true),
      isActive: true
    },
    {
      id: 'bookmark',
      title: 'Bookmark',
      description: 'Save for later',
      icon: Bookmark,
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Zion Tech Group',
            url: window.location.href
          });
        } else {
          // Fallback to bookmark
          const url = window.location.href;
          const title = document.title;
          try {
            localStorage.setItem('bookmarked-pages', JSON.stringify([
              ...JSON.parse(localStorage.getItem('bookmarked-pages') || '[]'),
              { url, title, timestamp: Date.now() }
            ]));
            alert('Page bookmarked!');
          } catch (error) {
            // console.error('Failed to bookmark page:', error);
          }
        }
      },
      isActive: true
    }
  ];

  // Track user engagement
  useEffect(() => {
    const timer = setInterval(() => {
      setUserEngagement(prev => ({
        ...prev,
        timeOnPage: prev.timeOnPage + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-play tour
  useEffect(() => {
    if (isTourPlaying) {
      const timer = setTimeout(() => {
        if (currentTourStep < tourSteps.length - 1) {
          setCurrentTourStep(prev => prev + 1);
        } else {
          setIsTourPlaying(false);
          setShowTour(false);
        }
      }, 5000);

      return () => clearTimer(timer);
    }
  }, [isTourPlaying, currentTourStep, tourSteps.length]);

  const startTour = useCallback(() => {
    setShowTour(true);
    setCurrentTourStep(0);
    setIsTourPlaying(true);
  }, []);

  const nextStep = useCallback(() => {
    if (currentTourStep < tourSteps.length - 1) {
      setCurrentTourStep(prev => prev + 1);
    } else {
      setShowTour(false);
      setIsTourPlaying(false);
    }
  }, [currentTourStep, tourSteps.length]);

  const prevStep = useCallback(() => {
    if (currentTourStep > 0) {
      setCurrentTourStep(prev => prev - 1);
    }
  }, [currentTourStep]);

  const skipTour = useCallback(() => {
    setShowTour(false);
    setIsTourPlaying(false);
    setCurrentTourStep(0);
  }, []);

  const submitFeedback = useCallback(() => {
    // Here you would typically send feedback to your backend
    // console.log('Feedback submitted:', { type: feedbackType, message: feedbackMessage });
    
    // Update user engagement
    setUserEngagement(prev => ({
      ...prev,
      interactions: prev.interactions + 1
    }));
    
    // Show success message
    alert('Thank you for your feedback!');
    setShowFeedback(false);
    setFeedbackMessage('');
  }, [feedbackType, feedbackMessage]);

  const getTourPosition = (position: string) => {
    switch (position) {
      case 'top':
        return { top: '-20px', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { bottom: '-20px', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { left: '-20px', top: '50%', transform: 'translateY(-50%)' };
      case 'right':
        return { right: '-20px', top: '50%', transform: 'translateY(-50%)' };
      default:
        return { bottom: '-20px', left: '50%', transform: 'translateX(-50%)' };
    }
  };

  if (!showTour && !showFeedback && !showQuickActions) {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        <motion.button
          onClick={startTour}
          className="p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Start guided tour"
        >
          <Lightbulb className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          onClick={() => setShowQuickActions(true)}
          className="p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Quick actions"
        >
          <Zap className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          onClick={() => setShowFeedback(true)}
          className="p-3 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Send feedback"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.button>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {/* Guided Tour */}
      {showTour && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-zion-slate-light/95 backdrop-blur-md rounded-xl shadow-2xl border border-zion-cyan/20 p-6 max-w-md mx-4"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {tourSteps[currentTourStep].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {tourSteps[currentTourStep].description}
                </p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={prevStep}
                  disabled={currentTourStep === 0}
                  className="p-2 bg-zion-slate/50 text-white rounded-lg hover:bg-zion-slate/70 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-1">
                  {tourSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentTourStep ? 'bg-zion-cyan' : 'bg-zion-slate/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  className="p-2 bg-zion-slate/50 text-white rounded-lg hover:bg-zion-slate/70"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsTourPlaying(!isTourPlaying)}
                  className="flex-1 p-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors flex items-center justify-center gap-2"
                >
                  {isTourPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isTourPlaying ? 'Pause' : 'Auto-play'}
                </button>
                
                {tourSteps[currentTourStep].action && (
                  <button
                    onClick={() => window.open(tourSteps[currentTourStep].actionUrl, '_blank')}
                    className="flex-1 p-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors"
                  >
                    {tourSteps[currentTourStep].action}
                  </button>
                )}
              </div>

              <button
                onClick={skipTour}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Feedback Modal */}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zion-slate-light/95 backdrop-blur-md rounded-xl shadow-2xl border border-zion-purple/20 p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-white mb-4">Share Your Feedback</h3>
            
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Feedback Type</label>
              <div className="flex gap-2">
                {(['positive', 'negative', 'suggestion'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFeedbackType(type)}
                    className={`flex-1 p-2 rounded-lg text-sm capitalize transition-colors ${
                      feedbackType === type
                        ? 'bg-zion-purple text-white'
                        : 'bg-zion-slate/50 text-gray-400 hover:bg-zion-slate/70'
                    }`}
                  >
                    {type === 'positive' && <Heart className="w-4 h-4 mx-auto mb-1" />}
                    {type === 'negative' && <Target className="w-4 h-4 mx-auto mb-1" />}
                    {type === 'suggestion' && <Lightbulb className="w-4 h-4 mx-auto mb-1" />}
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Message</label>
              <textarea
                value={feedbackMessage}
                onChange={(e) => setFeedbackMessage(e.target.value)}
                placeholder="Tell us what you think..."
                className="w-full p-3 bg-zion-slate/50 text-white rounded-lg border border-zion-purple/30 focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none"
                rows={4}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFeedback(false)}
                className="flex-1 p-3 bg-zion-slate/50 text-white rounded-lg hover:bg-zion-slate/70 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitFeedback}
                disabled={!feedbackMessage.trim()}
                className="flex-1 p-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </div>

            <button
              onClick={() => setShowFeedback(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Quick Actions */}
      {showQuickActions && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zion-slate-light/95 backdrop-blur-md rounded-xl shadow-2xl border border-zion-cyan/20 p-6 max-w-lg w-full"
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              {interactiveFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={feature.action}
                  disabled={!feature.isActive}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    feature.isActive
                      ? 'bg-zion-slate/50 text-white hover:bg-zion-slate/70 hover:scale-105'
                      : 'bg-zion-slate/30 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <feature.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-medium">{feature.title}</div>
                  <div className="text-xs text-gray-400">{feature.description}</div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowQuickActions(false)}
                className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                Close
              </button>
            </div>

            <button
              onClick={() => setShowQuickActions(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}