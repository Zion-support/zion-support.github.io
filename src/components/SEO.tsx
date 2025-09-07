import React from 'react';'
import { Helmet } from 'react-helmet-async';'

interface SEOProps {
  }
  "title": string;
  "description": string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const "SEO": React.FC<SEOProps> = ({
  }
  title,
  description = 'Zion Tech Group - Leading provider of AI-powered solutions, automation tools, and digital transformation services.',
  keywords = 'AI solutions, automation, digital transformation, software development, technology consulting',
      <title>{fullTitle}</title>
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <meta name="viewport" content="width=device-width, initial-scale=1" />"
      <meta name="robots" content="index, follow" />"
      <link rel="canonical" href={fullUrl} />"

      {/* Open Graph */}
  );
};

export default SEO;