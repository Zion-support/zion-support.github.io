import React from 'react';

interface classNamesProps {
  className?: string;
  children?: React.ReactNode;
}

const classNames: React.FC<classNamesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`classnames ${className}`}>
      {children}
    </div>
  );
};

export default classNames;