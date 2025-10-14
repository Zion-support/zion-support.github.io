import React from 'react';

interface NavigationBackupProps {
  className?: string;
  children?: React.ReactNode;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({ className = '', children }) => {
  return (
    <div className={`navigation-backup-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Navigation Backup</h3>
          <p className="text-gray-600">This is the Navigation Backup component.</p>
        </div>
      )}
    </div>
  );
};

export default NavigationBackup;