import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Star, Award, Globe, Lock, Database, Smartphone, Settings, FileText, MessageSquare, Eye, Bot, Share2, Mail as EmailIcon, BarChart3, Projector, Headphones, Twitter, Linkedin, Github, Youtube, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'Machine Learning', path: '/ai-services' },
        { name: 'Natural Language Processing', path: '/ai-services' },
        { name: 'Computer Vision', path: '/ai-services' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Content Generator', path: '/ai-content-generation' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer' },
        { name: 'AI Design Studio', path: '/ai-design-studio' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity Suite', path: '/cybersecurity' },
        { name: 'DevOps & CI/CD', path: '/devops' },
        { name: 'Database Management', path: '/database' },
        { name: 'Network Infrastructure', path: '/networking' },
        { name: 'IT Support', path: '/it-support' },
        { name: 'Mobile App Development', path: '/mobile-app-development' },
        { name: 'System Integration', path: '/system-integration' }
      ]
    },
    {
      title: 'Specialized',
      icon: Star,
      color: 'text-pink-400',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Robotics Solutions', path: '/robotics' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'News', path: '/news' },
    { name: 'Press Kit', path: '/press' },
    { name: 'Partners', path: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/support' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Documentation', path: '/api-docs' },
    { name: 'System Status', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Training', path: '/training' },
    { name: 'Community', path: '/community' },
    { name: 'Feedback', path: '/feedback' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'SLA', path: '/sla' },
    { name: 'Data Processing', path: '/data-processing' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', color: 'text-blue-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'text-gray-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'text-red-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'text-pink-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-pink-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-pink-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 neon-text">AI Services</h4>
            <ul className="space-y-2">
              {serviceCategories[0].services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 neon-text">Micro SAAS</h4>
            <ul className="space-y-2">
              {serviceCategories[1].services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 neon-text">IT Services</h4>
            <ul className="space-y-2">
              {serviceCategories[2].services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 neon-text">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-8 border-t border-gray-700">
          <div>
            <h5 className="text-md font-semibold text-white mb-3">Support</h5>
            <ul className="space-y-2">
              {supportLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold text-white mb-3">Legal</h5>
            <ul className="space-y-2">
              {legalLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold text-white mb-3">Newsletter</h5>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest AI and IT innovations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-cyan-400 text-slate-900 rounded-r-lg font-semibold hover:bg-cyan-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="mb-8 pt-8 border-t border-gray-700">
          <h5 className="text-md font-semibold text-white mb-4 text-center">Awards & Certifications</h5>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2 text-gray-400">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Best AI Solutions 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Global Reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for innovation</span>
              <span>•</span>
              <span>Powered by AI</span>
              <span>•</span>
              <span>Built for the future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;