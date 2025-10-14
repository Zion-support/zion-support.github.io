import React from 'react';'
interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = ', children }) => {'  return (
    <div className={`loadingspinner-component ${className}`}>
      {children || (
        <div className="p-4">"          <h3 className="text-lg font-semibold mb-2">LoadingSpinner</h3>"          <p className="text-gray-600">This is the LoadingSpinner component.</p>"        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;