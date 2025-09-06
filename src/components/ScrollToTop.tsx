import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

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
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-40 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </button>
  );
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
};

export default ScrollToTop;