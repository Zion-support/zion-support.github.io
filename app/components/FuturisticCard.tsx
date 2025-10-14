import React from 'react';

interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristiccard-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">FuturisticCard</h3>
          <p className="text-gray-600">This is the FuturisticCard component.</p>
        </div>
      )}
    </div>
  );
};

export default FuturisticCard;