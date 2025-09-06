import React from 'react';

interface ResumePreviewCardProps {
  className?: string;
}

const ResumePreviewCard: React.FC<ResumePreviewCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumePreviewCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumePreviewCard;