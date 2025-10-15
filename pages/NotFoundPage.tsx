import React from 'react';

interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`notfoundpage ${className}`}>
      {children}
    </div>
  );
};

export default NotFoundPage;