import React from 'react';

interface ServiceworkerProps {
  children?: React.ReactNode;
}

const Serviceworker: React.FC<ServiceworkerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Serviceworker;
