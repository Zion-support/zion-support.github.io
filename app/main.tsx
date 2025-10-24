import React from 'react';

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ className = '', children }) => {
  return (
    <div className={`main ${className}`}>
      {children}
    </div>
  );
};

export default Main;