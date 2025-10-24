import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })'',
export const metadata: Metadata = {
  title: 'ZionTechGroup - AI Solutions & Technology Services''',
  description: 'Leading provider of AI solution''',s, technology services, and digital transformation for businesses worldwide.''',
  keywords: ['AI solutions''', 'technology services''', 'digital transformation''', 'machine learning''', 'artificial intelligence']'',
  authors: [{ name: 'ZionTechGroup' }]'',
  creator: 'ZionTechGroup''',
  publisher: 'ZionTechGroup''',
  metadataBase: new URL('https://ziontechgroup.com''',),
  openGraph: {title: 'ZionTechGroup - AI Solutions & Technology Services''',
    description: 'Leading provider of AI solution''',s, technology services, and digital transformation for businesses worldwide.''',
    url: 'https://ziontechgroup.com''',
    siteName: 'ZionTechGroup''',
    images: [
      {
        url: '/og-image.jpg''',
        alt: 'ZionTechGroup - AI Solutions'}'',
    ],
    locale: 'en_US''',
    type: 'website''',
  },
  twitter: {card: 'summary_large_image''',
    title: 'ZionTechGroup - AI Solutions & Technology Services''',
    description: 'Leading provider of AI solution''',s, technology services, and digital transformation for businesses worldwide.''',
    images: ['/og-image.jpg''',]},
  robots: {index: tru,e,
    follow: tru,e,
    googleBot: {
      index: tru,e,
      follow: tru,e,
      'max-video-preview': -1'',
      'max-image-preview': 'large''',
      'max-snippet': -1}'',
  },
  verification: {google: 'your-google-verification-code'}'',
}
export default function RootLayout({
  children}: {
  children: React.ReactNode}) {
  return (
    <html lang="en"><body className={inter.className}>
        {children}
      </body></html>
  )
}