// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import './globals.css';
import { September30NewContentShowcase } from '../components/PromotionalBanner';

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
          <div className="relative group">
            <Link href="/blog/ai-2025-january-autonomous-intelligence-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              January 2025 Autonomous Intelligence
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $500M SUCCESS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2027-february-synthetic-consciousness-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              February 2027 Synthetic Consciousness
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $75B SUCCESS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-august-quantum-consciousness-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              August 2026 Quantum Consciousness
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $50B SUCCESS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-july-mega-breakthrough-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              July 2026 Mega Breakthrough
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $25.3B SUCCESS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-december-mega-breakthrough-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              December 2026 Mega Breakthrough
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                REVOLUTIONARY
              </span>
            </Link>
          </div>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
          <div className="relative group">
            <Link href="/blog/ai-2026-adaptive-neural-architectures-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Adaptive Neural Architectures
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                100,000x PERFORMANCE
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-cognitive-automation-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Cognitive Automation
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                99.9% AUTONOMOUS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-february-mega-breakthrough-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              February 2026 Mega Breakthrough
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                50,000x PERFORMANCE
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-january-revolutionary-breakthroughs" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              January 2026 Breakthroughs
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                100,000x PERFORMANCE
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-future-enterprise-2026" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              AI Enterprise 2026
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                $2.8B ROI
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-next-generation-automation-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              99% Automation
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                REVOLUTIONARY
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/case-studies/ai-revolutionary-transformation-2026" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              $100M Success
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                MEGA ROI
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/content-hub" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Content Hub
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2027
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-autonomous-cloud-orchestration-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Autonomous Cloud 99.9%
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $5.2B SUCCESS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-quantum-neural-optimization-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Quantum-Neural 10,000x
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $8.5B SUCCESS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-edge-native-intelligence-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Edge-Native AI 50x
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                REVOLUTIONARY
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-synthetic-data-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Synthetic Data 1000x
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-autonomous-business-intelligence-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Autonomous BI 2026
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-quantum-enhanced-analytics" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Quantum Analytics
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                1000x SPEED
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-future-trends-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              AI 2026 Future Trends
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                REVOLUTIONARY
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2028-autonomous-enterprise-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              2028 Breakthroughs
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                REVOLUTIONARY
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-edge-native-intelligence-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Edge-Native AI 50x
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-synthetic-data-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Synthetic Data 1000x
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                REVOLUTION
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-revolutionary-autonomous-enterprise-systems" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Revolutionary AI 2026
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $2.8B ROI
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2027-quantum-breakthrough-enterprise" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Quantum AI 2027
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                QUANTUM
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2027-meta-cognitive-superintelligence-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Meta-Cognitive AI 2027
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                SELF-AWARE
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-edge-native-intelligence-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Edge-Native AI 2026
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                50x PERFORMANCE
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-federated-learning-enterprise-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Federated Learning 2026
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                PRIVACY-FIRST
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-quantum-neural-superintelligence" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Quantum Superintelligence 2026
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                10,000x
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-hyper-automation-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Hyper-Automation 2026
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $3.2B ROI
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2028-autonomous-enterprise-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Autonomous Enterprise 2028
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                99.9% AUTONOMOUS
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Blog
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/case-studies/ai-2026-ultimate-autonomous-revolution-100-billion-success" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              $100B Success Story
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                MEGA ROI
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
            <h3 className="font-semibold text-gray-900 mb-3">Latest 2025 Revolutionary Content</h3>
            <div className="space-y-2">
              <Link href="/blog/ai-2025-january-autonomous-intelligence-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 January 2025 Autonomous Intelligence Revolution
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">$500M SUCCESS</span>
              </Link>
              <Link href="/case-studies/ai-2025-january-autonomous-intelligence-500-million-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $500M Success Story - Fortune 100
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">ROI BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-2025-january-quantum-neural-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                ⚛️ January 2025 Quantum Neural Breakthrough
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">10,000x PERFORMANCE</span>
              </Link>
              <Link href="/blog/ai-2027-february-synthetic-consciousness-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 February 2027 Synthetic Consciousness Revolution
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">$75B SUCCESS</span>
              </Link>
              <Link href="/blog/ai-2026-mega-breakthroughs" className="block text-gray-600 hover:text-blue-600 transition-colors">🚀 AI 2026 Mega Breakthroughs</Link>
              <Link href="/blog/ai-2026-enterprise-automation-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors">⚡ Enterprise Automation Revolution</Link>
              <Link href="/blog/ai-autonomous-enterprise-transformation-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🏢 Autonomous Enterprise 2026</Link>
              <Link href="/blog/ai-quantum-hybrid-computing-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">⚛️ Quantum AI Computing</Link>
              <Link href="/blog/ai-neural-interfaces-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🧠 Neural Interfaces 2026</Link>
              <Link href="/blog/ai-space-tech-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🚀 Space AI Technology</Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                Case Studies
                <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              </Link>
              <Link href="/case-studies/ai-2026-mega-transformation-success" className="block text-gray-600 hover:text-blue-600 transition-colors">💰 $50M Revenue Success Story</Link>
              <Link href="/case-studies/ai-space-tech-revolution-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🚀 $100M Space Mission Success</Link>
              <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">📊 $25M Success Story</Link>
              <Link href="/case-studies/ai-sustainability-transformation-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🌱 $10M Sustainability ROI</Link>
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
        <September30NewContentShowcase />
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}