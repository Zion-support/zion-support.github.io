import type { Metadata } from 'next';
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
import './globals.css';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
  description:
    'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang='en'>
      <body>
        <div className='min-h-screen bg-white'>{children}</div>
=======
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      </body>
    </html>
  );
}
