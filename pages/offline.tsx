import React from 'react';

interface OfflineProps {
  className?: string;
}

const Offline: React.FC<OfflineProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Offline</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Offline;