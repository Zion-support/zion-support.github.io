<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Transform your business with cutting-edge AI solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
  keywords = "AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
=======
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product''
  structuredData?: any
}

const SEOHead: React.FC<SEOHeadProps> = ({
<<<<<<< HEAD
  title = 'Zion Tech Group - Advanced AI and IT Solutions','
  description = 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services.','
  keywords = 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services','
  image = '/og-image.jpg','
  url = 'https://ziontechgroup.com','
  type = 'website','
=======
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services.',
  keywords = 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
>>>>>>> origin/main
>>>>>>> origin/main
  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
<<<<<<< HEAD
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={image} />"
      <meta property="og:url" content={url} />"
      <meta property="og:type" content={type} />"
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={image} />"
      <link rel="canonical" href={url} />"
=======
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data */}
=======
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
>>>>>>> origin/main
>>>>>>> origin/main
      {structuredData && (
        <script type="application/ld+json">"
          {JSON.stringify(structuredData)
        </script>
      )
    </Helmet>
<<<<<<< HEAD
  );
};

export default SEOHead;
=======
  )
<<<<<<< HEAD
export default SEOHead
=======
}

export default SEOHead
=======
import React from "react";

const SEOHead = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">SEOHead</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default SEOHead;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
