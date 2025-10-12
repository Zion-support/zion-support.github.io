import React from 'react';

interface GenericservicepageProps {
  children?: React.ReactNode;
}

const Genericservicepage: React.FC<GenericservicepageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Genericservicepage;
