import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
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
=======
  children?: React.ReactNode;
}

export default function EnhancedSEO({ title, description, keywords, children }: EnhancedSEOProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-0bb0
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-16fc
