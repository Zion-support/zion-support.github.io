<<<<<<< HEAD
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
=======
import type { Metadata } from "next";
import { Inter } from "next/font/google";
>>>>>>> origin/main
import './globals.css'


export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Zion Tech Group',
  description: 'Leading the future of AI and technology solutions for businesses worldwide.',
=======
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT Solutions for Modern Businesses'
>>>>>>> origin/main
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
=======
    <html lang='en'>
>>>>>>> origin/main
      <body className={inter.className}>{children}</body>
    </html>
  )
}