import React from 'react';

interface ServicecardskeletonProps {
  children?: React.ReactNode;
}

const Servicecardskeleton: React.FC<ServicecardskeletonProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Servicecardskeleton;
