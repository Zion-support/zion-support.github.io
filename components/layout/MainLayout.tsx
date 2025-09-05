<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
const React from "react";"const Head from "next/head";interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string;} children, title = "Zion Tech Group", " description = "Leading technology solutions provider"," keywords = "technology, AI, cloud, micro SaaS"}: MainLayoutProps) { return ( <> <Head> <title>{title}</title>" <meta name="description" content={description} />" <meta name="keywords" content={keywords} />" <meta name="viewport" content="width=device-width, initial-scale=1" />" <link rel="icon" href="/favicon.ico" /> </Head> {children} </> );}"""
=======
>>>>>>> main
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Header from '../Header';
import Footer from '../Footer';
=======
>>>>>>> main
>>>>>>> main

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

<<<<<<< HEAD
export default function MainLayout({ 
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function MainLayout({
>>>>>>> main
  children, 
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: MainLayoutProps) {
=======
>>>>>>> main
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: MainLayoutProps) => {
>>>>>>> main
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
};

export default MainLayout;
>>>>>>> main
