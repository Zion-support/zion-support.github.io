import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Phone, Mail, X } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actionItems = [
    {
      icon: MessageCircle,
      label: 'Chat Support',
      action: () => window.open('/contact', '_blank'),
      color: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
      icon: Phone,
      label: 'Call Us',
      action: () => window.open('tel:+13024640950', '_blank'),
      color: 'from-zion-purple to-zion-purple-dark'
    },
    {
      icon: Mail,
      label: 'Email Us',
      action: () => window.open('mailto:kleber@ziontechgroup.com', '_blank'),
      color: 'from-zion-blue to-zion-blue-dark'
    }
  ];

  return (
    <>
      {/* Main Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* Action Items */}
        <AnimatePresence>
          {isExpanded && (
            <div className="absolute bottom-20 right-0 space-y-4">
              {actionItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ scale: 0, opacity: 0, x: 20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-white text-sm font-medium bg-slate-800/90 backdrop-blur-sm px-3 py-2 rounded-lg whitespace-nowrap border border-white/20">
                    {item.label}
                  </span>
                  <button
                    onClick={item.action}
                    className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-2xl hover:shadow-neon-xl transform hover:scale-110 transition-all duration-300 border border-white/30`}
                    aria-label={item.label}
                  >
                    <item.icon className="h-6 w-6" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center text-white shadow-2xl hover:shadow-purple-neon-xl transform hover:scale-110 transition-all duration-300 border border-white/30 relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-7 w-7" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
        </motion.button>
      </motion.div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center text-white shadow-2xl hover:shadow-neon-xl transform hover:scale-110 transition-all duration-300 border border-white/30"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quick Contact Tooltip */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            className="fixed bottom-32 right-8 z-40"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="bg-slate-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-zion-cyan/30 shadow-lg">
              <p className="text-sm text-zion-cyan font-medium">Need help? We're here!</p>
              <div className="w-0 h-0 border-l-4 border-l-slate-800/90 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-auto mr-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionButton;