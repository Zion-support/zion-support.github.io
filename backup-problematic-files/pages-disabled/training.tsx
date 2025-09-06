import React from 'react';

interface TrainingProps {
  className?: string;
}

const Training: React.FC<TrainingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Training</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Training;