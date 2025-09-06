import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 text-white p-3 shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTopButton;