<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
=======
import React, { useState } from
  'react';
>>>>>>> origin/main

export const EnhancedHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
<<<<<<< HEAD
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' }
=======
    { label:,
  Home', href: '/ },
    { label:,
  Services', href: '/services },
    { label:,
  Solutions', href: '/solutions },
    { label:,
  Enterprise', href: '/enterprise },
    { label:,
  Request Quote', href: '/request-quote },
    { label:,
  Case Studies', href: '/case-studies },
    { label:,
  Careers', href: '/careers },
    { label:,
  Contact', href: '/contact }
>>>>>>> origin/main
  ];

  const serviceLinks = [
    { label: 'AI Services', href: '/services/ai-services' },
    { label: 'IT Services', href: '/services/it-services' },
    { label: 'Micro SaaS', href: '/services/micro-saas' },
    { label: 'All Services', href: '/services' }
  ];

  const solutionLinks = [
    { label: 'Enterprise', href: '/solutions/enterprise' },
    { label: 'Startups', href: '/solutions/startups' },
    { label: 'Small Business', href: '/solutions/small-business' },
    { label: 'All Solutions', href: '/solutions' }
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Zion Tech Group
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  {link.label}
                </Link>
                
                {/* Dropdown for Services */}
                {link.label === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {serviceLinks.map((serviceLink) => (
                        <Link
                          key={serviceLink.href}
                          href={serviceLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {serviceLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Dropdown for Solutions */}
                {link.label === 'Solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {solutionLinks.map((solutionLink) => (
                        <Link
                          key={solutionLink.href}
                          href={solutionLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {solutionLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/request-quote" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Quote
            </Link>
          </nav>
          
          <button 
            aria-label="Toggle navigation" 
            onClick={() => setMobileOpen((v) => !v)} 
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="block w-full py-2 text-gray-700 hover:text-blue-600 font-medium">
                  {link.label}
                </Link>
                
                {/* Mobile submenu for Services */}
                {link.label === 'Services' && (
                  <div className="ml-4 space-y-1">
                    {serviceLinks.map((serviceLink) => (
                      <Link
                        key={serviceLink.href}
                        href={serviceLink.href}
                        className="block w-full py-1 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {serviceLink.label}
                      </Link>
                    ))}
                  </div>
                )}
                
                {/* Mobile submenu for Solutions */}
                {link.label === 'Solutions' && (
                  <div className="ml-4 space-y-1">
                    {solutionLinks.map((solutionLink) => (
                      <Link
                        key={solutionLink.href}
                        href={solutionLink.href}
                        className="block w-full py-1 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {solutionLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/request-quote" className="block w-full py-2 text-blue-700 font-medium bg-blue-50 rounded-lg text-center">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
