<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
<<<<<<< HEAD
  Clock,
  Facebook,
  Twitter,
=======
import React, { useState } from 'react.ts';
import { Link               } from 'react-router-dom.ts';
import { motion               } from 'framer-motion.ts';
import { Twitter,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Linkedin,
  Instagram,
=======
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Youtube,
  Github,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowUp,
  Heart,
  Star,
  CheckCircle,
  Award,
<<<<<<< HEAD
<<<<<<< HEAD
  Users,
  CheckCircle
=======
  Lock,
  Eye,
  Atom,
  Code,
<<<<<<< HEAD
  BookOpen,
  Truck,
  ExternalLink,
  ChevronDown,
  Copyright
import { AnimatePresence               } from 'framer-motion.ts';

interface FooterLink {














  name: string;
  path: string;
  icon: ;
  external?: boolean;

interface FooterSection {
  title: string;
  icon: ;
  links: FooterLink[];

const footerSections = [
  {
title: 'Comp',;
icon: Globe,;
links: [;
{ name: 'About Us', path: '/about', icon: Users;













},
      { name: 'Partners', path: '/partners', icon: Users },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'Contact', path: '/contact', icon: Phone },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Help Center', path: '/help', icon: HelpCircle }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    links: [
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: Shield },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
      { name: 'AI-Powered SEO', path: '/services/ai-seo', icon: TrendingUp },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
      { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', icon: MessageCircle },
      { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', icon: DollarSign }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Server },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', icon: DollarSign },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: BarChart3 },
      { name: 'IT Consulting', path: '/it-consulting', icon: Cpu },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    links: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Lock },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', icon: Shield },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', icon: Eye },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', icon: Lock },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: CheckCircle }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Brain },
      { name: 'Space Technology', path: '/space-tech', icon: Satellite },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    links: [
      { name: 'Micro CRM', path: '/services/micro-crm', icon: Users },
      { name: 'Helpdesk Platform', path: '/services/helpdesk', icon: MessageCircle },
      { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3 },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', icon: HelpCircle },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp },
      { name: 'Mobile Survey', path: '/services/mobile-survey', icon: Smartphone },
      { name: 'Email Sequencer', path: '/services/email-sequencer', icon: Mail },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', icon: Video }
    ]
  },
  {
    title: 'Support & Resources',
    icon: HelpCircle,
    links: [
      { name: 'Help Center', path: '/help', icon: HelpCircle },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Blog', path: '/blog', icon: BookOpen },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'Pricing', path: '/pricing', icon: DollarSign },
      { name: 'Contact Support', path: '/contact', icon: MessageCircle },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
      { name: 'Sitemap', path: '/sitemap', icon: FileText }
    ]

];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-500' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-500' },
  { name: 'YouTube', icon: TestTube, href: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-600' }
];
=======
  Database,
  Network,
  Server
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
} from 'lucide-react';

export function Footer(...args: any[]): any {
  const currentYear = new Date().getFullYear();
<<<<<<< HEAD

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

<<<<<<< HEAD
  const footerSections = [
    {
      title: "AI & Machine Learning",
=======
  const [activeSection, setActiveSection] = useState<any>(null);

  const footerSections = [
    {
      title: 'Comp',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Story', path: '/about/story', icon: FileText },
        { name: 'Team', path: '/about/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Network },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Quantum Solutions',
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      icon: Brain,
      services: [
        { name: "AI Customer Success Automation", href: "/services/ai-powered-customer-success-automation" },
        { name: "AI Churn Predictor", href: "/services/ai-powered-churn-predictor" },
        { name: "AI Interview Assessment", href: "/services/ai-interview-assessment-platform" },
        { name: "AI Returns Management", href: "/services/ai-returns-management-saas" },
        { name: "AI SEO Platform", href: "/services/ai-powered-seo-platform" },
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation-platform" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-suite" },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization" },
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform" },
        { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform" },
        { name: "AI Content Optimizer Pro", href: "/services/ai-content-optimizer-pro" },
        { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation" },
        { name: "AI DevOps Automation", href: "/services/ai-devops-automation-platform" },
        { name: "AI IoT Edge Computing", href: "/services/ai-iot-edge-computing-platform" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Content Marketing", href: "/services/ai-content-marketing-suite" },
        { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant" },
        { name: "AI Content Intelligence", href: "/services/ai-content-intelligence-platform" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management" },
        { name: "AI Healthcare", href: "/services/ai-healthcare-platform" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "Micro SAAS Solutions", href: "/micro-saas" }
      ]
    },
    {
      title: "AI Cybersecurity & Infrastructure",
      icon: Shield,
      services: [
        { name: "AI-Powered Cybersecurity Suite", href: "/services/ai-powered-cybersecurity-suite" },
        { name: "Enterprise IT Infrastructure Management", href: "/services/enterprise-it-infrastructure-management" },
        { name: "Cloud Migration & Optimization", href: "/services/cloud-migration-and-optimization" },
        { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform" },
        { name: "AI DevOps Automation", href: "/services/ai-devops-automation" },
        { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Healthcare Tech', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/financial-solutions' },
        { name: 'Manufacturing', href: '/manufacturing-solutions' },
        { name: 'Industry Solutions', href: '/industry-solutions' },
        { name: 'Emerging Tech', href: '/emerging-tech' }
>>>>>>> 4cf84cee096ee4bad48102099687eb335d856d5c
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: "Quantum Computing & Emerging Tech",
      icon: Atom,
      services: [
        { name: "AI-Quantum Hybrid Computing Platform", href: "/services/ai-quantum-hybrid-platform" },
        { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service" },
        { name: "AI Space Technology Platform", href: "/services/ai-space-technology-platform" },
        { name: "AI IoT Edge Computing Platform", href: "/services/ai-iot-edge-computing-platform" }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Support Center', href: '/help' },
        { name: 'Training', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Research', href: '/research-development' }
      ]
    }
  ];

  const solutions = [
    { name: "Enterprise Solutions", href: "/solutions/enterprise" },
    { name: "Healthcare Solutions", href: "/solutions/healthcare" },
    { name: "Financial Solutions", href: "/solutions/financial" },
    { name: "Government Solutions", href: "/solutions/government" },
    { name: "Manufacturing Solutions", href: "/solutions/manufacturing" },
    { name: "Retail Solutions", href: "/solutions/retail" },
    { name: "Education Solutions", href: "/solutions/education" },
    { name: "Startup Solutions", href: "/solutions/startup" }
  ];

<<<<<<< HEAD
  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Documentation", href: "/documentation" },
    { name: "API Reference", href: "/api" },
    { name: "Help Center", href: "/help" },
    { name: "FAQ", href: "/faq" }
  ];
=======
<<<<<<< HEAD
  // Toggle section expansion (for mobile)
  const toggleSection = (title: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/request-quote" },
    { name: "Schedule Demo", href: "/schedule-demo" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: '#'
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9AM-6PM EST',
      href: '#'
    }
  ];

=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed">
              Leading provider of innovative AI, IT, and Micro SAAS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-zion-slate-light text-sm">
                <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
<<<<<<< HEAD
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.hours}</span>
=======
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.slice(1, 6).map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-white">{section.title}</h3>
              </div>

              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"

                    <div className="flex items-center space-x-2">
                      <link.icon className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
=======
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section)               => (
            <div key={section.title} className="space-y-4">
              <motion.button
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                className="flex items-center space-x-2 text-lg font-semibold text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded p-2"
                aria-expanded={activeSection === section.title}
              >
                <section.icon className="w-5 h-5" />
                <span>{section.title}</span>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ height: activeSection === section.title ? 'auto' : 0, opacity: activeSection === section.title ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Get in Touch</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>contact@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>123 Innovation Drive, Tech City, TC 12345</span>
                </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
              <div className="flex items-center text-zion-slate-light text-sm">
                <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-zion-cyan font-semibold text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
              <li><Link to="/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link to="/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
              <li><Link to="/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-zion-cyan font-semibold text-lg flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare Tech</Link></li>
              <li><Link to="/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Financial Solutions</Link></li>
              <li><Link to="/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Manufacturing</Link></li>
              <li><Link to="/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Retail Solutions</Link></li>
              <li><Link to="/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Government</Link></li>
              <li><Link to="/education" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Education</Link></li>
              <li><Link to="/startup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Startup Solutions</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h3 className="text-zion-cyan font-semibold text-lg flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
              <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Phone</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/blog" className="hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/docs" className="hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/white-papers" className="hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/webinars" className="hover:text-zion-cyan transition-colors">Webinars</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/help" className="hover:text-zion-cyan transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-zion-cyan transition-colors">Contact Support</Link></li>
                <li><Link to="/training" className="hover:text-zion-cyan transition-colors">Training</Link></li>
                <li><Link to="/faq" className="hover:text-zion-cyan transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
                <li><Link to="/security" className="hover:text-zion-cyan transition-colors">Security</Link></li>
                <li><Link to="/compliance" className="hover:text-zion-cyan transition-colors">Compliance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Connect</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/marketplace" className="hover:text-zion-cyan transition-colors">Marketplace</Link></li>
                <li><Link to="/talent" className="hover:text-zion-cyan transition-colors">Talent Network</Link></li>
                <li><Link to="/community" className="hover:text-zion-cyan transition-colors">Community</Link></li>
                <li><Link to="/research-development" className="hover:text-zion-cyan transition-colors">R&D</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zion-blue-darker border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Empowering Innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Accessibility</Link>
              <Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors">System Status</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center text-white"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}