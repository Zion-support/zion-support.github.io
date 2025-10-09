'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: '🤖' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: '📢' },
    { name: 'AI Automation', href: '/ai-automation', icon: '⚙️' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: '🏥' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: '💰' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: '⚛️' },
  ];

  const solutions = [
    { name: 'Micro SAAS', href: '/micro-saas', icon: '💻' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: '✍️' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: '☁️' },
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white font-medium transition-colors flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white font-medium transition-colors flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-lg">{solution.icon}</span>
                      <span>{solution.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Call Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-700 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-4 py-2">
                <div className="text-gray-400 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions */}
              <div className="px-4 py-2">
                <div className="text-gray-400 font-medium mb-2">Solutions</div>
                <div className="space-y-1 ml-4">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="flex items-center space-x-2 px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{solution.icon}</span>
                      <span>{solution.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-4 pt-4">
                <Link
                  href="tel:+13024640950"
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;