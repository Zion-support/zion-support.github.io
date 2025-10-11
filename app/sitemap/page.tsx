'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Home, Users, Brain, Cloud, Shield, FileText, ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      links: [
        { name: 'AI Solutions', url: '/ai-services' },
        { name: 'AI Chatbots', url: '/ai-chatbot-builder' },
        { name: 'AI Analytics', url: '/ai-analytics' },
        { name: 'Computer Vision', url: '/ai-computer-vision' },
        { name: 'Voice AI', url: '/ai-voice-solutions' },
        { name: 'Document AI', url: '/ai-document-processing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      links: [
        { name: 'Cloud Services', url: '/cloud-services' },
        { name: 'Cybersecurity', url: '/cybersecurity' },
        { name: 'Custom Development', url: '/custom-development' },
        { name: 'DevOps', url: '/devops' },
        { name: 'Data Analytics', url: '/data-analytics' },
        { name: 'IT Consulting', url: '/it-consulting' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Demo', url: '/demo' },
        { name: 'Support', url: '/support' },
        { name: 'Consultation', url: '/consultation' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      ]
    }
  ];


  return() {quickLinks.map((link, index) => ()
                ))}
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12" /></div>
              {sitemapSections.map((section, sectionIndex) => ()
                    {section.pages.map((page, pageIndex) => ()
  return (
    <>
      <Helmet>
        <title>Sitemap | Zion Tech Group - Website Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all pages and services organized by category." />
        <meta name="keywords" content="sitemap, website navigation, pages, services, AI solutions, IT services" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find all our pages and services organized by category for easy navigation.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          {link.name}
                        </a>
                      </li>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

              </div>
            </div>
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Explore our website structure and find all our pages." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Sitemap</h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our website structure and find all our pages
            </p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Navigating?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is here to help you find what you need. Contact us for assistance.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default SitemapPage;