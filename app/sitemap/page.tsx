'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, Users, Settings, FileText, Mail, Phone, Calendar, Globe, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About', url: '/about', description: 'About Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our service offerings' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing plans' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI Services',
      icon: Settings,
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Chatbot', url: '/ai-chatbot', description: 'Intelligent chatbot solutions' },
        { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data analytics' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Business process automation' },
        { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation tools' }
      ]
    },
    {
      title: 'IT Services',
      icon: Settings,
      pages: [
        { name: 'IT Services', url: '/it-services', description: 'Complete IT solutions' },
        { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud infrastructure and migration' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions and monitoring' },
        { name: 'DevOps', url: '/devops', description: 'Development and operations services' },
        { name: 'Database Management', url: '/database-management', description: 'Database design and optimization' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Globe,
      pages: [
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Ready-to-use business tools' },
        { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Real-time business intelligence' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Create intelligent chatbots' },
        { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Project Management', url: '/ai-project-management', description: 'Intelligent project tracking' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Blog', url: '/blog', description: 'Latest insights and updates' },
        { name: 'Tutorials', url: '/tutorials', description: 'Step-by-step guides' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and examples' },
        { name: 'Documentation', url: '/documentation', description: 'Technical documentation' },
        { name: 'API Reference', url: '/api-reference', description: 'API documentation and guides' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      pages: [
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Contact', url: '/contact', description: 'Get in touch' },
        { name: 'Support', url: '/support', description: 'Get help and support' },
        { name: 'Demo', url: '/demo', description: 'Request a demo' }
      ]
    },
    {
      title: 'Legal',
      icon: FileText,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'Sitemap', url: '/sitemap', description: 'Site structure and navigation' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate through all pages and sections of the Zion Tech Group website. Find what you're looking for quickly and easily." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Navigate through all pages and sections of our website. Find what you're looking for quickly and easily.
              </p>
              <div className="mt-4 text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <a
                          href={page.url}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {page.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                  href="/contact"
                  className="flex items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white font-medium">Contact Us</span>
                </a>
                <a
                  href="/demo"
                  className="flex items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white font-medium">Request Demo</span>
                </a>
                <a
                  href="/support"
                  className="flex items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white font-medium">Get Support</span>
                </a>
                <a
                  href="/pricing"
                  className="flex items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white font-medium">View Pricing</span>
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