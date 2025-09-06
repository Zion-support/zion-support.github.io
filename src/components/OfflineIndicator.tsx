import React from 'react';

interface OfflineIndicatorProps {
  className?: string;
}

const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OfflineIndicator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OfflineIndicator;