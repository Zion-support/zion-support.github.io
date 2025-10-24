<<<<<<< HEAD
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Professional AI and technology solutions by Zion Tech Group.',
};

export default function RootLayout({
  children,
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
=======
'use client';
import React from 'react';

interface layoutProps {
  className?: string;
}

const layout: React.FC<layoutProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>layout</h2>
      <p>layout component for enhanced functionality.</p>
    </div>
  );
};

export default layout;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
