import React, { useEffect, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
  className?: string;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  className = ''
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`${isMobile ? 'mobile-optimized' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default MobileOptimizer;