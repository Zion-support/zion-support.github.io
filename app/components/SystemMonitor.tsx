import React from 'react';

interface SystemmonitorProps {
  children?: React.ReactNode;
}

const Systemmonitor: React.FC<SystemmonitorProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Systemmonitor;
