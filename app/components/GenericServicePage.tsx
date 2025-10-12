import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GenericServicePageProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  keywords?: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  children,
  className = '',
  title = 'Service - Zion Tech Group',
  description = 'Professional service solutions by Zion Tech Group',
  keywords = 'service, solutions, Zion Tech Group'
}) => {
  return (
    <div className={`generic-service-page ${className}`}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      {children}
    </div>
  );
};

export default GenericServicePage;