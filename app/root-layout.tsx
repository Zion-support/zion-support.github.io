import type { Metadata } from 'next';
import React from 'react'
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology',
}
=======
  title: 'Zion Tech Group - AI Solutions & Enterprise Technology',
  description: 'Leading provider of AI solutions, IT services, quantum computing, and autonomous systems for modern enterprises.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'
};
>>>>>>> origin/main

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
