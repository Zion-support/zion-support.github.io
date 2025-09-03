import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu, ChevronDown, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services', description: 'AI-powered solutions' },
    { name: 'IT Services', href: '/it-services', description: 'Infrastructure & security' },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Software solutions' },
    { name: 'All Services', href: '/services', description: 'Complete overview' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'FAQ', href: '/faq' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg grid place-items-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900">Zion Tech Group</span>
              <p className="text-xs text-gray-500 -mt-1">Advanced Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Services</h3>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block p-2 rounded hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                Company
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="space-y-2">
                    {company.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-2 rounded hover:bg-gray-50 transition-colors text-gray-700 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="space-y-2">
                    {resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-2 rounded hover:bg-gray-50 transition-colors text-gray-700 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="tel:+13024640950" className="flex items-center gap-1 hover:text-blue-600">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-1 hover:text-blue-600">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">Contact</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
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
            <div className="px-4 py-6 space-y-6">
              {/* Services */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-left font-medium text-gray-900"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-3 pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={() => setOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Company</h3>
                {company.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Resources */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Resources</h3>
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t space-y-3">
                <a href="tel:+13024640950" className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  kleber@ziontechgroup.com
                </a>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <Link 
                href="/contact" 
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}