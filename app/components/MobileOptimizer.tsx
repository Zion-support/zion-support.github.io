import React, { useEffect } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
  className?: string;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  className = ''
}) => {
  useEffect(() => {
    // Add mobile-specific optimizations
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }

    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    const preventZoom = (e: TouchEvent) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('touchend', preventZoom);
    };
  }, []);

  return (
    <div className={`mobile-optimizer ${className}`}>
      {children}
    </div>
  );
};

export default MobileOptimizer;