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
      title: 'Revolutionary 2024-2025',
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
        { name: 'Blockchain Web3 Platform', href: '/revolutionary-services-2030#blockchain-web3-platform-2030' },
        { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analyzer', featured: true },
        { name: 'AI Real Estate Investment Analyzer', href: '/services/ai-real-estate-investment-analyzer', featured: true },
        { name: 'AI Restaurant Management System', href: '/services/ai-restaurant-management-system', featured: true },
        { name: 'AI Fitness Coaching Platform', href: '/services/ai-fitness-coaching-platform', featured: true },
        { name: 'AI E-commerce Personalization Engine', href: '/services/ai-ecommerce-personalization-engine', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Video Content Creation Studio', href: '/services/ai-video-content-creation-studio', featured: true },
        { name: 'AI Customer Churn Prediction', href: '/services/ai-customer-churn-prediction', featured: true },
        { name: 'AI Financial Fraud Detection', href: '/services/ai-financial-fraud-detection', featured: true },
        { name: 'AI Energy Management System', href: '/services/ai-energy-management-system', featured: true }

      ]
    },
    {
      title: 'AI & Technology Services',
      featured: true,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', featured: true },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', featured: true },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', featured: true },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', featured: true },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', featured: true }
      ]
    },
    {
      title: 'Advanced Technology Solutions',
      featured: true,
      links: [
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Data Analytics & BI', href: '/services/data-analytics', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Space Technology', href: '/services/space-tech', featured: true },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true },
        { name: 'Cybersecurity Platform', href: '/services/cybersecurity', featured: true }
      ]
    },
    {
      title: 'Micro SAAS Products',
      featured: true,
      links: [
        { name: 'Micro CRM Platform', href: '/services/micro-crm', featured: true },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai', featured: true },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform', featured: true },
        { name: 'Website Analytics Tool', href: '/services/website-analytics', featured: true },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', featured: true },
        { name: 'Security Headers CSP Manager', href: '/services/security-headers-csp', featured: true },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', featured: true },
        { name: 'AI Content Generator', href: '/services/ai-content-generator', featured: true },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', featured: true },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', featured: true }
      ]
    },
    {
      title: 'Resources & Learning',
      featured: false,
      links: [
        { name: 'AI Research Papers', href: '/resources/research-papers', featured: false },
        { name: 'Case Studies', href: '/case-studies', featured: true },
        { name: 'White Papers', href: '/white-papers', featured: true },
        { name: 'Webinars', href: '/webinars', featured: true },
        { name: 'Documentation', href: '/docs', featured: true },
        { name: 'FAQ', href: '/blog', featured: false },
        { name: 'Blog', href: '/blog', featured: true },
        { name: 'Pricing Guide 2027', href: '/pricing-guide-2027', featured: true },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true },
        { name: 'Request Quote', href: '/request-quote', featured: true }
      ]
    },
    {
      title: 'Company & Support',
      featured: false,
      links: [
        { name: 'About Us', href: '/about', featured: true },
        { name: 'Contact', href: '/contact', featured: true },
        { name: 'Partners', href: '/partners', featured: true },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Privacy Policy', href: '/privacy', featured: false },
        { name: 'Terms of Service', href: '/terms', featured: false },
        { name: 'Cookie Policy', href: '/cookies', featured: false },
        { name: 'Dashboard', href: '/dashboard', featured: false },
        { name: 'Login', href: '/login', featured: false },
        { name: 'Marketplace', href: '/marketplace', featured: false }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-blue-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, featured: true },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign, featured: false },
    { name: 'Schedule Demo', href: '/demo', icon: Play, featured: false },
    { name: 'Get Support', href: '/support', icon: HelpCircle, featured: false },
    { name: 'Join Community', href: '/community', icon: Users, featured: false },
    { name: 'Partner Program', href: '/partners', icon: Users, featured: false }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className={`${section.featured ? 'lg:col-span-2' : ''}`}>
              <h3 className={`text-lg font-bold mb-6 flex items-center ${
                section.featured 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400' 
                  : 'text-white'
              }`}>
                {section.featured && <Star className="w-5 h-5 mr-2 text-yellow-400" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className={`text-sm transition-all duration-200 hover:text-blue-400 flex items-center group ${
                        link.featured ? 'text-blue-300 font-medium' : 'text-gray-300'
                      }`}
                    >
                      {link.featured && <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information & Social Links */}
        <div className="border-t border-slate-700/50 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Get In Touch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a 
                        href="tel:+13024640950" 
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a 
                        href="mailto:kleber@ziontechgroup.com" 
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-medium">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Website</p>
                      <a 
                        href="https://ziontechgroup.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Connect With Us
              </h3>
              
              {/* Social Media Links */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://facebook.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://youtube.com/@ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://github.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400">Stay updated with our latest innovations</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            
            <p className="text-sm text-gray-400 text-center lg:text-right">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200 ml-1">
                Privacy Policy
              </Link> | 
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200 ml-1">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};