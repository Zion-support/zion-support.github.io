import React from 'react'
import { Helmet } from 'lucide-react';
import { Helmet } from 'lucide-react';
import {Helmet} from 'lucide-react';
import React from 'react';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  children: React.ReactNode;
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, Zion Tech Group",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  children;
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechCompany",
    "name": "Zion Tech Group",
    "url": url,
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Quantum Computing",
      "Autonomous Systems",
      "Digital Transformation",
      "Cloud Services",
      "Automation",
      "Business Intelligence"
interface SEOEnhancerProp s {title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: stringchildren: React.ReactNode;}
constSEOEnhancer: React.FC<SEOEnhancerProp s>= ({title= "Zion Tech Group - Advanced AI and ITSolutions",
  description= "Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edgetechnology.",
  keywords= "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, Zion TechGroup",
  image= "https://ziontechgroup.com/og-image.jpg",
  url= "https://ziontechgroup.com",
  children}) => {conststructuredData= {
    "@context":"https:// schema.org",
   "@type":"TechCompany",
   "name":"Zion Tech Group",
   "url": url,
   "logo":"https:// ziontechgroup.com/logo.png",
   "description": description,
   "foundingDate":"202 0",
   "numberOfEmployees":"5 0-10 0",
   "industry":"Technology",
   "services": [
     "AI Solutions",
     "Quantum Computing", 
     "Autonomous Systems",
     "Digital Transformation",
     "Cloud Services",
     "Automation",
     "Business Intelligence"
    ],
   "contactPoint": {
     "@type":"ContactPoint",
     "telephone":"+1-30 2-46 4-095 0",
     "contactType":"Customer Service",
     "areaServed":"US",
     "availableLanguage":"en"
   },
   "sameAs": [
     "https:// twitter.com/ziontechgroup",
     "https:// linkedin.com/$1/ziontechgroup"
    ],
   "address": {"@type":"PostalAddress",
     "streetAddress":"364E Main St STE1008",
     "addressLocality":"Middletown",
     "addressRegion":"DE",
     "postalCode":"1970 9",
     "addressCountry":"US"
   },
   "offers": [
      {"@type":"Offer",
       "category":"AI Solutions",
       "description":"Enterprise AI solutions, digital transformation, and cloud services",
       "price":"150 0",
       "priceCurrency":"USD",
       "priceSpecification": {
         "@type":"PriceSpecification",
         "price":"150 0",
         "priceCurrency":"USD",
         "billingIncrement":"P1 M"
       }
      }
    ],
   "serviceArea": {"@type":"GeoCircle",
     "geoMidpoint": {
       "@type":"GeoCoordinates",
       "latitude":"3 9.828 3",
       "longitude":"-7 5.579 5"
     },
     "geoRadius":"100000 0"
    }
  }
  return (
    <>
      <Helmet>
        {/* Primary meta tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zion Tech Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        {/* Canonical URL */}
        <link rel="canonical" href={url} />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {children}
    </>
  )
}
export default SEOEnhancer;
  <><Helme t>{/* Primary metatags */}
      <titl e>{title}</titl><metaname="description" content={description} /><metaname="keywords" content={keywords} /><metaname="author"content="Zion TechGroup" /><metaname="robots"content="index,follow" /><metaname="googlebot"content="index,follow" />{/* Open Graph /Facebook */}
     <metaproperty="og:type"content="website" /><metaproperty="og:url" content={url} /><metaproperty="og:title" content={title} /><metaproperty="og:description" content={description} /><metaproperty="og:image" content={image} /><metaproperty="og:image:width"content="1200" /><metaproperty="og:image:height"content="630" /><metaproperty="og:site_name"content="Zion TechGroup" />{/* Twitter */}
     <metaname="twitter:card"content="summary_large_image" /><metaname="twitter:url" content={url} /><metaname="twitter:title" content={title} /><metaname="twitter:description" content={description} /><metaname="twitter:image" content={image} /><metaname="twitter:site"content="@ziontechgroup" /><metaname="twitter:creator"content="@ziontechgroup" />{/* CanonicalURL */}
      <linkrel="canonical" href={url} />{/* StructuredData */}
      <scripttype="application/ld+json">{JSON.stringify(structuredData)}
      </scrip></Helme>{children}
  </>
  );
};
export default SEOEnhancer;
