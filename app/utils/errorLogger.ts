import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const errorLogger.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`errorlogger.ts ${className}`}>
      {children}
    </div>
  );
};

export default errorLogger.ts;