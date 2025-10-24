<<<<<<< HEAD
import React from 'react';

interface FuturisticGlowProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default FuturisticGlow;
=======
'use client'

import React from 'react'

const FuturisticGlow: React.FC = () => {
  return (
    <div className="futuristic-glow">
      <div className="glow-effect"></div>
    </div>
  )
}

export default FuturisticGlow
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
