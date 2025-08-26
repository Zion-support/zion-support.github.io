import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
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
  { label: 'Enhanced Home', href: '/enhanced' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'AI Systems', href: '/services#ai' },
      { label: 'Cloud Platforms', href: '/services#cloud' },
      { label: 'Cybersecurity', href: '/services#cybersecurity' },
      { label: 'Micro SaaS', href: '/services#saas' },
      { label: 'Enhanced Services', href: '/enhanced-services' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50 shadow-lg shadow-slate-200/20">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-white/20"
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
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md text-lg">
                Building autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.
              </p>
              <div className="text-slate-300 text-sm space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
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
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="/services#ai" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>AI Systems</span>
                </a></li>
                <li><a href="/services#cloud" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Cloud Platforms</span>
                </a></li>
                <li><a href="/services#cybersecurity" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Cybersecurity</span>
                </a></li>
                <li><a href="/services#saas" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Micro SaaS</span>
                </a></li>
                <li><a href="/enhanced-services" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Enhanced Services</span>
                </a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Contact</span>
                </a></li>
                <li><a href="/privacy" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Privacy</span>
                </a></li>
                <li><a href="/terms" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Terms</span>
                </a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <p className="text-slate-300 text-sm text-center">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
              <span className="text-cyan-400 ml-1">Building the future of technology</span>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}