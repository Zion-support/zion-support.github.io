import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;