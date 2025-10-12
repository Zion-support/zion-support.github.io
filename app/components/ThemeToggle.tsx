import React from 'react';

interface ThemetoggleProps {
  children?: React.ReactNode;
}

const Themetoggle: React.FC<ThemetoggleProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Themetoggle;
