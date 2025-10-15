import React from 'react';

interface CybersecurityPageProps {
  className?: string;
  children?: React.ReactNode;
}

const CybersecurityPage: React.FC<CybersecurityPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`cybersecuritypage ${className}`}>
      {children}
    </div>
  );
};

export default CybersecurityPage;