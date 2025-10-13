import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const errorReporter.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`errorreporter.ts ${className}`}>
      {children}
    </div>
  );
};

export default errorReporter.ts;