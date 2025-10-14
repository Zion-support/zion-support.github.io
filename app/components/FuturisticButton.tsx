import React from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristicbutton-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">FuturisticButton</h3>
          <p className="text-gray-600">This is the FuturisticButton component.</p>
        </div>
      )}
    </div>
  );
};

export default FuturisticButton;