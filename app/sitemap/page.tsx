'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, ArrowRight, Home, Users, Settings, Brain, Cloud, Code, FileText, Mail, Phone, Calendar, Shield, BarChart, Target, Globe, Database, Zap, Eye, Mic, Heart, DollarSign, Box, Cpu, Link, Server, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Package, Monitor, Search, Video, Headphones, Scale, Cookie } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0]
  ;
  const pageCategories = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About', url: '/about', description: 'About Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our service offerings' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing plans' },
        { name: 'Contact', url: '/contact', description: 'Contact information' }
        ]
      },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Services Overview', url: '/ai-services', description: 'Complete AI services catalog' },
        { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data analytics' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Process automation solutions' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Build intelligent chatbots' },
        { name: 'AI CRM', url: '/ai-crm', description: 'AI-powered customer relationship management' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-driven security solutions' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analytics' },
        { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Healthcare AI solutions' },
        { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial technology AI' }
  ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'IT Services Overview', url: '/it-services', description: 'Complete IT infrastructure solutions' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, and GCP solutions' },
        { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Comprehensive security services' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web application development' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android app development' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web application development' }
  ]
    },
    {
      title: 'Micro SaaS',
      icon: Zap,
      pages: [
        { name: 'Micro SaaS Overview', url: '/micro-saas', description: 'Complete Micro SaaS catalog' },
        { name: 'AI Content Writer', url: '/ai-content-writer', description: 'Automated content creation' },
        { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
        { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Financial tracking solution' },
        { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Prospect identification' },
        { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Project coordination tool' }
  ]
    },
    {
      title: 'Emerging Technologies',
      icon: Code,
      pages: [
        { name: '5G Implementation', url: '/5g-implementation', description: 'Next-generation connectivity' },
        { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content creation' },
        { name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', description: 'Immersive work environments' },
        { name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', description: 'Self-operating systems' },
        { name: 'AI Blockchain Solutions', url: '/ai-blockchain-solutions', description: 'Decentralized AI solutions' },
        { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed processing' }
  ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Tutorials', url: '/tutorials', description: 'Step-by-step guides and tutorials' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and APIs' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Demo', url: '/demo', description: 'Request a demo' },
        { name: 'Consultation', url: '/consultation', description: 'Free consultation' }
  ]
    },
    {
      title: 'Documentation',
      icon: Code,
      pages: [
        { name: 'Documentation', url: '/docs', description: 'Complete documentation' },
        { name: 'API Reference', url: '/api', description: 'API documentation' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources' },
        { name: 'Community', url: '/community', description: 'Developer community' }
  ]
    },
    {
      title: 'Legal',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy and data protection' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete site map' }
  ]
    }
  ];
  const totalPages = pageCategories.reduce((total, category) => total + category.pages.length, 0);

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group's website. Find all our pages, services, and resources organized by category." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Navigate our website easily with this comprehensive sitemap. 
                Find all our pages, services, and resources organized by category.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <link.icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-white text-center group-hover:text-cyan-300 transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <a
                        key={pageIndex}
                        href={page.url}
                        className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {page.name}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                          {page.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Search Box */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Use our search functionality or contact us directly for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search our website..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Need Help Finding Something?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our team is here to help you find exactly what you need. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SitemapPage;
