import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Map, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Sitemap: NextPage = () => {
  const sitemapData = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', url: '/about', description: 'Learn about our company and mission' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { name: 'Careers', url: '/careers', description: 'Join our growing team' },
        { name: 'Partners', url: '/partners', description: 'Partner with us' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', url: '/services', description: 'Overview of our services' },
        { name: 'Micro SaaS', url: '/services/micro-saas', description: 'Micro SaaS development services' },
        { name: 'IT Services', url: '/services/it-services', description: 'Comprehensive IT solutions' },
        { name: 'AI Services', url: '/services/ai-services', description: 'Artificial intelligence solutions' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'All Solutions', url: '/solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Enterprise-grade solutions' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'All Products', url: '/products', description: 'Our product portfolio' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and updates' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
        { name: 'Whitepapers', url: '/whitepapers', description: 'In-depth technical whitepapers' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'Documentation', url: '/documentation', description: 'Technical documentation' },
        { name: 'API Reference', url: '/api', description: 'API documentation and guides' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', url: '/help', description: 'Get help and support' },
        { name: 'System Status', url: '/status', description: 'Check system status and uptime' },
        { name: 'Training', url: '/training', description: 'Training and certification programs' },
        { name: 'Zion Academy', url: '/zion-academy', description: 'Educational resources and courses' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Our cookie usage policy' },
        { name: 'Data Protection', url: '/data-protection', description: 'Data protection and GDPR compliance' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    },
    {
      title: 'Tools & Utilities',
      links: [
        { name: 'Search', url: '/search', description: 'Search our website' },
        { name: 'Marketplace', url: '/marketplace', description: 'Browse our marketplace' },
        { name: 'API Playground', url: '/api-playground', description: 'Test our APIs' },
        { name: 'Research', url: '/research', description: 'Research and development' },
        { name: 'Categories', url: '/categories', description: 'Browse by category' },
        { name: 'Team Builder', url: '/team-builder', description: 'Build your team' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Navigate Zion Tech Group's website easily with our comprehensive sitemap. Find all pages, services, and resources in one place."
      keywords="sitemap, navigation, website map, Zion Tech Group, pages, services, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Map className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Find all pages, services, and resources on our website.
            </p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sitemapData.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link 
                            href={link.url}
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {link.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {link.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Quick Links
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/services" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Our Services
                </Link>
                <Link 
                  href="/about" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="/careers" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* XML Sitemap */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                XML Sitemap
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                For search engines and developers, you can access our XML sitemap.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-center space-x-4">
                  <Map className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">XML Sitemap</h3>
                    <p className="text-gray-600">Machine-readable sitemap for search engines</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="/sitemap.xml" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View XML Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Sitemap;