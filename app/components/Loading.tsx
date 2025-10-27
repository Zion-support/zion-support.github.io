
import React from 'react';
export type LoadingProps = {
  // Add your props here
};

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'loading ' + className}>
      {children || <p>Loading component</p>}
    </div>
  );
};

export default Loading;
