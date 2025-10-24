import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading Technology Solutions Provider'
  ,
      description: 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services from Zion Tech Group.'
  keywords: 'AI solutions, cloud architecture, web development, mobile apps, data analytics, cybersecurity'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
