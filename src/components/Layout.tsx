import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

function Header(): React.JSX.Element {
  return (
    <header className='border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm'>
      <nav className='flex items-center justify-between px-4 py-3 max-w-6xl mx-auto'>
        <Link
          href='/'
          className='font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors'
        >
          Zion Tech Group
        </Link>
        <div className='hidden md:flex gap-6'>
          <Link
            href='/about'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            About
          </Link>
          <Link
            href='/services'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            Services
          </Link>
          <div className='relative group'>
            <Link
              href='/services/ai-autonomous-operations-2026'
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
              href='/services/quantum-computing-2026'
              className='text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1'
            >
              Quantum Computing 2026
              <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                BREAKTHROUGH
              </span>
            </Link>
          </div>
          <Link
            href='/contact'
            className='text-gray-700 hover:text-blue-600 transition-colors'
          >
            Contact
          </Link>
        </div>
        <div className='md:hidden'>
          <button className='text-gray-700 hover:text-blue-600 transition-colors'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

function Footer(): React.JSX.Element {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Zion Tech Group</h3>
            <p className='text-gray-400'>
              Leading provider of AI-powered enterprise solutions and digital transformation services.
            </p>
          </div>
          <div>
            <h4 className='text-md font-semibold mb-4'>Services</h4>
            <ul className='space-y-2 text-gray-400'>
              <li><Link href='/services' className='hover:text-white transition-colors'>AI Solutions</Link></li>
              <li><Link href='/services' className='hover:text-white transition-colors'>Quantum Computing</Link></li>
              <li><Link href='/services' className='hover:text-white transition-colors'>Enterprise Automation</Link></li>
              <li><Link href='/services' className='hover:text-white transition-colors'>Digital Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-md font-semibold mb-4'>Company</h4>
            <ul className='space-y-2 text-gray-400'>
              <li><Link href='/about' className='hover:text-white transition-colors'>About Us</Link></li>
              <li><Link href='/contact' className='hover:text-white transition-colors'>Contact</Link></li>
              <li><Link href='/blog' className='hover:text-white transition-colors'>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-md font-semibold mb-4'>Contact</h4>
            <div className='text-gray-400 space-y-2'>
              <p>Email: contact@ziontechgroup.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 AI Innovation Drive, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  );
}