<<<<<<< HEAD
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
=======
import type { Metadata } from "next";
import { Inter } from "next/font/google";
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
import './globals.css'

export const inter = Inter({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
<<<<<<< HEAD
  description: 'Advanced AI and IT solutions for modern businesses',
=======
  description: 'Professional AI and IT solutions for modern businesses',
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
}

// Force dynamic rendering to avoid prerendering errors
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
=======
    <html lang='en'></html>
      <body className={inter.className}>{ childr, e, n }</body>
    </html>
  )
};
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
