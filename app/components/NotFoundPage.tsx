<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const NotFoundPage: React.FC<NotFoundPageProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default NotFoundPage;
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
