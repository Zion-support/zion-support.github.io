import React from 'react';

interface ResumeBasicInfoProps {
  className?: string;
}

const ResumeBasicInfo: React.FC<ResumeBasicInfoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeBasicInfo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeBasicInfo;