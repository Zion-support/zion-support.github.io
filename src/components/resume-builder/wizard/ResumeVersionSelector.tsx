import React from 'react';

interface ResumeVersionSelectorProps {
  className?: string;
}

const ResumeVersionSelector: React.FC<ResumeVersionSelectorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeVersionSelector</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeVersionSelector;