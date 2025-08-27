import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowUp, 
  X, 
  Plus,
  HelpCircle,
  Calendar,
  FileText,
  Zap
} from 'lucide-react';

interface FloatingActionButtonProps {
  className?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const quickActions = [
    {
      icon: MessageCircle,
      label: 'Live Chat',
      action: () => window.open('/support', '_blank'),
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Phone,
      label: 'Call Us',
      action: () => window.open('tel:+1-555-0123', '_blank'),
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:info@ziontechgroup.com', '_blank'),
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      icon: HelpCircle,
      label: 'FAQ',
      action: () => window.open('/faq', '_blank'),
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: Calendar,
      label: 'Schedule Demo',
      action: () => window.open('/contact', '_blank'),
      color: 'from-indigo-500 to-blue-500',
      delay: 0.5
    },
    {
      icon: FileText,
      label: 'Get Quote',
      action: () => window.open('/request-quote', '_blank'),
      color: 'from-teal-500 to-green-500',
      delay: 0.6
    }
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Floating Action Button */}
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        {/* Quick Actions Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-20 right-0 mb-4"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      onClick={action.action}
                      className="group relative p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/20 transition-all duration-300 hover:border-white/40"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: action.delay }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs text-white font-medium text-center block">
                        {action.label}
                      </span>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  ))}
                </div>
                
                {/* Close button */}
                <motion.button
                  onClick={toggleMenu}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
            isOpen 
              ? 'bg-gradient-to-r from-red-500 to-pink-500' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-500'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close quick actions" : "Open quick actions"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-8 h-8 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-8 h-8 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Pulse effect */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>

      {/* Mobile-friendly alternative for small screens */}
      <div className="md:hidden">
        <div className="fixed bottom-6 left-6 z-40">
          <Link
            to="/contact"
            className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Contact us"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
};