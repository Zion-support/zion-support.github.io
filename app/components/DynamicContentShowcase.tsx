import React from 'react';

interface DynamiccontentshowcaseProps {
  children?: React.ReactNode;
}

const Dynamiccontentshowcase: React.FC<DynamiccontentshowcaseProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Dynamiccontentshowcase;
