import React from 'react';
import Head from 'next/head';

interface ModernLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({
  children,
  title = "Zion Tech Group - AI Solutions & Micro SAAS Services",
  description = "Transform your business with cutting-edge AI solutions. 20+ micro SAAS services including customer analytics, fraud detection, supply chain optimization, and more.",
  keywords = "AI, artificial intelligence, micro SAAS, business solutions, technology, automation",
  canonical = "https://ziontechgroup.com"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008, Middletown DE 19709" />
      </Head>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </>
  );
};

export default ModernLayout;