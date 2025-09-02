import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Phone, 
  Brain, 
  Code, 
  Network, 
  Rocket, 
  ShoppingCart, 
  BarChart3,
  ChevronDown
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [router.pathname]);

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const serviceNavigation = [
    { name: 'All Services', href: '/services' },
    { name: 'AI Services', href: '/services/ai-services' },
    { name: 'IT Services', href: '/services/it-services' },
    { name: 'Micro SaaS', href: '/services/micro-saas' },
    { name: 'Emerging Tech', href: '/emerging-tech' },
  ];

  const resourceNavigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Documentation', href: '/documentation' },
  ];

  const businessNavigation = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Partners', href: '/partners' },
    { name: 'Careers', href: '/careers' },
    { name: 'Marketplace', href: '/marketplace' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  ZION
                </div>
                <div className="text-xs text-blue-400 font-medium">TECH GROUP</div>
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    router.pathname === item.href 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    router.pathname.startsWith('/services') || router.pathname === '/emerging-tech'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                    {serviceNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-slate-800/30"
                >
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`transition-all duration-500 ${
          scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    ZION
                  </div>
                  <div className="text-xs text-blue-400 font-medium">TECH GROUP</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white hover:bg-slate-800/30 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-6">
              {/* Main Navigation */}
              <div className="space-y-2 mb-6">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      router.pathname === item.href 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Services Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Services</h3>
                <div className="space-y-1">
                  {serviceNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/30 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Resources</h3>
                <div className="space-y-1">
                  {resourceNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/30 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Business Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Business</h3>
                <div className="space-y-1">
                  {businessNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/30 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-blue-500/20">
                <div className="text-center">
                  <div className="text-blue-400 font-semibold mb-2">Contact Us</div>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div>+1 302 464 0950</div>
                    <div>kleber@ziontechgroup.com</div>
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;