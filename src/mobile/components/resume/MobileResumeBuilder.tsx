import React from 'react';

interface MobileResumeBuilderProps {
  className?: string;
}

const MobileResumeBuilder: React.FC<MobileResumeBuilderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileResumeBuilder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileResumeBuilder;