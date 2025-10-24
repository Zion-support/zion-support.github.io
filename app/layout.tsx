import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

export const inter = Inter({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
<<<<<<< HEAD
  description: 'Advanced AI and IT Solutions for Modern Businesses',
=======
  description: 'Advanced AI and IT solutions for modern businesses'
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang='en'>
      <body className={inter.className}>{children}</body>
=======
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    </html>
  )
}
