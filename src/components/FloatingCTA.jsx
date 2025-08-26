import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 z-50 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-8 h-8 mx-auto" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 max-w-md w-full border border-slate-600"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Get Started Today</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6">
                Ready to transform your business with cutting-edge technology? 
                Let's discuss your needs and create a custom solution.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center justify-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                
                <Link
                  to="/services"
                  className="block w-full border-2 border-cyan-500 text-cyan-400 text-center py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  View Services
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-slate-600">
                <div className="text-center text-sm text-gray-400">
                  <p>Or call us directly:</p>
                  <a 
                    href="tel:+13024640950" 
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};