import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Map, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    category: "Main Pages",
    pages: [
      { name: "Home", url: "/", description: "Main landing page" },
      { name: "About", url: "/about", description: "About our company and team" },
      { name: "Contact", url: "/contact", description: "Get in touch with us" }
    ]
  },
  {
    category: "Services",
    pages: [
      { name: "All Services", url: "/services", description: "Overview of all our services" },
      { name: "AI Services", url: "/ai-services", description: "Artificial intelligence solutions" },
      { name: "IT Services", url: "/it-services", description: "Information technology services" },
      { name: "Micro SaaS", url: "/micro-saas", description: "Software as a service solutions" },
      { name: "Talent", url: "/talent", description: "Hiring and talent solutions" }
    ]
  },
  {
    category: "Solutions",
    pages: [
      { name: "All Solutions", url: "/solutions", description: "Overview of all solutions" },
      { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Solutions for large organizations" },
      { name: "Startup Solutions", url: "/solutions/startup", description: "Solutions for startups" },
      { name: "Industry Solutions", url: "/solutions/industry", description: "Industry-specific solutions" },
      { name: "Custom Development", url: "/solutions/custom", description: "Custom software development" }
    ]
  },
  {
    category: "Resources",
    pages: [
      { name: "All Resources", url: "/resources", description: "Overview of all resources" },
      { name: "Documentation", url: "/docs", description: "Technical documentation" },
      { name: "Case Studies", url: "/case-studies", description: "Success stories and examples" },
      { name: "API Documentation", url: "/api-docs", description: "API reference and guides" },
      { name: "Tutorials", url: "/tutorials", description: "Learning resources and guides" },
      { name: "Guides", url: "/guides", description: "Implementation guides" },
      { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
      { name: "Support", url: "/support", description: "Customer support and help" }
    ]
  },
  {
    category: "Company",
    pages: [
      { name: "News", url: "/news", description: "Latest news and announcements" },
      { name: "Careers", url: "/careers", description: "Job opportunities and careers" },
      { name: "Blog", url: "/blog", description: "Our blog and articles" }
    ]
  },
  {
    category: "Legal",
    pages: [
      { name: "Privacy Policy", url: "/privacy", description: "Privacy policy and data protection" },
      { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
      { name: "Cookie Policy", url: "/cookies", description: "Cookie usage and preferences" },
      { name: "Security", url: "/security", description: "Security measures and practices" },
      { name: "Compliance", url: "/compliance", description: "Compliance and certifications" }
    ]
  }
];

export default function SitemapPage() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and sections on the Zion Tech Group website. Find any page quickly and easily."
      keywords="sitemap, website map, navigation, pages, sections, site structure"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <span className="bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete overview of all pages and sections on our website. 
                Find what you're looking for quickly and easily.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Website Structure
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Organized by categories for easy navigation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Map className="w-6 h-6 mr-3 text-slate-600" />
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <Link
                          href={page.url}
                          className="group flex items-start justify-between hover:text-slate-600 transition-colors"
                        >
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-slate-600 transition-colors">
                              {page.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {page.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all ml-2 flex-shrink-0" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Popular pages and important sections
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Home", url: "/" },
                { name: "Services", url: "/services" },
                { name: "About", url: "/about" },
                { name: "Contact", url: "/contact" },
                { name: "AI Services", url: "/ai-services" },
                { name: "IT Services", url: "/it-services" },
                { name: "Documentation", url: "/docs" },
                { name: "Support", url: "/support" }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={link.url}
                    className="flex items-center justify-between group-hover:text-slate-600 transition-colors"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-slate-600">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Contact us and we'll help you find the information you need
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/support" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
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