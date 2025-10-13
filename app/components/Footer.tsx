import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Zap, 
  Globe, 
  Brain, 
  Shield, 
  BarChart3, 
  Cloud, 
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Facebook
} from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Support', path: '/ai-customer-support' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Document Processing', path: '/ai-document-processing' },
    { name: 'AI Marketing Automation', path: '/ai-marketing-automation' },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'DevOps Services', path: '/devops-services' },
    { name: 'IT Consulting', path: '/it-consulting' },
    { name: 'Network Security', path: '/network-security' },
    { name: 'Software Development', path: '/software-development' },
    { name: 'System Integration', path: '/system-integration' },
    { name: 'Web Development', path: '/web-development' }
  ];

  const microSaas = [
    { name: 'AI Email Assistant', path: '/ai-powered-email-analyzer' },
    { name: 'Customer Sentiment Tracker', path: '/ai-customer-sentiment-tracker' },
    { name: 'Smart Expense Categorizer', path: '/smart-expense-categorizer' },
    { name: 'Zion AI Analytics Pro', path: '/zion-ai-analytics-pro' },
    { name: 'Zion Security Shield Pro', path: '/zion-security-shield-pro' },
    { name: 'Zion Cloud Vault Pro', path: '/zion-cloud-vault-pro' },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro' },
    { name: 'Zion AI Marketing Pro', path: '/zion-ai-marketing-automation-pro' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Partners', path: '/partners' }
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'SLA', path: '/sla' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@ziontechgroup' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation 
                for modern businesses. Transform your operations with cutting-edge technology.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                AI Services
              </h4>
              <ul className="space-y-3">
                {services.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/services" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                  >
                    View All AI Services
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                IT Services
              </h4>
              <ul className="space-y-3">
                {itServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SAAS */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Micro SAAS
              </h4>
              <ul className="space-y-3">
                {microSaas.slice(0, 6).map((saas, index) => (
                  <li key={index}>
                    <Link 
                      to={saas.path} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform duration-300"
                    >
                      {saas.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/micro-saas-services" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                  >
                    View All Micro SAAS
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                Company
              </h4>
              <ul className="space-y-3 mb-6">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                Legal
              </h4>
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Our Latest Innovations
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest updates on AI breakthroughs, new micro SAAS solutions, and technology insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Powered by AI</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>99.9% Uptime</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;