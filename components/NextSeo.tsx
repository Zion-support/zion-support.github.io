import React from 'react';

interface NextSeoProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function NextSeo({ title, description, canonical }: NextSeoProps) {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </>
  );
}
