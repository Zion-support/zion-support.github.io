import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage = React.memo(function OptimizedImage({
  className = '',
}: OptimizedImageProps) {
  return (
    <div className={`bg-blue-100 p-4 rounded-lg ${className}`}>
      <h3 className='text-lg font-semibold text-blue-800'>OptimizedImage</h3>
      <p className='text-blue-600'>This component is under development.</p>
    </div>
  );
  });

export default OptimizedImage;
