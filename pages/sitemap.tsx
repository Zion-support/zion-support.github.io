import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, ExternalLink } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    title: "Main Pages",
    pages: [
      { name: "Home", url: "/", description: "Main homepage with company overview" },
      { name: "About", url: "/about", description: "Company information and team" },
      { name: "Contact", url: "/contact", description: "Contact information and forms" },
      { name: "Blog", url: "/blog", description: "Latest news and insights" }
    ]
  },
  {
    title: "Services",
    pages: [
      { name: "All Services", url: "/services", description: "Overview of all our services" },
      { name: "AI Services", url: "/ai-services", description: "Artificial intelligence solutions" },
      { name: "IT Services", url: "/it-services", description: "Information technology services" },
      { name: "Micro SaaS", url: "/micro-saas", description: "Micro software as a service solutions" },
      { name: "Talent", url: "/talent", description: "Talent acquisition and management" }
    ]
  },
  {
    title: "Solutions",
    pages: [
      { name: "All Solutions", url: "/solutions", description: "Overview of all our solutions" },
      { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Solutions for large organizations" },
      { name: "Startup Solutions", url: "/solutions/startup", description: "Solutions for growing startups" },
      { name: "Industry Solutions", url: "/solutions/industry", description: "Industry-specific solutions" },
      { name: "Custom Development", url: "/solutions/custom", description: "Bespoke development services" }
    ]
  },
  {
    title: "Resources",
    pages: [
      { name: "All Resources", url: "/resources", description: "Overview of all resources" },
      { name: "Documentation", url: "/docs", description: "Technical documentation and guides" },
      { name: "Case Studies", url: "/case-studies", description: "Client success stories" },
      { name: "API Reference", url: "/api-docs", description: "API documentation and examples" },
      { name: "Tutorials", url: "/tutorials", description: "Step-by-step learning resources" },
      { name: "Guides", url: "/guides", description: "Comprehensive how-to guides" },
      { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
      { name: "Support", url: "/support", description: "Customer support and help" }
    ]
  },
  {
    title: "Company",
    pages: [
      { name: "Careers", url: "/careers", description: "Job opportunities and company culture" },
      { name: "News", url: "/news", description: "Company news and announcements" }
    ]
  },
  {
    title: "Legal",
    pages: [
      { name: "Privacy Policy", url: "/privacy", description: "Data privacy and protection policy" },
      { name: "Terms of Service", url: "/terms", description: "Terms and conditions of use" },
      { name: "Cookie Policy", url: "/cookies", description: "Cookie usage and management" },
      { name: "Security", url: "/security", description: "Security measures and compliance" },
      { name: "Compliance", url: "/compliance", description: "Regulatory compliance information" }
    ]
  }
];

const externalLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", description: "Follow us on LinkedIn" },
  { name: "Twitter", url: "https://twitter.com/ziontechgroup", description: "Follow us on Twitter" },
  { name: "GitHub", url: "https://github.com/ziontechgroup", description: "View our code on GitHub" },
  { name: "YouTube", url: "https://youtube.com/@ziontechgroup", description: "Watch our videos on YouTube" },
  { name: "Facebook", url: "https://facebook.com/ziontechgroup", description: "Like us on Facebook" }
];

export default function SitemapPage() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and resources on the Zion Tech Group website. Find what you're looking for quickly and easily."
      keywords="sitemap, site map, navigation, pages, links, website structure"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete overview of all pages and resources on our website. 
                Find what you're looking for quickly and easily.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Website Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse all pages organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-gray-50 p-8 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-blue-600" />
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.url}
                        className="bg-white p-4 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-sm text-gray-600">
                          {page.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                External Links
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Connect with us on social media and other platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {externalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600">
                    {link.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Use our search functionality or contact us directly for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                  >
                    View FAQ
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}