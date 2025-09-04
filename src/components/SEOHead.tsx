import Head from "next/head";
import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export default function SEOHead({
  title = 'Zion Tech Group - Leading AI, Quantum Computing & Advanced Technology Solutions',
  description = 'Transform your business with cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Trusted by 1000+ companies worldwide.',
  keywords = 'AI solutions, quantum computing, cybersecurity, digital transformation, cloud services, DevOps, machine learning, space technology',
  image = '/images/zion-tech-group-og.jpg',
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
