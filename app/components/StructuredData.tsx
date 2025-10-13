<<<<<<< HEAD
interface StructuredDataProps {
}
const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          "name": data.name || "Zion Tech Group",
          "url": data.url || "https://ziontechgroup.com",
          "logo": data.logo || "https://ziontechgroup.com/logo.svg",
          "description": data.description || "Leading provider of AI and IT solutions",
          "address": data.address || {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": data.contactPoint || {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": data.sameAs || [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
      case 'WebSite':
        return {
          ...baseData,
          "name": data.name || "Zion Tech Group",
          "url": data.url || "https://ziontechgroup.com",
          "potentialAction": data.potentialAction || {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
      case 'WebPage':
        return {
          ...baseData,
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "isPartOf": data.isPartOf || {
            "@type": "WebSite",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com"
          },
          "breadcrumb": data.breadcrumb
      case 'Service':
        return {
          ...baseData,
          "name": data.name,
          "description": data.description,
          "provider": data.provider || {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "areaServed": data.areaServed || "US",
          "hasOfferCatalog": data.hasOfferCatalog
      case 'FAQPage':
        return {
          ...baseData,
          "mainEntity": data.mainEntity || []
      case 'BreadcrumbList':
        return {
          ...baseData,
          "itemListElement": data.itemListElement || []
      default:
    }
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData(), null, 2)}
      </script>
    </Helmet>
=======
import React from 'react';

export default function StructuredData() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            StructuredData
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This component is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/main
