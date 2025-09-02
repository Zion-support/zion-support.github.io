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
        { name: 'Home', url: '/', description: 'Main homepage' },
        { name: 'About Us', url: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Partners', url: '/partners', description: 'Partner with us' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Blog', url: '/blog', description: 'Latest insights and articles' }
      ]
    },
    {
      title: 'Services',
      pages: [
        { name: 'Services Overview', url: '/services', description: 'All our services' },
        { name: 'Micro SaaS', url: '/services/micro-saas', description: 'Micro SaaS solutions' },
        { name: 'IT Services', url: '/services/it-services', description: 'IT infrastructure and support' },
        { name: 'AI Services', url: '/services/ai-services', description: 'Artificial intelligence solutions' }
      ]
    },
    {
      title: 'Solutions',
      pages: [
        { name: 'Solutions Overview', url: '/solutions', description: 'Industry solutions' },
        { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Enterprise-grade solutions' }
      ]
    },
    {
      title: 'Legal & Policies',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'How we use cookies' },
        { name: 'Data Protection', url: '/data-protection', description: 'Data protection measures' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Navigate Zion Tech Group's website with our comprehensive sitemap. Find all pages and sections easily."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Map className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sitemap</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find all pages and sections of our website organized for easy navigation.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <ArrowRight className="w-6 h-6 text-blue-600 mr-3" />
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <Link 
                          href={page.url}
                          className="flex items-start justify-between group hover:text-blue-600 transition-colors"
                        >
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-2 flex-shrink-0" />
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

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Resources</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find what you're looking for? Try these additional resources.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Search</h3>
                <p className="text-gray-600 mb-4">Use our search functionality to find specific content.</p>
                <Link href="/search" className="text-blue-600 hover:text-blue-700 font-medium">
                  Search Now →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-gray-600 mb-4">Get in touch with our team for personalized assistance.</p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Contact Us →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Help Center</h3>
                <p className="text-gray-600 mb-4">Find answers to common questions and get support.</p>
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  Get Help →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Sitemap;