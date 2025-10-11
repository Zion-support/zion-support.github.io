'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Cloud, 
  Shield, 
  BarChart3,
  Users,
  Settings,
  Globe,
  Code,
  Database,
  Cpu,
  Eye,
  Target,
  MessageSquare,
  FileText,
  Calendar,
  Package,
  Monitor,
  Heart,
  DollarSign,
  Lock,
  Mic,
  Search,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Clock,
  ShieldCheck
} from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Chatbots', href: '/ai-services/chatbots' },
    { name: 'Machine Learning', href: '/ai-services/machine-learning' },
    { name: 'Computer Vision', href: '/ai-services/computer-vision' },
    { name: 'Natural Language Processing', href: '/ai-services/nlp' },
    { name: 'Predictive Analytics', href: '/ai-services/predictive-analytics' },
    { name: 'AI Automation', href: '/ai-services/automation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/it-services/cloud' },
    { name: 'Cybersecurity', href: '/it-services/cybersecurity' },
    { name: 'Software Development', href: '/it-services/development' },
    { name: 'DevOps & CI/CD', href: '/it-services/devops' },
    { name: 'Database Management', href: '/it-services/database' },
    { name: 'Network Solutions', href: '/it-services/network' }
  ];

  const microSaas = [
    { name: 'Analytics Pro', href: '/micro-saas/analytics' },
    { name: 'CRM Intelligence', href: '/micro-saas/crm' },
    { name: 'Content Studio', href: '/micro-saas/content' },
    { name: 'Security Shield', href: '/micro-saas/security' },
    { name: 'Project Master', href: '/micro-saas/project' },
    { name: 'Email Automation', href: '/micro-saas/email' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support', href: '/support' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 cyber-grid"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center holographic-card-enhanced">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white neon-text-enhanced">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. 
              Transform your business with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+13024640950" className="text-sm font-medium">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-2 text-green-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-green-400" />
              Micro SAAS
            </h4>
            <ul className="space-y-3">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources & Company Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-700">
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-400" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-pink-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-yellow-400" />
              Why Choose Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                <span>99.9% Uptime Guarantee</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                <span>24/7 Expert Support</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                <span>Cutting-edge Technology</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                <span>Scalable Solutions</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                <span>Competitive Pricing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-slate-800/50 rounded-xl p-8 mb-12 cyber-card-enhanced">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest Tech Trends</h3>
            <p className="text-gray-300 mb-6">
              Get exclusive insights, product updates, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent futuristic-input"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 futuristic-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</Link>
                <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Cookie Policy</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Trusted by 1000+ companies</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-400 text-sm ml-2">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
