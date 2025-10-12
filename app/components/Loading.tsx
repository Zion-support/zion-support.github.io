import React from 'react';

interface LoadingProps {
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Loading;
