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
  MailIcon
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Business Intelligence',
      featured: true,
      links: [
        { name: '2025 Services Showcase', href: '/services/showcase-2025', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Development Platform', href: '/services/ai-development', featured: true },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', featured: true }
      ]
    },
    {
      title: 'AI & Operations',
      featured: true,
      links: [
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', featured: true },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', featured: true },
        { name: 'AI Supply Chain Optimizer', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true }
      ]
    },
    {
      title: 'AI & Marketing',
      featured: true,
      links: [
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-creation', featured: true },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', featured: true },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Education Platform', href: '/services/ai-education', featured: true },
        { name: 'AI Entertainment Platform', href: '/services/ai-entertainment', featured: true }
      ]
    },
    {
      title: 'Advanced Technologies',
      featured: true,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', featured: true },
        { name: 'AI Space Technology Platform', href: '/services/ai-space-technology', featured: true },
        { name: 'AI Sustainable Technology', href: '/services/ai-sustainable-technology', featured: true },
        { name: 'AI Metaverse Platform', href: '/services/ai-metaverse', featured: true },
        { name: 'AI Green Technology Platform', href: '/services/ai-green-technology', featured: true }
      ]
    },
    {
      title: 'Enterprise Solutions',
      featured: true,
      links: [
        { name: 'Enterprise AI Transformation', href: '/solutions', featured: true },
        { name: 'AI-Powered Cybersecurity', href: '/services/ai-cybersecurity', featured: true },
        { name: 'Data Analytics & BI', href: '/services/data-analytics', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      featured: true,
      links: [
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: true },
        { name: 'AI Content Creation Studio Pro', href: '/services#ai-content-creation-studio-pro', featured: true },
        { name: 'AI Customer Support Automation Suite', href: '/services#ai-customer-support-automation-suite', featured: true },
        { name: 'AI Marketing Automation Platform', href: '/services#ai-marketing-automation-platform', featured: true },
        { name: 'AI Legal Document Analyzer Pro', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Healthcare Analytics Suite', href: '/services/ai-healthcare-analytics', featured: true }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about', icon: Building },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing-guide-2030', icon: DollarSign },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/case-studies', icon: Target },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Award },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Settings },
    { name: 'Security', href: '/security', icon: Lock }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-600' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-600' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation • Intelligence • Impact</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, micro SaaS services, and cutting-edge technology 
              that transforms businesses and drives innovation across industries.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <a 
                href={contactInfo.website}
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Globe className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.website}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section) => (
            <div key={section.title} className="xl:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.featured && <Star className="w-4 h-4 text-yellow-400 mr-2" />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      {link.featured && <Sparkles className="w-3 h-3 text-blue-400 mr-2" />}
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Quick Links</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-800"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Latest AI Innovations
          </h3>
          <p className="text-blue-100 mb-6">
            Get exclusive insights, case studies, and updates on our cutting-edge AI services and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowUpRight className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};