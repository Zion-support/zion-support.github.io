import React from 'react';

interface AnalyticsproviderProps {
  children: React.ReactNode;
}

const Analyticsprovider: React.FC<AnalyticsproviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default Analyticsprovider;
