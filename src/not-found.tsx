import React from 'react';

interface NotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export const NotFound: React.FC<NotFoundProps> = ({ className = '', children }) => {
  return (
    <div className={`notfound ${className}`}>
      {children}
    </div>
  );
};

export default NotFound;