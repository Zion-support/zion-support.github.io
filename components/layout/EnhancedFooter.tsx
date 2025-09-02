import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-200">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-200 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-200 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-blue-200 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Our Services</h3>
            <ul className="text-gray-300 space-y-2">
              {services.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link href="#"><a className="hover:text-blue-200 transition-colors">
                    {service.name}
                  </a></Link>
                </li>
              ))}
              <li>
                <Link href="/services"><a className="text-blue-200 hover:text-white font-medium">
                  View All Services →
                </a></Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href="#"><a className="hover:text-blue-200 transition-colors">
                    {link.name}
                  </a></Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Contact Us</h3>
            <div className="text-gray-300 space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+13024640950" className="hover:text-blue-200 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">Address</p>
                  <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy"><a className="text-gray-300 hover:text-blue-200 transition-colors text-sm">
                Privacy Policy
              </a></Link>
              <Link href="/terms"><a className="text-gray-300 hover:text-blue-200 transition-colors text-sm">
                Terms of Service
              </a></Link>
              <Link href="/sitemap"><a className="text-gray-300 hover:text-blue-200 transition-colors text-sm">
                Sitemap
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
