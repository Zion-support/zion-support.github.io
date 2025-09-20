import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
// import './globals.css'

export const metadata: Metadata = {
  title: 'Zion Tech Group',
  description: 'Leading technology solutions provider',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
