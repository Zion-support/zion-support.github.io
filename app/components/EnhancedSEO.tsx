import React from 'react';

interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEO({ className = '', children }: EnhancedSEOProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
export default function EnhancedSEO({ className = '', children, ...props }: EnhancedSEOProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
import { Helmet } from 'react-helmet-async';
interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI & IT Solutions",
  description = "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
  keywords = "AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology",
  canonical
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

import React from 'react';

export default EnhancedSEO;
  );
}

export default function Enhancedseo({ className = '', children, ...props }: EnhancedseoProps) {
}
export default $1;
