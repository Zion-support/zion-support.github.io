import React from 'react';

interface ActiveProjectsCardProps {
  className?: string;
}

const ActiveProjectsCard: React.FC<ActiveProjectsCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ActiveProjectsCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ActiveProjectsCard;