import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services. Transform your business with cutting-edge technology.',
  keywords: 'AI services, micro SaaS, IT services, automation, technology solutions, business transformation',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services.',
    creator: '@ziontechgroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-gray-900">
                  Zion Tech Group
                </a>
              </div>
              <div className="flex items-center space-x-8">
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a href="/services" className="text-gray-600 hover:text-gray-900">
                  Services
                </a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Leading provider of AI-powered solutions, micro SaaS platforms, 
                  and comprehensive IT services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services/ai" className="hover:text-white">AI Solutions</a></li>
                  <li><a href="/services/micro-saas" className="hover:text-white">Micro SaaS</a></li>
                  <li><a href="/services/it" className="hover:text-white">IT Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about" className="hover:text-white">About</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                  <li><a href="/careers" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">
                  contact@ziontechgroup.com<br />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}