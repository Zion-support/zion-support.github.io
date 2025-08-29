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
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', featured: true },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      featured: true,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Cybersecurity AI', href: '/services/cybersecurity', featured: true },
        { name: 'Blockchain & Web3', href: '/services/blockchain-web3', featured: true },
        { name: 'Space Technology', href: '/services/space-technology', featured: true },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true },
        { name: 'AI Autonomous Systems', href: '/services/ai-autonomous-systems', featured: true }
      ]
    },
    {
      title: 'IT & Infrastructure',
      featured: true,
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'AI Neural Interface', href: '/services/ai-neural-interface', featured: true },
        { name: 'AI Holographic Workspace', href: '/services/ai-holographic-workspace', featured: true },
        { name: 'AI BioDigital Twin', href: '/services/ai-biodigital-twin', featured: true },
        { name: 'AI Space Debris Tracking', href: '/services/ai-space-debris-tracking', featured: true },
        { name: 'AI Ethics Guardian', href: '/services/ai-ethics-guardian', featured: true }
      ]
    },
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'AI Metaverse Builder', href: '/services/ai-metaverse-builder', featured: true },
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations', featured: true },
        { name: 'AI Quantum AI Cybersecurity', href: '/services/ai-quantum-ai-cybersecurity', featured: true },
        { name: 'AI Content Creation Studio 2030', href: '/services/ai-content-creation-studio-2030', featured: true },
        { name: 'AI Quantum Machine Learning', href: '/services/ai-quantum-machine-learning', featured: true },
        { name: 'Innovative Micro SAAS 2025', href: '/innovative-micro-saas-services-2025', featured: true },
        { name: 'Innovative Services 2026', href: '/innovative-services-2026', featured: true }
      ]
    },
    {
      title: 'Solutions & Industries',
      featured: true,
      links: [
        { name: 'Enterprise Solutions', href: '/solutions', featured: true },
        { name: 'Healthcare Solutions', href: '/solutions', featured: true },
        { name: 'Financial Solutions', href: '/solutions', featured: true },
        { name: 'Manufacturing Solutions', href: '/solutions', featured: true },
        { name: 'Retail Solutions', href: '/solutions', featured: true },
        { name: 'Government Solutions', href: '/solutions', featured: true },
        { name: 'Startup Solutions', href: '/solutions', featured: true },
        { name: 'SMB Solutions', href: '/solutions', featured: true }
      ]
    },
    {
      title: 'Resources & Support',
      featured: true,
      links: [
        { name: 'Blog & Insights', href: '/blog', featured: true },
        { name: 'Case Studies', href: '/case-studies', featured: true },
        { name: 'White Papers', href: '/white-papers', featured: true },
        { name: 'Webinars', href: '/webinars', featured: true },
        { name: 'Documentation', href: '/docs', featured: true },
        { name: 'FAQ', href: '/faq', featured: true },
        { name: 'Pricing Guide', href: '/pricing', featured: true },
        { name: 'Marketplace', href: '/marketplace', featured: true }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about', icon: Building2 },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Request Quote', href: '/request-quote', icon: DollarSign },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Play },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-700' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-600' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-700' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovating the Future</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative AI, IT, and emerging technology solutions. 
              Transforming businesses with cutting-edge micro SAAS services and revolutionary 2030 technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                {section.featured && <Star className="w-4 h-4 text-yellow-400 mr-2" />}
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                      {link.featured && (
                        <Sparkles className="w-3 h-3 text-blue-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section - Quick Links and Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-slate-700">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <link.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-200 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Newsletter and CTA */}
        <div className="py-8 border-t border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Stay Updated with Latest Tech Trends
              </h4>
              <p className="text-gray-300 mb-6">
                Get insights on AI, emerging technologies, and industry innovations delivered to your inbox.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-semibold text-white mb-4">
                Ready to Transform Your Business?
              </h4>
              <p className="text-gray-300 mb-6">
                Let's discuss how our innovative solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Project</span>
                  <Rocket className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border border-blue-600 text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Quote</span>
                  <DollarSign className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Powered by</span>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-medium">Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};