'use client';
import React from 'react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"></html>
      <body className={inter.className}></body>
        {children}
      </body>
    </html>
  )
}
