import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorFallback({ className = '', children }: ErrorFallbackProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
