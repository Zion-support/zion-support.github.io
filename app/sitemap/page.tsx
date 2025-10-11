'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteSections = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' }
      ]
    },
    {
      title: 'AI Services',
      pages: [
        { name: 'AI Solutions', url: '/ai-solutions' },
        { name: 'Machine Learning', url: '/ai-ml' },
        { name: 'Computer Vision', url: '/ai-computer-vision' },
        { name: 'Natural Language Processing', url: '/ai-nlp' }
      ]
    },
    {
      title: 'IT Services',
      pages: [
        { name: 'Cloud Services', url: '/cloud-services' },
        { name: 'Cybersecurity', url: '/cybersecurity' },
        { name: 'Software Development', url: '/software-development' },
        { name: 'Data Analytics', url: '/data-analytics' }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Support', url: '/support' }
      ]
    },
    {
      title: 'Company',
      pages: [
        { name: 'Careers', url: '/careers' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Demo', url: '/demo' },
        { name: 'Consultation', url: '/consultation' }
      ]
    },
    {
      title: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Navigation />
<<<<<<< HEAD
=======
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find all the pages and sections of our website organized by category for easy navigation.
            </p>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

        {/* Sitemap Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteSections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Map className="w-5 h-5 mr-2 text-cyan-400" />
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <a
                          href={page.url}
                          className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          {page.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* XML Sitemap */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">XML Sitemap</h2>
            <p className="text-xl text-gray-300 mb-8">
              For search engines and developers, you can access our XML sitemap.
            </p>
            <a
              href="/sitemap.xml"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              <ExternalLink className="mr-2" size={20} />
              View XML Sitemap
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you can't find the page you're looking for, try our search or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;
