import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'


export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT Solutions for Modern Businesses'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}