import React from 'react';

interface SuggestedJobsProps {
  className?: string;
}

const SuggestedJobs: React.FC<SuggestedJobsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SuggestedJobs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SuggestedJobs;