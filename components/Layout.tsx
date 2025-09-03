import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="w-full bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="font-bold text-gray-800">Zion Tech Group</div>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="w-full bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
