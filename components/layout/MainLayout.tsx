import React, { useState } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Header from '../Header';
import Footer from '../Footer';
=======
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
import Header from '../Header';
import Footer from '../Footer';
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  showSidebar?: boolean;
=======
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
}

const MainLayout: React.FC<LayoutProps> = ({
  children,
<<<<<<< HEAD
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.",
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development",
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
<<<<<<< HEAD
  canonical
=======
  canonical,
  showSidebar = false
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
<<<<<<< HEAD
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* SEO Meta Tags */}
        <meta name="robots" content={noindex ? "noindex" : nofollow ? "nofollow" : "index, follow"} />
        <meta name="author" content="Zion Tech Group" />

        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title || 'Zion Tech Group'} />
        <meta property="og:description" content={description || 'Leading technology solutions provider'} />
        <meta property="og:site_name" content="Zion Tech Group" />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'Zion Tech Group'} />
        <meta name="twitter:description" content={description || 'Leading technology solutions provider'} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {showSidebar && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}
      </div>
    </>
  );
};

export default MainLayout;
=======
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
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
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
