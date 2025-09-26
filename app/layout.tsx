import type { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = { title: 'Zion App', description: 'Zion App' }
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}