import React from 'react';

interface JobMatchesProps {
  className?: string;
}

const JobMatches: React.FC<JobMatchesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobMatches</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobMatches;