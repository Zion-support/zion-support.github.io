import React from 'react';

interface PreviewResumeProps {
  className?: string;
}

const PreviewResume: React.FC<PreviewResumeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PreviewResume</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PreviewResume;