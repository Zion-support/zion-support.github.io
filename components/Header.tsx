import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI & Machine Learning', href: '/services#ai' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
    { name: 'Cybersecurity', href: '/services#security' },
    { name: 'Quantum Computing', href: '/services#quantum' },
    { name: 'DevOps & Automation', href: '/services#devops' },
    { name: 'Data Analytics', href: '/services#analytics' }
  ];

  const solutions = [
    { name: 'Industry Solutions', href: '/solutions' },
    { name: 'Healthcare', href: '/healthcare-ai-solutions' },
    { name: 'Financial Services', href: '/fintech-solutions' },
    { name: 'Manufacturing', href: '/manufacturing-solutions' },
    { name: 'Retail & E-commerce', href: '/retail-technology-solutions' },
    { name: 'Government', href: '/government-solutions' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+13024640950" className="flex items-center hover:text-blue-300 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-blue-300 transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">ZT</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Links */}
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              News
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Events
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Careers
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/request-quote"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Request Quote
            </Link>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <div className="py-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Solutions</h3>
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  href={solution.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
            </div>
            
            <div className="py-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Services</h3>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="py-2 border-t border-gray-200">
              <Link 
                href="/pricing" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/case-studies" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/news" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/events" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/careers" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            </div>

            <div className="py-2 border-t border-gray-200">
              <Link 
                href="/request-quote"
                className="block px-3 py-2 text-blue-600 hover:bg-blue-50 transition-colors rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Quote
              </Link>
              <Link 
                href="/contact"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}