'use client';

import React, { memo } from 'react';

interface GenericServicePageProps {
  title: string;
  description: string;
  className?: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = memo(({ 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`generic-service-page ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
});

GenericServicePage.displayName = 'GenericServicePage';

export default GenericServicePage;