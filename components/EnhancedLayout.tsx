import Head from 'next/head';
import React, { ReactNode } from 'react';

interface EnhancedLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  title = 'Zion Tech Group',
  description = 'Leading technology solutions provider',
  canonical,
  noindex = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description}  />
        <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'}  />
        {canonical && <link rel="canonical" href={canonical}  />}
      </Head>
      <div className="min-h-screen">{children}</div>
    </>
  );
};

export default EnhancedLayout;