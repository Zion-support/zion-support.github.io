import React from 'react';

interface LayoutProps {
  children: React.ReactNode,
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({
  children;
}: LayoutProps) {
  const json_ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo.png",
    description: description,
    address: {
      "@type": "PostalAddress",
      street_address: "364 E Main St STE 1008",
      address_locality: "Middletown",
      address_region: "DE",
      postal_code: "19709",
      address_country: "US"
    },
    contact_point: {
      "@type": "ContactPoint",
      telephone: "+1-302-464-0950",
      contact_type: "customer service",
      email: "kleber@ziontechgroup.com"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}