import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Home, Search, Rocket, FileText, Users, Mail, Map, 
  ArrowRight, ExternalLink, ChevronRight, Globe, Building
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: <Building className="w-5 h-5" />,
      pages: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About", path: "/about", description: "Company information and history" },
        { name: "Services", path: "/services", description: "Our technology services" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" }
      ]
    },
    {
      category: "Technology Services",
      icon: <Zap className="w-5 h-5" />,
      pages: [
        { name: "AI Consciousness Evolution", path: "/ai-consciousness-evolution-2045", description: "AI consciousness platform" },
        { name: "Quantum AI Cognitive Platform", path: "/quantum-ai-cognitive-2045", description: "Quantum computing solutions" },
        { name: "Market Pricing", path: "/market-pricing", description: "Pricing strategy and analysis" },
        { name: "Services Advertising", path: "/services-advertising", description: "Marketing and advertising services" }
      ]
    },
    {
      category: "Company Information",
      icon: <Users className="w-5 h-5" />,
      pages: [
        { name: "Mission", path: "/mission", description: "Our mission and vision" },
        { name: "News", path: "/news", description: "Company news and updates" },
        { name: "Press", path: "/press", description: "Press releases and media" },
        { name: "Careers", path: "/careers", description: "Job opportunities" },
        { name: "Partners", path: "/partners", description: "Partnership information" },
        { name: "Investors", path: "/investors", description: "Investor relations" }
      ]
    },
    {
      category: "Resources & Content",
      icon: <BookOpen className="w-5 h-5" />,
      pages: [
        { name: "Blog", path: "/blog", description: "Articles and insights" },
        { name: "Case Studies", path: "/case-studies", description: "Client success stories" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" }
      ]
    },
    {
      category: "Legal & Compliance",
      icon: <Shield className="w-5 h-5" />,
      pages: [
        { name: "Privacy Policy", path: "/privacy", description: "Data privacy information" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookies Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility commitment" },
        { name: "Security", path: "/security", description: "Security measures" }
      ]
    },
    {
      category: "Support & Information",
      icon: <Mail className="w-5 h-5" />,
      pages: [
        { name: "Support", path: "/support", description: "Customer support" },
        { name: "Get Started", path: "/get-started", description: "Getting started guide" },
        { name: "Pricing", path: "/pricing", description: "Service pricing" },
        { name: "System Status", path: "/status", description: "Service status and uptime" }
      ]
    }
  ];

  const quickLinks = [
    {
      name: "AI Consciousness Platform",
      path: "/ai-consciousness-evolution-2045",
      icon: <Brain className="w-5 h-5" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Quantum Computing",
      path: "/quantum-ai-cognitive-2045",
      icon: <Atom className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Cybersecurity",
      path: "/security",
      icon: <Shield className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Space Technology",
      path: "/services",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const contactInfo = [
    { type: 'Phone', value: '+1 (302) 464-0950', action: 'tel:+13024640950' },
    { type: 'Email', value: 'kleber@ziontechgroup.com', action: 'mailto:kleber@ziontechgroup.com' },
    { type: 'Address', value: 'Middletown, DE', action: 'https://maps.google.com/?q=Middletown,DE' }
  ];

  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete overview of all pages and sections on the Zion Tech Group website. Find what you're looking for quickly and easily."
      keywords="sitemap, website structure, navigation, Zion Tech Group, pages, sections"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sitemap
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Complete website structure and navigation
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Explore all pages and sections of the Zion Tech Group website. 
                Find the information you need quickly and efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Quick Access
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Most popular and important pages
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {link.name}
                  </h3>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                    Visit Page
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Sitemap */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Complete Website Structure
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Organized by category for easy navigation
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {siteStructure.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.path}
                        className="group block bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-4 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {page.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                          {page.description}
                        </p>
                        <div className="text-purple-400 text-xs font-medium mt-2 group-hover:text-purple-300 transition-colors duration-300">
                          {page.path}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get in touch with our team
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{contact.label}</h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 break-words"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 break-words">{contact.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                External resources and additional information
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "XML Sitemap",
                  description: "Machine-readable sitemap for search engines",
                  path: "/sitemap.xml",
                  icon: <FileText className="w-6 h-6" />
                },
                {
                  name: "RSS Feed",
                  description: "Subscribe to our latest updates",
                  path: "/rss.xml",
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  name: "API Documentation",
                  description: "Technical API reference",
                  path: "/docs",
                  icon: <Zap className="w-6 h-6" />
                },
                {
                  name: "Status Page",
                  description: "Service status and uptime",
                  path: "/status",
                  icon: <Activity className="w-6 h-6" />
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {resource.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Our team is here to help you navigate our website and find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={page.href}
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {page.label}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{page.description}</p>
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Service Categories
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Browse our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={category.href}
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {category.label}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Featured Services
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Our most popular and innovative technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 truncate">
                      {service.label}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0" />
                  </div>
                  <p className="text-white/60 text-xs">{service.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Tools */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Resources & Tools
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Additional resources, tools, and information to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={resource.href}
                  className="block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {resource.label}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              External Resources
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Additional resources and tools hosted on external platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {externalLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {link.label}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{link.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Contact Information
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Get in touch with us for consultations, support, or to start your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold text-white mb-3">{contact.type}</h3>
                <a
                  href={contact.action}
                  target={contact.action.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Use our search functionality or contact us directly for assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Search Site
                <Search className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Contact Support
                <Mail className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SmartFooter />
    </div>
  );
};

export default SitemapPage;
