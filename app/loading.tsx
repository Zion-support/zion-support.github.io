import React from 'react';

interface loadingProps {
  className?: string;
  children?: React.ReactNode;
}

const loading: React.FC<loadingProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`loading-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">loading</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

export default loading;