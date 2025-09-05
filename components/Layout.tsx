<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import { Sidebar } from './Sidebar';
=======
import React from 'react';
import Head from 'next/head';
import Header from './Header';
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
=======
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
  ogImage?: string;
  noIndex?: boolean;
}

<<<<<<< HEAD
export default function Layout({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
  keywords = 'AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity',
  ogImage = '/images/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

=======
const Layout: React.FC<LayoutProps> = ({
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
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
<<<<<<< HEAD
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
=======
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

export default Layout;
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
