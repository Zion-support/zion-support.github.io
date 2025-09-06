import React from 'react';

interface Demo-backupProps {
  className?: string;
}

const Demo-backup: React.FC<Demo-backupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Demo-backup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Demo-backup;