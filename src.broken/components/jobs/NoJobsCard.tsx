import React from 'react';

interface NoJobsCardProps {
  className?: string;
}

const NoJobsCard: React.FC<NoJobsCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NoJobsCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NoJobsCard;