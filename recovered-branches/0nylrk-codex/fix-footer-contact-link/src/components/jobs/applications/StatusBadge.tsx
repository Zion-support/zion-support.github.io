import React from 'react';

interface StatusBadgeProps {
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>StatusBadge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default StatusBadge;