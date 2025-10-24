<<<<<<< HEAD
import React from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default FuturisticButton;
=======
'use client'

import React from 'react'

interface FuturisticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={`futuristic-button ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default FuturisticButton
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
