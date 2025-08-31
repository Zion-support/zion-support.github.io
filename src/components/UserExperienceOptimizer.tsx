import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar, 
  Star, 
  Heart, 
  Share2, 
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  User,
  Clock,
  MapPin,
  Globe,
  TrendingUp,
  Award,
  Shield,
  Zap
} from 'lucide-react';

interface UserExperienceOptimizerProps {
  enabled: boolean;
  showFeatures?: boolean;
}

export const UserExperienceOptimizer: React.FC<UserExperienceOptimizerProps> = ({
  enabled,
  showFeatures = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userEngagement, setUserEngagement] = useState({
    timeOnPage: 0,
    interactions: 0,
    scrollDepth: 0,
    engagementScore: 0
  });

  // Track user engagement
  useEffect(() => {
    if (!enabled) return;

    setIsVisible(true);
    let startTime = Date.now();
    let interactions = 0;
    let maxScroll = 0;

    const trackInteraction = () => {
      interactions++;
      setUserEngagement(prev => ({ ...prev, interactions }));
    };

    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      maxScroll = Math.max(maxScroll, scrollPercent);
      setUserEngagement(prev => ({ ...prev, scrollDepth: maxScroll }));
    };

    const trackTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      setUserEngagement(prev => ({ 
        ...prev, 
        timeOnPage,
        engagementScore: Math.min(100, Math.round((interactions * 10 + maxScroll + timeOnPage / 10)))
      }));
    };

    // Event listeners
    document.addEventListener('click', trackInteraction);
    document.addEventListener('scroll', trackScroll);
    const timeInterval = setInterval(trackTime, 1000);

    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackScroll);
      clearInterval(timeInterval);
    };
  }, [enabled]);

  // Live chat functionality
  const handleLiveChat = useCallback(() => {
    setShowLiveChat(true);
    // Announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = 'Live chat opened. A representative will be with you shortly.';
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, []);

  // Contact form functionality
  const handleContactForm = useCallback(() => {
    setShowContactForm(true);
  }, []);

  // Feedback functionality
  const handleFeedback = useCallback(() => {
    setShowFeedback(true);
  }, []);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-20 z-50 space-y-3">
        {/* Live Chat Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLiveChat}
          className="relative p-3 rounded-full shadow-lg bg-green-500 text-white hover:shadow-xl transition-all duration-300"
          aria-label="Start live chat"
        >
          <MessageCircle className="w-5 h-5" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
        </motion.button>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactForm}
          className="p-3 rounded-full shadow-lg bg-blue-500 text-white hover:shadow-xl transition-all duration-300"
          aria-label="Contact us"
        >
          <Mail className="w-5 h-5" />
        </motion.button>

        {/* Feedback Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFeedback}
          className="p-3 rounded-full shadow-lg bg-purple-500 text-white hover:shadow-xl transition-all duration-300"
          aria-label="Give feedback"
        >
          <Star className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Live Chat Panel */}
      <AnimatePresence>
        {showLiveChat && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-40 bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Live Chat</h3>
              </div>
              <button
                onClick={() => setShowLiveChat(false)}
                className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zion-slate-light" />
              </button>
            </div>

            {/* Chat Status */}
            <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Online - Usually responds in 2 minutes</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button className="w-full p-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                Start Chat
              </button>
              <button className="w-full p-3 border border-zion-purple/20 text-zion-slate-light rounded-lg hover:border-zion-cyan transition-colors">
                Schedule Call
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-4 pt-4 border-t border-zion-purple/20">
              <div className="flex items-center gap-2 text-zion-slate-light text-sm mb-2">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Panel */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-40 bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              </div>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zion-slate-light" />
              </button>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-zion-slate-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-zion-slate-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-zion-slate-light mb-2">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full p-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full p-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Panel */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-40 bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Feedback</h3>
              </div>
              <button
                onClick={() => setShowFeedback(false)}
                className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zion-slate-light" />
              </button>
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm text-zion-slate-light mb-2">Rate your experience</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="feedback" className="block text-sm text-zion-slate-light mb-2">Your feedback</label>
                <textarea
                  id="feedback"
                  rows={3}
                  className="w-full p-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Tell us what you think..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full p-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Engagement Indicator */}
      <AnimatePresence>
        {userEngagement.engagementScore > 50 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-4 right-4 z-50 bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-4 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <div className="text-sm text-zion-slate-light">Engagement</div>
                <div className="text-lg font-bold text-white">{userEngagement.engagementScore}%</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CTA Sections */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Get Started
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-full hover:bg-zion-cyan hover:text-white transition-all duration-300"
            onClick={() => window.location.href = '/services'}
          >
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Explore Services
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Interactive Elements Enhancement */}
      <style jsx global>{`
        /* Enhanced hover effects */
        .interactive-element {
          transition: all 0.3s ease;
        }
        
        .interactive-element:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.2);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced focus states */
        *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        
        /* Loading animations */
        .loading-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </>
  );
};