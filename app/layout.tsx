import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

<<<<<<< HEAD
export const inter = Inter({ subsets: ['latin']})
=======
const inter = Inter({ subsets: ['latin'] })
>>>>>>> 9dec2721a0f50ac14397b8d140dbd45d3cfacd15

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