import React from 'react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`futuristic-button ${className}`}
    >
      {children}
    </button>
  );
};

export default FuturisticButton;
