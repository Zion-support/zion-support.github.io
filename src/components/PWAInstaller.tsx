import React from 'react';
interface PWAInstallerProps {
  <void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
const PWAInstaller: React.FC<PWAInstallerProps> = () => {
  return (
    <div className="pwainstaller">
      {}
    <div>
  );
};
export default PWAInstaller;