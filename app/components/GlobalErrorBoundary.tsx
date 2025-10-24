import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default GlobalErrorBoundary;
=======

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'globalerrorboundary ' + className}>
      {children || <p>GlobalErrorBoundary component</p>}
    </div>
  );
};

export default GlobalErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
