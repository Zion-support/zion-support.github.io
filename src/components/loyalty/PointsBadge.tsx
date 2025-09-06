import React from 'react';

interface PointsBadgeProps {
  className?: string;
}

const PointsBadge: React.FC<PointsBadgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PointsBadge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PointsBadge;