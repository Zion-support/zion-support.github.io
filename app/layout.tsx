// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Zion Tech Group - AI and IT Solutions',
  description: 'Advanced AI and IT solutions for modern businesses',
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;