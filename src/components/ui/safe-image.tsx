import React from 'react';

interface Safe-imageProps {
  className?: string;
}

const Safe-image: React.FC<Safe-imageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Safe-image</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Safe-image;