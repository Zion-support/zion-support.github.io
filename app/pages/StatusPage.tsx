import React from 'react';

interface StatusPageProps {
  className?: string;
  children?: React.ReactNode;
}

const StatusPage: React.FC<StatusPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`statuspage ${className}`}>
      {children}
    </div>
  );
};

export default StatusPage;