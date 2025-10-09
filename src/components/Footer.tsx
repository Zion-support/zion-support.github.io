'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Star, 
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  MessageSquare,
  Send,
  Award,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Code,
  Settings
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Solutions', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content-generation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'IT Consulting', path: '/it-consulting' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
        { name: 'AI Task Manager Pro', path: '/task-manager-pro' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' }
      ]
    },
    {
      title: 'Specialized',
      icon: Target,
      color: 'text-pink-400',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Robotics', path: '/robotics' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partners', path: '/partners' },
    { name: 'News', path: '/news' }
  ];

  const supportLinks = [
    { name: 'Contact', path: '/contact' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status', path: '/status' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'GDPR', path: '/gdpr' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center cyber-pulse">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white cyber-text neon-flicker-enhanced">Zion Tech Group</h3>
                <p className="text-cyan-400 cyber-glow-enhanced">AI & IT Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6 neon-text">Our Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-3">
                    <category.icon className={`w-4 h-4 ${category.color}`} />
                    <h5 className="text-sm font-semibold text-white">{category.title}</h5>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          to={service.path}
                          className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company & Support */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Company */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6 neon-text">Company</h4>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6 neon-text">Support</h4>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-white mb-4 neon-text">Stay Updated</h4>
              <p className="text-sm text-gray-300 mb-4">
                Get the latest AI and IT insights delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="cyber-button px-4 py-2 flex items-center">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-cyan-400/20 bg-slate-800/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2 neon-text">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2 neon-text">$50M+</div>
              <div className="text-sm text-gray-300">Client Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-400/20 bg-slate-900/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                SOC 2 Compliant
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-blue-400" />
                GDPR Ready
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1 text-yellow-400" />
                ISO 27001
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;