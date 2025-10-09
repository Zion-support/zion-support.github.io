'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      href: '/ai-services',
      items: [
        { name: 'Machine Learning', href: '/ai-services#machine-learning' },
        { name: 'Natural Language Processing', href: '/ai-services#nlp' },
        { name: 'Computer Vision', href: '/ai-services#computer-vision' },
        { name: 'Predictive Analytics', href: '/ai-services#predictive-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      items: [
        { name: 'Developer Tools', href: '/micro-saas#developer-tools' },
        { name: 'Marketing Tools', href: '/micro-saas#marketing' },
        { name: 'Analytics Tools', href: '/micro-saas#analytics' },
        { name: 'Content Creation', href: '/micro-saas#content-creation' },
        { name: 'Productivity Tools', href: '/micro-saas#productivity' },
        { name: 'E-commerce Solutions', href: '/ai-ecommerce-solutions' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      items: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & Automation', href: '/it-services#devops' },
        { name: 'Database Management', href: '/it-services#database' },
        { name: 'Network Security', href: '/it-services#network-security' },
        { name: 'IT Consulting', href: '/it-services#consulting' }
      ]
    },
    {
      title: 'Advanced Solutions',
      href: '/services',
      items: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain' },
        { name: 'IoT & Edge Computing', href: '/iot-edge' },
        { name: 'Robotics', href: '/robotics' },
        { name: 'Business Intelligence', href: '/business-intelligence' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-blue-400 transition-colors flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                     onMouseEnter={() => setActiveDropdown('services')}
                     onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="grid grid-cols-2 gap-4 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <Link
                          href={category.href}
                          className="block text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                          onClick={closeMenu}
                        >
                          {category.title}
                        </Link>
                        <div className="space-y-1">
                          {category.items.slice(0, 4).map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.href}
                              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                    <Link
                      href="/services"
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
                      onClick={closeMenu}
                    >
                      View All Services
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
              <a 
                href="tel:+13026009898" 
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(302) 464-0950</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Services Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-blue-400 font-semibold">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <Link
                      href={category.href}
                      className="block px-3 py-2 text-white hover:text-blue-400 transition-colors font-medium"
                      onClick={closeMenu}
                    >
                      {category.title}
                    </Link>
                    <div className="ml-4 space-y-1">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="block px-3 py-1 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/services"
                  className="block px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  View All Services →
                </Link>
              </div>
              
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="border-t border-gray-600 pt-2 mt-2">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a 
                  href="mailto:info@ziontechgroup.com" 
                  className="flex items-center space-x-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;