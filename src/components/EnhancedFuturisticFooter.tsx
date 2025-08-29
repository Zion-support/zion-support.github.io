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
  CheckCircle,
  Cpu,
  Lock,
  Atom,
  Blockchain,
  Leaf,
  Eye,
  Cloud,
  Database,
  Network,
  Smartphone,
  Server,
  Chip,
  Code,
  Palette,
  ShieldCheck,
  Target,
  BarChart3,
  Settings,
  MessageCircle,
  BookOpen,
  DollarSign,
  ShoppingCart,
  Building,
  HelpCircle
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics-platform' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Sales & Marketing', href: '/services/ai-sales-marketing-automation' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      links: [
        { name: 'AI Cybersecurity Defense', href: '/services/ai-cybersecurity-defense-platform' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Cloud FinOps Platform', href: '/services/cloud-finops-optimization-platform' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'IT Consulting', href: '/services/it-consulting' }
      ]
    },
    {
      title: 'Emerging Technology',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Quantum Optimization Platform', href: '/services/quantum-computing-optimization-platform' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Blockchain Enterprise Platform', href: '/services/blockchain-enterprise-platform' },
        { name: 'Space Technology', href: '/services/space-tech' }
      ]
    },
    {
      title: 'Edge & IoT Solutions',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Edge IoT Platform', href: '/services/edge-computing-iot-platform' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Digital Twin Enterprise Platform', href: '/services/digital-twin-enterprise-platform' }
      ]
    },
    {
      title: 'Sustainability & Green Tech',
      icon: Leaf,
      color: 'from-emerald-600 to-teal-600',
      links: [
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'Sustainable Technology Platform', href: '/services/sustainable-tech-platform' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-orange-600 to-red-600',
      links: [
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'from-pink-600 to-purple-600',
      links: [
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star },
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp },
    { name: 'Comprehensive Pricing 2025', href: '/pricing', icon: DollarSign },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: BarChart3 },
    { name: 'Services Overview', href: '/services-overview', icon: Settings },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Support Portal', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Training', href: '/training' },
    { name: 'Community', href: '/community' },
    { name: 'Onsite Support', href: '/onsite-support' },
    { name: 'Contact Support', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-500' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading provider of innovative AI, IT, and emerging technology solutions. 
              Transforming businesses with cutting-edge technology that delivers measurable results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg bg-slate-800 text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Sections */}
          {footerSections.slice(0, 3).map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.slice(3).map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links & Company Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Building className="w-5 h-5 text-blue-400 mr-2" />
              Company
            </h3>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 text-green-400 mr-2" />
              Support
            </h3>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-purple-400 mr-2" />
              Legal
            </h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
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
              <span>•</span>
              <span>Innovation at the Speed of Light</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Trusted Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};