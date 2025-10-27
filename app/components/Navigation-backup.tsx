import React from 'react';

interface NavigationBackupProps {
  className?: string;
  children?: React.ReactNode;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'navigation-backup ' + className}>
      {children || <p>Navigation-backup component</p>}
    </div>
  );
};

export default NavigationBackup;
