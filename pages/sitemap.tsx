import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { Globe, ExternalLink, ArrowRight, Search, Brain, Users, Code, Server, Shield } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Globe,
      pages: [
        { name: 'Home', url: '/', description: 'Main homepage with company overview and services' },
        { name: 'About', url: '/about', description: 'Learn about Zion Tech Group and our mission' },
        { name: 'Services', url: '/services', description: 'Our comprehensive service offerings' },
        { name: 'Solutions', url: '/solutions', description: 'Custom solutions for your business needs' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      category: 'Services',
      icon: Brain,
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions and automation' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology services and support' },
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Custom software as a service solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security and compliance services' },
        { name: 'Cloud Platforms', url: '/cloud-platforms', description: 'Cloud infrastructure and migration services' },
        { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence and data insights' },
        { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things solutions and platforms' },
        { name: 'Blockchain Solutions', url: '/blockchain-solutions', description: 'Blockchain technology and cryptocurrency solutions' }
      ]
    },
    {
      category: 'Company',
      icon: Users,
      pages: [
        { name: 'Team', url: '/team', description: 'Meet our expert team of professionals' },
        { name: 'Careers', url: '/careers', description: 'Join our growing team of innovators' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { name: 'Partners', url: '/partners', description: 'Our strategic partnerships and alliances' },
        { name: 'Press', url: '/press', description: 'Latest news and press releases' }
      ]
    },
    {
      category: 'Resources',
      icon: Code,
      pages: [
        { name: 'Blog', url: '/blog', description: 'Latest insights, trends, and updates' },
        { name: 'White Papers', url: '/whitepapers', description: 'In-depth technical resources and research' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and guides' },
        { name: 'Support', url: '/support', description: 'Customer support and help center' },
        { name: 'Help', url: '/help', description: 'Frequently asked questions and tutorials' },
        { name: 'Training', url: '/training', description: 'Professional training and certification programs' }
      ]
    },
    {
      category: 'Products & Solutions',
      icon: Server,
      pages: [
        { name: 'Products', url: '/products', description: 'Our product portfolio and offerings' },
        { name: 'Marketplace', url: '/marketplace', description: 'Digital marketplace for services and solutions' },
        { name: 'Pricing', url: '/pricing', description: 'Transparent pricing for all our services' },
        { name: 'Pricing Guide', url: '/pricing-guide', description: 'Detailed pricing information and packages' },
        { name: 'Request Quote', url: '/request-quote', description: 'Get a customized quote for your project' }
      ]
    },
    {
      category: 'Legal & Compliance',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect and handle your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions for our services' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and management information' },
        { name: 'GDPR Compliance', url: '/gdpr', description: 'Data protection and privacy compliance' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', url: '/contact', icon: ArrowRight },
    { name: 'View Services', url: '/services', icon: Brain },
    { name: 'See Pricing', url: '/pricing', icon: ArrowRight },
    { name: 'Contact Support', url: '/support', icon: ArrowRight }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place." />
        <meta name="keywords" content="sitemap, navigation, pages, services, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>

      <ModernHeader />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Navigation
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Explore all pages, services, and resources available on our website
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="group bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </h3>
                    </div>
                    <link.icon className="h-6 w-6 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Complete Site Map</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={section.category} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <section.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={page.name} className="group">
                        <Link
                          href={page.url}
                          className="flex items-start justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                              {page.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {page.description}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors ml-4 flex-shrink-0" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Use our search feature to quickly find specific content across our website
            </p>
            <Link
              href="/search"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Our Site
            </Link>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}