import React from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className = '', children }) => {
  return (
    <div className={`neon-button ${className}`}>
      {children || (
        <div className="p-4">
          <h2>NeonButton</h2>
          <p>Component implementation coming soon...</p>
        </div>
      )}
    </div>
  );
};

NeonButton.displayName = 'NeonButton';

export default NeonButton;