<<<<<<< HEAD
import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default SEOHead;
=======
'use client'

import React from 'react'
import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
  )
}

export default SEOHead
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
