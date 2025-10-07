import React from 'react';
// Using regular anchor tags instead of react-router-dom for simplicity
import './globals.css';

// Metadata for SEO - handled by React Helmet in Vite projects
const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description:
    'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords:
    'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description:
      'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description:
      'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
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
    <header className='border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm'>
      <nav className='flex items-center justify-between px-4 py-3 max-w-6xl mx-auto'>
        <a
          href='/'
          className='font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors'
        >
          Zion Tech Group
        </a>
        <div className='hidden md:flex gap-6'>
          <a
            href='/about'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            About
          </a>
          <a
            href='/services'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            Services
          </a>
          <div className='relative group'>
            <a
              href='/services/ai-autonomous-operations-2026'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              AI Operations 2026
              <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                REVOLUTIONARY
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/content-hub'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Content Hub
              <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                NEW 2027
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/blog/ai-2026-autonomous-business-intelligence-breakthrough'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Autonomous BI 2026
              <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                BREAKTHROUGH
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/blog/ai-2026-quantum-enhanced-analytics'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Quantum Analytics
              <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                1000x SPEED
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/blog/ai-2028-next-generation-autonomous-enterprise'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              AI 2028 Autonomous
              <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                REVOLUTIONARY
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/blog/ai-2028-neuromorphic-superintelligence'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Neuromorphic AI 2028
              <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                SUPERINTELLIGENCE
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/blog/ai-2027-quantum-breakthrough-enterprise'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Quantum AI 2027
              <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                QUANTUM
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/blog'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Blog
              <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                BREAKTHROUGH 2027
              </span>
              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-1'>
                50+ ARTICLES
              </span>
            </a>
          </div>
          <div className='relative group'>
            <a
              href='/case-studies'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Case Studies
              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                $43M+ ROI
              </span>
              <span className='bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-1'>
                25+ STUDIES
              </span>
            </a>
          </div>
          <a
            href='/contact'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            Contact
          </a>
        </div>
        <button className='md:hidden p-2' aria-label='Toggle menu'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className='border-t border-gray-200 mt-10 py-6 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div>
            <h3 className='font-semibold text-gray-900 mb-3'>Services</h3>
            <div className='space-y-2'>
              <a
                href='/services'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                All Services
              </a>
              <a
                href='/services/ai-autonomous-cloud-ops'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                AI Autonomous Cloud Ops
              </a>
              <a
                href='/services/ai-fintech-transformation'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                AI FinTech Transformation
              </a>
              <a
                href='/services/ai-retail-automation'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                AI Retail Automation
              </a>
              <a
                href='/services/micro-saas'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                Micro SaaS
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 mb-3'>
              Latest AI 2028 Revolutionary Content
            </h3>
            <div className='space-y-2'>
              <a
                href='/blog/ai-2028-next-generation-autonomous-enterprise'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🚀 AI 2028 Autonomous Enterprise
                <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                  REVOLUTIONARY
                </span>
              </a>
              <a
                href='/blog/ai-2028-neuromorphic-superintelligence'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🧠 AI 2028 Neuromorphic Superintelligence
                <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                  SUPERINTELLIGENCE
                </span>
              </a>
              <a
                href='/case-studies/ai-2028-autonomous-enterprise-mega-success'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                💰 $100B Autonomous Success
                <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  MEGA
                </span>
              </a>
              <a
                href='/case-studies/ai-2028-neuromorphic-superintelligence-success'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🧠 $75B Neuromorphic Success
                <span className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  BREAKTHROUGH
                </span>
              </a>
              <a
                href='/blog/ai-2026-future-trends-breakthrough'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🌟 AI 2026 Future Trends
                <span className='bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                  BREAKTHROUGH
                </span>
              </a>
              <a
                href='/blog/ai-future-workforce-2026'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                👥 AI Future Workforce 2026
              </a>
              <a
                href='/blog/ai-cybersecurity-2026'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                🛡️ AI Cybersecurity 2026
              </a>
              <a
                href='/case-studies/ai-finance-automation-success-2026'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                💰 $15M Finance ROI
              </a>
              <a
                href='/case-studies'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                Case Studies
                <span className='bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  FEATURED
                </span>
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 mb-3'>Content</h3>
            <div className='space-y-2'>
              <a
                href='/'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                Home
              </a>
              <a
                href='/about'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                About
              </a>
              <a
                href='/contact'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                Contact
              </a>
              <a
                href='https://ziontechgroup.com'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                Main Website
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 mb-3'>Contact Info</h3>
            <div className='text-sm text-gray-600 space-y-1'>
              <div>Mobile: +1 302 464 0950</div>
              <div>
                Email:{' '}
                <a
                  href='mailto:kleber@ziontechgroup.com'
                  className='hover:text-blue-600 transition-colors'
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                Address: 364 E Main St STE 1008
                <br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center'>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-white text-gray-900'>
        <Header />
        <main className='max-w-6xl mx-auto px-4 py-6 min-h-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
