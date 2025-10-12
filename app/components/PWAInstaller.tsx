import React from 'react';

interface PwainstallerProps {
  children?: React.ReactNode;
}

const Pwainstaller: React.FC<PwainstallerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Pwainstaller;
