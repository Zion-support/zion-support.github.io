import React from 'react';

interface ServicesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Services({ className = '', children, ...props }: ServicesProps) {
  return (
    <div className={`services-component ${className}`} {...props}>
      {children || (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Micro SAAS Services
          </h1>
          <p className="text-gray-600">
            Professional micro SAAS solutions powered by AI and cutting-edge technology.
          </p>
        </div>
      )}
    </div>
  );
}
