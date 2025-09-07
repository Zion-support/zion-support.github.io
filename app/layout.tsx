import type { Metadata } from 'next';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
<<<<<<< HEAD
  keywords: 'AI, artificial intelligence, technology solutions, cloud computing, cybersecurity, data analytics, digital transformation',
=======
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation'],
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
  authors: [{ name: 'Zion Tech Group' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
<<<<<<< HEAD
    description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
=======
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
<<<<<<< HEAD
    description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
=======
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
=======
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
        {children}
        <PerformanceMonitor />
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
      </body>
    </html>
  );
}