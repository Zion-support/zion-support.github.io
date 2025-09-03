import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu, ChevronDown, X } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'All Services', href: '/services' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg grid place-items-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">Zion Tech Group</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/request-quote" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
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
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link 
                href="/about" 
                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/request-quote" 
                className="block py-2 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}