import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, Phone, Mail, ArrowUp, X } from 'lucide-react';

interface FloatingActionButtonProps {
  className?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: 'Live Chat',
      href: '/chat',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+1-800-ZION-TECH',
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        onClick={scrollToTop}
        className="mb-4 w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      {/* Floating action buttons */}
      <div className="relative">
        {/* Action buttons */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-16 right-0 space-y-3">
              {actions.map((action, index) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  initial={{ opacity: 0, scale: 0, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: 20 }}
                  transition={{ delay: action.delay, duration: 0.2 }}
                  className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${action.color} rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:-translate-y-1 group`}
                  title={action.label}
                >
                  <action.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Plus className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Background overlay when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
