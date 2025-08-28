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
      title: 'Revolutionary 2030',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' },
        { name: 'AI Sales Intelligence', href: '/revolutionary-services-2030#ai-sales-intelligence-2030' },
        { name: 'AI Customer Support', href: '/revolutionary-services-2030#ai-customer-support-automation-2030' },
        { name: 'AI Data Analytics & BI', href: '/revolutionary-services-2030#ai-data-analytics-bi-2030' },
        { name: 'Cloud Infrastructure & DevOps', href: '/revolutionary-services-2030#cloud-infrastructure-devops-2030' },
        { name: 'IoT Edge Computing', href: '/revolutionary-services-2030#iot-edge-computing-2030' },
        { name: 'Digital Twin Platform', href: '/revolutionary-services-2030#digital-twin-platform-2030' },
        { name: 'Blockchain Web3 Platform', href: '/revolutionary-services-2030#blockchain-web3-platform-2030' }
      ]
    },
    {
      title: 'AI & Technology Services',
      featured: true,
      links: [
        { name: 'AI Business Intelligence', href: '/services#ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Diagnostics', href: '/services#ai-healthcare', featured: true },
        { name: 'AI Legal Tech Platform', href: '/services#ai-legal-tech', featured: true },
        { name: 'AI Research Assistant', href: '/services#ai-research', featured: true },
        { name: 'AI Green Technology', href: '/services#ai-green-tech', featured: true },
        { name: 'AI Metaverse Platform', href: '/services#ai-metaverse', featured: true },
        { name: 'AI Space Technology', href: '/services#ai-space-tech', featured: true },
        { name: 'AI Operations Optimizer', href: '/services#ai-operations', featured: true },
        { name: 'AI Development Assistant', href: '/services#ai-development', featured: true },
        { name: 'AI Education Platform', href: '/services#ai-education', featured: true },
        { name: 'AI Entertainment Solutions', href: '/services#ai-entertainment', featured: true }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      featured: true,
      links: [
        { name: 'AI Content Optimization', href: '/services#ai-content-optimization-engine', featured: true },
        { name: 'DeFi Portfolio Tracker', href: '/services#defi-portfolio-tracker', featured: true },
        { name: 'AI Health Monitoring', href: '/services#ai-health-monitoring-system', featured: true },
        { name: 'AI Contract Analyzer', href: '/services#ai-contract-analyzer', featured: true },
        { name: 'AI Social Media Manager', href: '/services#ai-social-media-manager', featured: true },
        { name: 'AI Recruitment Assistant', href: '/services#ai-recruitment-assistant', featured: true },
        { name: 'AI Research Platform', href: '/services#ai-research-assistant', featured: true },
        { name: 'AI Learning Platform', href: '/services#ai-learning-platform', featured: true },
        { name: 'AI Content Generator', href: '/services#ai-content-generator', featured: true },
        { name: 'AI Operations Platform', href: '/services#ai-operations-optimizer', featured: true },
        { name: 'AI Code Assistant', href: '/services#ai-code-assistant', featured: true }
      ]
    },
    {
      title: 'IT & Infrastructure',
      featured: true,
      links: [
        { name: 'Quantum Cybersecurity', href: '/services#quantum-resistant-cybersecurity', featured: true },
        { name: 'Edge Computing Platform', href: '/services#intelligent-edge-computing-platform', featured: true },
        { name: 'Hybrid Cloud Orchestrator', href: '/services#hybrid-cloud-orchestrator', featured: true },
        { name: 'AI Network Security', href: '/services#ai-network-security-monitor', featured: true },
        { name: 'Data Center Automation', href: '/services#intelligent-data-center-automation', featured: true },
        { name: 'Enterprise Blockchain', href: '/services#enterprise-blockchain-platform', featured: true },
        { name: 'Quantum Computing Service', href: '/services#quantum-computing-as-a-service', featured: true },
        { name: '5G Network Optimization', href: '/services#5g-network-optimization', featured: true },
        { name: 'AI IT Support Automation', href: '/services#ai-it-support-automation', featured: true },
        { name: 'Digital Transformation', href: '/services#digital-transformation-consulting', featured: true }
      ]
    },
    {
      title: 'Advanced AI Solutions',
      featured: true,
      links: [
        { name: 'AI Autonomous Operations', href: '/services#ai-autonomous-business-operations', featured: true },
        { name: 'AI Predictive Analytics', href: '/services#ai-predictive-analytics-engine', featured: true },
        { name: 'AI NLP Platform', href: '/services#ai-nlp-platform', featured: true },
        { name: 'AI Computer Vision', href: '/services#ai-computer-vision-platform', featured: true },
        { name: 'AI Recommendation Engine', href: '/services#ai-recommendation-engine', featured: true },
        { name: 'AI Fraud Detection', href: '/services#ai-fraud-detection-system', featured: true },
        { name: 'AI Supply Chain', href: '/services#ai-supply-chain-optimizer', featured: true },
        { name: 'AI Customer Experience', href: '/services#ai-customer-experience-platform', featured: true },
        { name: 'AI Financial Analysis', href: '/services#ai-financial-analysis-platform', featured: true },
        { name: 'AI Healthcare Diagnostics', href: '/services#ai-healthcare-diagnostics-platform', featured: true },
        { name: 'AI Autonomous Vehicles', href: '/services#ai-autonomous-vehicle-platform', featured: true }
      ]
    },
    {
      title: 'Core Services',
      featured: false,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', featured: false },
        { name: 'Digital Twin', href: '/services/digital-twin', featured: false },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: false },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: false },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: false },
        { name: 'Micro SAAS Products', href: '/services/micro-saas', featured: false },
        { name: 'Request Quote', href: '/request-quote', featured: false },
        { name: 'Pricing Guide 2027', href: '/pricing-guide-2027', featured: false },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: false }
      ]
    },
    {
      title: 'Company',
      featured: false,
      links: [
        { name: 'About Us', href: '/about', featured: false },
        { name: 'Contact', href: '/contact', featured: false },
        { name: 'Blog', href: '/blog', featured: false },
        { name: 'FAQ', href: '/faq', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Privacy Policy', href: '/privacy', featured: false },
        { name: 'Terms of Service', href: '/terms', featured: false },
        { name: 'Cookie Policy', href: '/cookies', featured: false }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/request-quote', icon: MessageCircle, featured: true },
    { name: 'View Services', href: '/services', icon: Zap, featured: true },
    { name: 'Contact Sales', href: '/contact', icon: Phone, featured: true },
    { name: 'Pricing Guide', href: '/pricing-guide-2030', icon: DollarSign, featured: true }
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Top Section - Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className={`text-lg font-bold flex items-center space-x-2 ${
                  section.featured ? 'text-blue-400' : 'text-gray-300'
                }`}>
                  {section.featured && <Star className="w-5 h-5 text-yellow-400" />}
                  <span>{section.title}</span>
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className={`text-sm transition-colors duration-200 flex items-center space-x-2 ${
                          link.featured 
                            ? 'text-blue-300 hover:text-blue-200' 
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                      >
                        {link.featured && <Sparkles className="w-3 h-3 text-yellow-400" />}
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Middle Section - Quick Actions & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-400">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className={`group p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 ${
                      action.featured ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20' : 'bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        action.featured 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                          : 'bg-gray-700'
                      }`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium group-hover:text-blue-400 transition-colors">
                        {action.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <a 
                    href={contactInfo.website}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Social & Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Revolutionizing technology with AI-powered solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <Link
            to="/request-quote"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
            aria-label="Get Quote"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};