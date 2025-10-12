import React from 'react';

interface errorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

const errorHandler: React.FC<errorHandlerProps> = ({ className = '', children }) => {
  return (
    <div className={`errorhandler ${className}`}>
      {children}
    </div>
  );
};

export default errorHandler;
