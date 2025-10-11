import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, Link, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const siteSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Contact', url: '/contact' }
      ]
    },
    {
      title: 'AI Services',
      links: [
        { name: 'AI Analytics', url: '/ai-analytics' },
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', url: '/ai-content-generation' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions' },
        { name: 'Web Development', url: '/web-development' },
        { name: 'Mobile Development', url: '/mobile-development' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Careers', url: '/careers' },
        { name: 'Partners', url: '/partners' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap of all pages and services." />
        <meta name="keywords" content="sitemap, navigation, website map, pages" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find all our pages and services in one convenient location.
            </p>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteSections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Map className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                        >
                          <Link className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us and we'll help you find the information you need.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;