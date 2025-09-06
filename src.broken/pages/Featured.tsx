import React from 'react';

interface FeaturedProps {
  className?: string;
}

const Featured: React.FC<FeaturedProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Featured</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Featured;