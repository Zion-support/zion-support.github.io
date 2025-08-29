import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {}

export const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };

    // Add a small delay to ensure the new page content is rendered
    const timer = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};
