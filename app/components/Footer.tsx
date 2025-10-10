'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Github, Youtube, Globe, Shield, Zap, Users, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder' },
    { name: 'AI CRM', href: '/ai-crm' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
    { name: 'AI Healthcare', href: '/ai-healthcare' },
    { name: 'AI Financial Services', href: '/ai-financial-services' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi' },
    { name: 'Custom Software', href: '/custom-software' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Asset Management', href: '/it-asset-management' }
  ];

  const microSaasServices = [
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing' },
    { name: 'Social Media AI', href: '/social-media-ai' },
    { name: 'AI Project Management', href: '/ai-project-management' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer' },
    { name: 'AI Sales CRM', href: '/ai-sales-crm' },
    { name: 'AI Design Studio', href: '/ai-design-studio' },
    { name: 'AI Inventory Manager', href: '/ai-inventory-manager' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
    { name: 'AI Document Processor', href: '/ai-document-processor' },
    { name: 'AI Lead Scoring', href: '/ai-lead-scoring' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses.
              We help companies transform their operations with cutting-edge technology, 
              delivering measurable results and exceptional value.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-4 h-4 text-white" />
              </div>
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center group"
                >
                  View All AI Services
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium flex items-center group"
                >
                  View All IT Services
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium flex items-center group"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="mx-2">Transforming businesses with AI and IT solutions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;