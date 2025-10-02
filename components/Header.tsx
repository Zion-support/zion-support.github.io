import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services' },
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'AI Social Media Scheduler', href: '/services/ai-social-media-scheduler' },
        { name: 'AI Email Marketing Automation', href: '/services/ai-email-marketing-automation' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AIOps Platform', href: '/services/it-services/aiops-platform' },
        { name: 'Cloud-Native DevOps Platform', href: '/services/it-services/cloud-native-devops-platform' },
        { name: 'AI Content Optimization', href: '/services/ai-content-optimization-platform' },
        { name: 'AI Lead Scoring API', href: '/services/ai-lead-scoring-api' },
        { name: 'AI Cybersecurity Automation', href: '/services/ai-cybersecurity-automation-suite' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'All Solutions', href: '/solutions' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Innovative IT Solutions', href: '/innovative-it-solutions' },
        { name: 'Advanced AI Solutions', href: '/advanced-ai-solutions' },
        { name: 'Healthcare Technology', href: '/services/healthcare-technology-solutions' },
        { name: 'FinTech Solutions', href: '/services/financial-technology-solutions' },
        { name: 'E-commerce Solutions', href: '/services/ecommerce-technology-solutions' },
        { name: 'Manufacturing AI', href: '/services/manufacturing-ai-platform' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { 
      name: 'Resources', 
      href: '/resources',
      submenu: [
        { name: 'All Resources', href: '/resources' },
        { name: 'Guides', href: '/guides' },
        { name: 'Content Hub', href: '/content-hub' },
        { name: 'Enhanced Services Catalog', href: '/enhanced-services-catalog' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Security', href: '/security' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about',
      submenu: [
        { name: 'About Us', href: '/about' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Support', href: '/support' },
        { name: 'Partners', href: '/partners' },
        { name: 'Portfolio', href: '/portfolio' }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <PromoBanner />
        
        <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item.name}
                  {item.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-4">
                      <div className="grid grid-cols-1 gap-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-2"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}