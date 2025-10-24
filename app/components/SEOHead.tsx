'use client';

import { Head } from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  structuredData?: any;
}

export default function SEOHead({
  title,
  description,
  keywords,
  url,
  structuredData
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}