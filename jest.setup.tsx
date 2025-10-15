import React from 'react';

interface jest.setupProps {
  className?: string;
  children?: React.ReactNode;
}

const jest.setup: React.FC<jest.setupProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`jest.setup ${className}`}>
      {children}
    </div>
  );
};

export default jest.setup;