import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
};

export default Layout;