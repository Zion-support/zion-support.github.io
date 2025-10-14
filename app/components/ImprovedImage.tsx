import React from 'react';

interface ImprovedImageProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedImage: React.FC<ImprovedImageProps> = ({ className = '', children }) => {
  return (
    <div className={`improvedimage-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ImprovedImage</h3>
          <p className="text-gray-600">This is the ImprovedImage component.</p>
        </div>
      )}
    </div>
  );
};

export default ImprovedImage;