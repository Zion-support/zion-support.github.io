import React from 'react';

interface AdTemplatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdTemplates({ className = '', children }: AdTemplatesProps) {
  return (
    <div className={`adtemplates ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">AdTemplates</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}