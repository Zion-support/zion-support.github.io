<<<<<<< HEAD
import React from 'react';

interface GenericServicePageProps {
  className?: string;
  children?: React.ReactNode;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default GenericServicePage;
=======
'use client'

import React from 'react'

interface GenericServicePageProps {
  title: string
  description: string
  children?: React.ReactNode
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="service-page">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default GenericServicePage
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
