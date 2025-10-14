import React from 'react';

interface ImprovedImageProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedImage: React.FC<ImprovedImageProps> = ({ className = '', children }) => {
  return (
    <div className={`improvedimage ${className}`}>
      {children}
    </div>
  );
};

export default ImprovedImage;