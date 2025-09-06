import React from 'react';

interface ImageWithRetryProps {
  className?: string;
}

const ImageWithRetry: React.FC<ImageWithRetryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ImageWithRetry</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ImageWithRetry;