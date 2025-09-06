import React from 'react';

interface AiIotPlatformProps {
  className?: string;
}

const AiIotPlatform: React.FC<AiIotPlatformProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AiIotPlatform</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AiIotPlatform;