import React from 'react';

interface ResumeSelectorProps {
  className?: string;
}

const ResumeSelector: React.FC<ResumeSelectorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeSelector</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeSelector;