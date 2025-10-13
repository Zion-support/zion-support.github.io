import React from 'react';
<<<<<<< HEAD

interface EnhancedSEOProps {
  children: React.ReactNode;
}

export default function EnhancedSEO({ children }: EnhancedSEOProps) {
  return <>{children}</>;
}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
