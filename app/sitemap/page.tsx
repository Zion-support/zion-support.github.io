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
        { name: 'Home', url: '/', description: 'Landing page with company overview and services' },
        { name: 'About Us', url: '/about', description: 'Company information, team, and mission' },
        { name: 'Contact', url: '/contact', description: 'Contact information and inquiry form' },
        { name: 'Services', url: '/services', description: 'Overview of all our services' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing and packages' },
        { name: 'Blog', url: '/blog', description: 'Latest news, insights, and articles' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client projects' },
        { name: 'Careers', url: '/careers', description: 'Job opportunities and company culture' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Services Overview', url: '/ai-services', description: 'Comprehensive AI solutions and services' },
        { name: 'AI Chat API', url: '/ai-chat-api', description: 'Intelligent conversational AI solutions' },
        { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data analytics and insights' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'IT Services Overview', url: '/it-services', description: 'Complete IT infrastructure and support' },
        { name: 'Cloud Computing', url: '/cloud-computing', description: 'Scalable cloud solutions and migration' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions and protection' },
        { name: 'DevOps', url: '/devops', description: 'Development operations and automation' },
        { name: 'Data Management', url: '/data-management', description: 'Data storage, processing, and analytics' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and guides' },
        { name: 'API Reference', url: '/api-docs', description: 'Complete API documentation and examples' },
        { name: 'Tutorials', url: '/tutorials', description: 'Step-by-step tutorials and guides' },
        { name: 'Support', url: '/support', description: 'Technical support and help center' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete site navigation and structure' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Navigate our complete website with our comprehensive sitemap. Find all pages, services, and resources organized by category." />
        <meta name="keywords" content="sitemap, navigation, website structure, pages, services, resources" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Site Map
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Navigate our complete website structure and find all available pages, services, and resources.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <a
                        key={pageIndex}
                        href={page.url}
                        className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {page.name}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-sm text-gray-300 group-hover:text-gray-200">
                          {page.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Info */}
            <div className="mt-16 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Need Help Finding Something?</h3>
                <p className="text-gray-300 mb-6">
                  Can't find what you're looking for? Contact our support team for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Support
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </a>
                  <a
                    href="/"
                    className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Back to Home
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