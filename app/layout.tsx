import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
