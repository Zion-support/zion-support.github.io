import Head from "next/head";
import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export default function SEOHead({
  title = 'Zion Tech Group - AI, IT & Micro SaaS',
  description = 'Transform your business with AI, IT and Micro SaaS solutions.',
  keywords = 'AI, IT services, micro saas, automation, cloud',
  image = '/images/og-default.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  structuredData
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </Head>
  );
};

export default SEOHead;
