import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI Enterprise Transformation Services",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
<<<<<<< HEAD
                <Link href="/services/ai-2026-revolutionary-solutions" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">AI 2026</Link>
=======
                <Link href="/services/ai-2026-revolutionary-solutions" className="text-gray-700 hover:text-blue-600 transition-colors">AI 2026 Solutions</Link>
>>>>>>> origin/feature/revolutionary-ai-2026-content
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
                <Link href="/blog/ai-2026-next-generation-autonomous-systems" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">Autonomous AI</Link>
                <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
                <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="text-gray-700 hover:text-green-600 transition-colors font-semibold">$100M ROI</Link>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services/ai-2026-revolutionary-solutions" className="hover:text-white">AI 2026 Solutions</Link></li>
                  <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                  <li><Link href="/services/ai-2026-revolutionary-solutions" className="hover:text-white">AI 2026 Solutions</Link></li>
                  <li><Link href="/services" className="hover:text-white">Automation</Link></li>
                  <li><Link href="/services" className="hover:text-white">Digital Transformation</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/blog/ai-2026-next-generation-autonomous-systems" className="hover:text-white">Autonomous AI Systems</Link></li>
                  <li><Link href="/blog/ai-2026-quantum-machine-learning" className="hover:text-white">Quantum Machine Learning</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
                  <li><Link href="/case-studies/ai-2026-mega-transformation-success-story" className="hover:text-white">$100M ROI Success Story</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Get in touch for your AI transformation needs.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}