import React, { useState } from
  'react';

export const EnhancedHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
<<<<<<< HEAD
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      submenu: [
        { label: 'AI Services', href: '/services/ai-services' },
        { label: 'Micro SaaS', href: '/services/micro-saas' },
        { label: 'IT Services', href: '/services/it-services' },
        { label: 'All Services', href: '/services' }
      ]
    },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About', href: '/about' },
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
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl sm:text-2xl font-bold text-blue-900">Zion Tech Group</a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <a 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                  onMouseEnter={() => link.submenu && setServicesOpen(true)}
                  onMouseLeave={() => link.submenu && setServicesOpen(false)}
                >
                  {link.label}
                  {link.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {link.submenu && servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.submenu.map((subLink) => (
                      <a
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/contact" className="hidden lg:inline-flex bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Get Started</a>
          </nav>
          <button aria-label="Toggle navigation" onClick={() => setMobileOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <a href={link.href} className="block w-full py-2 text-gray-700 hover:text-blue-600">
                  {link.label}
                </a>
                {link.submenu && (
                  <div className="ml-4 space-y-1">
                    {link.submenu.map((subLink) => (
                      <a
                        key={subLink.href}
                        href={subLink.href}
                        className="block w-full py-1 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/contact" className="block w-full py-2 text-blue-700 font-medium">Get Started</a>
          </div>
        </div>
      )}</header>
  );
};
