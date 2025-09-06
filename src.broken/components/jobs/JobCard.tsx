import React from 'react';

interface JobCardProps {
  className?: string;
}

const JobCard: React.FC<JobCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobCard;