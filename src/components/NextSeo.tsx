import React from 'react';
import Head from 'next/head';

interface NextSeoProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

export function NextSeo({ title, description, canonical, keywords }: NextSeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
}