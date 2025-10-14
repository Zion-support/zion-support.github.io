<<<<<<< HEAD
import React from 'react";
import { Link } from 'react-router-dom";
=======
<<<<<<< HEAD

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
    {
      title: '5G Solutions',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      links: [
        { label: '5G Data Analytics', href: '/5g-data-analytics' },
        { label: '5G Edge Computing', href: '/5g-edge-computing' },
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: 'View All 5G Solutions', href: '/5g-solutions', featured: true }
      ]
    }
  ];

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
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <div className="space-y-3">
              {resourceLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Address</p>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI innovations, technology trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
=======
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> origin/main
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
<<<<<<< HEAD
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
=======
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
=======
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
>>>>>>> origin/main
  const currentYear = new Date().getFullYear();
  
<<<<<<< HEAD
  const services = [
<<<<<<< HEAD
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "IT Solutions", href: "/it-solutions" },
    { name: "Micro SaaS Solutions", href: "/micro-saas-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Cloud Infrastructure", href: "/cloud-solutions" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "5G Solutions", href: "/5g-solutions" }
=======
<<<<<<< HEAD
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: '5G Solutions', href: '/5g-solutions' }
>>>>>>> origin/main
>>>>>>> origin/main
  ];

  const company = [
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" }
  ];
  const support = [
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/support" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Demo", href: "/demo" },
    { name: "Documentation", href: "/docs" }
=======
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" }
  ];
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: "twitter" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: "github" }
  const footerLinks = {
    services: [
      { name: "AI Solutions", href: "/ai-solutions" },
      { name: "IT Solutions", href: "/it-solutions" },
      { name: "Cybersecurity", href: "/cybersecurity" },
      { name: "Cloud Solutions", href: "/cloud-solutions" },
      { name: "Digital Transformation", href: "/digital-transformation" },
      { name: "Micro SaaS", href: "/micro-saas-solutions" },
      { name: "5G Solutions", href: "/5g-solutions" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "Demo", href: "/demo" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
>>>>>>> origin/main
    ]
  }
  const socialLinks = [
<<<<<<< HEAD
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
=======
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: GlobeAltIcon },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: GlobeAltIcon },
  ];
  const footerLinks = {
    services: [
      { name: "AI Solutions", href: "/ai-solutions" },
      { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
      { name: "Cybersecurity", href: "/cybersecurity" },
      { name: "Digital Transformation", href: "/digital-transformation" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "FAQ", href: "/faq" }
>>>>>>> origin/main
    ]
  }
  return (
<<<<<<< HEAD
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
=======
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          { /* Company Info */ }
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
    <footer className="bg-slate-900 border-t border-slate-700/50">
=======
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
>>>>>>> origin/main
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          { /* Company Info */ }
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <CpuChipIcon className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
<<<<<<< HEAD
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
=======
                  href={ social.href }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={ social.name }
                >
                  { social.icon === 'facebook' && '📘' }
                  { social.icon === 'twitter' && '🐦' }
                  { social.icon === 'linkedin' && '💼' }
                  { social.icon === 'github' && '🐙' }
>>>>>>> origin/main
                </a>
              ))}            <div className="flex space-x-4">"
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
          <div className="lg:col-span-1">"
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300 mb-4">"
              Leading provider of AI and IT solutions that transform businesses 
              through innovative technology.
            </p>
<<<<<<< HEAD
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
=======
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
            { /* Social Links */ }
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
=======
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, empowering businesses to transform 
              through cutting-edge technology and innovative approaches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
>>>>>>> origin/main
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
<<<<<<< HEAD
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
=======
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
>>>>>>> origin/main
          <div>
<<<<<<< HEAD
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
=======
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
<<<<<<< HEAD
                    to={ service.href }
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={ service.href }
                    className="text-gray-300 hover:text-white text-sm transition-colors"
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={ link.href }
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    to={ link.href }
                    className="text-gray-400 hover:text-purple-400 transition-colors"
>>>>>>> origin/main
                  >
                    { link.name }
=======
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
=======
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SAAS", href: "/micro-saas" }
  ];

=======
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', url: '/ai-video-analysis', description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis', description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', url: '/ai-chatbot-enterprise', description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', url: '/ai-content-moderation', description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', url: '/ai-predictive-modeling', description: 'ML forecasting' },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', url: '/ai-conversation-analytics', description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', url: '/ai-supply-chain-ai', description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics', description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting', description: 'Financial predictions' },
    { name: 'AI IoT Analytics', url: '/ai-iot-analytics', description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', url: '/ai-conversational-ai', description: 'Advanced conversations' },
    { name: 'AI Automated Testing', url: '/ai-automated-testing', description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', url: '/ai-knowledge-management', description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', url: '/ai-customer-churn', description: 'Churn prevention' },
    { name: 'AI Automated Reporting', url: '/ai-automated-reporting', description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', url: '/ai-voice-assistant', description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', description: 'Advanced content creation' }
  ]

  const microSaasServices = [
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Real-time BI & Analytics' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code Chatbot Platform' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated Email Campaigns' },
    { name: 'Social Media AI', url: '/social-media-ai', description: 'AI Social Management' },
    { name: 'AI Project Management', url: '/ai-project-management', description: 'Smart Project Tracking' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Automated SEO Tools' },
    { name: 'AI Sales CRM', url: '/ai-sales-crm', description: 'Intelligent CRM System' },
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'AI Design Tools' },
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', description: 'Process automation' },
    { name: 'Zion Social Scheduler', url: '/zion-social-scheduler', description: 'Social media management' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle' },
    { name: 'Cloud-Native Development', url: '/cloud-native-development', description: 'Microservices & containers' },
    { name: 'AI Integration Services', url: '/ai-integration-services', description: 'AI model integration' },
    { name: 'Blockchain Development', url: '/blockchain-development', description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', url: '/iot-development', description: 'Connected device solutions' },
    { name: 'E-commerce Development', url: '/e-commerce-development', description: 'Online store platforms' },
    { name: 'Advanced API Development', url: '/api-development-advanced', description: 'Enterprise-grade APIs' },
    { name: 'Data Engineering', url: '/data-engineering', description: 'Data pipeline development' },
    { name: 'Advanced Cybersecurity', url: '/cybersecurity-advanced', description: 'Threat hunting & response' },
    { name: 'Cloud Migration', url: '/cloud-migration-advanced', description: 'Zero-downtime migration' },
    { name: 'Advanced DevOps & SRE', url: '/devops-advanced', description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', url: '/machine-learning-ops', description: 'ML model deployment' },
    { name: 'Enterprise Integration', url: '/enterprise-integration', description: 'System integration' },
    { name: 'Performance Optimization', url: '/performance-optimization', description: 'App & infrastructure optimization' },
    { name: 'Disaster Recovery', url: '/disaster-recovery-advanced', description: 'Business continuity' },
    { name: 'Compliance Automation', url: '/compliance-automation', description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization', description: 'Cost reduction' },
    { name: 'Security Automation', url: '/security-automation', description: 'Automated security' },
    { name: 'Data Visualization & BI', url: '/data-visualization', description: 'Advanced dashboards' },
    { name: 'Workflow Automation', url: '/workflow-automation', description: 'Process automation' },
    { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' },
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce platforms' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile applications' },
    { name: 'Database Services', url: '/ai-data-analytics', description: 'Database management' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ]

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' }
  ]

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ]

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading provider of AI-powered IT solutions and digital transformation services.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-400 hover:text-white">
                    {service.name};
>>>>>>> origin/main
>>>>>>> origin/main
                  </Link>
                </li>
<<<<<<< HEAD
              ))
=======
  ))};
>>>>>>> origin/main
            </ul>
          </div>
<<<<<<< HEAD
          { /* Company */ }
=======
          
>>>>>>> origin/main
          <div>
<<<<<<< HEAD
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Company</h3>"
            <ul className="space-y-3">"
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>"
            <ul className="space-y-2">"
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group""
            <h3 className="text-white font-semibold mb-4">Company</h3>"
            <ul className="space-y-2">"
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors""
            <h4 className="text-lg font-semibold mb-4">Company</h4>"
            <ul className="space-y-2">"
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center""
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />"
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors""
=======
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
<<<<<<< HEAD
                    to={ item.href }
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={ item.href }
                    className="text-gray-300 hover:text-white text-sm transition-colors"
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={ link.href }
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    to={ link.href }
                    className="text-gray-400 hover:text-purple-400 transition-colors"
>>>>>>> origin/main
                  >
                    { link.name }
=======
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
>>>>>>> origin/main
                  </Link>
                </li>
              ))
            </ul>
=======
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2"/>
                <span className="text-gray-400">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2"/>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2"/>
                <span className="text-gray-400">New York, NY</span>
              </div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </div>
>>>>>>> origin/main
          </div>
<<<<<<< HEAD
          { /* Resources */ }
=======
          
>>>>>>> origin/main
          <div>
<<<<<<< HEAD
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Resources</h3>"
            <ul className="space-y-3 mb-8">"
              {resources.map((resource) => (
                <li key={resource.name}>
            <h3 className="text-white font-semibold text-lg mb-4">Support & Legal</h3>"
            <ul className="space-y-2">"
=======
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
<<<<<<< HEAD
            <h3 className="text-white font-semibold text-lg mb-4">Support & Legal</h3>
            <ul className="space-y-2">
>>>>>>> origin/main
              {support.map((item) => (
                <li key={item.name}>
          { /* Resources */ }
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>"
            <ul className="space-y-2">"
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
<<<<<<< HEAD
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center""
=======
                    to={ link.href }
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
>>>>>>> origin/main
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />"
                  <Link
<<<<<<< HEAD
                    to={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors""
=======
                    to={ item.href }
                    className="text-gray-300 hover:text-white text-sm transition-colors"
>>>>>>> origin/main
                  >
                    { item.name }
                  </Link>
                </li>
              ))
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
<<<<<<< HEAD
                    to={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors""
                  >
                    {item.name}
                    <ArrowRightIcon className="w-4 h-4 mr-2" />"
                    {link.name}
            <h3 className="text-white font-semibold mb-4">Resources</h3>"
            <ul className="space-y-2">"
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors""
=======
                    to={ item.href }
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    { item.name }
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    { link.name }
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={ link.href }
                    className="text-gray-400 hover:text-purple-400 transition-colors"
>>>>>>> origin/main
                  >
                    { link.name }
=======
                  <Link 
                    to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
>>>>>>> origin/main
                  </Link>
                </li>
              ))
            </ul>
          </div>
        </div>
<<<<<<< HEAD
        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">"
          <div className="max-w-2xl mx-auto text-center">"
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stay Updated</h3>"
            <p className="text-gray-300 mb-6 text-lg">"
=======
<<<<<<< HEAD
        { /* Newsletter Signup */ }
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stay Updated</h3>
            <p className="text-gray-300 mb-6 text-lg">
>>>>>>> origin/main
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">"
              <input
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold">"
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />"
              </button>
        { /* Contact Info */ }
=======

        {/* Contact Info */}
<<<<<<< HEAD
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
=======
>>>>>>> origin/main
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPinIcon className="w-5 h-5 text-purple-400" />
              <span>Middletown, DE 19709</span>
        { /* Contact Info */ }
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-purple-400" />
>>>>>>> origin/main
              <span>+1-302-464-0950</span>
            </div>
            <div className="flex items-center space-x-2">"
              <EnvelopeIcon className="w-4 h-4 text-purple-400" />"
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">"
              <MapPinIcon className="w-4 h-4 text-purple-400" />"
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
<<<<<<< HEAD
            <div className="flex items-center">"
              <MapPinIcon className="w-5 h-5 mr-2 text-blue-400" />"
              <span className="text-gray-300">San Francisco, CA</span>"
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">"
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">"
=======
=======
>>>>>>> origin/main
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
>>>>>>> origin/main
            </div>
          </div>
        </div>
<<<<<<< HEAD
        { /* Bottom Bar */ }
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
>>>>>>> origin/main
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-400" />"
            <span>by Zion Tech Group</span>
          </div>
<<<<<<< HEAD
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">"
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">"
          <div className="flex flex-col md:flex-row justify-between items-center">"
            <div className="text-gray-400 text-sm">"
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">"
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors""
=======
          { /* Copyright */ }
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        { /* Bottom Section */ }
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            { /* Legal Links */ }
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={ link.href }
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
>>>>>>> origin/main
                >
                  { link.name }
                </Link>
              ))
            </div>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">"
          <p className="text-gray-400 text-sm">"
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">"
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />"
            <span>for innovation</span>
          <div className="flex space-x-6 text-gray-400 text-sm">"
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>"
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>"
          </div>
<<<<<<< HEAD
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">"
          <p className="text-gray-400">"
            © {currentYear} Zion Tech Group. All rights reserved. Made with{' '}'
            <HeartIcon className="w-4 h-4 inline text-red-500" /> for our clients."
=======
        { /* Copyright */ }
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved. Made with{ ' ' }
            <HeartIcon className="w-4 h-4 inline text-red-500" /> for our clients.
=======

        {/* Bottom Bar */}
<<<<<<< HEAD
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
=======
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
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
=======
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5"/>
              </a>
>>>>>>> origin/main
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
>>>>>>> origin/main
>>>>>>> origin/main
          </p>
>>>>>>> origin/main
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
export default Footer;
}
export default Footer;
=======
  );
};
<<<<<<< HEAD
export default Footer;
=======

<<<<<<< HEAD
export default ImprovedFooter;
=======
export default Footer;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
