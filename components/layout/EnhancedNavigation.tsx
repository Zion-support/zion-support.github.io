import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
=======
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Development', href: '/services/mobile-development' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];

  const products = [
    { name: 'AI Solutions', href: '/products/ai-solutions' },
    { name: 'Cloud Platforms', href: '/products/cloud-platforms' },
    { name: 'Analytics Tools', href: '/products/analytics-tools' },
    { name: 'Security Suite', href: '/products/security-suite' },
  ];
>>>>>>> 56433e5950f86f3612ddbdabb654ab3429763be2
=======

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3ded

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
<<<<<<< HEAD
<<<<<<< HEAD
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
=======
          <Link href="/">
            <a className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Zion Tech Group
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</a>
            </Link>
            <Link href="/solutions">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Solutions</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </Link>
            <Link href="/talent">
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Join Our Team</a>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3ded
            </svg>
          </button>
        </div>

<<<<<<< HEAD
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
=======
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
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

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                Products
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {products.map((product) => (
                  <Link key={product.name} href={product.href}>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about"><span className="text-gray-600 hover:text-blue-600 transition-colors">About</span></Link>
            <Link href="/blog"><span className="text-gray-600 hover:text-blue-600 transition-colors">Blog</span></Link>
            <Link href="/talent"><span className="text-gray-600 hover:text-blue-600 transition-colors">Careers</span></Link>
            <Link href="/contact"><span className="text-gray-600 hover:text-blue-600 transition-colors">Contact</span></Link>
          </div>

          <div className="hidden lg:block">
            <Link href="/contact"><span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Get Started</span></Link>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link href="/"><span className="block py-2 text-gray-600 hover:text-blue-600">Home</span></Link>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">{service.name}</span>
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Products</div>
                {products.map((product) => (
                  <Link key={product.name} href={product.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">{product.name}</span>
                  </Link>
                ))}
              </div>
              <Link href="/about"><span className="block py-2 text-gray-600 hover:text-blue-600">About</span></Link>
              <Link href="/blog"><span className="block py-2 text-gray-600 hover:text-blue-600">Blog</span></Link>
              <Link href="/talent"><span className="block py-2 text-gray-600 hover:text-blue-600">Careers</span></Link>
              <Link href="/contact"><span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span></Link>
              <Link href="/contact"><span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">Get Started</span></Link>
>>>>>>> 56433e5950f86f3612ddbdabb654ab3429763be2
=======
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
              </Link>
              <Link href="/services">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              </Link>
              <Link href="/products">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</a>
              </Link>
              <Link href="/solutions">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Solutions</a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              </Link>
              <Link href="/talent">
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Join Our Team</a>
              </Link>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3ded
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;