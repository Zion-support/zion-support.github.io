import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Innovative Micro SaaS, AI Services & Cloud Solutions'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </>
  );
};

export default Layout;