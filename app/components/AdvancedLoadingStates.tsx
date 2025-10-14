import React, { ReactNode } from 'react';

interface AdvancedLoadingStatesProps {
  children: ReactNode;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ children }) => {
  return <>{children}</>;
};
export default AdvancedLoadingStates;