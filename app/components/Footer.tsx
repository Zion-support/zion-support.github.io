import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Clock, ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Users, Award } from "lucide-react";

import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Facebook, Instagram, Youtube, Award, Users, Shield, Zap, Brain, Cloud, CheckCircle } from 'lucide-react';

const ImprovedFooter = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro' },
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { label: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { label: 'AI Automation Platform', href: '/ai-automation-platform' },
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro' },
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { label: 'AI HR & Recruitment Pro', href: '/ai-hr-recruitment-pro' },
        { label: 'AI Financial Analysis', href: '/ai-financial-analysis' },
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
        { label: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro' },
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro' },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
        { label: 'AI Sentiment Analysis Pro', href: '/ai-sentiment-analysis-pro' },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
        { label: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro' },
        { label: 'AI Language Translation', href: '/ai-language-translation' },
        { label: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { label: 'AI Data Mining Pro', href: '/ai-data-mining-pro' },
        { label: 'AI Video Analysis', href: '/ai-video-analysis' },
        { label: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting' },
        { label: 'AI NLP Text Analysis', href: '/ai-nlp-text-analysis' },
        { label: 'View All AI Services', href: '/ai-services', featured: true }
      ]
    },
    {
      title: 'IT Services',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      links: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Blockchain Development', href: '/blockchain-development' },
        { label: 'IoT Solutions', href: '/iot-solutions' },
        { label: 'AR/VR Development', href: '/ar-vr-development' },
        { label: 'DevOps Solutions', href: '/devops-solutions' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'IT Support', href: '/it-support' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' },
        { label: 'IT Consulting', href: '/it-consulting' },
        { label: 'Cybersecurity Audit', href: '/cybersecurity-audit' },
        { label: 'Data Center Services', href: '/data-center-services' },
        { label: 'Asset Management', href: '/asset-management' },
        { label: 'View All IT Services', href: '/services', featured: true }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      links: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { label: 'Zion AI Inventory Manager', href: '/zion-ai-inventory-manager' },
        { label: 'Zion HR Assistant Pro', href: '/zion-hr-assistant-pro' },
        { label: 'Zion AI Accounting Suite', href: '/zion-ai-accounting-suite' },
        { label: 'Zion E-commerce Optimizer', href: '/zion-ecommerce-optimizer' },
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights' },
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
        { label: 'Zion AI Social Listener', href: '/zion-ai-social-listener' },
        { label: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
        { label: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
        { label: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
        { label: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
        { label: 'Zion AI Workflow Automation', href: '/zion-ai-workflow-automation' },
        { label: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
        { label: 'Zion AI Data Warehouse', href: '/zion-ai-data-warehouse' },
        { label: 'Zion AI Mobile App Builder', href: '/zion-ai-mobile-app-builder' },
        { label: 'Zion AI API Manager', href: '/zion-ai-api-manager' },
        { label: 'Zion AI Backup Manager', href: '/zion-ai-backup-manager' },
        { label: 'Zion AI Testing Automation', href: '/zion-ai-testing-automation' },
        { label: 'View All Micro SAAS', href: '/micro-saas', featured: true }
      ]
    },
  ], []);

  const services = useMemo(() => [
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "AI Automation", href: "/ai-automation-platform" },
    { name: "AI Content Generation", href: "/ai-content-generation" },
    { name: "AI Customer Support", href: "/ai-customer-support" },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
    { name: "AI Data Analytics", href: "/ai-data-analytics" },
    { name: "AI Document Processing", href: "/ai-document-processing" },
    { name: "AI Marketing Automation", href: "/ai-marketing-automation" },
    { name: "AI Predictive Analytics", href: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", href: "/ai-voice-assistant" },
    { name: "AI Workflow Automation", href: "/ai-workflow-automation" },
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Migration", href: "/cloud-migration" },
    { name: "DevOps Services", href: "/devops-services" },
    { name: "IT Consulting", href: "/it-consulting" },
    { name: "Network Security", href: "/network-security" },
    { name: "Software Development", href: "/software-development" },
    { name: "System Integration", href: "/system-integration" },
    { name: "Web Development", href: "/web-development" },
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Project Management Pro", href: "/project-management-pro" },
    { name: "AI CRM Pro", href: "/zion-ai-crm-pro" },
    { name: "Inventory Smart", href: "/zion-inventory-smart" },
    { name: "Financial Analytics Pro", href: "/ai-financial-analytics-pro" },
    { name: "Performance Monitor", href: "/zion-performance-monitor" },
    { name: "AI Marketing Automation", href: "/zion-ai-marketing-automation" },
    { name: "Email Automation", href: "/zion-email-automation" },
    { name: "Data Analytics", href: "/data-analytics" },
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Support Center", href: "/support" },
    { name: "Status Page", href: "/status" },
    { name: "Community", href: "/community" },
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Security", href: "/security" },
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of AI and IT solutions. We empower businesses with cutting-edge technology, 
              intelligent automation, and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
  ];
;
const legal = [

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/news' },
    { label: 'Press', href: '/press' },
    { label: 'Partners', href: '/partners' }
  ];

  const resourceLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
    { label: 'Support', href: '/support' },
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'White Papers', href: '/whitepapers' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Security', href: '/security' }
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { label: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.links.slice(0, 8).map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.href}
                    className={`block text-sm transition-colors duration-300 group ${
                      link.featured 
                        ? 'text-cyan-400 hover:text-cyan-300 font-medium' 
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{link.label}</span>
                      {link.featured && <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />}
                    </div>
                  </Link>
                ))}
                {category.links.length > 8 && (
                  <Link
                    to={category.links.find(l => l.featured)?.href || '#'}
                    className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
                  >
                    <div className="flex items-center space-x-2">
                      <span>View All {category.title}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Tech Group
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
>>>>>>> origin/main
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h3>
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
            <h3 className="text-lg font-semibold mb-4 mt-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-cyan-400" />
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.slice(0, 4).map((link) => (
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
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';  ArrowRightIcon'
} from '@heroicons/react/24/outline";
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react";
  HeartIcon
} from '@heroicons/react/24/outline";
} from '@heroicons/react/24/outline";
  GlobeAltIcon
} from '@heroicons/react/24/outline";
} from '@heroicons/react/24/outline";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },'
    { name: 'IT Solutions', href: '/it-solutions' },'
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },'
    { name: 'Cybersecurity', href: '/cybersecurity' },'
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },'
    { name: 'Digital Transformation', href: '/digital-transformation' },'
    { name: '5G Solutions', href: '/5g-solutions' }'
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "IT Solutions", href: "/it-solutions" },
    { name: "Micro SaaS Solutions", href: "/micro-saas-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Cloud Infrastructure", href: "/cloud-solutions" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "5G Solutions", href: "/5g-solutions" }
>>>>>>> origin/main
  ];

  const company = [
    { name: 'About Us', href: '/about' },'
    { name: 'Solutions', href: '/solutions' },'
    { name: 'Pricing', href: '/pricing' },'
    { name: 'Blog', href: '/blog' },'
    { name: 'Careers', href: '/careers' },'
    { name: 'Case Studies', href: '/case-studies' }'
  ];
  const support = [
    { name: 'Contact', href: '/contact' },'
    { name: 'Support', href: '/support' },'
    { name: 'Tutorials', href: '/tutorials' },'
    { name: 'Demo', href: '/demo' },'
    { name: 'Documentation', href: '/docs' }'
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'API Documentation', href: '/api-docs' }
>>>>>>> origin/main
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },'
    { name: 'Terms of Service', href: '/terms' },'
    { name: 'Cookie Policy', href: '/cookies' },'
    { name: 'GDPR', href: '/gdpr' },'
    { name: 'Security', href: '/security' },'
    { name: 'Compliance', href: '/compliance' }'
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },'
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },'
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }'
  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },'
      { name: 'IT Solutions', href: '/it-solutions' },'
      { name: 'Cybersecurity', href: '/cybersecurity' },'
      { name: 'Cloud Solutions', href: '/cloud-solutions' },'
      { name: 'Digital Transformation', href: '/digital-transformation' },'
      { name: 'Micro SaaS', href: '/micro-saas-solutions' },'
      { name: '5G Solutions', href: '/5g-solutions' },'
    ],
    company: [
      { name: 'About Us', href: '/about' },'
      { name: 'Our Team', href: '/team' },'
      { name: 'Careers', href: '/careers' },'
      { name: 'Case Studies', href: '/case-studies' },'
      { name: 'Contact', href: '/contact' },'
    ],
    resources: [
      { name: 'Blog', href: '/blog' },'
      { name: 'Tutorials', href: '/tutorials' },'
      { name: 'Documentation', href: '/docs' },'
      { name: 'Support', href: '/support' },'
      { name: 'Demo', href: '/demo' },'
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },'
      { name: 'Terms of Service', href: '/terms' },'
      { name: 'Cookie Policy', href: '/cookies' },'
    ]
  }
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: GlobeAltIcon },'
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: GlobeAltIcon },'
  ];
  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },'
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },'
      { name: 'Cybersecurity', href: '/cybersecurity' },'
      { name: 'Digital Transformation', href: '/digital-transformation' }'
    ],
    company: [
      { name: 'About Us', href: '/about' },'
      { name: 'Our Team', href: '/team' },'
      { name: 'Careers', href: '/careers' },'
      { name: 'Contact', href: '/contact' }'
    ],
    resources: [
      { name: 'Blog', href: '/blog' },'
      { name: 'Documentation', href: '/docs' },'
      { name: 'Support', href: '/support' },'
      { name: 'FAQ', href: '/faq' }'
    ]
  }
  return (
    <footer className="bg-gray-900 text-white">"
      <div className="max-w-7xl mx-auto px-4 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
          {/* Company Info */}
          <div className="lg:col-span-2">"
            <Link to="/" className="flex items-center space-x-3 mb-6 group">"
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">"
                <span className="text-white font-bold text-xl">Z</span>"
          <div className="lg:col-span-1">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>"
    <footer className="bg-slate-900 border-t border-slate-700/50">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">"
          {/* Company Info */}
          <div className="lg:col-span-2">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">"
                <CpuChipIcon className="w-5 h-5 text-white" />"
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>"
            </div>
            <p className="text-gray-400 mb-6 max-w-md">"
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            {/* Contact Info */}            <div className="space-y-3 mb-6">"
            {/* Contact Info */}
            <div className="space-y-3 mb-6">"
              <div className="flex items-center space-x-3 text-gray-300">"
                <PhoneIcon className="w-5 h-5 text-purple-400" />"
            {/* Contact Info */}
            <div className="space-y-3">"
              <div className="flex items-center space-x-3 text-gray-400">"
                <PhoneIcon className="w-4 h-4" />"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          { /* Company Info */ }
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <CpuChipIcon className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            {/* Contact Info */}            <div className="space-y-3 mb-6">
            { /* Contact Info */ }
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
            { /* Contact Info */ }
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="w-4 h-4" />
>>>>>>> origin/main
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">"
                <EnvelopeIcon className="w-4 h-4" />"
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">"
                <MapPinIcon className="w-4 h-4" />"
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            {/* Social Links */}            <div className="flex space-x-4">"
              {socialLinks.map((social) => (
                <a
                  key={social.name}
<<<<<<< HEAD
                  href={social.href}
                  target="_blank""
                  rel="noopener noreferrer""
                  className="text-gray-400 hover:text-white transition-colors""
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && '📘'}'
                  {social.icon === 'twitter' && '🐦'}'
                  {social.icon === 'linkedin' && '💼'}'
                  {social.icon === 'github' && '🐙'}'
                </a>
              ))}            <div className="flex space-x-4">"
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
          <div className="lg:col-span-1">"
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300 mb-4">"
              Leading provider of AI and IT solutions that transform businesses 
              through innovative technology.
            </p>
            <div className="flex space-x-4">"
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Facebook className="w-5 h-5" />"
            {/* Social Links */}
            <div className="flex space-x-4">"
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
                <Linkedin className="w-5 h-5" />"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Twitter className="w-5 h-5" />"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Linkedin className="w-5 h-5" />"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Github className="w-5 h-5" />"
              </a>
                  <span className="sr-only">{social.name}</span>"
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">"
                    {social.icon === 'linkedin' && <span className="text-xs">in</span>}"
                    {social.icon === 'twitter' && <span className="text-xs">t</span>}"
                    {social.icon === 'github' && <span className="text-xs">g</span>}"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
                  <span className="sr-only">{social.name}</span>
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                    { social.icon === 'linkedin' && <span className="text-xs">in</span> }
                    { social.icon === 'twitter' && <span className="text-xs">t</span> }
                    { social.icon === 'github' && <span className="text-xs">g</span> }
>>>>>>> origin/main
                  </div>
                </a>
              ))
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
                <Github className="w-5 h-5" />"
              </a>
            </div>
          </div>
          { /* Services */ }
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</h3>"
            <ul className="space-y-3">"
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>"
            <ul className="space-y-2">"
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group""
            <h3 className="text-white font-semibold mb-4">Services</h3>"
            <ul className="space-y-2">"
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors""
            <h4 className="text-lg font-semibold mb-4">Services</h4>"
            <ul className="space-y-2">"
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center""
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />"
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors""
                  >
                    { link.name }
>>>>>>> origin/main
=======
>>>>>>> origin/main
                  </Link>
                </li>

  ))};

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
            <div className="flex items-center">"
              <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" />"
              <span className="text-gray-300">+1 (555) 123-4567</span>"
            </div>
            <div className="flex items-center">"
              <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-400" />"
              <span className="text-gray-300">info@ziontechgroup.com</span>"
            </div>
            <div className="flex items-center space-x-3 text-gray-400">"
              <MapPinIcon className="w-5 h-5 text-purple-400" />"
              <span>Middletown, DE 19709</span>
        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-slate-700">"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">"
            <div className="flex items-center space-x-2">"
              <PhoneIcon className="w-4 h-4 text-purple-400" />"
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
              <span>+1-302-464-0950</span>
            </div>
            <div className="flex items-center space-x-2">"
              <EnvelopeIcon className="w-4 h-4 text-purple-400" />"
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">"
              <MapPinIcon className="w-4 h-4 text-purple-400" />"
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            <div className="flex items-center">"
              <MapPinIcon className="w-5 h-5 mr-2 text-blue-400" />"
              <span className="text-gray-300">San Francisco, CA</span>"
>>>>>>> origin/main
            </div>
          </div>
        </div>

          { /* Copyright */ }
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"></div>
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        { /* Bottom Section */ }"
        <div className="mt-12 pt-8 border-t border-slate-700/50"></div>"
          <div className="flex flex-col md:flex-row justify-between items-center"></div>"
            <div className="text-gray-400 text-sm"></div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            { /* Legal Links */ }"
            <div className="flex space-x-6 mt-4 md:mt-0"></div>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={ link.href }"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"

                >
                  { link.name }
                </Link>)
              ))
            </div>"
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"></div>""
          <p className="text-gray-400 text-sm">"
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>"
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0"></div>"
            <span>Made with</span>"
            <HeartIcon className="w-4 h-4 text-red-500" />"
            <span>for innovation</span>"
          <div className="flex space-x-6 text-gray-400 text-sm"></div>""
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>""
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>"
          </div>

        {/* Bottom Bar */}
<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            {legal.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
=======
        { /* Copyright */ }"
        <div className="border-t border-gray-800 mt-8 pt-8 text-center"></div>"
>>>>>>> origin/main
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved. Made with{ ' ' }"
            <HeartIcon className="w-4 h-4 inline text-red-500" /> for our clients.

          </p>

        </div>
      </div>
    </footer>

  );
});

Footer.displayName = "Footer";

export default Footer;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
=======
"
>>>>>>> origin/main
