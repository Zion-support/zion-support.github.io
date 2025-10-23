import React from "react";

"use client";
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './styles/futuristic.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group | Advanced AI and IT Solutions',
  description: 'Pioneering the future with advanced AI, quantum computing, and cutting-edge technology solutions that transform businesses and drive innovation.',
  keywords: 'AI solutions, quantum computing, IT services, technology, business solutions, innovation',
  authors: [{ name: 'Zion Tech Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group | Advanced AI and IT Solutions',
    description: 'Pioneering the future with advanced AI, quantum computing, and cutting-edge technology solutions that transform businesses and drive innovation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | Advanced AI and IT Solutions',
    description: 'Pioneering the future with advanced AI, quantum computing, and cutting-edge technology solutions that transform businesses and drive innovation.',
  },
}

export const viewport: Viewport = {
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}