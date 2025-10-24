'use client'
import React from 'react';

interface NavigationBackupProps {
  className?: string;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Navigation Backup</h2>
      <p className="text-gray-600">This is a placeholder component for Navigation Backup.</p>
    </div>
  );
};

export default NavigationBackup;