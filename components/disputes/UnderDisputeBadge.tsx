import React from 'react';

interface UnderDisputeBadgeProps {
  className?: string;
}

const UnderDisputeBadge: React.FC<UnderDisputeBadgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UnderDisputeBadge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UnderDisputeBadge;