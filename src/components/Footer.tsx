import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
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
  Brain,
  Server,
  ShoppingCart,
  Users,
  BookOpen,
  FileText,
  MessageCircle,
  HelpCircle,
  Globe2,
  Rocket,
  Atom,
  Heart,
  Truck,
  DollarSign,
  Leaf,
  Video,
  Camera,
  Code,
  Database,
  Network,
  Lock,
  Cloud,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
  Target,
  Handshake,
  Lightbulb,
  BarChart3,
  Users2,
  Settings,
  Palette,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Zap as ZapIcon
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Content Optimization', href: '/services/ai-content-optimizer-pro' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence-platform' },
        { name: 'AI HR Analytics', href: '/services/ai-powered-hr-analytics' },
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      links: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'Threat Hunting & Response', href: '/services/ai-powered-cybersecurity-threat-hunting' },
        { name: 'Data Governance & Privacy', href: '/services/ai-powered-data-governance-platform' },
        { name: 'Zero Trust Network', href: '/services/zero-trust-network-architecture' },
        { name: 'SOC2 Compliance', href: '/services/soc2-compliance-automation' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp-manager' },
      ]
    },
    {
      title: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Financial Analytics Platform', href: '/services/ai-financial-analytics-platform' },
        { name: 'Fraud Detection & Risk', href: '/services/ai-powered-financial-fraud-detection' },
        { name: 'FinOps Cloud Optimizer', href: '/services/finops-advisor' },
        { name: 'Insurance Risk Assessment', href: '/services/ai-powered-insurance-risk-assessment' },
        { name: 'Smart Contract Scanner', href: '/services/smart-contract-risk-scanner' },
      ]
    },
    {
      title: 'Healthcare Technology',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      links: [
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'Medical Imaging Analysis', href: '/services/ai-powered-healthcare-diagnostic-platform' },
        { name: 'Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'HIPAA Compliance', href: '/services/ai-powered-data-governance-platform' },
      ]
    },
    {
      title: 'Manufacturing & Logistics',
      icon: Truck,
      color: 'from-blue-500 to-indigo-500',
      links: [
        { name: 'Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'Manufacturing Quality Control', href: '/services/ai-powered-manufacturing-quality-control' },
        { name: 'Logistics Optimization', href: '/services/ai-powered-logistics-optimization' },
        { name: 'IoT Edge Computing', href: '/services/ai-iot-edge-computing-platform' },
        { name: 'Predictive Maintenance', href: '/services/ai-predictive-maintenance' },
      ]
    },
    {
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'Retail Analytics Platform', href: '/services/ai-powered-retail-analytics' },
        { name: 'Customer Success Platform', href: '/services/ai-powered-customer-success-platform' },
        { name: 'E-commerce Optimization', href: '/services/ai-powered-logistics-optimization' },
        { name: 'Mobile Survey Platform', href: '/services/mobile-first-survey-tool' },
        { name: 'Affiliate Tracking Hub', href: '/services/affiliate-attribution-hub' },
      ]
    },
    {
      title: 'Education & Legal',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      links: [
        { name: 'Education Personalization', href: '/services/ai-powered-education-personalization' },
        { name: 'Legal Document Analysis', href: '/services/ai-powered-legal-document-analysis' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'Meeting Summarizer', href: '/services/remote-meeting-summarizer' },
        { name: 'Translation Manager', href: '/services/translation-manager' },
      ]
    },
    {
      title: 'Energy & Sustainability',
      icon: Leaf,
      color: 'from-green-500 to-teal-500',
      links: [
        { name: 'Energy Management Platform', href: '/services/ai-powered-energy-optimization' },
        { name: 'Sustainability Analytics', href: '/services/sustainability' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
      ]
    },
    {
      title: 'Media & Entertainment',
      icon: Video,
      color: 'from-pink-500 to-rose-500',
      links: [
        { name: 'Content Optimization', href: '/services/ai-powered-media-content-optimization' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription' },
        { name: 'Video Call Platform', href: '/services/video-call' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'Quantum AI Platform', href: '/services/ai-quantum-hybrid-platform' },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin' },
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
    { name: 'White Papers', href: '/white-papers', icon: FileText },
    { name: 'Training & Webinars', href: '/training', icon: MessageCircle },
    { name: 'Blog', href: '/blog', icon: Globe2 },
    { name: 'Careers', href: '/careers', icon: Users2 },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Press', href: '/press', icon: Award },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api', icon: Code },
    { name: 'Status Page', href: '/status', icon: Activity },
    { name: 'Contact Support', href: '/contact', icon: MessageCircle },
    { name: 'Community Forum', href: '/community', icon: Users },
    { name: 'Training Resources', href: '/training', icon: Lightbulb },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Settings },
    { name: 'GDPR Compliance', href: '/gdpr', icon: Lock },
    { name: 'Security', href: '/security', icon: ShieldCheck },
    { name: 'Compliance', href: '/compliance', icon: CheckCircle },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-500' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Logo and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered micro SAAS services, IT solutions, and innovative technology services. 
              Transforming businesses through cutting-edge AI and emerging technologies.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {footerSections.slice(0, 6).map((section) => (
                <div key={section.title} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                      <section.icon className="w-3 h-3 text-white" />
                    </div>
                    <h4 className="text-sm font-medium text-white">{section.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {section.links.slice(0, 3).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                    {section.links.length > 3 && (
                      <Link
                        to="/comprehensive-services-showcase-2025"
                        className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        View all {section.links.length} services →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pt-8 border-t border-gray-800">
          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <link.icon className="w-3 h-3" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Support</h4>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <link.icon className="w-3 h-3" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <link.icon className="w-3 h-3" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest insights on AI, technology trends, and industry updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Links and Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy</Link> | 
              <Link to="/terms" className="ml-2 hover:text-cyan-400 transition-colors">Terms</Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="text-xs text-gray-500">
              Built with cutting-edge AI technology | 
              <span className="ml-2 text-cyan-400">99.9% Uptime</span> | 
              <span className="ml-2 text-green-400">SOC2 Compliant</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Powered by Zion Tech Group</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;