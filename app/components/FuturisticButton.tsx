import React from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristicbutton ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticButton;