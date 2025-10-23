import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group | AI & IT Solutions',
  description: 'Leading provider of AI solutions, IT services, and innovative software development. Transform your business with cutting-edge technology.',
  keywords: 'AI solutions, IT services, artificial intelligence, technology consulting, software development, cloud solutions, cybersecurity, Zion Tech Group',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group | AI & IT Solutions',
    description: 'Leading provider of AI solutions, IT services, and innovative software development. Transform your business with cutting-edge technology.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | AI & IT Solutions',
    description: 'Leading provider of AI solutions, IT services, and innovative software development.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}