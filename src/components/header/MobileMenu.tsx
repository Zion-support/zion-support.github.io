
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

export function MobileMenu({ isOpen, onClose, navigationItems }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-zion-blue-dark border-l border-zion-purple/20 z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-purple/20">
              <h2 className="text-xl font-semibold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight className="h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Additional Links */}
              <div className="mt-8 pt-6 border-t border-zion-purple/20">
                <div className="space-y-2">
                  <Link
                    to="/pricing"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors group"
                  >
                    <span className="font-medium">Pricing</span>
                    <ChevronRight className="h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    to="/careers"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors group"
                  >
                    <span className="font-medium">Careers</span>
                    <ChevronRight className="h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    to="/faq"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors group"
                  >
                    <span className="font-medium">FAQ</span>
                    <ChevronRight className="h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-8 p-4 bg-zion-purple/10 rounded-lg border border-zion-purple/20">
                <h3 className="text-white font-semibold mb-2">Ready to get started?</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Transform your business with our AI-powered solutions
                </p>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark text-center py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
