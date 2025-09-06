import React from 'react';

interface SiteFooterProps {
  className?: string;
}

const SiteFooter: React.FC<SiteFooterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SiteFooter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SiteFooter;