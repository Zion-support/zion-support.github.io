import React from 'react';

interface ResumePreviewProps {
  className?: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumePreview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumePreview;