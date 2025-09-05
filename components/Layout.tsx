<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Layout({ 
  title = 'Zion Tech Group - AI, IT & Micro SaaS Solutions', 
  description = 'Leading provider of AI services, IT solutions, and micro SaaS applications. Transform your business with cutting-edge technology.',
  children 
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
=======
 interface LayoutProps {
  children: ReactNode;
}const Layout: React.FC<LayoutProps> = ({
  children 
}) => {
  return <main className="min-h-screen"> {
  children 
}</main>;
};
export default Layout;
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
