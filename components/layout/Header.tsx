import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Zap, Globe, Shield } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Product', href: '#', hasDropdown: true },
    { name: 'Solutions', href: '/services' },
    { name: 'Micro SaaS', href: '/micro-saas-services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Compare', href: '/pricing-comparison' },
  ];

  const productDropdown = [
    { name: 'AI Code Assistant', href: '/ai-assistant', description: 'Intelligent code completion and suggestions' },
    { name: 'Cloud Platform', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
    { name: 'Automation Hub', href: '/automation', description: 'AI-powered workflow automation' },
    { name: 'Analytics', href: '/analytics', description: 'Real-time insights and reporting' },
    { name: 'Micro SaaS Services', href: '/micro-saas-services', description: 'Professional business solutions' },
  ];

  const solutionsDropdown = [
    { name: 'Enterprise Solutions', href: '/enterprise', description: 'Custom solutions for large organizations' },
    { name: 'Startup Acceleration', href: '/startup-acceleration', description: 'Rapid development and scaling' },
    { name: 'Digital Transformation', href: '/digital-transformation', description: 'Modernize your business processes' },
    { name: 'AI Implementation', href: '/ai-implementation', description: 'Strategic AI adoption and integration' },
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Futuristic Background Glow */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Zion
              </span>
              <span className="text-xs text-gray-400 font-medium">Tech Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    onMouseEnter={() => item.name === 'Product' && setIsProductDropdownOpen(true)}
                    onMouseLeave={() => item.name === 'Product' && setIsProductDropdownOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 py-2 ${
                      isActive(item.href)
                        ? 'text-white border-b-2 border-blue-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Product Dropdown */}
                {item.name === 'Product' && isProductDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-black/50 p-6"
                    onMouseEnter={() => setIsProductDropdownOpen(true)}
                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                  >
                    <div className="space-y-4">
                      {productDropdown.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mt-1">
                              <Zap className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                                {product.name}
                              </h3>
                              <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/20 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
                        onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {isProductDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {productDropdown.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="block text-gray-400 hover:text-white transition-colors duration-200 py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/20 space-y-3">
                <Link
                  href="/login"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}