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
            <Link href="/content-hub" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Content Hub
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Blog
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                HOT
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2027-meta-intelligence-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Meta-Intelligence AI
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                REVOLUTION
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2027-consciousness-simulation-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Consciousness AI
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2027-quantum-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Quantum AI 2027
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2027-autonomous-enterprise-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Autonomous Enterprise
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-neural-interfaces-2026" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Neural Interfaces
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-space-tech-2026" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Space AI
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                REVOLUTIONARY
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
            <h3 className="font-semibold text-gray-900 mb-3">Latest 2027 Content</h3>
            <div className="space-y-2">
              <Link href="/blog/ai-2027-meta-intelligence-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 Meta-Intelligence AI Revolution
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">REVOLUTION</span>
              </Link>
              <Link href="/blog/ai-2027-consciousness-simulation-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 Consciousness AI Breakthrough
                <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-2027-quantum-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 Quantum AI 2027 Breakthrough
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-2027-autonomous-enterprise-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🏢 Autonomous Enterprise 2027
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
              </Link>
              <Link href="/case-studies/meta-intelligence-ai-enterprise-success-2027" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $2.3B Meta-Intelligence Success
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </Link>
              <Link href="/case-studies/ai-2027-quantum-breakthrough-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $100M Quantum AI Success
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </Link>
              <Link href="/case-studies/enterprise-ai-transformation-2027-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $2.3B ROI Success Story
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              </Link>
              <Link href="/content-hub" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                Content Hub
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
              </Link>
              <Link href="/blog/ai-2026-next-generation-ai-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 AI 2026 Revolution
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">HOT</span>
              </Link>
              <Link href="/blog/ai-neural-interfaces-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 Neural Interfaces 2026
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-space-tech-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 Space AI Technology
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">REVOLUTIONARY</span>
              </Link>
              <Link href="/blog/ai-synthetic-data-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🔒 Synthetic Data AI
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">PRIVACY BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-2026-mega-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors">🚀 AI 2026 Mega Breakthrough</Link>
              <Link href="/blog/ai-autonomous-enterprise-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🏢 Autonomous Enterprise 2026</Link>
              <Link href="/blog/ai-quantum-optimization-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">⚡ Quantum AI (1000x Faster)</Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                Case Studies
                <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              </Link>
              <Link href="/case-studies/ai-enterprise-transformation-mega-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $250M ROI Success Story
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">MEGA</span>
              </Link>
              <Link href="/case-studies/ai-mega-transformation-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">💰 $150M ROI Success Story</Link>
              <Link href="/case-studies/ai-neural-interface-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">💰 $12M ROI Neural Interface</Link>
              <Link href="/services/ai-neural-interfaces-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🧠 Neural Interface Service</Link>
              <Link href="/services/ai-space-technology-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🚀 Space AI Service</Link>
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