'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main homepage with company overview' },
    { name: 'About', path: '/about', description: 'About Zion Tech Group and our mission' },
    { name: 'Contact', path: '/contact', description: 'Contact information and inquiry form' },
    { name: 'Pricing', path: '/pricing', description: 'Service pricing and packages' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and client testimonials' }
  ];

  const solutionPages = [
    { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions and services' },
    { name: 'IT Services', path: '/it-services', description: 'IT infrastructure and technology services' },
    { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro SaaS products and solutions' }
  ];

  const enterprisePages = [
    { name: 'Enterprise Solutions', path: '/enterprise', description: 'Enterprise-grade solutions and services' },
    { name: 'Digital Transformation', path: '/digital-transformation', description: 'Digital transformation consulting and implementation' },
    { name: 'Business Intelligence', path: '/business-intelligence', description: 'BI solutions and data analytics' },
    { name: 'Custom Development', path: '/custom-software', description: 'Custom software development services' },
    { name: 'Consultation', path: '/consultation', description: 'Technology consultation and advisory services' }
  ];

  const resourcePages = [
    { name: 'Blog', path: '/blog', description: 'Latest insights and technology articles' },
    { name: 'Tutorials', path: '/tutorials', description: 'Step-by-step guides and tutorials' },
    { name: 'Documentation', path: '/docs', description: 'Technical documentation and guides' },
    { name: 'API Reference', path: '/api-docs', description: 'API documentation and integration guides' },
    { name: 'Demo', path: '/demo', description: 'Interactive product demonstrations' },
    { name: 'FAQ', path: '/faq', description: 'Frequently asked questions and answers' }
  ];

  const companyPages = [
    { name: 'Our Team', path: '/team', description: 'Meet our expert team members' },
    { name: 'Careers', path: '/careers', description: 'Job opportunities and career information' },
    { name: 'Partners', path: '/partners', description: 'Partnership opportunities and programs' },
    { name: 'News', path: '/news', description: 'Company news and announcements' },
    { name: 'Support', path: '/support', description: 'Customer support and help center' },
    { name: 'Status', path: '/status', description: 'System status and uptime information' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms of service and usage agreement' },
    { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage and preferences' }
  ];

  const allPages = [
    ...mainPages,
    ...solutionPages,
    ...enterprisePages,
    ...resourcePages,
    ...companyPages,
    ...legalPages
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category." />
        <meta name="keywords" content="sitemap, navigation, pages, services, AI, IT, solutions" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Site Map
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete navigation guide to all pages and sections of the Zion Tech Group website.
                Find exactly what you're looking for with our organized site structure.
              </p>
            </div>

            {/* Search */}
            <div className="mb-12">
              <div className="max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search pages..."
                  className="w-full px-6 py-4 bg-slate-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Pages */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Main Pages</h2>
                <div className="space-y-4">
                  {mainPages.map((page) => (
                    <div key={page.path} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <Link
                        to={page.path}
                        className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors block mb-2"
                      >
                        {page.name}
                      </Link>
                      <p className="text-gray-400 text-sm">{page.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Solutions</h2>
                <div className="space-y-4">
                  {solutionPages.map((page) => (
                    <div key={page.path} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <Link
                        to={page.path}
                        className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors block mb-2"
                      >
                        {page.name}
                      </Link>
                      <p className="text-gray-400 text-sm">{page.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Enterprise</h2>
                <div className="space-y-4">
                  {enterprisePages.map((page) => (
                    <div key={page.path} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <Link
                        to={page.path}
                        className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors block mb-2"
                      >
                        {page.name}
                      </Link>
                      <p className="text-gray-400 text-sm">{page.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Resources</h2>
                <div className="space-y-4">
                  {resourcePages.map((page) => (
                    <div key={page.path} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <Link
                        to={page.path}
                        className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors block mb-2"
                      >
                        {page.name}
                      </Link>
                      <p className="text-gray-400 text-sm">{page.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Company</h2>
                <div className="space-y-4">
                  {companyPages.map((page) => (
                    <div key={page.path} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <Link
                        to={page.path}
                        className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors block mb-2"
                      >
                        {page.name}
                      </Link>
                      <p className="text-gray-400 text-sm">{page.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Legal</h2>
                <div className="space-y-4">
                  {legalPages.map((page) => (
                    <div key={page.path} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <Link
                        to={page.path}
                        className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors block mb-2"
                      >
                        {page.name}
                      </Link>
                      <p className="text-gray-400 text-sm">{page.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Site Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allPages.length}</div>
                  <div className="text-gray-300">Total Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
                  <div className="text-gray-300">Main Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-gray-300">Pages Working</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;