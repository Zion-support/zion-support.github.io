import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 300,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setIsVisible(scrollPosition.y > threshold);
  }, [scrollPosition.y, threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
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
            className="w-12 h-12 rounded-full bg-zion-purple hover:bg-zion-purple-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
