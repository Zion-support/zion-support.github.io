'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Clock, ArrowRight, Brain, Cloud, Shield, Code, 
  BarChart, Users, Zap, Sparkles, Cpu, Target, Globe, Database, 
  Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, 
  FileText, ExternalLink, Facebook, Twitter, Linkedin, Instagram, 
  Youtube, Github, MessageCircle, HelpCircle, Info, Shield as ShieldIcon,
  Award, CheckCircle, Globe as GlobeIcon, Mail as MailIcon, 
  Phone as PhoneIcon, MapPin as MapPinIcon
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Consulting', href: '/ai-services' },
        { name: 'Machine Learning', href: '/machine-learning' },
        { name: 'Natural Language Processing', href: '/nlp' },
        { name: 'Computer Vision', href: '/computer-vision' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Chatbots', href: '/ai-chatbots' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Services', href: '/database' },
        { name: 'Network Solutions', href: '/networking' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Managed IT Services', href: '/managed-it' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      services: [
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { name: 'AI Document Processor', href: '/ai-document-processor' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Robotics & Automation', href: '/robotics' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Partners', href: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'SLA', href: '/sla' },
    { name: 'Data Processing Agreement', href: '/dpa' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-2xl neon-text">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
                and digital transformation services. Transform your business with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
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
                    className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 neon-text">Services</h3>
              <div className="space-y-4">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-2 mb-3">
                      <category.icon className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-cyan-400 font-semibold text-sm">{category.title}</h4>
                    </div>
                    <ul className="space-y-2 ml-6">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 neon-text">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 neon-text">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 neon-text">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                  Stay Updated with Our Latest Innovations
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get the latest news, updates, and insights about AI, technology trends, and our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ in Delaware, USA</span>
                <div className="flex items-center space-x-2">
                  <ShieldIcon className="w-4 h-4 text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>GDPR Compliant</span>
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