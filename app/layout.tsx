import React from 'react';
import './globals.css';
import { Header, Footer } from './components/Navigation';

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
          <span className="text-blue-600 mr-2">🚀</span>
          Zion Tech Group
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-4">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Comprehensive Service Categories</div>
                <Link href="/services/ai-services-comprehensive" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500">
                  <div className="font-semibold">🧠 Comprehensive AI Services</div>
                  <div className="text-xs text-gray-500">ML, NLP, Computer Vision, Autonomous Systems</div>
                </Link>
                <Link href="/services/advanced-micro-saas-solutions" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 border-transparent hover:border-green-500">
                  <div className="font-semibold">🚀 Advanced Micro SaaS Solutions</div>
                  <div className="text-xs text-gray-500">Content Creation, Inventory, Customer Support</div>
                </Link>
                <Link href="/services/it-services-comprehensive" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 border-l-4 border-transparent hover:border-purple-500">
                  <div className="font-semibold">💻 Complete IT Services</div>
                  <div className="text-xs text-gray-500">Cloud Migration, DevOps, Cybersecurity</div>
                </Link>
                <div className="border-t border-gray-100 my-3"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Individual Services</div>
                <Link href="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services & Solutions
                </Link>
                <Link href="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Micro SaaS Solutions
                </Link>
                <Link href="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  IT Services & Solutions
                </Link>
