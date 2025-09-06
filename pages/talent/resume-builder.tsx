import React from 'react';

interface ResumeBuilderProps {
  className?: string;
}

const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeBuilder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeBuilder;