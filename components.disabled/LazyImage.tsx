import React from 'react';

interface LazyImageProps {
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LazyImage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LazyImage;