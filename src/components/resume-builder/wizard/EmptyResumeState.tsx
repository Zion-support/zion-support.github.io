import React from 'react';

interface EmptyResumeStateProps {
  className?: string;
}

const EmptyResumeState: React.FC<EmptyResumeStateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EmptyResumeState</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EmptyResumeState;