import React from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className = '', children }) => {
  return (
    <div className={`neonbutton-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">NeonButton</h3>
          <p className="text-gray-600">This is the NeonButton component.</p>
        </div>
      )}
    </div>
  );
};

export default NeonButton;