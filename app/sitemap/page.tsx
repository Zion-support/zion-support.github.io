'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, ArrowRight, Home, Users, Settings, Brain, Cloud, Code, FileText, Mail, Phone, Calendar, Shield, BarChart, Target, Globe, Database, Zap, Eye, Mic, Heart, DollarSign, Box, Cpu, Link, Server, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Package, Monitor, Search, Video, Headphones, Scale, Cookie } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];
  
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Zion Tech Group homepage' },
        { name: 'About', url: '/about', description: 'Learn about our company' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Demo', url: '/demo', description: 'Request a demo' },
        { name: 'Consultation', url: '/consultation', description: 'Free consultation' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Business process automation' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data analytics' },
        { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Healthcare AI solutions' },
        { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial technology solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'IT Services', url: '/it-services', description: 'Complete IT solutions' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud computing services' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps', url: '/devops', description: 'Development operations' },
        { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources' },
        { name: 'API Documentation', url: '/api-docs', description: 'Technical documentation' },
        { name: 'Support', url: '/support', description: 'Customer support' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' }
      ]
    },
    {
      title: 'Legal',
      icon: Scale,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
        { name: 'Sitemap', url: '/sitemap', description: 'Site structure' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate Zion Tech Group's website with our comprehensive sitemap. Find all our AI and IT services, resources, and pages." />
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
                Navigate our website easily with our comprehensive sitemap. Find all our AI and IT services, resources, and pages.
              </p>
              <div className="mt-4 text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <a
                        key={pageIndex}
                        href={page.url}
                        className="group bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600 hover:border-cyan-400/50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {page.name}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-gray-300 text-sm">{page.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
                <a
                  href="/demo"
                  className="flex items-center space-x-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Request Demo</span>
                </a>
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