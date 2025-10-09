import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Globe,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Star,
  TrendingUp,
  Settings,
  Target,
  Sparkles,
  Smartphone,
  Database,
  Layers,
  Bot,
  CircuitBoard
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', icon: Brain, description: 'Core AI services', price: '$1,500/mo' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target, description: 'AI-powered marketing', price: '$199/mo' },
    { name: 'AI Automation', url: '/ai-automation', icon: Settings, description: 'Business automation', price: '$399/mo' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Users, description: 'Healthcare AI', price: '$1,999/mo' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: TrendingUp, description: 'Financial AI', price: '$1,499/mo' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Data intelligence', price: '$799/mo' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security', price: '$999/mo' },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud AI', price: '$1,299/mo' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Sparkles, description: 'Content creation', price: '$199/mo' },
    { name: 'AI Customer Support', url: '/ai-customer-support', icon: Users, description: 'Support automation', price: '$299/mo' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', icon: TrendingUp, description: 'Sales optimization', price: '$499/mo' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Settings, description: 'Process automation', price: '$599/mo' }
  ];

  const itServices = [
    { name: 'IT Solutions', url: '/it-services', icon: Code, description: 'Core IT services', price: '$999/mo' },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Star, description: '50+ ready-to-use apps', price: '$79/mo' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions', price: '$799/mo' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud infrastructure', price: '$1,299/mo' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce platforms', price: '$1,799/mo' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile applications', price: '$2,499/mo' },
    { name: 'Database Services', url: '/ai-data-analytics', icon: Database, description: 'Database management', price: '$899/mo' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Layers, description: 'Infrastructure setup', price: '$1,599/mo' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Zap, description: 'Quantum solutions', price: 'Custom' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', icon: Shield, description: 'Decentralized solutions', price: '$1,999/mo' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', icon: Cloud, description: 'Connected devices', price: '$1,399/mo' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Bot, description: 'Self-managing systems', price: '$2,999/mo' },
    { name: 'Robotics', url: '/robotics', icon: CircuitBoard, description: 'Robotic solutions', price: '$3,499/mo' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data insights', price: '$899/mo' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security Policy', url: '/security' },
    { name: 'SLA Agreement', url: '/sla' },
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white cyber-grid">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center energy-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold cyber-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology and achieve unprecedented growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-sm">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">
                  {contactInfo.hours}
                </span>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-gray-200">Certifications</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• ISO 27001 Certified</div>
                <div>• SOC 2 Type II Compliant</div>
                <div>• GDPR Compliant</div>
                <div>• AWS Advanced Partner</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors cyber-glow"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{service.name}</span>
                    <span className="text-xs text-cyan-400 ml-auto">{service.price}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{service.name}</span>
                    <span className="text-xs text-cyan-400 ml-auto">{service.price}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emerging Technologies */}
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4 text-gray-200">Emerging Tech</h4>
              <ul className="space-y-2">
                {emergingTech.slice(0, 4).map((tech, index) => (
                  <li key={index}>
                    <Link
                      to={tech.url}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <tech.icon className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      <span>{tech.name}</span>
                      <span className="text-xs text-cyan-400 ml-auto">{tech.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-4 text-gray-200">Support</h4>
            <ul className="space-y-2 mb-8">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-4 text-gray-200">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 cyber-text">Stay Updated with AI Innovation</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cyber-input"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl cyber-button">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Empowering businesses with AI innovation since 2020</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Industry Leader</span>
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