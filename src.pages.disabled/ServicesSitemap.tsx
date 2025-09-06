import React from 'react';

interface ServicesSitemapProps {
  className?: string;
}

const ServicesSitemap: React.FC<ServicesSitemapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesSitemap</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesSitemap;