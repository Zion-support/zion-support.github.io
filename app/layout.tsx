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
      <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors flex items-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-3">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Core Services</div>
                <Link href="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services & Solutions
                </Link>
                <Link href="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Micro SaaS Solutions
                </Link>
                <Link href="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  IT Services & Solutions
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Industry Solutions</div>
                <Link href="/services/manufacturing-ai-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Manufacturing AI Platform
                </Link>
                <Link href="/services/supply-chain-intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Supply Chain Intelligence
                </Link>
                <Link href="/services/ai-autonomous-operations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Autonomous Operations
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Specialized Solutions</div>
                <Link href="/services/ai-business-intelligence-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Business Intelligence
                </Link>
                <Link href="/services/ai-cybersecurity-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                  Cybersecurity
                </Link>
                <Link href="/services/ai-cloud-infrastructure-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Cloud Infrastructure
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-november-quantum-superintelligence-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              November 2026 Quantum AI
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $500B ROI
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
            <Link href="/blog/ai-2026-november-quantum-superintelligence-breakthrough" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              November 2026 Quantum AI
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $500B ROI
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2026-ultimate-autonomous-revolution" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Ultimate Autonomous Revolution
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                $100B ROI
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
            <Link href="/services/ai-autonomous-operations-2026" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              AI Operations 2026
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                REVOLUTIONARY
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
            <Link href="/blog/ai-2027-quantum-consciousness-fusion" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              2027 Breakthroughs
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                REVOLUTIONARY
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/blog/ai-2028-neuromorphic-superintelligence" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Neuromorphic AI 2028
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                SUPERINTELLIGENCE
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
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Blog
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH 2027
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-1">
                50+ ARTICLES
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Case Studies
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                $43M+ ROI
              </span>
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-1">
                25+ STUDIES
              </span>
            </Link>
          </div>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" aria-label="Toggle menu">
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
    <footer className="border-t border-gray-200 mt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Services</h3>
            <div className="space-y-3">
              <Link href="/services/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                AI Services & Solutions
              </Link>
              <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Micro SaaS Solutions
              </Link>
              <Link href="/services/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                IT Services & Solutions
              </Link>
              <Link href="/services/manufacturing-ai-platform" className="block text-gray-600 hover:text-green-600 transition-colors">
                Manufacturing AI Platform
              </Link>
              <Link href="/services/supply-chain-intelligence" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Supply Chain Intelligence
              </Link>
              <Link href="/services" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
                All Services →
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Solutions</h3>
            <div className="space-y-3">
              <Link href="/solutions" className="block text-gray-600 hover:text-blue-600 transition-colors">
                All Solutions
              </Link>
              <Link href="/enterprise" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Enterprise Solutions
              </Link>
              <Link href="/services/ai-cybersecurity-2025" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Cybersecurity
              </Link>
              <Link href="/services/ai-cloud-infrastructure-2025" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Cloud Infrastructure
              </Link>
              <Link href="/services/ai-quantum-computing-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Quantum Computing
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Resources</h3>
            <div className="space-y-3">
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Case Studies
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Blog & Insights
              </Link>
              <Link href="/guides" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Implementation Guides
              </Link>
              <Link href="/content-hub" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Content Hub
              </Link>
              <Link href="/services-advertising" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Advertising Solutions
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/solutions" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="/blog/ai-2026-november-quantum-superintelligence-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 November 2026 Quantum Superintelligence 1Mx
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">$500B ROI</span>
              </Link>
              <Link href="/case-studies/ai-2026-november-quantum-superintelligence-500-billion-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $500B Quantum Superintelligence Success
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">FORTUNE 10</span>
              </Link>
              <Link href="/blog/ai-2027-quantum-consciousness-fusion" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                ⚛️ Quantum Consciousness 100,000x
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">QUANTUM</span>
              </Link>
              <Link href="/blog/ai-2028-neuromorphic-superintelligence" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 AI 2028 Neuromorphic Superintelligence
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">SUPERINTELLIGENCE</span>
              </Link>
              <Link href="/case-studies/ai-2028-autonomous-enterprise-mega-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $100B Autonomous Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">MEGA</span>
              </Link>
              <Link href="/blog/ai-2026-january-revolutionary-breakthroughs" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 January 2026 Revolutionary Breakthroughs
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">$5B SUCCESS</span>
              </Link>
              <Link href="/case-studies/ai-2026-january-revolutionary-breakthroughs-5-billion-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $5B Revolutionary Breakthroughs Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">MEGA SUCCESS</span>
              </Link>
              <Link href="/case-studies/ai-2027-quantum-neuromorphic-success-story" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $2.5B Quantum Success
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-2026-synthetic-data-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🔮 Synthetic Data 1000x
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">REVOLUTION</span>
              </Link>
              <Link href="/case-studies/ai-2026-edge-native-intelligence-mega-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $3.5B Edge-Native Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">MEGA ROI</span>
              </Link>
              <Link href="/case-studies/ai-2026-synthetic-data-transformation-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $2.8B Synthetic Data Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">PRIVACY</span>
              </Link>
              <Link href="/blog/ai-future-enterprise-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 AI Enterprise 2026
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">$2.8B ROI</span>
              </Link>
              <Link href="/blog/ai-2026-next-generation-automation-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🤖 99% Automation Revolution
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">REVOLUTIONARY</span>
              </Link>
              <Link href="/case-studies/ai-revolutionary-transformation-2026" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $100M Transformation Success
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">MEGA ROI</span>
              </Link>
              <Link href="/case-studies/ai-2026-neural-optimization-mega-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 $200M Neural Optimization
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">NEURAL AI</span>
              </Link>
              <Link href="/blog/ai-2026-neural-architecture-search-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🚀 Neural Architecture Search
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">BREAKTHROUGH</span>
              </Link>
              <Link href="/case-studies/ai-2026-revolutionary-autonomous-enterprise-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $2.8B Revolutionary Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">MEGA ROI</span>
              </Link>
              <Link href="/case-studies/ai-2026-neural-architecture-search-mega-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $200M NAS Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">MEGA ROI</span>
              </Link>
              <Link href="/blog/ai-2026-edge-native-intelligence-revolution" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                ⚡ Edge-Native AI 50x Performance
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-2026-federated-learning-enterprise-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🔒 Federated Learning Privacy-First
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">1000x TRAINING</span>
              </Link>
              <Link href="/case-studies/ai-2026-edge-native-intelligence-mega-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $3.2B Edge-Native Success
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">MEGA ROI</span>
              </Link>
              <Link href="/case-studies/ai-2026-federated-learning-enterprise-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                💰 $2.8B Federated Learning Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">ZERO DATA SHARING</span>
              </Link>
              <Link href="/case-studies/ai-2028-neuromorphic-superintelligence-success" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🧠 $75B Neuromorphic Success
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-2026-future-trends-breakthrough" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                🌟 AI 2026 Future Trends
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">BREAKTHROUGH</span>
              </Link>
              <Link href="/blog/ai-future-workforce-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">👥 AI Future Workforce 2026</Link>
              <Link href="/blog/ai-cybersecurity-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">🛡️ AI Cybersecurity 2026</Link>
              <Link href="/case-studies/ai-finance-automation-success-2026" className="block text-gray-600 hover:text-blue-600 transition-colors">💰 $15M Finance ROI</Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                Case Studies
              </Link>
>>>>>>> 1c8c3bc8bb20 (feat: Add 2027 content and update links)
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Security
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-600">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Delaware, USA</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-blue-600 transition-colors">Security</Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">SOC 2 Type II Certified</span>
            </div>
          </div>
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