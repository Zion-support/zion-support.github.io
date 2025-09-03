import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title = 'Zion Tech Group', description = 'AI, IT, and Micro SaaS solutions', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
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