import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { Globe, ExternalLink, ArrowRight } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main homepage with company overview' },
        { name: 'About', url: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our comprehensive service offerings' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      category: 'Services',
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Custom software solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security and compliance services' },
        { name: 'Cloud Platforms', url: '/cloud-platforms', description: 'Cloud infrastructure solutions' },
        { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence services' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'Team', url: '/team', description: 'Meet our expert team' },
        { name: 'Careers', url: '/careers', description: 'Join our growing team' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { name: 'Blog', url: '/blog', description: 'Latest insights and updates' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Pricing Guide', url: '/pricing-guide', description: 'Transparent pricing information' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth technical resources' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and guides' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', url: '/gdpr', description: 'Data protection compliance' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>
      
      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-12 w-12 text-blue-600 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Site Map
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate our website easily. Find all our pages, services, and resources organized by category.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <ul className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link
                          href={page.url}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-600">{page.description}</div>
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

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-xl text-gray-600">Popular pages and resources</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                href="/services"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">Services</div>
                <div className="text-gray-600 text-sm">Explore our offerings</div>
                <ArrowRight className="h-4 w-4 text-blue-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">Contact</div>
                <div className="text-gray-600 text-sm">Get in touch</div>
                <ArrowRight className="h-4 w-4 text-green-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/pricing-guide"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-purple-600 mb-2">Pricing</div>
                <div className="text-gray-600 text-sm">View our rates</div>
                <ArrowRight className="h-4 w-4 text-purple-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-orange-600 mb-2">Case Studies</div>
                <div className="text-gray-600 text-sm">Success stories</div>
                <ArrowRight className="h-4 w-4 text-orange-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <SimpleFooter />
    </>
  );
}