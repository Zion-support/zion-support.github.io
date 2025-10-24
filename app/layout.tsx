
'use client';
import React from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
=======
      <body className={inter.className}>
>>>>>>> cursor/fix-errors-and-merge-to-main-da11
        {children}
      </body>
    </html>
  );
}