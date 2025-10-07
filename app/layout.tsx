import React from 'react';
import { Helmet } from 'react-helmet-async';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Transform your business with cutting-edge AI micro SaaS services and cloud automation." />
        <meta name="keywords" content="AI solutions, enterprise AI, digital transformation, automation, cloud services, AI consulting, business intelligence, machine learning, artificial intelligence, enterprise software" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="creator" content="Zion Tech Group" />
        <meta name="publisher" content="Zion Tech Group" />
        <meta name="format-detection" content="email=no, address=no, telephone=no" />
        <link rel="canonical" href="https://ziontechgroup.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, automation, and digital transformation services." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zion Tech Group - AI and IT Solutions" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, automation, and digital transformation services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        
        {/* Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4f46e5" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
        {children}
      </div>
    </>
  );
}