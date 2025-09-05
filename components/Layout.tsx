import React, { useState } from 'react';
import Head from 'next/head';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
children: ReactNode;ursor/add-new-services-and-deploy-updates-1b90
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
  keywords = 'AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
        <link rel="canonical" href={canonical || 'https: //ziontechgroup.com'} />
        
        {/* Open Graph */}
        <meta property="og: title" content={title} />
        <meta property="og: description" content={description} />
        <meta property="og: type" content="website" />
        <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
        <meta property="og: site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter: card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter: description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https: //fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />ursor/add-new-services-and-deploy-updates-1b90
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
name: "Zion Tech Group",
              url: "https: //ziontechgroup.com",
              logo: "https: //ziontechgroup.com/logo.png",
              description: description,
              address: {ursor/add-new-services-and-deploy-updates-1b90
                "@type": "PostalAddress",
                "streetAddress": "123 Technology Drive",
                "addressLocality": "Innovation City",
                "addressRegion": "IC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
telephone: "+1-302-464-0950",ursor/add-new-services-and-deploy-updates-1b90
                "contactType": "customer service",
                "email": "contact@ziontechgroup.com"
              },
"sameAs": ["https: //linkedin.com/company/ziontechgroup",
                "https: //twitter.com/ziontechgroup",
                "https: //github.com/ziontechgroup"ursor/add-new-services-and-deploy-updates-1b90
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex-1 flex flex-col lg:ml-80">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}