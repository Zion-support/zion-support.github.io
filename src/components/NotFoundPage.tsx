import React from 'react';

interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className = '', children }) => {
  return (
    <div className={`NotFoundPage ${className}`}>
      {children}
    </div>
  );
};

export default NotFoundPage;