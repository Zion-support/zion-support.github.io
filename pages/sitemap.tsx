<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Home, Search, Rocket, FileText, Users, Mail, Map, 
  ArrowRight, ExternalLink, ChevronRight, Globe, Building
} from 'lucide-react',
import SmartHeader from '../components/SmartHeader',
import SmartFooter from '../components/SmartFooter',
export default function SitemapPage() {
  const mainPages = [
    { href: '/', label: '🏠 Home', description: 'Main landing page with company overview and featured services' },
    { href: '/about', label: '👥 About Us', description: 'Company story, mission, values, and team information' },
    { href: '/services', label: '🚀 Services', description: 'Complete catalog of AI and technology services' },
    { href: '/explore', label: '🔍 Explore', description: 'Browse services by category and technology area' },
    { href: '/contact', label: '📧 Contact', description: 'Get in touch and start your project' }
  ],

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
  ],

  const featuredServices = [
    { href: '/ai-business-intelligence', label: 'AI Business Intelligence', category: 'AI & ML' },
    { href: '/quantum-cybersecurity', label: 'Quantum Cybersecurity', category: 'Cybersecurity' },
    { href: '/edge-computing-orchestration', label: 'Edge Computing Orchestration', category: 'Edge Computing' },
    { href: '/space-technology', label: 'Space Technology Innovation', category: 'Space Technology' },
    { href: '/neural-interface', label: 'Neural Interface Development', category: 'Biotechnology' },
    { href: '/autonomous-devops', label: 'Autonomous DevOps', category: 'Cloud & DevOps' },
    { href: '/ai-customer-experience', label: 'AI Customer Experience', category: 'AI & ML' },
    { href: '/quantum-neural-networks', label: 'Quantum Neural Networks', category: 'Quantum Computing' }
  ],

  const resources = [
    { href: '/reports', label: '📊 Reports', description: 'Latest technology reports and insights' },
    { href: '/newsroom', label: '📰 Newsroom', description: 'Company updates and industry news' },
    { href: '/automation', label: '⚡ Automations', description: 'Automation tools and solutions' },
    { href: '/search', label: '🔎 Search', description: 'Search across all services and content' }
  ],

  const externalLinks = [
    { href: 'https://github.com/ai-factory', label: 'GitHub', description: 'Open source projects and code examples' },
    { href: 'https://docs.ziontechgroup.com', label: 'Documentation', description: 'Technical documentation and guides' },
    { href: 'https://status.ziontechgroup.com', label: 'System Status', description: 'Real-time system status and uptime' }
  ],

  const contactInfo = [
    { type: 'Phone', value: '+1 (302) 464-0950', action: 'tel:+13024640950' },
    { type: 'Email', value: 'kleber@ziontechgroup.com', action: 'mailto:kleber@ziontechgroup.com' },
    { type: 'Address', value: 'Middletown, DE', action: 'https://maps.google.com/?q=Middletown,DE' }
  ],

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Sitemap | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Complete website sitemap and navigation guide.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/sitemap&quot; />
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Home, _Search, _Rocket, _FileText, _Users, _Mail, _Map, _ArrowRight, _ExternalLink, _ChevronRight, _Globe, _Building} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function SitemapPage() {_const _mainPages = [
    { href: '/', _label: '🏠 Home', _description: 'Main landing page with company overview and featured services'},
    {_href: '/about', _label: '👥 About Us', _description: 'Company story, _mission, _values, _and team information'},
    {_href: '/services', _label: '🚀 Services', _description: 'Complete catalog of AI and technology services'},
    {_href: '/explore', _label: '🔍 Explore', _description: 'Browse services by category and technology area'},
    {_href: '/contact', _label: '📧 Contact', _description: 'Get in touch and start your project'}
  ];

  const _serviceCategories = [
    {_href: '/category/ai', _label: '🧠 AI & Machine Learning', _description: 'Artificial intelligence and machine learning solutions'},
    {_href: '/category/quantum', _label: '⚛️ Quantum Computing', _description: 'Quantum computing and quantum AI applications'},
    {_href: '/category/cybersecurity', _label: '🛡️ Cybersecurity', _description: 'Quantum-resistant security and threat detection'},
    {_href: '/category/cloud', _label: '☁️ Cloud & DevOps', _description: 'Cloud infrastructure and DevOps automation'},
    {_href: '/category/edge', _label: '🌐 Edge Computing', _description: 'Edge computing orchestration and IoT management'},
    {_href: '/category/space', _label: '🚀 Space Technology', _description: 'Space exploration and resource optimization'},
    {_href: '/category/biotech', _label: '🧬 Biotechnology', _description: 'Neural interfaces and biomedical innovations'},
    {_href: '/category/blockchain', _label: '⛓️ Blockchain', _description: 'AI-powered blockchain governance and DeFi'},
    {_href: '/category/automation', _label: '⚡ Automation', _description: 'Business process automation and AI agents'},
    {_href: '/category/fintech', _label: '💰 Financial Technology', _description: 'Quantum financial trading and AI analytics'}
  ];

  const _featuredServices = [
    {_href: '/ai-business-intelligence', _label: 'AI Business Intelligence', _category: 'AI & ML'},
    {_href: '/quantum-cybersecurity', _label: 'Quantum Cybersecurity', _category: 'Cybersecurity'},
    {_href: '/edge-computing-orchestration', _label: 'Edge Computing Orchestration', _category: 'Edge Computing'},
    {_href: '/space-technology', _label: 'Space Technology Innovation', _category: 'Space Technology'},
    {_href: '/neural-interface', _label: 'Neural Interface Development', _category: 'Biotechnology'},
    {_href: '/autonomous-devops', _label: 'Autonomous DevOps', _category: 'Cloud & DevOps'},
    {_href: '/ai-customer-experience', _label: 'AI Customer Experience', _category: 'AI & ML'},
    {_href: '/quantum-neural-networks', _label: 'Quantum Neural Networks', _category: 'Quantum Computing'}
  ];

  const _resources = [
    {_href: '/reports', _label: '📊 Reports', _description: 'Latest technology reports and insights'},
    {_href: '/newsroom', _label: '📰 Newsroom', _description: 'Company updates and industry news'},
    {_href: '/automation', _label: '⚡ Automations', _description: 'Automation tools and solutions'},
    {_href: '/search', _label: '🔎 Search', _description: 'Search across all services and content'}
  ];

  const _externalLinks = [
    {_href: 'https://github.com/ai-factory', _label: 'GitHub', _description: 'Open source projects and code examples'},
    {_href: 'https://docs.ziontechgroup.com', _label: 'Documentation', _description: 'Technical documentation and guides'},
    {_href: 'https://status.ziontechgroup.com', _label: 'System Status', _description: 'Real-time system status and uptime'}
  ];

  const _contactInfo = [
    {_type: 'Phone', _value: '+1 (302) 464-0950', _action: 'tel:+13024640950'},
    {_type: 'Email', _value: 'kleber@ziontechgroup.com', _action: 'mailto:kleber@ziontechgroup.com'},
    {_type: 'Address', _value: 'Middletown, _DE', _action: 'https://maps.google.com/?q=Middletown, _DE'}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group's website. Find all pages, _services, _and resources organized by category." />
        <meta property="og:title" content="Sitemap | Zion Tech Group" />
        <meta property="og:description" content="Complete website sitemap and navigation guide." />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      <SmartHeader />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
      {_/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Site Map
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8&quot;>
              Navigate our comprehensive website and discover all the AI-powered technology solutions, 
              resources, and information available at Zion Tech Group.
=======
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Navigate our comprehensive website and discover all the AI-powered technology solutions, _resources, _and information available at Zion Tech Group.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
      {/* Main Pages */}
      <section id=&quot;main-pages&quot; className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
=======
      {_/* Main Pages */}
      <section id="main-pages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
            className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Main Pages
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Core pages that provide essential information about our company and services
            </p>
          </motion.div>

<<<<<<< HEAD
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
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_mainPages.map((page, _index) => (
              <motion.div
                key={page.href}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group"
              >
                <Link
                  href={_page.href}
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {_page.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </h3>
                    <ChevronRight className=&quot;w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
<<<<<<< HEAD
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{page.description}</p>
=======
                  <p className="text-white/70 text-sm leading-relaxed">{_page.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Categories */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
=======
      {_/* Service Categories */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
            className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Service Categories
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Browse our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

<<<<<<< HEAD
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
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_serviceCategories.map(_(category, _index) => (
              <motion.div
                key={category.href}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group"
              >
                <Link
                  href={_category.href}
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {_category.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </h3>
                    <ChevronRight className=&quot;w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
<<<<<<< HEAD
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{category.description}</p>
=======
                  <p className="text-white/70 text-sm leading-relaxed">{_category.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Services */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
=======
      {_/* Featured Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
            className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Featured Services
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Our most popular and innovative technology solutions
            </p>
          </motion.div>

<<<<<<< HEAD
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
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_featuredServices.map(_(service, _index) => (
              <motion.div
                key={service.href}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group"
              >
                <Link
                  href={_service.href}
                  className="block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 truncate">
                      {_service.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </h3>
                    <ChevronRight className=&quot;w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0&quot; />
                  </div>
<<<<<<< HEAD
                  <p className=&quot;text-white/60 text-xs&quot;>{service.category}</p>
=======
                  <p className="text-white/60 text-xs">{_service.category}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Resources & Tools */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
=======
      {_/* Resources & Tools */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
            className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Resources & Tools
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Additional resources, tools, and information to help you succeed
            </p>
          </motion.div>

<<<<<<< HEAD
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
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_resources.map(_(resource, _index) => (
              <motion.div
                key={resource.href}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group"
              >
                <Link
                  href={_resource.href}
                  className="block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {_resource.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </h3>
                    <ChevronRight className=&quot;w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
<<<<<<< HEAD
                  <p className=&quot;text-white/60 text-xs leading-relaxed&quot;>{resource.description}</p>
=======
                  <p className="text-white/60 text-xs leading-relaxed">{_resource.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* External Resources */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
=======
      {_/* External Resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
            className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              External Resources
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Additional resources and tools hosted on external platforms
            </p>
          </motion.div>

<<<<<<< HEAD
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
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {_externalLinks.map(_(link, _index) => (
              <motion.div
                key={link.href}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group"
              >
                <a
                  href={_link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {_link.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </h3>
                    <ExternalLink className=&quot;w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                  </div>
<<<<<<< HEAD
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{link.description}</p>
                </Link>
=======
                  <p className="text-white/70 text-sm leading-relaxed">{_link.description}</p>
                </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mb-16&quot;
=======
      {_/* Contact Information */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
            className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-4 text-center&quot;>
              Contact Information
            </h2>
            <p className=&quot;text-white/60 text-center max-w-2xl mx-auto&quot;>
              Get in touch with us for consultations, support, or to start your project
            </p>
          </motion.div>

<<<<<<< HEAD
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
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {_contactInfo.map(_(contact, _index) => (
              <motion.div
                key={contact.type}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold text-white mb-3">{_contact.type}</h3>
                <a
                  href={_contact.action}
                  target={_contact.action.startsWith('http') ? '_blank' : '_self'}
                  rel={_contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  {_contact.value}
                </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Quick Navigation */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
      {_/* Quick Navigation */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
<<<<<<< HEAD
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
=======
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  )
}
