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
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Users,
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
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon,
  HeartHandshake
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Business Intelligence',
      featured: true,
      links: [
        { name: 'AI Business Intelligence Platform', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-creation', featured: true },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', featured: true }
      ]
    },
    {
      title: 'AI & Healthcare',
      featured: true,
      links: [
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', featured: true },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', featured: true },
        { name: 'AI Interview Assessment', href: '/services/interview-assessment-ai', featured: true }
      ]
    },
    {
      title: 'AI & Legal Tech',
      featured: true,
      links: [
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Legal Research Automation', href: '/services/ai-legal-research', featured: true },
        { name: 'Contract Analysis & Review', href: '/services/contract-analysis', featured: true },
        { name: 'Compliance Monitoring', href: '/services/compliance-monitoring', featured: true }
      ]
    },
    {
      title: 'AI & FinTech',
      featured: true,
      links: [
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Risk Assessment', href: '/services/ai-risk-assessment', featured: true },
        { name: 'Portfolio Optimization', href: '/services/portfolio-optimization', featured: true },
        { name: 'Algorithmic Trading', href: '/services/algorithmic-trading', featured: true }
      ]
    },
    {
      title: 'AI & Operations',
      featured: true,
      links: [
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'Demand Forecasting', href: '/services/demand-forecasting', featured: true },
        { name: 'Inventory Optimization', href: '/services/inventory-optimization', featured: true },
        { name: 'Route Optimization', href: '/services/route-optimization', featured: true }
      ]
    },
    {
      title: 'Quantum Computing',
      featured: true,
      links: [
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading', featured: true },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', featured: true },
        { name: 'Quantum Cryptography', href: '/services/quantum-cryptography', featured: true }
      ]
    },
    {
      title: 'IoT & Edge Computing',
      featured: true,
      links: [
        { name: 'IoT Edge Computing Platform', href: '/services/iot-edge-computing', featured: true },
        { name: 'Smart Manufacturing IoT', href: '/services/smart-manufacturing-iot', featured: true },
        { name: 'Connected Vehicle Solutions', href: '/services/connected-vehicles', featured: true },
        { name: 'Smart City IoT', href: '/services/smart-city-iot', featured: true }
      ]
    },
    {
      title: 'Blockchain & Web3',
      featured: true,
      links: [
        { name: 'Blockchain & Web3 Solutions', href: '/services/blockchain-web3', featured: true },
        { name: 'Smart Contract Development', href: '/services/smart-contracts', featured: true },
        { name: 'DeFi Applications', href: '/services/defi-applications', featured: true },
        { name: 'NFT Marketplace', href: '/services/nft-marketplace', featured: true }
      ]
    },
    {
      title: 'Cybersecurity',
      featured: true,
      links: [
        { name: 'Cybersecurity & Zero Trust Platform', href: '/services/cybersecurity', featured: true },
        { name: 'AI-Powered Threat Detection', href: '/services/ai-threat-detection', featured: true },
        { name: 'Incident Response Platform', href: '/services/incident-response', featured: true },
        { name: 'Security Headers & CSP Manager', href: '/services/security-headers-csp', featured: true }
      ]
    },
    {
      title: 'Digital Twin & Space Tech',
      featured: true,
      links: [
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Space Technology Solutions', href: '/services/space-tech', featured: true },
        { name: 'Satellite Operations', href: '/services/satellite-operations', featured: true },
        { name: 'Space Debris Tracking', href: '/services/space-debris-tracking', featured: true }
      ]
    },
    {
      title: 'Sustainable Technology',
      featured: true,
      links: [
        { name: 'Sustainable Technology Platform', href: '/services/sustainable-technology', featured: true },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true },
        { name: 'Environmental Monitoring', href: '/services/environmental-monitoring', featured: true },
        { name: 'Carbon Footprint Tracking', href: '/services/carbon-tracking', featured: true }
      ]
    },
    {
      title: 'Core IT Services',
      featured: true,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'IT Consulting', href: '/services/it-consulting', featured: true }
      ]
    }
  ];

  const quickLinks = [
    { name: 'All Services', href: '/services', icon: Rocket },
    { name: 'Innovative Micro SAAS 2025', href: '/innovative-micro-saas-services-2025', icon: Star },
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', icon: Zap },
    { name: 'Pricing Guide', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Building },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield }
  ];

  const supportLinks = [
    { name: 'Documentation', href: '/docs', icon: Code },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Status Page', href: '/status', icon: Gauge },
    { name: 'API Reference', href: '/api', icon: GitFork },
    { name: 'Community', href: '/community', icon: Users }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-purple-300 text-sm">Innovation 2030</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative micro SAAS solutions powered by AI, quantum computing, 
              and emerging technologies. Transform your business with our cutting-edge services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+13024640950"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-purple-400" />
                <span>ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerSections.slice(0, 6).map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                    {section.featured && <Star className="w-4 h-4 text-yellow-400" />}
                    <span>{section.title}</span>
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-purple-300 transition-colors text-sm flex items-center space-x-2 group"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Links and Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors group"
                >
                  <link.icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <div className="grid grid-cols-1 gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors group"
                >
                  <link.icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <div className="grid grid-cols-1 gap-3">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors group"
                >
                  <link.icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Links and Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2 text-xs text-gray-500">
                <Link to="/privacy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-purple-300 transition-colors">Terms of Service</Link>
                <span>•</span>
                <Link to="/cookies" className="hover:text-purple-300 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and emerging technologies. 
              Be the first to know about new services and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}