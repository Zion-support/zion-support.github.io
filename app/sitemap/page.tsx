'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, BarChart, Users, Zap, Target, TrendingUp, Clock, Award, Brain, Cloud, Code, FileText, MessageSquare, Phone, DollarSign, Mail, Bot, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: Target },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'AI Services', path: '/ai-services', icon: Brain },
    { name: 'IT Services', path: '/it-services', icon: Cloud },
    { name: 'Micro SAAS', path: '/micro-saas', icon: Code },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const aiServices = [
    { name: 'AI Project Manager Pro', path: '/ai-project-manager' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing Suite', path: '/ai-email-marketing' },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
    { name: 'AI Financial Advisor', path: '/ai-financial-advisor' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
    { name: 'AI Fintech Platform', path: '/ai-fintech' },
    { name: 'AI Computer Vision', path: '/ai-computer-vision' },
    { name: 'AI Machine Learning Platform', path: '/ai-ml-platform' },
    { name: 'AI Quantum Computing', path: '/ai-quantum-computing' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
    { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro' },
    { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro' },
    { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant' },
    { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace' },
    { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems' },
    { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions' }
  ];

  const itServices = [
    { name: 'Cloud Migration & Setup', path: '/cloud-migration' },
    { name: 'Enterprise Cybersecurity', path: '/cybersecurity' },
    { name: 'IT Infrastructure Design', path: '/it-infrastructure' },
    { name: '24/7 IT Support', path: '/it-support' },
    { name: 'Custom Development', path: '/custom-development' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Network Design', path: '/network-design' },
    { name: 'AI Infrastructure Monitoring', path: '/ai-infrastructure-monitoring' },
    { name: 'Blockchain Integration', path: '/blockchain-integration-services' },
    { name: 'AI API Management', path: '/ai-api-management' },
    { name: 'Smart Contract Security', path: '/smart-contract-security-audit' },
    { name: 'Edge Computing Solutions', path: '/edge-computing' },
    { name: '5G Network Implementation', path: '/5g-implementation' },
    { name: 'IoT Platform Development', path: '/iot-platform' }
  ];

  const companyPages = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'News', path: '/news' },
    { name: 'Partners', path: '/partners' },
    { name: 'Investors', path: '/investors' },
    { name: 'Demo', path: '/demo' },
    { name: 'Consultation', path: '/consultation' }
  ];

  const supportPages = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Support Center', path: '/support' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status Page', path: '/status' },
    { name: 'System Health', path: '/system-status' },
    { name: 'Help Center', path: '/help' },
    { name: 'Community', path: '/community' },
    { name: 'Training', path: '/training' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Data Protection', path: '/data-protection' },
    { name: 'Accessibility', path: '/accessibility' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and company pages in one place."
        keywords={["sitemap", "Zion Tech Group", "AI services", "IT solutions", "website navigation"]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Website Sitemap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore all our AI services, IT solutions, and company pages. Find exactly what you're looking for with our comprehensive sitemap.
          </p>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mainPages.map((page, index) => (
              <a
                key={index}
                href={page.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group text-center"
              >
                <page.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{page.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiServices.map((service, index) => (
              <a
                key={index}
                href={service.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-4 hover:border-purple-400/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors text-sm">{service.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {itServices.map((service, index) => (
              <a
                key={index}
                href={service.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-4 hover:border-green-400/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-medium group-hover:text-green-400 transition-colors text-sm">{service.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Company Pages */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyPages.map((page, index) => (
              <a
                key={index}
                href={page.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors text-sm">{page.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Pages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Support & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportPages.map((page, index) => (
              <a
                key={index}
                href={page.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-lg p-4 hover:border-blue-400/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm">{page.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Legal & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {legalPages.map((page, index) => (
              <a
                key={index}
                href={page.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-400/20 rounded-lg p-4 hover:border-gray-400/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-medium group-hover:text-gray-300 transition-colors text-sm">{page.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our team for personalized assistance or explore our comprehensive services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;