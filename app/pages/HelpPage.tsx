import React from 'react';

interface HelpPageProps {
  className?: string;
  children?: React.ReactNode;
}

const HelpPage: React.FC<HelpPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`helppage ${className}`}>
      {children}
    </div>
  );
};

export default HelpPage;