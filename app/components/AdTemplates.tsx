import React from 'react';

interface AdTemplatesProps {
  className?: string;
  children?: React.ReactNode;
}

const AdTemplates: React.FC<AdTemplatesProps> = ({ className = '', children }) => {
  return (
    <div className={`adtemplates-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">AdTemplates</h3>
          <p className="text-gray-600">This is the AdTemplates component.</p>
        </div>
      )}
    </div>
  );
};

export default AdTemplates;