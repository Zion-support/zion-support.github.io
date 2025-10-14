import React from 'react';

interface EnhancedMetaTagsProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedMetaTags: React.FC<EnhancedMetaTagsProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedmetatags-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">EnhancedMetaTags</h3>
          <p className="text-gray-600">This is the EnhancedMetaTags component.</p>
        </div>
      )}
    </div>
  );
};

export default EnhancedMetaTags;