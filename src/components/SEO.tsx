import React from 'react';
// Lightweight head tags for Vite app; avoids next/head in non-Next builds
const Head: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

export interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const resolvedTitle = title ?? 'Zion Tech Group';
  const resolvedDescription = description ?? 'AI-powered solutions and IT services by Zion Tech Group';

  return (
    <Head>
      <title>{resolvedTitle}</title>
      {resolvedDescription && (
        <meta name="description" content={resolvedDescription} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0ea5e9" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default SEO;
