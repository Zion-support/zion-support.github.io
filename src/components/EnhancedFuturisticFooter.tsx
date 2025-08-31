<<<<<<< HEAD
import React from 'react.ts';
import { Link               } from 'react-router-dom.ts';
import { motion               } from 'framer-motion.ts';
import { Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Award,
  Users,
  TrendingUp,
<<<<<<< HEAD
  Target,
  Lightbulb,
  Cpu,
  Cloud,
  Database,
  Network,
  Lock,
  Eye,
  FileText,
  Settings,
  Key,
  ShieldCheck,
<<<<<<< HEAD
=======
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity
export const EnhancedFuturisticFooter: React.FC = (): JSX.Element => {
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Smartphone,
  Monitor,
  Server,
  DollarSign,
  Scale,
  Leaf,
  Factory,
  Building,
<<<<<<< HEAD
  Car
} from 'lucide-react';
export const EnhancedFuturisticFooter: React.FC = () => {
  Search,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  GitFork,
  Atom,
  Target,
  TrendingUp,
  CheckCircle,
  ShoppingCart,
  Building,
  MailIcon,
  BookOpen,
  Calendar,
  Settings
=======
  CheckCircle
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
=======
  Car,
  Atom
              } from 'lucide-react.ts';

<<<<<<< HEAD
export const EnhancedFuturisticFooter: React.FC = (): JSX.Element => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
<<<<<<< HEAD
      title: 'Services',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Services Overview', href: '/services-overview' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Services Catalog', href: '/services-catalog' },
        { name: 'Services Comparison', href: '/services-comparison' }
      ]
    },
    {
<<<<<<< HEAD
      title: 'Core Technologies',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
=======
      title: 'Comp',
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Cybersecurity Suite', href: '/services/ai-compliance-copilot' },
        { name: 'Data Analytics', href: '/services/data-analytics' }
      ]
    },
    {
      title: 'Innovation Hub',
      icon: Star,
=======
      title: 'AI & Analytics Services',
      icon: Brain,
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Predictive Analytics Platform', href: '/services/ai-predictive-analytics-platform' },
        { name: 'AI Customer Experience Platform', href: '/services/ai-customer-experience-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Content Studio Pro', href: '/services/ai-content-studio' }
      ]
    },
    {
      title: 'Cybersecurity & Emerging Tech',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      links: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Smart Contract Risk Scanner', href: '/services/smart-contract-risk-scanner' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
        { name: 'Blockchain Enterprise Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Space Tech Solutions', href: '/services/space-tech' }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'IoT & Edge Computing', href: '/services/iot-edge' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Consulting', href: '/services/it-consulting' },
        { name: 'Onsite Support', href: '/services/onsite-support' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: Crown,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Sustainability', href: '/services/sustainability' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Services Overview', href: '/services-overview' },
    { name: 'Pricing Guide', href: '/pricing-guide' },
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission' },
    { name: 'Team', href: '/team', description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Blog', href: '/blog', description: 'Latest insights' },
    { name: 'Press', href: '/press', description: 'Media resources' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
    { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'Documentation', href: '/docs', description: 'Technical guides' },
    { name: 'Training', href: '/training', description: 'Learning resources' },
    { name: 'Webinars', href: '/webinars', description: 'Educational sessions' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Service terms' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },
    { name: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' },
    { name: 'Security', href: '/security', description: 'Security practices' },
    { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' }
  ];

  // Create missing pages for broken links
<<<<<<< HEAD
  const createMissingPage = (name: anyanyanyanyanyanyanyanyanyanyanyanyanyanyanystring, href: string)                => {
=======
  const createMissingPage = (name: string, href: string) => {
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    // For now, we'll create placeholder pages for missing routes
    // These will be created as separate components
    return (
      <Link
        key={name}
        to={href}
        className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
      >
        {name}
      </Link>
    );
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Section - Services & Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Services Overview */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {footerSections.slice(0, 2).map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                      <section.icon className="w-3 h-3 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">{section.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {section.links.slice(0, 3).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Quick Access
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <Star className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        Quick access
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Detailed Services */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            viewport={{ once: true }}
            transition={{ duration: anyanyanyanyanyanyanyanyanyanyanyanyanyany0.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index)               => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. 
                We help businesses innovate and thrive in the digital age.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
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
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. Transforming businesses with cutting-edge technology.
            </p>
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-200"></div>
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {/* Additional Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyInfo.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {supportResources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-600/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} hover:border-cyan-400/50 transition-all duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-400">Subscribe to our newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-r-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  SOC 2 Compliant
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />
                  ISO 27001 Certified
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />
                  AWS Partner
                </span>
      title: 'Pricing & Plans',
      icon: DollarSign,
      color: 'from-emerald-600 to-teal-600',
      links: [
        { name: 'Pricing Overview', href: '/pricing' },
        { name: 'Pricing Guide', href: '/pricing-guide' },
        { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-guide-2026' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Schedule Demo', href: '/schedule-demo' },
        { name: 'Contact Sales', href: '/contact' }
      ]
    },
    {
      title: 'Company',
      icon: Building,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Press', href: '/news' },
        { name: 'Events', href: '/events' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Marketplace', href: '/marketplace' }
      ]
    },
    {
      title: 'Resources & Learning',
      icon: BookOpen,
      color: 'from-orange-600 to-red-600',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Training', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support Center', href: '/support' },
        { name: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Platform & Tools',
      icon: Settings,
      color: 'from-slate-600 to-gray-600',
      links: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Login', href: '/login' },
        { name: 'Sign Up', href: '/signup' },
        { name: 'System Status', href: '/status' },
        { name: 'API Documentation', href: '/documentation' },
        { name: 'Developer Tools', href: '/documentation' }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      color: 'from-gray-600 to-slate-600',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Security', href: '/security' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ];
  const quickLinks = [
    { name: 'Get Quote', href: '/request-quote', icon: DollarSign },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },
    { name: 'Contact Support', href: '/support', icon: MessageCircle },
    { name: 'View Status', href: '/status', icon: Gauge }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];
  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@ziontechgroup.com',
    address: '123 Innovation Drive, Tech City, TC 12345'
  };
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-slate-400">Innovating Tomorrow, Today</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Leading provider of innovative technology solutions, helping businesses transform and thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            {/* Footer Sections */}
=======
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Complete Service Portfolio
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{section.title}</h4>
                    <p className="text-sm text-slate-400">Innovative solutions</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-3 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-3 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400">
                Transforming businesses through innovation
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright & Additional Info */}
          <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
            <div className="text-sm text-slate-400 mb-2">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="text-xs text-slate-500 space-x-4">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II Compliant</span>
              <span>•</span>
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Brain className="w-8 h-8 text-cyan-400 animate-bounce" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Rocket className="w-8 h-8 text-purple-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Brain className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Shield className="w-8 h-8 text-purple-400 animate-bounce delay-1000" />
      </div>
    </footer>
  );
};