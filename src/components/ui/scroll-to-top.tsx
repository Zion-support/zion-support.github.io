<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  className?: string;
  threshold?: number;
}

export function ScrollToTop({ className, threshold = 300 }: ScrollToTopProps) {
=======
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './button';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTop() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f4cb
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
<<<<<<< HEAD
      if (window.pageYOffset > threshold) {
=======
      if (window.pageYOffset > 300) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f4cb
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

<<<<<<< HEAD
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);
=======
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f4cb

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: "smooth",
=======
      behavior: 'smooth',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f4cb
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
<<<<<<< HEAD
        <motion.button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-zion-purple-light/20 hover:border-zion-purple-light/50",
            className
          )}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
=======
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full bg-zion-purple hover:bg-zion-purple-dark shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f4cb
      )}
    </AnimatePresence>
  );
}