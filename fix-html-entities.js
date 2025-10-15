import React from 'react';

interface fix-html-entitiesProps {
  className?: string;
  children?: React.ReactNode;
}

const fix-html-entities: React.FC<fix-html-entitiesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`fix-html-entities ${className}`}>
      {children}
    </div>
  );
};

export default fix-html-entities;