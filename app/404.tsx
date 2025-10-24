import React from 'react';

interface NotFound404Props {
  className?: string;
  children?: React.ReactNode;
}

const NotFound404: React.FC<NotFound404Props> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'not-found-404 ' + className}>
      {children || <p>404 - Page Not Found</p>}
    </div>
  );
};

export default NotFound404;
