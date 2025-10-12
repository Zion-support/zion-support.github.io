import React from 'react';

interface PerformancemonitorProps {
  children?: React.ReactNode;
}

const Performancemonitor: React.FC<PerformancemonitorProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Performancemonitor;
