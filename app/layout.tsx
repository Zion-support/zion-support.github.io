
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions',
  description: 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services. Enterprise-grade AI, micro SaaS, and IT solutions.',
  keywords: 'AI solutions, micro SaaS, IT services, blockchain, cybersecurity, cloud services, business automation, digital transformation, software development, tech consulting',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',

    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services.',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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