'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Home, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Calendar, Mail, Phone, MapPin, FileText, Settings, Globe, Target, CheckCircle } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main homepage' },
    { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our company' },
    { name: 'Services', path: '/services', icon: Settings, description: 'Our AI and IT services' },
    { name: 'Pricing', path: '/pricing', icon: BarChart, description: 'Service pricing and plans' },
    { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' },
    { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest news and insights' }
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', path: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: Brain },
    { name: 'AI CRM', path: '/ai-crm', icon: Users },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: Target },
    { name: 'AI Financial Services', path: '/ai-financial-services', icon: BarChart },
    { name: 'AI Computer Vision', path: '/ai-computer-vision', icon: Globe },
    { name: 'AI Voice Solutions', path: '/ai-voice-solutions', icon: Zap },
    { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', icon: Globe },
    { name: 'AI HR Solutions', path: '/ai-hr-solutions', icon: Users }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', path: '/web-development', icon: Code },
    { name: 'Mobile Development', path: '/mobile-development', icon: Globe },
    { name: 'API Development', path: '/api-development', icon: Code },
    { name: 'Database Management', path: '/database-management', icon: BarChart },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: Settings },
    { name: 'IT Support', path: '/it-support', icon: Phone },
    { name: 'Data Analytics & BI', path: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', path: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: Globe },
    { name: 'IT Asset Management', path: '/it-asset-management', icon: Settings }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', path: '/zion-chat-ai', icon: Brain },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', path: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: BarChart },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: Calendar },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', path: '/zion-inventory-smart', icon: Settings },
    { name: 'Zion Invoice Genius', path: '/zion-invoice-genius', icon: FileText }
  ];

  const resourcePages = [
    { name: 'Tutorials', path: '/tutorials', icon: FileText, description: 'Learning resources' },
    { name: 'Case Studies', path: '/case-studies', icon: BarChart, description: 'Success stories' },
    { name: 'Careers', path: '/careers', icon: Users, description: 'Job opportunities' },
    { name: 'Partners', path: '/partners', icon: Globe, description: 'Our partners' },
    { name: 'Support', path: '/support', icon: Phone, description: 'Technical support' },
    { name: 'Demo', path: '/demo', icon: Play, description: 'Request a demo' },
    { name: 'Consultation', path: '/consultation', icon: Calendar, description: 'Free consultation' },
    { name: 'FAQ', path: '/faq', icon: FileText, description: 'Frequently asked questions' },
    { name: 'Documentation', path: '/docs', icon: FileText, description: 'Technical documentation' },
    { name: 'API Reference', path: '/api-docs', icon: Code, description: 'API documentation' },
    { name: 'Community', path: '/community', icon: Users, description: 'User community' },
    { name: 'Compliance', path: '/compliance', icon: Shield, description: 'Compliance information' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy', icon: Shield },
    { name: 'Terms of Service', path: '/terms', icon: FileText },
    { name: 'Cookie Policy', path: '/cookies', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and resources in one place." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Navigate through all our pages and discover our comprehensive AI and IT solutions.
          </p>
        </section>

        {/* Main Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <page.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {page.name}
                    </h3>
                    <p className="text-sm text-gray-400">{page.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm">Visit page</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-white text-sm group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {itServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <service.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-white text-sm group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Micro SAAS Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {microSaasServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <service.icon className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-white text-sm group-hover:text-green-300 transition-colors">
                    {service.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resource Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcePages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <page.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {page.name}
                    </h3>
                    <p className="text-sm text-gray-400">{page.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                  <span className="text-sm">Visit page</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Legal Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Legal & Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-gray-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/10"
              >
                <div className="flex items-center space-x-4">
                  <page.icon className="w-6 h-6 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  <span className="text-white group-hover:text-gray-300 transition-colors">
                    {page.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us directly and we'll help you find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SitemapPage;