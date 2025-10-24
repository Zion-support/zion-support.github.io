<<<<<<< HEAD
import React from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default FuturisticBackground;
=======
'use client'

import React from 'react'

const FuturisticBackground: React.FC = () => {
  return (
    <div className="futuristic-background">
      <div className="grid-overlay"></div>
    </div>
  )
}

export default FuturisticBackground
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
