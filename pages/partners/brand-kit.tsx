import React from 'react';

interface BrandKitProps {
  className?: string;
}

const BrandKit: React.FC<BrandKitProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BrandKit</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BrandKit;