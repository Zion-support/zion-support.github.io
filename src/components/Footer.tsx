import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  Sparkles,
  Award,
  ArrowRight,
  Star,
  Lock,
  Eye,
  Atom,
  Network,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Server,
  ShoppingCart,
  Smartphone,
  Database,
  Clock,
  Code,
  BookOpen,
  Truck,
  ExternalLink,
  ChevronDown,
  Copyright,
  GitFork
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface FooterLink {
  name: string;
  path: string;
  icon: any;
  external?: boolean;
}

interface FooterSection {
  title: string;
  icon: any;
  links: FooterLink[];
}

const footerSections = [
  {
    title: 'Company',
    icon: Globe,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
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
    title: 'AI Services',
    icon: Brain,
    links: [
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
      { name: 'AI Customer Experience', path: '/services/ai-customer-experience-platform', icon: Brain },
      { name: 'AI Content Creation', path: '/services/ai-content-creation-suite', icon: FileText },
      { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation-platform', icon: Target },
      { name: 'AI Sales Intelligence', path: '/services/ai-sales-intelligence-platform', icon: Users },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics-platform', icon: DollarSign },
      { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics-platform', icon: Heart },
      { name: 'AI Supply Chain', path: '/services/ai-supply-chain-optimization', icon: Truck },
      { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity-platform', icon: Shield }
    ]
  },
  {
    title: 'IT Services',
    icon: Cloud,
    links: [
      { name: 'Cloud Infrastructure', path: '/services/cloud-infrastructure-optimization', icon: Server },
      { name: 'Cybersecurity & Compliance', path: '/services/comprehensive-cybersecurity', icon: Shield },
      { name: 'Digital Transformation', path: '/services/digital-transformation-consulting', icon: Zap },
      { name: 'Data Analytics & BI', path: '/services/data-analytics-business-intelligence', icon: BarChart3 },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure-management', icon: Building },
      { name: 'Custom Software Development', path: '/services/custom-software-development', icon: Code },
      { name: 'Managed IT Services', path: '/services/managed-it-services', icon: Cpu },
      { name: 'Network Security', path: '/services/network-security-firewall', icon: Lock },
      { name: 'Cloud Migration', path: '/services/cloud-migration-strategy', icon: Cloud }
    ]
  },
  {
    title: 'Micro SaaS',
    icon: ShoppingCart,
    links: [
      { name: 'AI Content Studio Pro', path: '/services/ai-content-studio-pro', icon: FileText },
      { name: 'AI Customer Experience Optimizer', path: '/services/ai-cx-optimizer', icon: Brain },
      { name: 'AI Financial Intelligence', path: '/services/ai-financial-intelligence', icon: DollarSign },
      { name: 'AI Supply Chain Optimizer', path: '/services/ai-supply-chain-optimizer', icon: Truck },
      { name: 'AI Cybersecurity Suite', path: '/services/ai-cybersecurity-suite', icon: Shield },
      { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Heart },
      { name: 'AI Project Manager', path: '/services/ai-project-manager', icon: Target },
      { name: 'AI Email Marketing', path: '/services/ai-email-marketing-automation', icon: Mail },
      { name: 'AI SEO Optimizer', path: '/services/ai-seo-optimizer', icon: TrendingUp }
    ]
  },
  {
    title: 'Innovation',
    icon: Rocket,
    links: [
      { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', icon: Star },
      { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', icon: Rocket },
      { name: 'AI Marketplace Showcase', path: '/zion2026-ai-marketplace-showcase', icon: Brain },
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
      { name: 'Space Technology', path: '/space-tech', icon: Satellite }
    ]
  },
  {
    title: 'Solutions',
    icon: Target,
    links: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
      { name: 'SMB Solutions', path: '/solutions/smb', icon: Users },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
      { name: 'Financial Services', path: '/solutions/financial', icon: DollarSign },
      { name: 'E-commerce Solutions', path: '/solutions/ecommerce', icon: ShoppingCart },
      { name: 'Government Solutions', path: '/solutions/government', icon: Building }
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Email', href: 'mailto:kleber@ziontechgroup.com', icon: Mail, color: 'hover:text-red-400' }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a 
                    href={contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <ArrowRight className="w-5 h-5 text-blue-400" />
                <span>Quick Links</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/pricing" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
                <Link to="/sitemap" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Sitemap
                </Link>
                <Link to="/api" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  API
                </Link>
                <Link to="/developer-portal" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Developer Portal
                </Link>
                <Link to="/marketplace" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Marketplace
                </Link>
                <Link to="/request-quote" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>Follow Us</span>
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Copyright className="w-4 h-4" />
              <span className="text-sm">
                2024 Zion Tech Group. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
