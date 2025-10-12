import React from 'react';

interface LoadingspinnerProps {
  children?: React.ReactNode;
}

const Loadingspinner: React.FC<LoadingspinnerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Loadingspinner;
