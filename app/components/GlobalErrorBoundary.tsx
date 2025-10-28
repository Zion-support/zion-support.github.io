interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

import React from 'react';





export default function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return (
    <div>
      {children}
    </div>
  );
}
