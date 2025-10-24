<<<<<<< HEAD
import React from 'react';

interface EnhancedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedSEOHead;
=======
'use client'

import React from 'react'
import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  )
}

export default EnhancedSEOHead
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
