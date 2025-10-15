import React from 'react';

interface layoutProps {
  className?: string;
  children?: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`layout ${className}`}>
      {children}
    </div>
  );
};

export default layout;