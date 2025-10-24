import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { metadata } from './constants/metadata'
import { viewport } from './constants/viewport'

const inter = Inter({ subsets: ['latin'] })

export { metadata, viewport }

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
