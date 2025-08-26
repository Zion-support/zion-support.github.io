import React from 'react';
import Head from 'next/head';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import SiteSidebar from './SiteSidebar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Solutions',
  description = 'Leading technology solutions for modern businesses'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <div style={{display:'grid',gridTemplateColumns:'240px 1fr',minHeight:'calc(100vh - 140px)'}}>
        <SiteSidebar />
        <main style={{padding:'20px'}}> 
          {children}
        </main>
      </div>
      <SiteFooter />
    </>
  );
};

export default Layout;
