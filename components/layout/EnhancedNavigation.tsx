import React, { useState } from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'AI Content Creation', href: '/services/ai-content-creation' },
    { name: 'Affiliate Marketing Tools', href: '/services/affiliate-marketing' },
    { name: 'AI Email Responder', href: '/services/ai-email-responder' },
    { name: 'Customer Support Platform', href: '/services/customer-support' },
    { name: 'E-commerce Return Management', href: '/services/ecommerce-returns' },
    { name: 'AI SEO Optimization', href: '/services/ai-seo-optimization' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Quality Assurance', href: '/services/quality-assurance' },
    { name: 'Security Auditing', href: '/services/security-auditing' },
    { name: 'System Administration', href: '/services/system-administration' },
    { name: 'Technical Documentation', href: '/services/technical-documentation' },
    { name: 'Performance Optimization', href: '/services/performance-optimization' },
    { name: 'Network Security', href: '/services/network-security' },
    { name: 'Database Design', href: '/services/database-design' },
    { name: 'Data Pipeline Engineering', href: '/services/data-pipeline-engineering' },
    { name: 'Business Intelligence', href: '/services/business-intelligence' },
    { name: 'API Development', href: '/services/api-development' },
    { name: 'Cloud Migration', href: '/services/cloud-migration' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/"><a className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
            Zion Tech Group
          </a></Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/"><a className="text-white hover:text-blue-200 transition-colors font-medium">
              Home
            </a></Link>
            
            <div className="relative group">
              <button 
                className="text-white hover:text-blue-200 transition-colors font-medium flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {services.map((service) => (
                      <Link href="#"><a className="px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        {service.name}
                      </a></Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/products"><a className="text-white hover:text-blue-200 transition-colors font-medium">
              Products
            </a></Link>
            <Link href="/about"><a className="text-white hover:text-blue-200 transition-colors font-medium">
              About
            </a></Link>
            <Link href="/contact"><a className="text-white hover:text-blue-200 transition-colors font-medium">
              Contact
            </a></Link>
            <Link href="/blog"><a className="text-white hover:text-blue-200 transition-colors font-medium">
              Blog
            </a></Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-lg mt-2 p-4">
            <div className="space-y-4">
              <Link href="/"><a className="block text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a></Link>
              
              <div>
                <button 
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <svg className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {services.map((service) => (
                      <Link href="#"><a className="block text-sm text-gray-600 hover:text-blue-600">
                        {service.name}
                      </a></Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/products"><a className="block text-gray-700 hover:text-blue-600 font-medium">
                Products
              </a></Link>
              <Link href="/about"><a className="block text-gray-700 hover:text-blue-600 font-medium">
                About
              </a></Link>
              <Link href="/contact"><a className="block text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a></Link>
              <Link href="/blog"><a className="block text-gray-700 hover:text-blue-600 font-medium">
                Blog
              </a></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
