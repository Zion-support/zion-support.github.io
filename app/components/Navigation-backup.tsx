import React from 'react';

interface Navigation-backupProps {
  className?: string;
  children?: React.ReactNode;
}

const Navigation-backup: React.FC<Navigation-backupProps> = ({ className = '', children }) => {
  return (
    <div className={`navigation-backup ${className}`}>
      {children}
    </div>
  );
};

export default Navigation-backup;