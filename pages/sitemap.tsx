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
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Sitemap | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Complete website sitemap and navigation guide.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/sitemap&quot; />
      </Head>

      <SmartHeader />

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Site Map
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8&quot;>
              Navigate our comprehensive website and discover all the AI-powered technology solutions, 
              resources, and information available at Zion Tech Group.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;#main-pages&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;
              >
                Explore Site
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <a
                href=&quot;/search&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Search Site
                <Search className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pages */}
      <section id=&quot;main-pages&quot; className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Main Pages
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Core pages that provide essential information about our company and services
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {mainPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <Link
                  href={page.href}
                  className=&quot;block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                >
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <h3 className=&quot;text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300&quot;>
                      {page.label}
                    </h3>
                    <ChevronRight className=&quot;w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{page.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Service Categories
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Browse our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <Link
                  href={category.href}
                  className=&quot;block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                >
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <h3 className=&quot;text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300&quot;>
                      {category.label}
                    </h3>
                    <ChevronRight className=&quot;w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Featured Services
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Our most popular and innovative technology solutions
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <Link
                  href={service.href}
                  className=&quot;block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <div className=&quot;flex items-center justify-between mb-3&quot;>
                    <h3 className=&quot;text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 truncate&quot;>
                      {service.label}
                    </h3>
                    <ChevronRight className=&quot;w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0&quot; />
                  </div>
                  <p className=&quot;text-white/60 text-xs&quot;>{service.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Tools */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Resources & Tools
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Additional resources, tools, and information to help you succeed
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {resources.map((resource, index) => (
              <motion.div
                key={resource.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <Link
                  href={resource.href}
                  className=&quot;block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <div className=&quot;flex items-center justify-between mb-3&quot;>
                    <h3 className=&quot;text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300&quot;>
                      {resource.label}
                    </h3>
                    <ChevronRight className=&quot;w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
                  <p className=&quot;text-white/60 text-xs leading-relaxed&quot;>{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              External Resources
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Additional resources and tools hosted on external platforms
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {externalLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <a
                  href={link.href}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className=&quot;block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                >
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <h3 className=&quot;text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300&quot;>
                      {link.label}
                    </h3>
                    <ExternalLink className=&quot;w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{link.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Contact Information
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Get in touch with us for consultations, support, or to start your project
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl&quot;
              >
                <h3 className=&quot;text-lg font-bold text-white mb-3&quot;>{contact.type}</h3>
                <a
                  href={contact.action}
                  target={contact.action.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                >
                  {contact.value}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Need Help Finding Something?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Use our search functionality or contact us directly for assistance
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
                href=&quot;/search&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
              >
                Search Site
                <Search className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Contact Support
                <Mail className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SmartFooter />
    </div>
  );
}
