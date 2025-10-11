'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Globe, Users, Settings, BookOpen, MessageCircle, ShoppingCart, BarChart, Shield, Code, Smartphone, Cloud, Workflow, Eye, Mic, Heart, DollarSign, Package, Target, TrendingUp, FileText, Calendar, Wifi, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const siteMap = {
    main: [
      { name: 'Home', url: '/', icon: Globe },
      { name: 'About Us', url: '/about', icon: Users },
      { name: 'Services', url: '/services', icon: Settings },
      { name: 'Contact', url: '/contact', icon: MessageCircle },
      { name: 'Blog', url: '/blog', icon: BookOpen },
      { name: 'Careers', url: '/careers', icon: Users },
      { name: 'Case Studies', url: '/case-studies', icon: BarChart },
      { name: 'Pricing', url: '/pricing', icon: DollarSign },
      { name: 'Demo', url: '/demo', icon: Play },
      { name: 'Consultation', url: '/consultation', icon: MessageCircle },
      { name: 'Tutorials', url: '/tutorials', icon: BookOpen }
    ],
    aiServices: [
      { name: 'AI Services', url: '/ai-services', icon: Brain },
      { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: MessageCircle },
      { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
      { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart },
      { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye },
      { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic },
      { name: 'AI Workflow Automation', url: '/ai-automation', icon: Workflow },
      { name: 'AI Healthcare Solutions', url: '/ai-healthcare', icon: Heart },
      { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign },
      { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: ShoppingCart },
      { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield },
      { name: 'AI Mobile Applications', url: '/ai-mobile-app-builder', icon: Smartphone }
    ],
    itServices: [
      { name: 'IT Services', url: '/it-services', icon: Settings },
      { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
      { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Workflow },
      { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield },
      { name: 'Web Development', url: '/web-development', icon: Code },
      { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
      { name: 'API Development', url: '/api-development', icon: Code },
      { name: 'IT Support', url: '/it-support', icon: Users },
      { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart },
      { name: 'Database Management', url: '/database-management', icon: Database },
      { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi },
      { name: 'Server Management', url: '/server-management', icon: Server }
    ],
    microSaas: [
      { name: 'Micro SAAS Solutions', url: '/micro-saas', icon: Package },
      { name: 'AI-Powered CRM', url: '/ai-crm', icon: Users },
      { name: 'Security Monitoring Suite', url: '/security-monitoring', icon: Shield },
      { name: 'Analytics Dashboard Pro', url: '/analytics-dashboard', icon: BarChart },
      { name: 'Content Management AI', url: '/content-management-ai', icon: FileText },
      { name: 'Project Management Hub', url: '/project-management', icon: Workflow },
      { name: 'E-commerce Optimizer', url: '/ecommerce-optimizer', icon: ShoppingCart },
      { name: 'Social Media Manager', url: '/social-media-manager', icon: MessageSquare },
      { name: 'Financial Tracker Pro', url: '/financial-tracker', icon: DollarSign },
      { name: 'HR Management Suite', url: '/hr-management', icon: Users },
      { name: 'Customer Support Bot', url: '/customer-support-bot', icon: MessageCircle },
      { name: 'Inventory Manager AI', url: '/inventory-manager', icon: Package }
    ],
    resources: [
      { name: 'Documentation', url: '/docs', icon: BookOpen },
      { name: 'API Documentation', url: '/api-docs', icon: Code },
      { name: 'Tutorials', url: '/tutorials', icon: BookOpen },
      { name: 'Case Studies', url: '/case-studies', icon: BarChart },
      { name: 'Blog', url: '/blog', icon: BookOpen },
      { name: 'Newsletter', url: '/newsletter', icon: MessageCircle },
      { name: 'Support Center', url: '/support', icon: MessageCircle },
      { name: 'Status Page', url: '/status', icon: Globe },
      { name: 'Privacy Policy', url: '/privacy', icon: Shield },
      { name: 'Terms of Service', url: '/terms', icon: FileText },
      { name: 'Cookie Policy', url: '/cookies', icon: Settings },
      { name: 'Sitemap', url: '/sitemap', icon: Globe }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all our AI services, IT solutions, and resources in one place." />
        <meta name="keywords" content="sitemap, navigation, AI services, IT solutions, website map" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate our website easily with our comprehensive sitemap. Find all our services, resources, and pages in one place.
            </p>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Main Pages */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-cyan-400" />
                  Main Pages
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {siteMap.main.map((page, index) => (
                    <a
                      key={index}
                      href={page.url}
                      className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <page.icon className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white group-hover:text-cyan-400 transition-colors">{page.name}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* AI Services */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-cyan-400" />
                  AI Services
                </h2>
                <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
                  {siteMap.aiServices.map((service, index) => (
                    <a
                      key={index}
                      href={service.url}
                      className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <service.icon className="w-4 h-4 text-cyan-400 mr-3" />
                      <span className="text-white group-hover:text-cyan-400 transition-colors text-sm">{service.name}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* IT Services */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                  IT Services
                </h2>
                <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
                  {siteMap.itServices.map((service, index) => (
                    <a
                      key={index}
                      href={service.url}
                      className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <service.icon className="w-4 h-4 text-cyan-400 mr-3" />
                      <span className="text-white group-hover:text-cyan-400 transition-colors text-sm">{service.name}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Micro SAAS */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Package className="w-6 h-6 mr-3 text-cyan-400" />
                  Micro SAAS Solutions
                </h2>
                <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
                  {siteMap.microSaas.map((product, index) => (
                    <a
                      key={index}
                      href={product.url}
                      className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <product.icon className="w-4 h-4 text-cyan-400 mr-3" />
                      <span className="text-white group-hover:text-cyan-400 transition-colors text-sm">{product.name}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
                  Resources & Documentation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {siteMap.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <resource.icon className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white group-hover:text-cyan-400 transition-colors">{resource.name}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you find the right solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Contact Support</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;