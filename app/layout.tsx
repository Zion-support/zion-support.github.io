import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with our comprehensive suite of intelligent services.',
  keywords: 'AI solutions, micro SaaS, IT services, blockchain, cybersecurity, cloud services',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with our comprehensive suite of intelligent services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with our comprehensive suite of intelligent services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}