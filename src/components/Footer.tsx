import React from 'react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ 
  className = '', 
  children 
}: FooterProps) {
  return (
    <div className={`footer ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Footer
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}