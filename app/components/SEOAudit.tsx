import React from 'react';

interface SEOAuditProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOAudit({ className = '', children }: SEOAuditProps) {
  return (
    <div className={`seoaudit ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">SEOAudit</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}