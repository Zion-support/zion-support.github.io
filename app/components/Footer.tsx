'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight, BarChart, Shield, Globe, Database, Smartphone, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, TrendingUp, Calendar, CheckCircle, ShoppingCart, Star, Award, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud infrastructure' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network solutions' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset tracking' }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Advanced analytics' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI chatbot platform' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Security monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud storage' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'Content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'CRM automation' },
    { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data synchronization' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', description: 'Inventory management' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice automation' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];

  const resources = [
    { name: 'Blog', url: '/blog' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Support', url: '/support' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'Sitemap', url: '/sitemap' }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, transforming businesses through cutting-edge technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Brain className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Cloud className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Shield className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legal.map((item, index) => (
                <Link 
                  key={index}
                  to={item.url} 
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);