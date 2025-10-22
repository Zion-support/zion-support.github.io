import React from 'react';

<<<<<<< HEAD
// Global error boundary component

export function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
=======
interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`globalerrorboundary-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">GlobalErrorBoundary</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

export default GlobalErrorBoundary;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
