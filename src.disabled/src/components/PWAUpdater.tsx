import React from 'react';

interface PWAUpdaterProps {
  className?: string;
}

const PWAUpdater: React.FC<PWAUpdaterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PWAUpdater</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PWAUpdater;