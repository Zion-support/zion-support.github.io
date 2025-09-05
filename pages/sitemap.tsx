import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Map, ArrowRight, ExternalLink, Globe, FileText, Users, Settings } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    category: "Main Pages",
    pages: [
      { name: "Home", url: "/", description: "Main landing page" },
      { name: "About", url: "/about", description: "About our company and team" },
      { name: "Contact", url: "/contact", description: "Get in touch with us" },
      { name: "Blog", url: "/blog", description: "Latest news and insights" }
    ]
  },
  {
    category: "Services",
    pages: [
      { name: "All Services", url: "/services", description: "Overview of all our services" },
      { name: "AI Services", url: "/ai-services", description: "Artificial intelligence solutions" },
      { name: "IT Services", url: "/it-services", description: "Information technology services" },
      { name: "Micro SaaS", url: "/micro-saas", description: "Software as a service solutions" },
      { name: "Talent", url: "/talent", description: "Hiring and talent acquisition" }
    ]
  },
  {
    category: "Solutions",
    pages: [
      { name: "All Solutions", url: "/solutions", description: "Overview of all our solutions" },
      { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Solutions for large organizations" },
      { name: "Startup Solutions", url: "/solutions/startup", description: "Solutions for growing startups" },
      { name: "Industry Solutions", url: "/solutions/industry", description: "Industry-specific solutions" },
      { name: "Custom Development", url: "/solutions/custom", description: "Bespoke development services" }
    ]
  },
  {
    category: "Resources",
    pages: [
      { name: "All Resources", url: "/resources", description: "Overview of all our resources" },
      { name: "Documentation", url: "/docs", description: "Technical documentation" },
      { name: "Case Studies", url: "/case-studies", description: "Success stories and examples" },
      { name: "API Documentation", url: "/api-docs", description: "API reference and guides" },
      { name: "Tutorials", url: "/tutorials", description: "Step-by-step learning guides" },
      { name: "Guides", url: "/guides", description: "Comprehensive technical guides" },
      { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
      { name: "Support", url: "/support", description: "Help and support center" }
    ]
  },
  {
    category: "Company",
    pages: [
      { name: "Careers", url: "/careers", description: "Job opportunities and careers" },
      { name: "News", url: "/news", description: "Company news and announcements" }
    ]
  },
  {
    category: "Legal",
    pages: [
      { name: "Privacy Policy", url: "/privacy", description: "How we protect your privacy" },
      { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
      { name: "Cookie Policy", url: "/cookies", description: "How we use cookies" },
      { name: "Security", url: "/security", description: "Our security measures" },
      { name: "Compliance", url: "/compliance", description: "Compliance and certifications" }
    ]
  }
];

const externalLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/ziontechgroup",
    description: "Follow us on LinkedIn"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ziontechgroup",
    description: "Follow us on Twitter"
  },
  {
    name: "GitHub",
    url: "https://github.com/ziontechgroup",
    description: "View our open source projects"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@ziontechgroup",
    description: "Watch our videos"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/ziontechgroup",
    description: "Connect with us on Facebook"
  }
];

export default function SitemapPage() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and sections on the Zion Tech Group website. Find what you're looking for quickly and easily."
      keywords="sitemap, navigation, website structure, pages, links"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Website{' '}
                <span className="bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent">
                  Sitemap
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete overview of all pages and sections on our website. 
                Find what you're looking for quickly and easily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="px-8 py-4 bg-gradient-to-r from-gray-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Go to Homepage
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Site Structure
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                All pages and sections organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Map className="w-6 h-6 mr-3 text-blue-600" />
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                        <div className="flex-1">
                          <Link
                            href={page.url}
                            className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                          >
                            {page.name}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors ml-2" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                External Links
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Connect with us on social media and other platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{link.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Site Statistics
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Quick overview of our website structure and content.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Total Pages</div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
                <div className="text-gray-600">Main Categories</div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
                <div className="text-gray-600">Social Platforms</div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Settings className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Mobile Responsive</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Use our search function or contact us directly for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/support" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-600 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}