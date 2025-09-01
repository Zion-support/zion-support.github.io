import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      description: '200+ Real Micro SaaS Solutions',
      icon: <Zap className="w-5 h-5" />,
      children: [
        { name: 'All Services', href: '/services' },
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }
      ]
    },
    {
      name: 'Solutions',
      href: '/case-studies',
      description: 'Industry-Specific Solutions',
      icon: <Sparkles className="w-5 h-5" />,
      children: [
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    { name: 'Market Pricing', href: '/market-pricing' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const productDropdown = [
    { name: 'AI Code Assistant', href: '/ai-assistant', description: 'Intelligent code completion and suggestions' },
    { name: 'Cloud Platform', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
    { name: 'Automation Hub', href: '/automation', description: 'AI-powered workflow automation' },
    { name: 'Analytics', href: '/analytics', description: 'Real-time insights and reporting' },
  ];

  const solutionsDropdown = [
    { name: 'All Services', href: '/services', description: 'Complete technology solutions' },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Specialized business solutions' },
    { name: 'Service Comparison', href: '/service-comparison', description: 'Compare services & pricing' },
    { name: 'AI & Automation', href: '/ai-assistant', description: 'Intelligent automation systems' },
    { name: 'Cloud Infrastructure', href: '/cloud-platform', description: 'Scalable cloud solutions' },
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Zion Tech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Product') {
                          setIsProductDropdownOpen(!isProductDropdownOpen);
                        } else if (item.name === 'Solutions') {
                          setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                        }
                      }}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (item.name === 'Product' && isProductDropdownOpen) || 
                        (item.name === 'Solutions' && isSolutionsDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {item.name === 'Product' && isProductDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {productDropdown.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div className="font-medium text-white mb-1">{product.name}</div>
                              <div className="text-sm text-gray-400">{product.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.name === 'Solutions' && isSolutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {solutionsDropdown.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsSolutionsDropdownOpen(false)}
                            >
                              <div className="font-medium text-white mb-1">{solution.name}</div>
                              <div className="text-sm text-gray-400">{solution.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-black/90 backdrop-blur-xl rounded-xl mt-2 border border-white/10 shadow-2xl max-h-[80vh] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="px-4 py-3 text-base font-medium text-white">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.name === 'Product' ? 
                          productDropdown.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="font-medium">{product.name}</div>
                              <div className="text-xs text-gray-500">{product.description}</div>
                            </Link>
                          ))
                        : 
                          solutionsDropdown.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="font-medium">{solution.name}</div>
                              <div className="text-xs text-gray-500">{solution.description}</div>
                            </Link>
                          ))
                        }
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
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