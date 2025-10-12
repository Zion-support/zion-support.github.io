import React from 'react';
export default SEOHead;

'use client';

export default SEOHead;

'use client';

import React from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;

const SEOHead: React.FC<SEOHeadProps />= ({

  return (</SEOHeadProps>
    <div>
      <meta httpEquiv="X-Frame-Options" content="DENY" / / />;
  );
};
</meta>
</meta>
}}</meta>