import React from 'react';
import Head from 'next/head';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import dynamic from 'next/dynamic';

interface EnhancedLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
}

// Lazy-load chat widget to avoid adding to initial critical path
const ChatWidget = dynamic(() => import('../chat/ChatWidget'), { ssr: false });

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with Zion Tech Group\'s cutting-edge AI development, cloud architecture, and digital transformation services.',
  keywords = 'AI development, cloud architecture, web development, cybersecurity, IoT platforms, digital transformation, technology consulting',
  ogImage = 'https://ziontechgroup.com/og-image.png',
  structuredData
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
      </Head>
      
      <div className="relative min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <header className="relative z-10">
          <EnhancedNavigation />
        </header>
        <main className="relative z-10 flex-1 container mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="relative z-10">
          <EnhancedFooter />
        </footer>
        {/* Global chat assistant */}
        <ChatWidget />
      </div>
    </>
  );
};

export default EnhancedLayout;