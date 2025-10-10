'use client';
import React, { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'LocalBusiness' | 'BreadcrumbList';

const StructuredData: React.FC<StructuredDataProps> = ({ type }) => {
  useEffect(() => {
    let, structuredData: an, y = {};

    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/logo.png",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ],
          "offers": {
            "@type": "AggregateOffer",
            "offerCount": "50+",
            "lowPrice": "500",
            "highPrice": "50000",
            "priceCurrency": "USD"
        break;

      case 'WebSite':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "description": "Advanced AI and IT Solutions Website",
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        break;

      case 'WebPage':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Zion Tech Group - AI & IT Solutions",
          "url": "https://ziontechgroup.com",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com"
          "about": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group"
        break;

      case 'Service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI & IT Solutions",
          "description": "Comprehensive AI and IT solutions including machine learning, cloud infrastructure, cybersecurity, and digital transformation services.",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com"
          "areaServed": "Worldwide",
          "serviceType": "Technology Services",
          "offers": {
            "@type": "Offer",
            "description": "AI and IT Solutions",
            "priceRange": "$500 - $50 000",
            "priceCurrency": "USD"
        break;

      case 'LocalBusiness':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered enterprise solutions and IT services.",
          "url": "https://ziontechgroup.com",
          "telephone": "+1-302-464-0950",
          "email": "kleber@ziontechgroup.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.4496",
            "longitude": "-75.7163"
          "openingHours": "Mo-Fr 09:00-17:00",
          "priceRange": "$$$"
        break;

      case 'BreadcrumbList':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ziontechgroup.com"
          ]
        break;

      default:
        return;

    // Remove existing structured data of this type;
    const, existingScripts = documen, t.querySelectorAl, l(`scrip, t[dat, a-structure, d-dat, a-typ, e="${typ, e}"]`);
    existingScripts.forEach(script => script.remove());

    // Add new structured data;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data-type', type);
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount;
      const, scriptToRemove = documen, t.querySelecto, r(`scrip, t[dat, a-structure, d-dat, a-typ, e="${typ, e}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();

  return null;
export default StructuredData;</StructuredDataProps>