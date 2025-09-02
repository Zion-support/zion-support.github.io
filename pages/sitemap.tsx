import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Map, ExternalLink, Download } from 'lucide-react';

const Sitemap: NextPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main homepage' },
        { name: 'About Us', url: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', url: '/careers', description: 'Join our team' }
      ]
    },
    {
      title: 'Services',
      pages: [
        { name: 'All Services', url: '/services', description: 'Overview of all our services' },
        { name: 'Micro SaaS', url: '/services/micro-saas', description: 'Micro SaaS solutions' },
        { name: 'IT Services', url: '/services/it-services', description: 'IT consulting and services' },
        { name: 'AI Services', url: '/services/ai-services', description: 'Artificial Intelligence solutions' }
      ]
    },
    {
      title: 'Solutions',
      pages: [
        { name: 'All Solutions', url: '/solutions', description: 'Overview of all our solutions' },
        { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Enterprise-grade solutions' }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and news' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
        { name: 'Webinars', url: '/webinars', description: 'Expert-led webinars and training' },
        { name: 'Documentation', url: '/documentation', description: 'Technical documentation and guides' },
        { name: 'API Reference', url: '/api', description: 'Complete API documentation' },
        { name: 'Help Center', url: '/help', description: 'Support and help resources' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Company',
      pages: [
        { name: 'Partners', url: '/partners', description: 'Our strategic partners' },
        { name: 'System Status', url: '/status', description: 'Real-time system status' }
      ]
    },
    {
      title: 'Legal & Privacy',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'How we use cookies' },
        { name: 'Data Protection', url: '/data-protection', description: 'Data protection measures' },
        { name: 'Accessibility', url: '/accessibility', description: 'Digital accessibility commitment' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'XML Sitemap', url: '/sitemap.xml', type: 'xml' },
    { name: 'RSS Feed', url: '/rss.xml', type: 'rss' },
    { name: 'Robots.txt', url: '/robots.txt', type: 'txt' }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category."
      keywords="sitemap, website structure, navigation, pages, services, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Map className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sitemap</h1>
              <p className="text-xl text-gray-200 mb-8">
                Complete overview of all pages and sections on our website. 
                Find what you're looking for quickly and easily.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{link.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Website Structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteStructure.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.pages.map((page, pageIndex) => (
                        <li key={pageIndex}>
                          <Link
                            href={page.url}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {page.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                              </div>
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

        {/* Search Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Can't Find What You're Looking For?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Use Search</h3>
                  <p className="text-gray-600">
                    Try using our search functionality to find specific content or services.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                  <p className="text-gray-600">
                    Our team is here to help you find the information you need.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
                  <p className="text-gray-600">
                    Get instant help through our live chat support system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Need Help Finding Something?</h2>
              <p className="text-xl mb-8 text-blue-100">
                If you can't find what you're looking for, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/help"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Sitemap;