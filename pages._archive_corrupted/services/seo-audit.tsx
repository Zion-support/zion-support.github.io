import React from 'react';

interface Seo-auditProps {
  className?: string;
}

const Seo-audit: React.FC<Seo-auditProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Seo-audit</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Seo-audit;