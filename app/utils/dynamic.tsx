import React from 'react';

interface DynamicProps {
  className?: string;
  children?: React.ReactNode;
}

export const Dynamic: React.FC<DynamicProps> = ({ className = '', children }) => {
  return (
    <div className={`dynamic ${className}`}>
      {children}
    </div>
  );
};

export default Dynamic;