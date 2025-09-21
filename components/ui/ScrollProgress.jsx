import React, { useState, useEffect } from 'react';

const ScrollProgress = ({ 
  height = 4, 
  color = 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
  position = 'top',
  className = ''
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  const positionClasses = {
    top: 'top-0',
    bottom: 'bottom-0'
  };

  return (
    <div 
      className={`fixed left-0 w-full z-50 ${positionClasses[position]} ${className}`}
      style={{ height: `${height}px` }}
    >
      <div 
        className="h-full transition-all duration-150 ease-out"
        style={{
          background: color,
          width: `${scrollProgress}%`,
          transformOrigin: 'left'
        }}
      />
    </div>
  );
};

export default ScrollProgress;