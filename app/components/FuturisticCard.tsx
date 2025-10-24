<<<<<<< HEAD
import React from 'react';

interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;
=======
'use client'

import React from 'react'

interface FuturisticCardProps {
  children: React.ReactNode
  className?: string
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`futuristic-card ${className}`}>
      {children}
    </div>
  )
}

export default FuturisticCard
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
