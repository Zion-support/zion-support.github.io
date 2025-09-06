import React from 'react';

interface ScoreBadgeProps {
  className?: string;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ScoreBadge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ScoreBadge;