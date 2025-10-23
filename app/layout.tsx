import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions for modern businesses. We help companies transform their operations with cutting-edge technology.',
  keywords: 'AI solutions, IT services, artificial intelligence, technology consulting, Zion Tech Group',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
