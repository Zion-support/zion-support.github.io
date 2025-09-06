import React from 'react';

interface HelpdeskPlatformProps {
  className?: string;
}

const HelpdeskPlatform: React.FC<HelpdeskPlatformProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HelpdeskPlatform</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HelpdeskPlatform;