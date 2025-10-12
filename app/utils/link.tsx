import React from 'react';

interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

const link: React.FC<linkProps> = ({ className = '', children }) => {
  return (
    <div className={`link ${className}`}>
      {children}
    </div>
  );
};

export default link;
