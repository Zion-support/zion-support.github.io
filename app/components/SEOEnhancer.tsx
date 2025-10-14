document.head.removeChild(script);
'
{ useEffect } from 'react';';
import { Helmet } from 'react-helmet-async';
interface SEOEnhancerProps { title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}
// Default structured data for the organization;

const  {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "description": "Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "availableLanguage": "English"},
  "sameAs": ["https://www.linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://github.com/zion-tech-group"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
"addressCountry": "US";
  }
};
export default SEOEnhancer;"'
