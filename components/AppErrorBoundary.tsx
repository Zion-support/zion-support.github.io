'use client';

import React from 'react';

interface AppErrorBoundaryProps{className?: string;}
  children?: React.ReactNode;}
}

const AppErrorBoundary: React.FC<AppErrorBoundaryProps>= ({ className = '', children }) => {}</AppErrorBoundaryProps>
  return(<div className={`app-error-boundary ${className}`} />{children})</div>
    </div>)
  );
};

AppErrorBoundary.displayName = 'AppErrorBoundary';

export default AppErrorBoundary;
