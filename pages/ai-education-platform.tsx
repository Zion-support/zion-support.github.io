import React from 'react';

interface AiEducationPlatformProps {
  className?: string;
}

const AiEducationPlatform: React.FC<AiEducationPlatformProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AiEducationPlatform</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AiEducationPlatform;