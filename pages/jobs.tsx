import React from 'react';

interface JobsProps {
  className?: string;
}

const Jobs: React.FC<JobsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Jobs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Jobs;