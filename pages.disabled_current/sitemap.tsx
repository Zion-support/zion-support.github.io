import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
const sitemapData = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', url: '/', icon: Home },
      { name: 'About', url: '/about', icon: Users },
      { name: 'Contact', url: '/contact', icon: Globe },
      { name: 'Services', url: '/services', icon: Settings }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: Brain },
      { name: 'IT Services', url: '/it-services', icon: Network },
      { name: 'Micro SaaS', url: '/micro-saas', icon: Target },
      { name: 'Cloud Services', url: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', url: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', url: '/services/data-analytics', icon: BarChart3 }
    ]
  },
  {
    category: 'Solutions',
    pages: [
      { name: 'Cloud Migration', url: '/solutions/cloud-migration', icon: Cloud },
      { name: 'Digital Transformation', url: '/solutions/digital-transformation', icon: Settings },
      { name: 'Custom Solutions', url: '/solutions/custom', icon: Target }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Documentation', url: '/docs', icon: Globe },
      { name: 'API Documentation', url: '/api-docs', icon: Settings },
      { name: 'Guides', url: '/guides', icon: Globe },
      { name: 'FAQ', url: '/faq', icon: Users }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
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
        { name: 'AI Services', url: '/ai-services', description: 'AI and machine learning solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
        { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud infrastructure and services' },
        { name: 'Database Solutions', url: '/database-solutions', description: 'Database design and optimization' },
        { name: 'Security', url: '/security', description: 'Cybersecurity solutions' },
        { name: 'Custom Development', url: '/custom-development', description: 'Bespoke software development' },
        { name: 'Digital Transformation', url: '/digital-transformation', description: 'Digital transformation consulting' },
        { name: 'Consulting', url: '/consulting', description: 'Technology consulting services' }
      ]
    },
    {
      category: 'Solutions',
      pages: [
        { name: 'Enterprise Solutions', url: '/enterprise-solutions', description: 'Solutions for large organizations' },
        { name: 'Startup Solutions', url: '/startup-solutions', description: 'Solutions for growing businesses' },
        { name: 'Industry Solutions', url: '/industries', description: 'Industry-specific solutions' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'Team', url: '/team', description: 'Meet our team members' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
        { name: 'News', url: '/news', description: 'Latest news and updates' },
        { name: 'Partners', url: '/partners', description: 'Our business partners' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and articles' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'API Documentation', url: '/docs/api', description: 'API reference and guides' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and tutorials' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth technical papers' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', url: '/help', description: 'Support and help resources' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Navigate through all pages and sections of our website. Find the information you need quickly and easily."
      keywords="sitemap, navigation, website structure, pages"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate through all pages and sections of our website. 
                Find the information you need quickly and easily.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {siteStructure.map((section, sectionIndex) => (
                  <motion.div
                    key={section.category}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                      {section.category}
                    </h2>
                    
                    <div className="space-y-4">
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={page.name}
                          className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (pageIndex * 0.05) }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Link
                                href={page.url}
                                className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
                              >
                                {page.name}
                              </Link>
                              <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Popular pages and resources you might be looking for.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Get Started', url: '/contact', description: 'Start your project with us' },
                  { name: 'Our Services', url: '/services', description: 'Explore our service offerings' },
                  { name: 'AI Solutions', url: '/ai-services', description: 'Discover AI capabilities' },
                  { name: 'Cloud Services', url: '/cloud-solutions', description: 'Cloud infrastructure solutions' },
                  { name: 'Security', url: '/security', description: 'Cybersecurity solutions' },
                  { name: 'Support', url: '/help', description: 'Get help and support' }
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.url}
                      className="block group"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{link.description}</p>
                      <div className="flex items-center text-indigo-600 font-medium">
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Our team is here to help you find the information you need. 
                Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/search"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Search
                </Link>
                <Link
                  href="/help"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
=======
  Home, Search, Rocket, FileText, Users, Mail, Map, 
  ArrowRight, ExternalLink, ChevronRight, Globe, Building
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function SitemapPage() {
  const mainPages = [
    { href: '/', label: '🏠 Home', description: 'Main landing page with company overview and featured services' },
    { href: '/about', label: '👥 About Us', description: 'Company story, mission, values, and team information' },
    { href: '/services', label: '🚀 Services', description: 'Complete catalog of AI and technology services' },
    { href: '/explore', label: '🔍 Explore', description: 'Browse services by category and technology area' },
    { href: '/contact', label: '📧 Contact', description: 'Get in touch and start your project' }
  ];

  const serviceCategories = [
    { href: '/category/ai', label: '🧠 AI & Machine Learning', description: 'Artificial intelligence and machine learning solutions' },
    { href: '/category/quantum', label: '⚛️ Quantum Computing', description: 'Quantum computing and quantum AI applications' },
    { href: '/category/cybersecurity', label: '🛡️ Cybersecurity', description: 'Quantum-resistant security and threat detection' },
    { href: '/category/cloud', label: '☁️ Cloud & DevOps', description: 'Cloud infrastructure and DevOps automation' },
    { href: '/category/edge', label: '🌐 Edge Computing', description: 'Edge computing orchestration and IoT management' },
    { href: '/category/space', label: '🚀 Space Technology', description: 'Space exploration and resource optimization' },
    { href: '/category/biotech', label: '🧬 Biotechnology', description: 'Neural interfaces and biomedical innovations' },
    { href: '/category/blockchain', label: '⛓️ Blockchain', description: 'AI-powered blockchain governance and DeFi' },
    { href: '/category/automation', label: '⚡ Automation', description: 'Business process automation and AI agents' },
    { href: '/category/fintech', label: '💰 Financial Technology', description: 'Quantum financial trading and AI analytics' }
  ];

  const featuredServices = [
    { href: '/ai-business-intelligence', label: 'AI Business Intelligence', category: 'AI & ML' },
    { href: '/quantum-cybersecurity', label: 'Quantum Cybersecurity', category: 'Cybersecurity' },
    { href: '/edge-computing-orchestration', label: 'Edge Computing Orchestration', category: 'Edge Computing' },
    { href: '/space-technology', label: 'Space Technology Innovation', category: 'Space Technology' },
    { href: '/neural-interface', label: 'Neural Interface Development', category: 'Biotechnology' },
    { href: '/autonomous-devops', label: 'Autonomous DevOps', category: 'Cloud & DevOps' },
    { href: '/ai-customer-experience', label: 'AI Customer Experience', category: 'AI & ML' },
    { href: '/quantum-neural-networks', label: 'Quantum Neural Networks', category: 'Quantum Computing' }
  ];

  const resources = [
    { href: '/reports', label: '📊 Reports', description: 'Latest technology reports and insights' },
    { href: '/newsroom', label: '📰 Newsroom', description: 'Company updates and industry news' },
    { href: '/automation', label: '⚡ Automations', description: 'Automation tools and solutions' },
    { href: '/search', label: '🔎 Search', description: 'Search across all services and content' }
  ];

  const externalLinks = [
    { href: 'https://github.com/ai-factory', label: 'GitHub', description: 'Open source projects and code examples' },
    { href: 'https://docs.ziontechgroup.com', label: 'Documentation', description: 'Technical documentation and guides' },
    { href: 'https://status.ziontechgroup.com', label: 'System Status', description: 'Real-time system status and uptime' }
  ];

  const contactInfo = [
    { type: 'Phone', value: '+1 (302) 464-0950', action: 'tel:+13024640950' },
    { type: 'Email', value: 'kleber@ziontechgroup.com', action: 'mailto:kleber@ziontechgroup.com' },
    { type: 'Address', value: 'Middletown, DE', action: 'https://maps.google.com/?q=Middletown,DE' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category." />
        <meta property="og:title" content="Sitemap | Zion Tech Group" />
        <meta property="og:description" content="Complete website sitemap and navigation guide." />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>

      <SmartHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Site Map
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Navigate our comprehensive website and discover all the AI-powered technology solutions, 
              resources, and information available at Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#main-pages"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Site
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/search"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Search Site
                <Search className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pages */}
      <section id="main-pages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Main Pages
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Core pages that provide essential information about our company and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
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
              </motion.div>
            ))}
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
}