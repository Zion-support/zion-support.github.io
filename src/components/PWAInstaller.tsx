import React from 'react';
interface PWAInstallerProps {
  // Add props here
'use client';
interface BeforeInstallPromptEvent extends Event {// TODO: Add content;}
}
  prompt(): Promise;
          <void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
const PWAInstaller: React.FC<PWAInstallerProps> = () => {
  return (
    <div className="pwainstaller">
      {/* Component content */}
    </div>
  );
};
export default PWAInstaller;