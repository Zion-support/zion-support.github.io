'use client';
import React from 'react';
import { ArrowRight, Brain, Cloud, Zap, Sparkles, Code, BarChart, Users, Shield, Globe, Database, Smartphone, Settings, FileText, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Zion Tech Group homepage' },
    { name: 'About', path: '/about', description: 'About our company and mission' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
    { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and case studies' },
    { name: 'Careers', path: '/careers', description: 'Join our team' },
    { name: 'Consultation', path: '/consultation', description: 'Free consultation' },
    { name: 'Pricing', path: '/pricing', description: 'Service pricing plans' }
  ];

  const aiServices = [
    { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
    { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
    { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform' },
    { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Advanced computer vision' },
    { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Advanced NLP solutions' },
    { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics' },
    { name: 'AI Research & Development', path: '/ai-research-development', description: 'Custom AI R&D' },
    { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'AI at the edge' }
  ];

  const microSaasServices = [
    { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', popular: true },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', popular: true },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', popular: true },
    { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', popular: true },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', popular: true },
    { name: 'AI Code Generation', path: '/ai-code-generation', description: 'Automated code analysis', popular: false },
    { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI-powered content creation', popular: false },
    { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'AI-driven SEO optimization', popular: false },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing', popular: false },
    { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification', popular: false },
    { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions', popular: false },
    { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization', popular: false },
    { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool', popular: false },
    { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing', popular: false },
    { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring', popular: false },
    { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking', popular: false },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants', popular: false },
    { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management', popular: false },
    { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management', popular: false },
    { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights', popular: false },
    { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing', popular: false },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions', popular: false }
  ];

  const itServices = [
    { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation' },
    { name: 'Database Management', path: '/database-management', description: 'Database management' },
    { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure' },
    { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management' },
    { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
    { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure' },
    { name: 'IT Performance Monitoring', path: '/it-performance-monitoring', description: 'Real-time monitoring' },
    { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery' },
    { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
    { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' }
  ];

  const specializedSolutions = [
    { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent CRM with AI insights' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
    { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
    { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'AI-assisted app development' },
    { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
    { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
    { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions' },
    { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
    { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool' },
    { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
    { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
    { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
    { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
    { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
    { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
    { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
  ];

  const advancedSolutions = [
    { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-generation quantum computing' },
    { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-operating systems' },
    { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive technology' },
    { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Robotics', path: '/robotics', description: 'Intelligent robotics' },
    { name: 'Business Intelligence', path: '/business-intelligence', description: 'Advanced analytics' }
  ];

  const renderServiceSection = (title: string, services: any[], icon: any, color: string) => (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <icon className={`w-6 h-6 ${color} mr-3`} />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.path}
            className="group bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h4>
                <p className="text-gray-400 text-sm mt-1">{service.description}</p>
              </div>
              {service.popular && (
                <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors mt-2" />
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Site Map
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Explore all our AI and IT services, solutions, and resources in one comprehensive directory
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100+</div>
                  <div className="text-gray-400">AI Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400">Micro SAAS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">25+</div>
                  <div className="text-gray-400">IT Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Pages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Main Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mainPages.map((page, index) => (
                <a
                  key={index}
                  href={page.path}
                  className="group bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{page.description}</p>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors mt-2" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Sections */}
          {renderServiceSection('AI Services', aiServices, Brain, 'text-purple-400')}
          {renderServiceSection('Micro SAAS Solutions', microSaasServices, Zap, 'text-cyan-400')}
          {renderServiceSection('IT Services', itServices, Cloud, 'text-blue-400')}
          {renderServiceSection('Specialized Solutions', specializedSolutions, Sparkles, 'text-pink-400')}
          {renderServiceSection('Advanced Solutions', advancedSolutions, Code, 'text-green-400')}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;