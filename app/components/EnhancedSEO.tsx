import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  children?: React.ReactNode;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  children
}) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
      {children}
    </>
  );
};

export default EnhancedSEO;
<<<<<<< HEAD
<<<<<<< HEAD




=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-29e3
