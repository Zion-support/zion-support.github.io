
import React from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className, children, onClick }) => {
  return (
    <button 
      className={`neon-button ${className}`} 
      onClick={onClick}
      role="button"
    >
      {children || 'Neon Button'}
    </button>
  );
};

export default NeonButton;
