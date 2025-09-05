import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, FileText, Users, Briefcase, BookOpen, Shield } from 'lucide-react';

const Sitemap = () => {
  const sitemapData = [
    {
      category: 'Main Pages',
      icon: Globe,
      pages: [
        { name: 'Home', href: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', href: '/about', description: 'Learn about our company and mission' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
        { name: 'Careers', href: '/careers', description: 'Join our growing team' },
        { name: 'News', href: '/news', description: 'Latest company news and updates' },
      ]
    },
    {
      category: 'Services',
      icon: Briefcase,
      pages: [
        { name: 'AI Services', href: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', href: '/it-services', description: 'Comprehensive IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Software as a Service solutions' },
        { name: 'Cloud Solutions', href: '/solutions/cloud-migration', description: 'Cloud migration and management' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security and protection services' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data analysis and insights' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'DevOps and cloud operations' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum computing solutions' },
      ]
    },
    {
      category: 'Solutions',
      icon: FileText,
      pages: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Healthcare technology solutions' },
        { name: 'Finance Solutions', href: '/solutions/finance', description: 'Financial services technology' },
        { name: 'Government Solutions', href: '/solutions/government', description: 'Public sector technology' },
        { name: 'Retail Solutions', href: '/solutions/retail', description: 'Retail and e-commerce solutions' },
        { name: 'Education Solutions', href: '/solutions/education', description: 'Educational technology solutions' },
        { name: 'Custom Solutions', href: '/solutions/custom', description: 'Tailored technology solutions' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Digital transformation services' },
        { name: 'SMB Solutions', href: '/solutions/smb', description: 'Small and medium business solutions' },
        { name: 'Startup Solutions', href: '/solutions/startup', description: 'Technology solutions for startups' },
      ]
    },
    {
      category: 'Industries',
      icon: Users,
      pages: [
        { name: 'Financial Services', href: '/industries/financial', description: 'Banking and financial technology' },
        { name: 'Healthcare', href: '/industries/healthcare', description: 'Healthcare industry solutions' },
        { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Manufacturing technology' },
        { name: 'Retail', href: '/industries/retail', description: 'Retail industry solutions' },
        { name: 'Government', href: '/industries/government', description: 'Government sector technology' },
      ]
    },
    {
      category: 'Resources',
      icon: BookOpen,
      pages: [
        { name: 'Blog', href: '/blog', description: 'Technology insights and articles' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
        { name: 'Webinars', href: '/webinars', description: 'Educational webinars and events' },
        { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides and tutorials' },
        { name: 'API Documentation', href: '/api-docs', description: 'Technical API documentation' },
        { name: 'Resources', href: '/resources', description: 'Helpful resources and tools' },
        { name: 'Support', href: '/support', description: 'Customer support and help' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Guides', href: '/guides', description: 'Comprehensive guides' },
        { name: 'Help Center', href: '/help', description: 'Help center and documentation' },
      ]
    },
    {
      category: 'Company',
      icon: Users,
      pages: [
        { name: 'Our Team', href: '/team', description: 'Meet our expert team' },
        { name: 'Partners', href: '/partners', description: 'Our trusted partners' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories and case studies' },
        { name: 'Newsletter', href: '/newsletter', description: 'Subscribe to our newsletter' },
        { name: 'Community', href: '/community', description: 'Join our community' },
        { name: 'Talent', href: '/talent', description: 'Talent acquisition and development' },
      ]
    },
    {
      category: 'Legal & Compliance',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Our privacy policy and data protection' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions of service' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and management' },
        { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance information' },
        { name: 'Security', href: '/security', description: 'Security practices and policies' },
      ]
    }
  ];

  const externalLinks = [
    {
      name: 'GitHub Repository',
      href: 'https://github.com/Zion-Holdings/zion.app',
      description: 'View our open source projects'
    },
    {
      name: 'LinkedIn Company Page',
      href: 'https://linkedin.com/company/zion-tech-group',
      description: 'Connect with us on LinkedIn'
    },
    {
      name: 'Twitter Profile',
      href: 'https://twitter.com/ziontechgroup',
      description: 'Follow us on Twitter'
    },
    {
      name: 'YouTube Channel',
      href: 'https://youtube.com/@ziontechgroup',
      description: 'Watch our videos and tutorials'
    }
  ];

  return (
    <Layout 
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and resources available on the Zion Tech Group website."
      keywords="sitemap, website navigation, all pages, site structure"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Website Sitemap
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Complete overview of all pages and resources available on our website
              </p>
              <p className="text-lg text-blue-200">
                Find what you're looking for quickly and easily
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Box */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search pages..."
                  className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {sitemapData.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.pages.map((page, pageIndex) => (
                      <motion.div
                        key={page.name}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: pageIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{page.name}</h3>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                        <Link
                          href={page.href}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                        >
                          Visit Page
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">External Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {externalLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-200 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {link.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Website Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Total Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
                  <div className="text-gray-600">Main Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Service Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Resource Pages</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-xl text-blue-200 mb-8">
                Our team is here to help you navigate our website and find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="/support"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sitemap;