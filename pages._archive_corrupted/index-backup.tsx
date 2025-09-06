import React from 'react';

interface Index-backupProps {
  className?: string;
}

const Index-backup: React.FC<Index-backupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index-backup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Index-backup;