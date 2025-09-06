import React from 'react';

interface JobMatchesCardProps {
  className?: string;
}

const JobMatchesCard: React.FC<JobMatchesCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobMatchesCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobMatchesCard;