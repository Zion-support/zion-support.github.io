import React from 'react';

interface IconsProps {
  children?: React.ReactNode;
}

const Icons: React.FC<IconsProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Icons;
