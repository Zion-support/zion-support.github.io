import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Security', href: '/security' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-600 hover:text-blue-600 transition-colors">Home</span>
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : ''}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link href="/about">
              <span className="text-gray-600 hover:text-blue-600 transition-colors">About</span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-600 hover:text-blue-600 transition-colors">Blog</span>
            </Link>
            <Link href="/talent">
              <span className="text-gray-600 hover:text-blue-600 transition-colors">Careers</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 hover:text-blue-600 transition-colors">Contact</span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </span>
            </Link>
          </div>
          
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link href="/">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Home</span>
              </Link>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
              
              <Link href="/about">
                <span className="block py-2 text-gray-600 hover:text-blue-600">About</span>
              </Link>
              <Link href="/blog">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Blog</span>
              </Link>
              <Link href="/talent">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Careers</span>
              </Link>
              <Link href="/contact">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span>
              </Link>
              <Link href="/contact">
                <span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;