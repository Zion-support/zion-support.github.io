import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  X, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  Sparkles,
  Zap
} from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show CTA after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsExpanded(false);
  };

  const quickActions = [
    {
      icon: Phone,
      label: 'Call Us',
      description: 'Speak with an expert',
      action: 'tel:+1-800-ZION-TECH',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      label: 'Email Us',
      description: 'Send us a message',
      action: 'mailto:info@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Calendar,
      label: 'Schedule Demo',
      description: 'Book a consultation',
      action: '/contact',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Main CTA Button */}
        {!isExpanded && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Main button */}
            <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300">
              <MessageCircle className="w-6 h-6" />
            </div>

            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}

        {/* Expanded CTA Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 right-0 w-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-2xl backdrop-blur-sm"
            >
              {/* Header */}
              <div className="relative p-6 border-b border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Get Started Today</h3>
                    <p className="text-sm text-gray-300">Transform your business with AI</p>
                  </div>
                </div>
                
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="p-6 space-y-4">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Quick Actions
                </h4>
                
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Link
                      to={action.action}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-gray-600"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{action.label}</div>
                        <div className="text-sm text-gray-400">{action.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Main CTA */}
              <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-gray-700">
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Zap className="w-4 h-4" />
                  Start Your Project
                </Link>
                
                <p className="text-xs text-gray-400 text-center mt-3">
                  Free consultation • No commitment required
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
