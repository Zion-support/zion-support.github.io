import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Blog', url: '/blog' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Careers', url: '/careers' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Services', url: '/ai-services' },
        { name: 'IT Services', url: '/it-services' },
        { name: 'Micro SaaS', url: '/micro-saas' },
        { name: 'Consultation', url: '/consultation' },
        { name: 'Demo', url: '/demo' }
      ]
    },
    {
      title: 'AI Solutions',
      links: [
        { name: 'AI Analytics', url: '/ai-analytics' },
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
        { name: 'AI Customer Support', url: '/ai-customer-support' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Support', url: '/support' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Navigate Zion Tech Group's website with our comprehensive sitemap. Find all our pages, services, and resources in one place." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find all our pages, services, and resources organized for easy navigation. 
              Use this sitemap to explore everything Zion Tech Group has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you can't find what you need in our sitemap, feel free to contact us directly. 
            We're here to help you find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/support"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;