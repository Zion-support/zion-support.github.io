<<<<<<< HEAD
import React from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default NeonButton;
=======
'use client'

import React from 'react'

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const NeonButton: React.FC<NeonButtonProps> = ({ children, onClick }) => {
  return (
    <button className="neon-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default NeonButton
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
