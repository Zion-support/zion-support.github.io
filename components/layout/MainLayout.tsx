import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
  canonical?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}) => {
=======
export default function MainLayout({ 
  title, 
  description, 
  children, 
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development",
  canonical 
}: MainLayoutProps) {
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
<<<<<<< HEAD
        {canonical && <link rel="canonical" href={canonical} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
=======
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
