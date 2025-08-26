<<<<<<< HEAD

export function ScrollToTop() {
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
=======
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { ChevronUp } from 'lucide-react';
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a577

export function ScrollToTop() {
=======
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-dfe9
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: 'smooth',
=======
<<<<<<< HEAD
      behavior: 'smooth'
=======
      behavior: 'smooth',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-dfe9
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    });
  };

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
<<<<<<< HEAD
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white rounded-full shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-zion-purple/30"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            y: -2,
            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 17 
          }}
        >
          <svg 
            className="w-6 h-6" 
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 mx-auto" 
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-dfe9
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a577
        </motion.button>
      )}
    </AnimatePresence>
  );
}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-dfe9
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
