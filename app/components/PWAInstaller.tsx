import React, { ReactNode } from 'react';

interface PWAInstallerProps {
  children: ReactNode;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ children }) => {
  return <>{children}</>;
};

export default PWAInstaller;