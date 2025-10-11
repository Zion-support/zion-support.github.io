'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Home, Users, Brain, Cloud, Shield, FileText, ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const lastUpdated = const lastUpdated = new Date().toISOString().split('T')[0];
  ;
  const pageCategories = const pageCategories = const pageCategories = [
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
<<<<<<< HEAD
      pages: [
<<<<<<< HEAD
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About', url: '/about', description: 'About Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our service offerings' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing plans' },;
        { name: 'Contact', url: '/contact', description: 'Contact information' };
      ];
=======
        { name: 'Home', url: '/', description: 'Landing page with company overview and services' },
        { name: 'About Us', url: '/about', description: 'Company information, team, and mission' },
        { name: 'Contact', url: '/contact', description: 'Contact information and inquiry form' },
        { name: 'Services', url: '/services', description: 'Overview of all our services' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing and packages' },
        { name: 'Blog', url: '/blog', description: 'Latest news, insights, and articles' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client projects' },
        { name: 'Careers', url: '/careers', description: 'Job opportunities and company culture' }
=======
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' },
        { name: 'Blog', url: '/blog' },
        { name: 'Careers', url: '/careers' }
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
<<<<<<< HEAD
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy and data protection' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete site map' }
  ]
    }
  ];
  const totalPages = pageCategories.reduce((total, category) => total + category.pages.length, 0);
=======
        { name: 'Support', url: '/support', description: 'Technical support and help center' },
        { name: 'Community', url: '/community', description: 'User community and forums' },
        { name: 'Demo', url: '/demo', description: 'Request a product demonstration' },
        { name: 'Consultation', url: '/consultation', description: 'Free business consultation' },
        { name: 'Status', url: '/status', description: 'Service status and uptime' }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy practices' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions of use' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and management' },
        { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance information' }
=======
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' },
        { name: 'GDPR', url: '/gdpr' }
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      ]
    }
  ];

<<<<<<< HEAD
  const quickLinks = const quickLinks = const quickLinks = [
    { name: 'Get Started', url: '/contact', icon: ArrowRight },
    { name: 'Free Consultation', url: '/consultation', icon: Calendar },
    { name: 'Request Demo', url: '/demo', icon: Video },
    { name: 'Support Center', url: '/support', icon: Headphones },
    { name: 'Pricing', url: '/pricing', icon: DollarSign },;
    { name: 'Blog', url: '/blog', icon: FileText };
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5

  return() {quickLinks.map((link, index) => ()
                ))}
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12" /></div>
              {sitemapSections.map((section, sectionIndex) => ()
                    {section.pages.map((page, pageIndex) => ()
=======
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

<<<<<<< HEAD
            {/* Search Box */}
            <div className="mt-16 text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Use our search functionality or contact us directly for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" /></div>
                  <div className="flex-1 relative" /></div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" / /></Search>
                    <input type="text"
                      placeholder="Search our website..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    / /></input>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" /></button>
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center" /></div>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Need Help Finding Something?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Our team is here to help you find exactly what you need. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    Contact Us
                  </a>
                  <a href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    Call: (302) 464-0950
                  </a>
                </div>
=======
        {/* Search Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Use our search function to find specific pages or content on our website.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Search
                </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
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
<<<<<<< HEAD
      
      <Footer / /></Footer>
=======

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    </>
  );
};

export default SitemapPage;