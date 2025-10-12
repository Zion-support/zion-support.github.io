import React from 'react';

interface imageProps {
  className?: string;
  children?: React.ReactNode;
}

const image: React.FC<imageProps> = ({ className = '', children }) => {
  return (
    <div className={`image ${className}`}>
      {children}
    </div>
  );
};

export default image;
