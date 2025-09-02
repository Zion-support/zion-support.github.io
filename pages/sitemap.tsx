import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Sitemap: NextPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', href: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', href: '/about', description: 'Learn about our company and team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', href: '/careers', description: 'Join our team' }
      ]
    },
    {
      title: 'Services',
      pages: [
        { name: 'All Services', href: '/services', description: 'Overview of all our services' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas', description: 'Focused software solutions' },
        { name: 'IT Services', href: '/services/it-services', description: 'Comprehensive IT solutions' },
        { name: 'AI Services', href: '/services/ai-services', description: 'Artificial intelligence solutions' }
      ]
    },
    {
      title: 'Solutions',
      pages: [
        { name: 'All Solutions', href: '/solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business solutions' }
      ]
    },
    {
      title: 'Products',
      pages: [
        { name: 'All Products', href: '/products', description: 'Our product portfolio' }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and trends' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories and examples' },
        { name: 'Whitepapers', href: '/whitepapers', description: 'Research reports and analysis' },
        { name: 'Webinars', href: '/webinars', description: 'Expert-led educational sessions' }
      ]
    },
    {
      title: 'Support',
      pages: [
        { name: 'Help Center', href: '/help', description: 'Get help and support' },
        { name: 'Documentation', href: '/documentation', description: 'Technical documentation' },
        { name: 'API Reference', href: '/api', description: 'API documentation and guides' },
        { name: 'System Status', href: '/status', description: 'Service status and uptime' }
      ]
    },
    {
      title: 'Legal',
      pages: [
        { name: 'Privacy Policy', href: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Contact Us', href: '/contact', icon: '📞' },
    { name: 'Get Quote', href: '/contact', icon: '💰' },
    { name: 'View Services', href: '/services', icon: '⚙️' },
    { name: 'Read Blog', href: '/blog', icon: '📝' },
    { name: 'Check Status', href: '/status', icon: '📊' },
    { name: 'API Docs', href: '/api', icon: '🔧' }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Map className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Map</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Navigate our website easily with this comprehensive sitemap. 
            Find all pages, services, and resources organized by category.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-gray-600">Popular pages and frequently accessed content</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg text-center transition-colors group"
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Site Map</h2>
            <p className="text-gray-600">All pages organized by category for easy navigation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link
                        href={page.href}
                        className="flex items-start group hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {page.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">External Resources</h2>
            <p className="text-gray-600">Connect with us on social media and external platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://linkedin.com/company/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="text-3xl mb-2">💼</div>
              <div className="font-medium text-gray-900 group-hover:text-blue-600">LinkedIn</div>
              <div className="text-sm text-gray-500">Professional network</div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-1 inline" />
            </a>

            <a
              href="https://twitter.com/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="text-3xl mb-2">🐦</div>
              <div className="font-medium text-gray-900 group-hover:text-blue-600">Twitter</div>
              <div className="text-sm text-gray-500">Latest updates</div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-1 inline" />
            </a>

            <a
              href="https://facebook.com/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="text-3xl mb-2">📘</div>
              <div className="font-medium text-gray-900 group-hover:text-blue-600">Facebook</div>
              <div className="text-sm text-gray-500">Community updates</div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-1 inline" />
            </a>

            <a
              href="https://instagram.com/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="text-3xl mb-2">📷</div>
              <div className="font-medium text-gray-900 group-hover:text-blue-600">Instagram</div>
              <div className="text-sm text-gray-500">Behind the scenes</div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-1 inline" />
            </a>
          </div>
        </div>
      </section>

      {/* Search Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Use our search functionality or contact us directly for assistance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Our Site</h3>
                <p className="text-gray-600 mb-4">
                  Use the search bar in our header to find specific content, services, or information.
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search our website..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Support</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help you find what you need.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString()} | 
            This sitemap is automatically updated when new pages are added to our website.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Sitemap;