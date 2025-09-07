import type { Metadata } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
import { Inter } from 'next/font/google';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
  description:
    'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
=======
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang='en'>
      <body>
        <div className='min-h-screen bg-white'>{children}</div>
=======
    <html lang="en">
<<<<<<< HEAD
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
      <body className={inter.className}>
        {children}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
      </body>
    </html>
  );
}
