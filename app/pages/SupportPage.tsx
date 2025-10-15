import React from 'react';

interface SupportPageProps {
  className?: string;
  children?: React.ReactNode;
}

const SupportPage: React.FC<SupportPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`supportpage ${className}`}>
      {children}
    </div>
  );
};

export default SupportPage;