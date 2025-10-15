import React from 'react';

interface DemoPageProps {
  className?: string;
  children?: React.ReactNode;
}

const DemoPage: React.FC<DemoPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`demopage ${className}`}>
      {children}
    </div>
  );
};

export default DemoPage;