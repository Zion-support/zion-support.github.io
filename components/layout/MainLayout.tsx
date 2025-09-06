
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode, title?: string,
  description?: string;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website',
  image = '/og-image.jpg',
  url

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}) => {
  return (
    <>
      <Head>

        <title>{title}</title>
        <meta name="description" content={description} />

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}

        
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>

  );

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

export default MainLayout;
