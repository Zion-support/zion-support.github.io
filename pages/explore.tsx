import React from 'react';

interface ExploreProps {
  className?: string;
}

const Explore: React.FC<ExploreProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Explore</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Explore;