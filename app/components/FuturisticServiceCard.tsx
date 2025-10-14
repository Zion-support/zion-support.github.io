import React from 'react';

interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristicservicecard-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">FuturisticServiceCard</h3>
          <p className="text-gray-600">This is the FuturisticServiceCard component.</p>
        </div>
      )}
    </div>
  );
};

export default FuturisticServiceCard;