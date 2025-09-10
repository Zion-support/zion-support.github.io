import React from 'react'
import Link from 'next/link'

interface HeaderProps {
  onMenuClick?: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Zion Tech Group
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-700">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
          <button 
            onClick={onMenuClick}
            className="sm:hidden text-gray-700 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Zion Tech Group
      </span>
    </div>
  );

  return (
    <EnhancedNavigation
      items={navigationItems}
      logo={logo}
      ctaText="Get Started"
      ctaHref="/contact"
    />
  );
}