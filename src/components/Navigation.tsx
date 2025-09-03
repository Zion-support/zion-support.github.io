import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/services/ai-services', description: 'Artificial Intelligence Solutions' },
    { name: 'IT Services', href: '/services/it-services', description: 'Information Technology Services' },
    { name: 'Micro SaaS', href: '/services/micro-saas', description: 'Software as a Service Solutions' },
    { name: 'Cybersecurity', href: '/services/it/cybersecurity', description: 'Security & Protection' },
    { name: 'Cloud Services', href: '/services/it/cloud-finops', description: 'Cloud Infrastructure' },
    { name: 'Platform Engineering', href: '/services/it/platform-engineering', description: 'Platform Development' }
  ];

  const mainNavItems = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg grid place-items-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
              <p className="text-xs text-gray-500 -mt-1">Innovation & Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{service.name}</h4>
                              <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <Link 
                          href="/services" 
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/request-quote" 
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Get Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            aria-label="Toggle menu" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    href={item.href} 
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t space-y-3">
                <Link 
                  href="/request-quote" 
                  className="block w-full text-center py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setOpen(false)}
                >
                  Get Quote
                </Link>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}