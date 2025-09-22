import React from 'react';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions',
  description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}