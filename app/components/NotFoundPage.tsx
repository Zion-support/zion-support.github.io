
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
    <div className={'notfoundpage ' + className}>
      {children || <p>NotFoundPage component</p>}
    </div>
  );
};

export default NotFoundPage;

