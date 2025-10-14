import React from 'react';

interface SEOAuditProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOAudit: React.FC<SEOAuditProps> = ({ className = '', children }) => {
  return (
    <div className={`seoaudit ${className}`}>
      {children}
    </div>
  );
};

export default SEOAudit;