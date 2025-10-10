import React from 'react';
'use client';
interface SEOHeadProps {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
  O: Add content,}
}
=======
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
  canonical?: string;
  noindex?: boolean;
<<<<<<< HEAD
  nofollow?: boolean;
}
const SEOHead: React.FC,
          <SEOHeadProps> = ({
    // TODO: Add content
  }
}
=======
  nofollow?: boolean};
;
const SEOHead: React.FC;
          <SEOHeadProps> = ({// TODO: Add content}
};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const SEOHead: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, quantum computing, autonomous systems, digital transformation, cloud services, cybersecurity, business intelligence, machine learning, automation',
  image = '/og-image.svg',
  url = 'https://ziontechgroup.com',
  type = 'website',
//   structuredData,
//   canonical,
  noindex = false,
  nofollow = false}) => {
    const canonicalUrl = canonical || url
  }
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
<<<<<<< HEAD
  return null;
}
export default SEOHead;`
  </SEOProps>
  </SEOHeadProps>
=======
  return null};
export default SEOHead;`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
