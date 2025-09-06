import React from 'react';

interface JobMatchCardProps {
  className?: string;
}

const JobMatchCard: React.FC<JobMatchCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobMatchCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobMatchCard;