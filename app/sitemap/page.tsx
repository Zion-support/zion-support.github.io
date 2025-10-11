'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Map, ArrowRight, ExternalLink, Home, Users, Briefcase, BookOpen, Phone, Mail, Shield, FileText } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Services', url: '/services', description: 'Our comprehensive service offerings' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing and plans' }
      ]
    },
    {
      title: 'AI Services',
      icon: Shield,
      pages: [
        { name: 'AI Services Overview', url: '/ai-services', description: 'All AI services and solutions' },
        { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data analytics' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Build intelligent chatbots' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Quantum Computing', url: '/ai-quantum-computing', description: 'Revolutionary quantum computing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Briefcase,
      pages: [
        { name: 'IT Services Overview', url: '/it-services', description: 'All IT services and solutions' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Comprehensive security services' },
        { name: 'Web Development', url: '/web-development', description: 'Custom web applications' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: FileText,
      pages: [
        { name: 'Micro SaaS Overview', url: '/micro-saas', description: 'All Micro SaaS applications' },
        { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'AI-powered business intelligence' },
        { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'Advanced customer support' },
        { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'AI-powered invoicing' },
        { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      pages: [
        { name: 'Blog', url: '/blog', description: 'Latest articles and insights' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and guides' },
        { name: 'Demo', url: '/demo', description: 'Try our solutions live' },
        { name: 'Support', url: '/support', description: 'Technical support and help' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      pages: [
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Consultation', url: '/consultation', description: 'Free technology consultation' },
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | Zion Tech Group - Website Navigation & Pages</title>
        <meta name="description" content="Navigate Zion Tech Group's website easily with our comprehensive sitemap. Find all our AI services, IT solutions, and resources." />
        <meta name="keywords" content="sitemap, website navigation, pages, AI services, IT solutions, Micro SaaS" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find all our pages and services organized by category for easy navigation.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                <Map className="w-4 h-4 mr-2" />
                Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="flex-1">
                          <a
                            href={page.url}
                            className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                          >
                            {page.name}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                          <p className="text-gray-400 text-sm mt-1">{page.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Quick Links
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                    (302) 464-0950
                  </a>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Map className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-sm">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SitemapPage;