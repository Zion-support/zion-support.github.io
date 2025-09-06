import React from 'react';

interface ResumeProgressProps {
  className?: string;
}

const ResumeProgress: React.FC<ResumeProgressProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeProgress</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeProgress;