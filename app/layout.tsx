/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zion.app'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
  description:
    'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description:
      'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description:
      'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
