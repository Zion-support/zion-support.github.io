import React from 'react';

interface PageBroken2Props {
  className?: string;
  children?: React.ReactNode;
}

export const PageBroken2: React.FC<PageBroken2Props> = ({ className = '', children }) => {
  return (
    <div className={`pagebroken2 ${className}`}>
      {children}
    </div>
  );
};

export default PageBroken2;