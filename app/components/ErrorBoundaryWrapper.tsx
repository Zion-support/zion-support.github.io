import React from 'react';
interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ className, children }) => {
=======

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ 
  className = '', 
  children 
}) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
  return (
    <div className={'errorboundarywrapper ' + className}>
      {children || <p>ErrorBoundaryWrapper component</p>}
    </div>
  );
};
export default ErrorBoundaryWrapper;
