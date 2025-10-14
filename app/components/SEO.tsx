<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOProps { title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile''
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[] }
=======
import React from 'react';

interface SEOProps {
>>>>>>> origin/main
  title?: string;
  description?: string;
<<<<<<< HEAD
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | "profile"
=======
>>>>>>> origin/main
}
<<<<<<< HEAD
const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI & IT Solutions','
  description = 'Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.','
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, technology consulting, Zion Tech Group','
  image = 'https://ziontechgroup.com/og-image.jpg','
  url = 'https://ziontechgroup.com','
  type = 'website''
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`"`"`
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`"`"`
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`"`"`
  const structuredData = {
<<<<<<< HEAD
    '@context': 'https://schema.org','
    '@type': 'Organization','
    name: 'Zion Tech Group','
    url: 'https://ziontechgroup.com','
    logo: 'https://ziontechgroup.com/logo.svg','
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.','
    address: {
      '@type': 'PostalAddress','
      addressLocality: 'Middletown','
      addressRegion: 'DE','
      addressCountry: 'US''
    },
    contactPoint: {
      '@type': 'ContactPoint','
      telephone: '+1-302-464-0950','
      contactType: 'customer service','
      email: 'kleber@ziontechgroup.com''
    },
=======
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo.svg",
    description: "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Middletown",
      addressRegion: "DE",
      addressCountry: "US" },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: "+1-302-464-0950",
      contactType: "customer service",
      email: "kleber@ziontechgroup.com" },
>>>>>>> origin/main
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group','
      'https://twitter.com/ziontechgroup','
      'https://github.com/ziontechgroup''
    ]
  }
  return (
    <Helmet>
      <title>{title}</title>
<<<<<<< HEAD
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      {/* Open Graph */}
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:type" content={type} />"
      <meta property="og:url" content={url} />"
      <meta property="og:image" content={image} />"
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={image} />"
      {/* Canonical URL */}
      <link rel="canonical" href={url} />"
    </Helmet>
  )
export default SEO;
  )
export default SEO
}
export default SEO;
=======
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      { /* Open Graph */ }
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      { /* Twitter */ }
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      { /* Canonical URL */ }
      <link rel="canonical" href={url} />
    </Helmet>
=======

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <div>
      <h2>SEO</h2>
      <p>This component is under construction.</p>
      {title && <p>Title: {title}</p>}
      {description && <p>Description: {description}</p>}
    </div>
>>>>>>> origin/main
  );
};
<<<<<<< HEAD
=======

>>>>>>> origin/main
export default SEO;
>>>>>>> origin/main
