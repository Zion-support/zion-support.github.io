import React from 'react';

interface LoadingskeletonProps {
  children?: React.ReactNode;
}

const Loadingskeleton: React.FC<LoadingskeletonProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Loadingskeleton;
