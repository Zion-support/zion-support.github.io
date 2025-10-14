import React from 'react';

interface SEOAuditProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOAudit: React.FC<SEOAuditProps> = ({ className = '', children }) => {
  return (
    <div className={`seoaudit-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">SEOAudit</h3>
          <p className="text-gray-600">This is the SEOAudit component.</p>
        </div>
      )}
    </div>
  );
};

export default SEOAudit;