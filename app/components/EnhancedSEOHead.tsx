import React from 'react';

<<<<<<< HEAD
interface SEOHeadProps {};
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string>
  noindex?: boolean;

    </Helmet>
  )
},
      export default EnhancedSEOHead



=======
interface EnhancedSEOHeadProps {
  className?: string;
}

export default function EnhancedSEOHead({ className }: EnhancedSEOHeadProps) {
  return (
    <div className={className}>
      <h2>EnhancedSEOHead<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
