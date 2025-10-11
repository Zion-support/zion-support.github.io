'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About Us', url: '/about', icon: Users },
        { name: 'Services', url: '/services', icon: Settings },
        { name: 'Contact', url: '/contact', icon: MessageCircle },
        { name: 'Blog', url: '/blog', icon: FileText },
        { name: 'Careers', url: '/careers', icon: Briefcase }
      ]
    },
    {
      title: 'AI Solutions',
      pages: [
        { name: 'AI Services', url: '/ai-services', icon: Brain },
        { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart },
        { name: 'Micro-SaaS', url: '/micro-saas', icon: Package },
        { name: 'Tutorials', url: '/tutorials', icon: BookOpen },
        { name: 'Demo', url: '/demo', icon: Play }
      ]
    },
    {
      title: 'IT Services',
      pages: [
        { name: 'IT Services', url: '/it-services', icon: Settings },
        { name: 'Cloud Solutions', url: '/cloud-solutions', icon: Cloud },
        { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
        { name: 'Software Development', url: '/software-development', icon: Code },
        { name: 'Data Analytics', url: '/data-analytics', icon: BarChart }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Case Studies', url: '/case-studies', icon: Target },
        { name: 'Pricing', url: '/pricing', icon: DollarSign },
        { name: 'Support', url: '/support', icon: HelpCircle },
        { name: 'Consultation', url: '/consultation', icon: MessageSquare },
        { name: 'Documentation', url: '/docs', icon: FileText }
      ]
    },
    {
      title: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', icon: Shield },
        { name: 'Terms of Service', url: '/terms', icon: FileText },
        { name: 'Cookie Policy', url: '/cookies', icon: Cookie },
        { name: 'Sitemap', url: '/sitemap', icon: Globe }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all pages and sections of our AI and technology solutions." />
        <meta name="keywords" content="sitemap, navigation, website structure, pages, links" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Map</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. Find all pages and sections of our AI and technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-cyan-400" />
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <a
                          href={page.url}
                          className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                        >
                          <page.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-cyan-400" />
                          <span className="group-hover:translate-x-1 transition-transform">
                            {page.name}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Popular pages and resources you might be looking for.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Get Started', url: '/consultation', icon: ArrowRight },
                { name: 'View Demo', url: '/demo', icon: Play },
                { name: 'Pricing', url: '/pricing', icon: DollarSign },
                { name: 'Support', url: '/support', icon: HelpCircle },
                { name: 'Blog', url: '/blog', icon: FileText },
                { name: 'Contact', url: '/contact', icon: MessageCircle }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our search functionality or contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Search Website
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default SitemapPage;