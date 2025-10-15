import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ExternalLink,
  Award,
  Users,
  Clock,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    aiServices: [
      { name: 'AI Analytics', href: '/ai-analytics' },
      { name: 'AI Content Generation', href: '/ai-content-generation' },
      { name: 'AI Customer Support', href: '/ai-customer-support' },
      { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
      { name: 'AI Data Analytics', href: '/ai-data-analytics' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
      { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
      { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
    ],
    itServices: [
      { name: 'Cloud Migration', href: '/cloud-migration' },
      { name: 'DevOps Services', href: '/devops-services' },
      { name: 'IT Consulting', href: '/it-consulting' },
      { name: 'Network Security', href: '/network-security' },
      { name: 'Software Development', href: '/software-development' },
      { name: 'System Integration', href: '/system-integration' },
      { name: 'Web Development', href: '/web-development' }
    ],
    microSaas: [
      { name: 'Zion Content Studio', href: '/zion-content-studio' },
      { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'AI Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' }
    ],
    fiveGSolutions: [
      { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
      { name: '5G Edge Computing', href: '/5g-edge-computing' },
      { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
      { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
      { name: '5G Private Networks', href: '/5g-private-networks' },
      { name: '5G Mobile Applications', href: '/5g-mobile-applications' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Support', href: '/support' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: '/status' },
      { name: 'Newsletter', href: '/newsletter' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Sitemap', href: '/sitemap' }
    ]
  };

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Award },
    { number: '60+', label: 'Micro SAAS Solutions', icon: Zap },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/30 py-20 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Tech Group
                </h3>
                <p className="text-xs text-gray-400">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded flex items-center justify-center">
                <Brain className="w-3 h-3 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">AI Services</h4>
            </div>
            <div className="space-y-2">
              {footerLinks.aiServices.slice(0, 6).map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                </Link>
              ))}
              <Link 
                to="/ai-services" 
                className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center space-x-1 mt-3"
              >
                <span>View All AI Services</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">IT Services</h4>
            </div>
            <div className="space-y-2">
              {footerLinks.itServices.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>
            </div>
            <div className="space-y-2">
              {footerLinks.microSaas.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 5G Solutions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center">
                <Globe className="w-3 h-3 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">5G Solutions</h4>
            </div>
            <div className="space-y-2">
              {footerLinks.fiveGSolutions.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-cyan-500/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-cyan-400 text-sm">{contactInfo.phone}</p>
              </div>
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-cyan-400 text-sm">{contactInfo.email}</p>
              </div>
            </a>
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mt-0.5">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Address</p>
                <p className="text-cyan-400 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">All Systems Operational</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;