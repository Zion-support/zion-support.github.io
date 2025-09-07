import type { Metadata } from 'next';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  keywords: ['AI', 'artificial intelligence', 'technology solutions', 'cloud computing', 'cybersecurity', 'data analytics', 'digital transformation', 'blockchain', 'innovation', 'automation'],
  authors: [{ name: 'Zion Tech Group' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <PerformanceMonitor />
      </body>
    </html>
  );
}