import React from 'react';

interface PWAUpdater.testProps {
  className?: string;
}

const PWAUpdater.test: React.FC<PWAUpdater.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PWAUpdater.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PWAUpdater.test;