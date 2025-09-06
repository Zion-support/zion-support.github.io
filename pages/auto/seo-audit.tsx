import React from 'react';

interface SeoAuditProps {
  className?: string;
}

const SeoAudit: React.FC<SeoAuditProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SeoAudit</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SeoAudit;