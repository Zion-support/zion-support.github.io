import React from 'react';
interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className, children }) => {
=======

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
  return (
    <div className={'errorboundary ' + className}>
      {children || <p>ErrorBoundary component</p>}
    </div>
  );
};
export default ErrorBoundary;
