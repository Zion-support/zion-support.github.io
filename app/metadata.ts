import React from 'react';

interface metadataProps {
  className?: string;
  children?: React.ReactNode;
}

const metadata: React.FC<metadataProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`metadata ${className}`}>
      {children}
    </div>
  );
};

export default metadata;