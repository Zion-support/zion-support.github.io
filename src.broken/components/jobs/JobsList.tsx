import React from 'react';

interface JobsListProps {
  className?: string;
}

const JobsList: React.FC<JobsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobsList;