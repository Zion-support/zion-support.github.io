'use client';

import React, { memo } from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <button className={`neon-button ${className}`}>
      {children}
    </button>
  );
});

NeonButton.displayName = 'NeonButton';

export default NeonButton;