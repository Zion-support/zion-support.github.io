import React from 'react';

interface PointsProps {
  className?: string;
}

const Points: React.FC<PointsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Points</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Points;