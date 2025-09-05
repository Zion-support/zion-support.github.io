import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FileText, ExternalLink, ArrowRight } from 'lucide-react';

export default function SitemapPage() {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Services', url: '/services', description: 'Our comprehensive services' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      category: 'Services',
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud infrastructure and migration' },
        { name: 'Security Services', url: '/security', description: 'Cybersecurity solutions' },
        { name: 'Performance Optimization', url: '/performance', description: 'Application optimization' },
        { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business transformation' },
        { name: 'Consulting', url: '/consulting', description: 'Technology consulting' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and examples' },
        { name: 'Blog', url: '/blog', description: 'Latest insights and updates' },
        { name: 'Guides', url: '/guides', description: 'Helpful guides and tutorials' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars' },
        { name: 'Newsletter', url: '/newsletter', description: 'Subscribe to our newsletter' }
      ]
    },
    {
      category: 'Documentation',
      pages: [
        { name: 'API Documentation', url: '/api-docs', description: 'API reference and guides' },
        { name: 'Developer Resources', url: '/dev-resources', description: 'Tools and resources for developers' },
        { name: 'Integration Guides', url: '/integration-guides', description: 'Step-by-step integration guides' },
        { name: 'SDK Downloads', url: '/sdk-downloads', description: 'Software development kits' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'News', url: '/news', description: 'Company news and updates' },
        { name: 'Partners', url: '/partners', description: 'Our partner network' },
        { name: 'Investors', url: '/investors', description: 'Investor information' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'Security', url: '/security', description: 'Security measures and compliance' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', url: '/contact', icon: ArrowRight },
    { name: 'View Pricing', url: '/pricing', icon: FileText },
    { name: 'Schedule Demo', url: '/demo', icon: ExternalLink },
    { name: 'Support Center', url: '/support', icon: FileText }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. 
                Find all our pages, services, and resources in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              <p className="text-xl text-gray-600">
                Popular pages and resources
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                      <link.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {link.name}
                    </h3>
                  </div>
                  <Link 
                    href={link.url}
                    className="text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center"
                  >
                    Visit Page
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Site Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse all our pages organized by category for easy navigation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link 
                          href={page.url}
                          className="block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {page.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {page.description}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Use our search functionality to find specific content across our website.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}