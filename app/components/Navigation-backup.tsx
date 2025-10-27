import React from 'react';

interface NavigationBackupProps {
  className?: string;
  children?: React.ReactNode;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({ className = '', children }) => {
  return (
    <nav className={`navigation-backup ${className}`}>
      {children}
    </nav>
  );
};

export default NavigationBackup;
