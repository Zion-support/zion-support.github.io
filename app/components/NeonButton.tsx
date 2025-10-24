import React from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ className = '', children }) => {
  return (
    <div className={`neonbutton ${className}`}>
      {children}
    </div>
  );
};

export default NeonButton;