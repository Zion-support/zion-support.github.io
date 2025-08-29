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
  CheckCircle,
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
  ArrowUpRight,
  Play,
  MailIcon
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'AI Education Platform', href: '/services/ai-education-platform' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Cloud Migration Services', href: '/services/cloud-migration' },
        { name: 'DevOps Automation', href: '/services/devops-automation' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin' },
        { name: 'IoT Services', href: '/services/iot-services' },
        { name: 'Space Technology', href: '/services/space-tech' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      links: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Zero Trust Network Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'Smart Contract Risk Scanner', href: '/services/smart-contract-risk-scanner' },
        { name: 'Cybersecurity Audit & Compliance', href: '/services/cybersecurity-audit' },
        { name: 'Network Security Services', href: '/services/network-security' },
        { name: 'Email Security Services', href: '/services/email-security' },
        { name: 'Endpoint Security Services', href: '/services/endpoint-security' },
        { name: 'Data Governance Platform', href: '/services/ai-data-governance' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform' },
        { name: 'Vendor Risk Management', href: '/services/vendor-risk-management' }
      ]
    },
    {
      title: 'IT Services',
      icon: Server,
      color: 'from-gray-600 to-slate-600',
      links: [
        { name: 'Enterprise IT Infrastructure', href: '/services/enterprise-it-infrastructure' },
        { name: 'Managed IT Services', href: '/services/managed-it' },
        { name: 'Data Backup & Recovery', href: '/services/data-backup' },
        { name: 'Mobile App Development', href: '/services/mobile-development' },
        { name: 'Web Development Services', href: '/services/web-development' },
        { name: 'Data Analytics & BI', href: '/services/data-analytics' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IoT Solutions Development', href: '/services/iot-development' },
        { name: 'Blockchain Development', href: '/services/blockchain-development' },
        { name: 'IT Consulting Services', href: '/services/it-consulting' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing' },
        { name: 'Sustainability & Green Tech', href: '/services/sustainability' },
        { name: 'Biotech & Health Innovation', href: '/services/biotech-health' },
        { name: 'FinTech & DeFi Platform', href: '/services/fintech-defi' },
        { name: 'Metaverse & AR/VR Development', href: '/services/metaverse-development' },
        { name: 'Autonomous Systems & Robotics', href: '/services/autonomous-systems' },
        { name: 'Smart Cities Solutions', href: '/services/smart-cities' },
        { name: 'Agricultural Technology', href: '/services/agtech' },
        { name: 'Energy Management Systems', href: '/services/energy-management' },
        { name: 'Transportation & Logistics', href: '/services/transportation-logistics' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building2,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'Comprehensive Services 2026', href: '/comprehensive-services-showcase-2026' },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030' },
        { name: 'Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training Programs', href: '/training' },
        { name: 'Support Services', href: '/support' },
        { name: 'Partnership Opportunities', href: '/partners' },
        { name: 'Career Opportunities', href: '/careers' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-green-500 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
              <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
                Revolutionizing the future with cutting-edge AI, Micro SaaS, and emerging technologies
              </p>
            </motion.div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  {section.icon && (
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}`}>
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
              >
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact and social section */}
          <div className="border-t border-gray-700 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <a href={contactInfo.website} className="text-gray-300 hover:text-white transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 group"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};