import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Map, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SitemapPage: NextPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About', url: '/about', description: 'Learn about our company and mission' },
        { name: 'Services', url: '/services', description: 'Our comprehensive technology services' },
        { name: 'Products', url: '/products', description: 'Our technology products and solutions' },
        { name: 'Solutions', url: '/solutions', description: 'Industry-specific solutions' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { name: 'Careers', url: '/careers', description: 'Join our team' }
      ]
    },
    {
      title: 'Services',
      pages: [
        { name: 'Micro SaaS Solutions', url: '/services/micro-saas', description: 'Focused software solutions' },
        { name: 'IT Services', url: '/services/it-services', description: 'Comprehensive IT solutions' },
        { name: 'AI Services', url: '/services/ai-services', description: 'Artificial intelligence solutions' }
      ]
    },
    {
      title: 'Solutions',
      pages: [
        { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Large-scale enterprise solutions' },
        { name: 'Small Business Solutions', url: '/solutions/small-business', description: 'Solutions for small businesses' },
        { name: 'Startup Solutions', url: '/solutions/startups', description: 'Solutions for startups' },
        { name: 'Healthcare Solutions', url: '/solutions/healthcare', description: 'Healthcare industry solutions' },
        { name: 'Financial Solutions', url: '/solutions/financial-solutions', description: 'Financial services solutions' },
        { name: 'Retail Solutions', url: '/solutions/retail-solutions', description: 'Retail industry solutions' },
        { name: 'Manufacturing Solutions', url: '/solutions/manufacturing-solutions', description: 'Manufacturing solutions' },
        { name: 'Government Solutions', url: '/solutions/government-solutions', description: 'Government sector solutions' }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and project examples' },
        { name: 'Whitepapers', url: '/whitepapers', description: 'In-depth research and insights' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and sessions' },
        { name: 'Documentation', url: '/documentation', description: 'Technical documentation and guides' },
        { name: 'API Reference', url: '/api', description: 'API documentation and reference' }
      ]
    },
    {
      title: 'Support',
      pages: [
        { name: 'Help Center', url: '/help', description: 'Get help and support' },
        { name: 'System Status', url: '/status', description: 'Service status and uptime' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'How we use cookies' },
        { name: 'Data Protection', url: '/data-protection', description: 'Data protection information' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and sections on the Zion Tech Group website."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sitemap</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Complete overview of all pages and sections on our website.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Website Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through our complete website structure organized by category.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Map className="w-6 h-6 text-blue-600 mr-3" />
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                        <Link
                          href={page.url}
                          className="flex items-center justify-between group hover:text-blue-600 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {page.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popular pages and frequently accessed sections.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/contact" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className="text-blue-600 mb-3">
                  <ExternalLink className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-sm text-gray-600">Get in touch with our team</p>
              </Link>

              <Link href="/services" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className="text-green-600 mb-3">
                  <ExternalLink className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Our Services</h3>
                <p className="text-sm text-gray-600">Explore our technology services</p>
              </Link>

              <Link href="/case-studies" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className="text-purple-600 mb-3">
                  <ExternalLink className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-sm text-gray-600">View our success stories</p>
              </Link>

              <Link href="/help" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className="text-orange-600 mb-3">
                  <ExternalLink className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
                <p className="text-sm text-gray-600">Get support and assistance</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* XML Sitemap Link */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">XML Sitemap</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            For search engines and developers, access our XML sitemap.
          </p>
          <Link
            href="/sitemap.xml"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View XML Sitemap
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default SitemapPage;