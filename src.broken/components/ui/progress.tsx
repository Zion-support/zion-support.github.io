import React from 'react';

interface ProgressProps {
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Progress</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Progress;