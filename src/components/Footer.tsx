'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Zap, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone'
      });
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'Machine Learning', href: '/machine-learning' },
        { name: 'Natural Language Processing', href: '/nlp' },
        { name: 'Computer Vision', href: '/computer-vision' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'Quantum AI', href: '/quantum-ai' },
      ],
    },
    {
      title: 'IT Services',
      icon: Cpu,
      services: [
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Services', href: '/database-services' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'IT Support', href: '/it-support' },
      ],
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      services: [
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Code Review Assistant', href: '/ai-code-generation' },
        { name: 'AI Content Generator', href: '/ai-content-generation' },
        { name: 'AI Lead Generation', href: '/ai-lead-generation' },
        { name: 'AI Document Processing', href: '/ai-document-processing' },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer' },
        { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions' },
        { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer' },
      ],
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Analytics Tools', href: '/analytics-tools' },
        { name: 'Business Apps', href: '/business-apps' },
      ],
    },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'System Status', href: '/status' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-cyber neon-text">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services. Transform your 
              business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+13024640950" 
                onClick={handlePhoneClick}
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-3" />
                kleber@ziontechgroup.com
              </a>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-3" />
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </a>
              <div className="flex items-center text-yellow-400">
                <Clock className="w-4 h-4 mr-3" />
                24/7 Support Available
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category) => (
            <div key={category.title} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <category.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white neon-text">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links & Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-cyan-400/20">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 neon-text">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4 neon-text">Legal</h3>
            <div className="grid grid-cols-2 gap-2">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-cyan-400/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, IT solutions, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="cyber-button px-6 py-3 font-medium transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-400/20 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <div>ISO 27001 Certified</div>
              <div>SOC 2 Type II Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;