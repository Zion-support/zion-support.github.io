import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Search from './Search';
import ScrollToTop from './ScrollToTop';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'AI Systems', href: '/services#ai' },
      { label: 'Cloud Platforms', href: '/services#cloud' },
      { label: 'Cybersecurity', href: '/services#cybersecurity' },
      { label: 'Micro SaaS', href: '/services#saas' }
    ]
  },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.children ? (
                      <div
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                        onMouseEnter={() => setDropdownOpen(item.label)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                    
                    {/* Dropdown Menu */}
                    {item.children && dropdownOpen === item.label && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Search />
              <ThemeToggle />
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <div className="text-gray-700 px-3 py-2 text-base font-medium">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Building autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.847-1.191 1.972v5.644H12.5v-6.5c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.847-1.191 1.972v5.644H8.5v-6.5c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.847-1.191 1.972v5.644H4.5V9h3.554v-1.5c0-1.328.027-3.047 1.032-3.047 1.033 0 1.191.847 1.191 1.972V9h3.554v-1.5c0-1.328.027-3.047 1.032-3.047 1.033 0 1.191.847 1.191 1.972V9h3.554v11.452z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/news" className="text-slate-400 hover:text-white transition-colors">News & Updates</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services#ai" className="text-slate-400 hover:text-white transition-colors">AI Systems</Link></li>
                <li><Link to="/services#cloud" className="text-slate-400 hover:text-white transition-colors">Cloud Platforms</Link></li>
                <li><Link to="/services#cybersecurity" className="text-slate-400 hover:text-white transition-colors">Cybersecurity</Link></li>
                <li><Link to="/services#saas" className="text-slate-400 hover:text-white transition-colors">Micro SaaS</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Terms
                </Link>
                <Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}