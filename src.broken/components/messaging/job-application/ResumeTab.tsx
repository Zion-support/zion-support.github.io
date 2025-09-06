import React from 'react';

interface ResumeTabProps {
  className?: string;
}

const ResumeTab: React.FC<ResumeTabProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeTab</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeTab;