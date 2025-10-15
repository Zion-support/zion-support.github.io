<<<<<<< HEAD

interface SEOEnhancerProps {};
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string>
  noIndex?: boolean;

      };
    ];
  },

    </Helmet>
  )
},
      export default SEOEnhancer




=======
import React from 'react';

interface SEOEnhancerProps {
  className?: string;
}

export default function SEOEnhancer({ className }: SEOEnhancerProps) {
  return (
    <div className={className}>
      <h2>SEOEnhancer<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
