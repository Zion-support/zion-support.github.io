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
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
            Blog
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              50+ ARTICLES
            </span>
          </Link>
          <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
            Case Studies
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              $43M+ ROI
            </span>
          </Link>
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
              <Link href="/services/ai-data-analytics" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Data Analytics</Link>
              <Link href="/services/ai-workflow-automation" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Workflow Automation</Link>
              <Link href="/services/ai-virtual-assistant" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Virtual Assistant</Link>
              <Link href="/services/cloud-migration" className="block text-gray-600 hover:text-blue-600 transition-colors">Cloud Migration</Link>
              <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">Micro SaaS</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Latest Content</h3>
            <div className="space-y-2">
              <Link href="/blog/ai-customer-data-platforms-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                📊 AI Customer Data Platforms 2026
              </Link>
              <Link href="/blog/ai-customer-journey-ai-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                🛤️ AI Customer Journey 2026
              </Link>
              <Link href="/blog/ai-agent-observability-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                🔍 AI Agent Observability 2026
              </Link>
              <Link href="/blog/agentic-workflow-orchestration-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                ⚡ Agentic Workflow Orchestration
              </Link>
              <Link href="/blog/ai-autonomous-cloud-ops-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                ☁️ AI Autonomous Cloud Ops 2026
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">
                📚 View All Blog Posts
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Success Stories</h3>
            <div className="space-y-2">
              <Link href="/case-studies/supply-chain-transformation-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                📊 Supply Chain: $8.2M ROI
              </Link>
              <Link href="/case-studies/healthcare-ai-transformation-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                🏥 Healthcare: $5.2M Savings
              </Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors">
                💰 View All Case Studies
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>📞 Phone: +1 302 464 0950</div>
              <div>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">kleber@ziontechgroup.com</a></div>
              <div>📍 Address: 364 E Main St STE 1008<br />Middletown DE 19709</div>
              <div className="mt-4">
                <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors mb-2">About Us</Link>
                <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              </div>
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