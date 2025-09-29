import React from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
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
};

function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <Link href="/" className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
          Zion Tech Group
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
          <div className="relative group">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Blog
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Case Studies
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                FEATURED
              </span>
            </Link>
          </div>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
        </div>
        <button className="md:hidden p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">All Services</Link>
              <Link href="/services/ai-autonomous-cloud-ops" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Autonomous Cloud Ops</Link>
              <Link href="/services/ai-fintech-transformation" className="block text-gray-600 hover:text-blue-600 transition-colors">AI FinTech Transformation</Link>
              <Link href="/services/ai-retail-automation" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Retail Automation</Link>
              <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">Micro SaaS</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Latest 2026 Content</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                Blog
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
              </Link>
              <Link href="/blog/ai-neural-interfaces-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 Neural Interfaces 2026
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              </Link>
              <Link href="/blog/ai-space-tech-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 Space AI Technology
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              </Link>
              <Link href="/blog/ai-synthetic-data-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🔒 Synthetic Data AI
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              </Link>
              <Link href="/blog/ai-autonomous-enterprise-transformation-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🚀 Autonomous Enterprise 2026</Link>
              <Link href="/blog/ai-quantum-hybrid-computing-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">⚡ Quantum AI Computing</Link>
              <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">📊 $25M Success Story</Link>
              <Link href="/case-studies/ai-sustainability-transformation-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🌱 $10M Sustainability ROI</Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                Case Studies
                <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              </Link>
              <Link href="/case-studies/ai-neural-interface-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">$5M ROI Neural Interface Case Study</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Content</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <a href="https://ziontechgroup.com" className="block text-gray-600 hover:text-blue-600 transition-colors">Main Website</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Mobile: +1 302 464 0950</div>
              <div>Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">kleber@ziontechgroup.com</a></div>
              <div>Address: 364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}