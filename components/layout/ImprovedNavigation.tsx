import React { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const ImprovedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { 
      name: 'Home', 
      href: '/' 
    }, { 
      name: 'About', 
      href: '/about' 
    }, { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services' }, { name: 'IT Services', href: '/it-services' }, { name: 'Micro SaaS', href: '/micro-saas' }, { name: 'Cloud Solutions', href: '/cloud-solutions' }, { name: 'Web Development', href: '/web-development' }, { name: 'Mobile Development', href: '/mobile-development' }, { name: 'Data Analytics', href: '/data-analytics' }, { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    }, { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise' }, { name: 'Small Business', href: '/solutions/small-business' }, { name: 'Startups', href: '/solutions/startups' }, { name: 'Healthcare', href: '/solutions/healthcare' }, { name: 'Finance', href: '/solutions/finance' }, { name: 'E-commerce', href: '/solutions/ecommerce' }
      ]
    }, { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case-studies' }, { name: 'White Papers', href: '/white-papers' }, { name: 'Webinars', href: '/webinars' }, { name: 'Documentation', href: '/docs' }
      ]
    }, { 
      name: 'Company', 
      href: '/company',
      dropdown: [
        { name: 'Our Team', href: '/team' }, { name: 'Careers', href: '/careers' }, { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)};

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null)};

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}, {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm"
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}, {/* Mobile CTA */}
            <div className="pt-4 border-t">
              <Link href="/contact" onClick={closeMobileMenu}>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-4 border-t space-y-2">
              <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )};

export default ImprovedNavigation;
