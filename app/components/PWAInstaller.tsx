import React from "react";

interface PWAInstallerProps {
  children: React.ReactNode;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ children }) => {
  return <>{children}</>;
};

export default PWAInstaller;