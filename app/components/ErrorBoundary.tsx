<<<<<<< HEAD
'use client';

import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ErrorBoundary;
=======
'use client'
;
import React from 'react';
;
interface ErrorBoundaryProps {;
className?: string;
  children?: React.ReactNode}
}
const ErrorBoundary: "React.FC<ErrorBoundaryProps> = ({ className", children }) => {;
  return(<div className={className}>
      {children});
    </div>);"
  )}";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
