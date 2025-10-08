import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapData = [
    {
      category: 'Main Pages',
      pages: [
        { path: '/', title: 'Home', description: 'Zion Tech Group homepage with AI and IT solutions overview' },
        { path: '/about', title: 'About Us', description: 'Learn about our company, mission, and team' },
        { path: '/contact', title: 'Contact', description: 'Get in touch with our experts for consultation' },
        { path: '/team', title: 'Our Team', description: 'Meet our experienced professionals and AI experts' }
      ]
    },
    {
      category: 'Services',
      pages: [
        { path: '/services', title: 'All Services', description: 'Comprehensive overview of all our services' },
        { path: '/ai-services', title: 'AI Services', description: 'Advanced artificial intelligence solutions' },
        { path: '/ai-marketing', title: 'AI Marketing', description: 'AI-powered marketing automation and optimization' },
        { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent business process automation' },
        { path: '/ai-healthcare', title: 'AI Healthcare', description: 'AI solutions for healthcare industry' },
        { path: '/ai-fintech', title: 'AI Fintech', description: 'AI-powered financial technology solutions' },
        { path: '/it-services', title: 'IT Services', description: 'Comprehensive IT support and solutions' },
        { path: '/micro-saas', title: 'Micro SAAS', description: 'Custom software-as-a-service solutions' }
      ]
    },
    {
      category: 'Specialized Services',
      pages: [
        { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing solutions' },
        { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and intelligent systems' },
        { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data analytics and business insights' },
        { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Blockchain technology and Web3 solutions' },
        { path: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced security solutions and protection' },
        { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things and edge computing solutions' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { path: '/case-studies', title: 'Case Studies', description: 'Success stories and project showcases' },
        { path: '/enterprise', title: 'Enterprise Solutions', description: 'Large-scale enterprise AI and IT solutions' },
        { path: '/blog', title: 'Blog & Insights', description: 'Latest articles and industry insights' },
        { path: '/guides', title: 'Technical Guides', description: 'Comprehensive technical documentation and guides' },
        { path: '/services-advertising', title: 'Advertising Services', description: 'AI-powered advertising and marketing solutions' }
      ]
    },
    {
      category: 'Legal & Policies',
      pages: [
        { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection practices' },
        { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for using our services' }
      ]
    }
  ];

  const lastModified = new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website with all pages, services, and resources." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Navigate through all our pages, services, and resources
              </p>
              <div className="flex items-center justify-center text-blue-200">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last updated: {lastModified}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Site Navigation
              </h2>
              <p className="text-xl text-gray-600">
                Find all our pages, services, and resources organized by category
              </p>
            </div>

            <div className="space-y-12">
              {sitemapData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    {category.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <Link 
                            to={page.path}
                            className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {page.title}
                          </Link>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{page.description}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>https://ziontechgroup.com{page.path}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-gray-600">
                Popular pages and resources for quick access
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link 
                to="/ai-services" 
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Services</h3>
                <p className="text-sm text-gray-600">Advanced AI solutions</p>
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-sm text-gray-600">Get in touch</p>
              </Link>
              
              <Link 
                to="/case-studies" 
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-sm text-gray-600">Success stories</p>
              </Link>
              
              <Link 
                to="/guides" 
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-gray-900 mb-2">Guides</h3>
                <p className="text-sm text-gray-600">Technical guides</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our team for personalized assistance and guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;