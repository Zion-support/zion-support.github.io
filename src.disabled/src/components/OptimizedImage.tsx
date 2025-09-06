import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OptimizedImage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OptimizedImage;