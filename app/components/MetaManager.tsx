import React from 'react';

interface MetaManagerProps {
  children: React.ReactNode;
}

const MetaManager: React.FC<MetaManagerProps> = ({ children }) => {
  return <>{children}</>;
};

export default MetaManager;