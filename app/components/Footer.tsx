'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Star, Shield, BarChart, MessageCircle, FileText, Target, Calendar, DollarSign, Database, Settings, Globe, Smartphone, Wifi, Package, Monitor, Heart, TrendingUp, Award, Sparkles, Rocket, Lock, Eye, Mic, Workflow, Cpu, Server, Link as LinkIcon, ShoppingCart, CreditCard, PieChart, Activity, Layers, Bot, Headphones, Camera, Video, Image, Music, Download, Upload, Search, Filter, Bell, AlertTriangle, CheckSquare, XCircle, Plus, Minus, RefreshCw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Share, ExternalLink, Info, HelpCircle, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, Menu, X, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, MoreHorizontal, MoreVertical, Settings2, User, UserPlus, UserMinus, UserCheck, UserX, Users2, UserCog, UserSearch, UserEdit, UserCheck2, UserPlus2, UserMinus2, UserX2, UserCog2, UserSearch2, UserEdit2, UserCheck3, UserPlus3, UserMinus3, UserX3, UserCog3, UserSearch3, UserEdit3, UserCheck4, UserPlus4, UserMinus4, UserX4, UserCog4, UserSearch4, UserEdit4, UserCheck5, UserPlus5, UserMinus5, UserX5, UserCog5, UserSearch5, UserEdit5, UserCheck6, UserPlus6, UserMinus6, UserX6, UserCog6, UserSearch6, UserEdit6, UserCheck7, UserPlus7, UserMinus7, UserX7, UserCog7, UserSearch7, UserEdit7, UserCheck8, UserPlus8, UserMinus8, UserX8, UserCog8, UserSearch8, UserEdit8, UserCheck9, UserPlus9, UserMinus9, UserX9, UserCog9, UserSearch9, UserEdit9, UserCheck10, UserPlus10, UserMinus10, UserX10, UserCog10, UserSearch10, UserEdit10 } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data insights', price: '$1,999/month' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Streamline workflows', price: '$2,499/month' },
    { name: 'AI Chatbot', url: '/ai-chatbot-builder', description: 'Intelligent conversations', price: '$1,499/month' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Customer relationship management', price: '$1,799/month' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Advanced threat protection', price: '$2,299/month' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data-driven insights', price: '$1,999/month' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions', price: '$2,999/month' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Financial technology', price: '$2,499/month' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image & video analysis', price: '$2,299/month' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition', price: '$1,799/month' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce optimization', price: '$1,999/month' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI', price: '$1,599/month' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions', price: '$2,999/month' },
    { name: 'API Development', url: '/api-development', description: 'API development & management', price: '$1,499/project' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Comprehensive security', price: '$2,499/month' },
    { name: 'Database Management', url: '/database-management', description: 'Data processing & storage', price: '$1,999/month' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps', price: '$3,999/project' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications', price: '$2,999/project' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automated deployment', price: '$2,999/month' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support', price: '$1,999/month' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence', price: '$2,499/month' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions', price: '$4,999/project' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network design & setup', price: '$2,999/project' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle management', price: '$1,499/month' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform', price: '$99/month' },
    { name: 'Zion AI Chat', url: '/zion-ai-chat', description: 'AI customer support', price: '$79/month' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring', price: '$149/month' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery', price: '$89/month' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation', price: '$69/month' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM', price: '$119/month' },
    { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data integration platform', price: '$99/month' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation platform', price: '$79/month' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management AI', price: '$89/month' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing AI', price: '$69/month' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about', description: 'Learn about our mission' },
    { name: 'Our Team', url: '/team', description: 'Meet our experts' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
    { name: 'Blog', url: '/blog', description: 'Latest insights' },
    { name: 'Careers', url: '/careers', description: 'Join our team' },
    { name: 'Partners', url: '/partners', description: 'Partnership opportunities' },
    { name: 'Support', url: '/support', description: 'Get help' },
    { name: 'Status', url: '/status', description: 'Service status' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing', description: 'View our plans' },
    { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
    { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
    { name: 'API Reference', url: '/api-docs', description: 'API documentation' },
    { name: 'Tutorials', url: '/tutorials', description: 'Learning resources' },
    { name: 'Community', url: '/community', description: 'Join our community' },
    { name: 'Demo', url: '/demo', description: 'Try our solutions' },
    { name: 'Compliance', url: '/compliance', description: 'Security & compliance' }
  ];

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Large-scale solutions' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Transform your business' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Edge Computing', url: '/edge-computing', description: 'Distributed processing' },
    { name: 'Consultation', url: '/consultation', description: 'Expert consulting' },
    { name: 'Custom Development', url: '/custom-software', description: 'Tailored solutions' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Users },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: MessageCircle },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Code },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Play }
  ];

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="absolute inset-0 neural-network-bg"></div>
      
      {/* Animated particles */}
      <div className="particle-system">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery. Trusted by 500+ companies worldwide.
            </p>
            
            {/* Contact Information */}
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
                <div>
                  <span className="font-medium">364 E Main St STE 1008</span><br />
                  <span className="text-gray-400">Middletown, DE 19709</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-cyan-300 transition-colors">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</div>
                      <div className="text-xs text-cyan-400 font-semibold">{service.price}</div>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group"
                >
                  View All AI Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm group flex items-center"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-purple-300 transition-colors">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</div>
                      <div className="text-xs text-purple-400 font-semibold">{service.price}</div>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-purple-500/20">
                <Link 
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-semibold flex items-center group"
                >
                  View All IT Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SaaS */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              Micro SaaS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-green-300 transition-colors">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</div>
                      <div className="text-xs text-green-400 font-semibold">{service.price}</div>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-green-500/20">
                <Link 
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-all duration-300 text-sm font-semibold flex items-center group"
                >
                  View All Micro SaaS
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <Users className="w-4 h-4 text-white" />
              </div>
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors group flex items-center"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-2">
                <FileText className="w-4 h-4 text-white" />
              </div>
              Resources
            </h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-purple-400 text-sm transition-colors group flex items-center"
                  >
                    <div className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-2">
                <Building className="w-4 h-4 text-white" />
              </div>
              Enterprise
            </h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-green-400 text-sm transition-colors group flex items-center"
                  >
                    <div className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-2">
                <Award className="w-4 h-4 text-white" />
              </div>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors group flex items-center">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors group flex items-center">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors group flex items-center">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors group flex items-center">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text-enhanced">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights, updates, and exclusive offers delivered to your inbox. 
              Join 10,000+ professionals who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 cyber-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</Link> | 
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors ml-1">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-cyan-400 mr-2" />
                <span>500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;