import React from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  className = '', 
  children,
  onClick 
}) => {
  return (
    <button 
      className={`futuristicbutton ${className}`}
      onClick={onClick}
    >
      {children || 'Futuristic Button'}
    </button>
  );
};

export default FuturisticButton;