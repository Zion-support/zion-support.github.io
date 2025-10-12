import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'contact';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered solutions, IT services, and digital transformation.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ],
          "foundingDate": "2020",
          "numberOfEmployees": "150+",
          "areaServed": "Worldwide"
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "description": "Leading provider of AI-powered solutions, IT services, and digital transformation.",
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "AI & IT Solutions",
          "description": data?.description || "Comprehensive AI and IT solutions for modern businesses",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "areaServed": "Worldwide",
          "serviceType": "Technology Services",
          "offers": {
            "@type": "Offer",
            "price": data?.price || "Contact for pricing",
            "priceCurrency": "USD"
          }
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Zion Tech Group",
          "description": "Get in touch with our team for AI and IT solutions",
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com",
              "availableLanguage": "English"
            }
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
