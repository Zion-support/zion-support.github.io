<<<<<<< HEAD

interface EnhancedSEOProps {};
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string>
  noIndex?: boolean;
  lang?: string;
  noindex?: boolean;

    </Helmet>
  )
},
      export default EnhancedSEO




=======
import React from 'react';

interface EnhancedSEOProps {
  className?: string;
}

export default function EnhancedSEO({ className }: EnhancedSEOProps) {
  return (
    <div className={className}>
      <h2>EnhancedSEO<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
