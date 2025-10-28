import React from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className = '', children }) => {
  return (
<div className={`neonbutton-component ${className}`}>
      {children}
cursor/fix-errors-and-merge-to-main-7271
    </div>
  );
};

NeonButton.displayName = 'NeonButton';export default NeonButton;
cursor/fix-errors-and-merge-to-main-7271