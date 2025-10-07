import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm'>
      <nav className='flex items-center justify-between px-4 py-3 max-w-6xl mx-auto'>
        <Link
          to='/'
          className='font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors'
        >
          Zion Tech Group
        </Link>
        <div className='hidden md:flex gap-6'>
          <Link
            to='/about'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            About
          </Link>
          <Link
            to='/services'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            Services
          </Link>
          <div className='relative group'>
            <Link
              to='/services/ai-autonomous-operations-2026'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              AI Operations 2026
              <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                REVOLUTIONARY
              </span>
            </Link>
          </div>
          <div className='relative group'>
            <Link
              to='/content-hub'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Content Hub
              <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                NEW 2027
              </span>
            </Link>
          </div>
          <div className='relative group'>
            <Link
              to='/blog'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Blog
              <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                BREAKTHROUGH 2027
              </span>
              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-1'>
                50+ ARTICLES
              </span>
            </Link>
          </div>
          <div className='relative group'>
            <Link
              to='/team'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Case Studies
              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                $43M+ ROI
              </span>
              <span className='bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-1'>
                25+ STUDIES
              </span>
            </Link>
          </div>
          <Link
            to='/contact'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            Contact
          </Link>
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
              <Link
                to='/services'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                All Services
              </Link>
              <Link
                to='/services/ai-autonomous-cloud-ops'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                AI Autonomous Cloud Ops
              </Link>
              <Link
                to='/services/ai-fintech-transformation'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                AI FinTech Transformation
              </Link>
              <Link
                to='/services/ai-retail-automation'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                AI Retail Automation
              </Link>
              <Link
                to='/services/micro-saas'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                Micro SaaS
              </Link>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 mb-3'>
              Latest AI 2028 Revolutionary Content
            </h3>
            <div className='space-y-2'>
              <Link
                to='/blog'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🚀 AI 2028 Autonomous Enterprise
                <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                  REVOLUTIONARY
                </span>
              </Link>
              <Link
                to='/blog'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🧠 AI 2028 Neuromorphic Superintelligence
                <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                  SUPERINTELLIGENCE
                </span>
              </Link>
              <Link
                to='/team'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                💰 $100B Autonomous Success
                <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  MEGA
                </span>
              </Link>
              <Link
                to='/team'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🧠 $75B Neuromorphic Success
                <span className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  BREAKTHROUGH
                </span>
              </Link>
              <Link
                to='/blog'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                🌟 AI 2026 Future Trends
                <span className='bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse'>
                  BREAKTHROUGH
                </span>
              </Link>
              <Link
                to='/blog'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                👥 AI Future Workforce 2026
              </Link>
              <Link
                to='/blog'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                🛡️ AI Cybersecurity 2026
              </Link>
              <Link
                to='/team'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                💰 $15M Finance ROI
              </Link>
              <Link
                to='/team'
                className='block text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2'
              >
                Case Studies
                <span className='bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  FEATURED
                </span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 mb-3'>Content</h3>
            <div className='space-y-2'>
              <Link
                to='/'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                About
              </Link>
              <Link
                to='/contact'
                className='block text-gray-600 hover:text-blue-600 transition-colors'
              >
                Contact
              </Link>
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

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-white text-gray-900'>
      <Header />
      <main className='max-w-6xl mx-auto px-4 py-6 min-h-screen'>
        {children}
      </main>
      <Footer />
    </div>
  );
}