import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology',
=======
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT solutions for modern businesses',
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        {children}
      </body>
=======
      <body className={inter.className}>{children}</body>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </html>
  )
}