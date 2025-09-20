<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
import { Metadata } from 'next'
// import './globals.css'

export const metadata: Metadata = {
  title: 'Zion Tech Group',
  description: 'Leading technology solutions provider',
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-c519

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
=======
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-c519
}