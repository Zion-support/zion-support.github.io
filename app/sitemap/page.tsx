import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Map, ExternalLink, ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/', description: 'Zion Tech Group homepage' },
        { name: 'About Us', url: '/about', description: 'Learn about our company and mission' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { name: 'Team', url: '/team', description: 'Meet our expert team members' },
        { name: 'Enterprise', url: '/enterprise', description: 'Enterprise solutions and services' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', url: '/services', description: 'Complete overview of our services' },
        { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
        { name: 'Micro SAAS', url: '/micro-saas', description: 'Micro software as a service solutions' },
        { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum computing services' },
        { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Business Intelligence', url: '/business-intelligence', description: 'BI and analytics solutions' },
        { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Blockchain and Web3 services' },
        { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Internet of Things solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security and protection services' },
        { name: 'Robotics', url: '/robotics', description: 'Robotic automation solutions' },
        { name: 'Advertising Services', url: '/services-advertising', description: 'AI-powered advertising solutions' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
        { name: 'Guides', url: '/guides', description: 'Technical guides and tutorials' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our services, resources, and pages easily." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive site map
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Map className="w-6 h-6 mr-3 text-indigo-600" />
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-l-4 border-indigo-100 pl-4 hover:border-indigo-300 transition-colors">
                        <Link 
                          to={link.url} 
                          className="group flex items-center justify-between text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {link.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-gray-600">
                Popular pages and resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/ai-services" 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  AI Services
                </h3>
                <p className="text-sm text-gray-600">
                  Advanced artificial intelligence solutions
                </p>
              </Link>
              
              <Link 
                to="/it-services" 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  IT Services
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive technology solutions
                </p>
              </Link>
              
              <Link 
                to="/blog" 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Blog
                </h3>
                <p className="text-sm text-gray-600">
                  Latest insights and articles
                </p>
              </Link>
              
              <Link 
                to="/guides" 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Guides
                </h3>
                <p className="text-sm text-gray-600">
                  Technical guides and tutorials
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our team for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;