import React from 'react';

interface jest.configProps {
  className?: string;
  children?: React.ReactNode;
}

const jest.config: React.FC<jest.configProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`jest.config ${className}`}>
      {children}
    </div>
  );
};

export default jest.config;