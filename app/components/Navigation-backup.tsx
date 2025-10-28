import React from 'react';

interface NavigationBackupProps {
  className?: string;
  children?: React.ReactNode;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({ className = '', children }) => {
  return (
    <div className={`navigation-backup-component ${className}`}>
      {children}
    </div>
  );
};

NavigationBackup.displayName = 'NavigationBackup';

export default NavigationBackup;
