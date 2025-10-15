import React from 'react';

interface appConfigProps {
  className?: string;
  children?: React.ReactNode;
}

const appConfig: React.FC<appConfigProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`appconfig ${className}`}>
      {children}
    </div>
  );
};

export default appConfig;