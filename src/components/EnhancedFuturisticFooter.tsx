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
  ExternalLink
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
        { name: 'AI Research & Discovery', href: '/services#ai-research', featured: true },
        { name: 'AI Green Technology', href: '/services#ai-green-tech', featured: true },
        { name: 'AI Metaverse Platform', href: '/services#ai-metaverse', featured: true },
        { name: 'AI Space Technology', href: '/services#ai-space-tech', featured: true },
        { name: 'AI FinTech Platform', href: '/services#ai-fintech', featured: true },
        { name: 'AI Supply Chain', href: '/services#ai-supply-chain', featured: true },
        { name: 'AI Quality Assurance', href: '/services#ai-qa', featured: true }
      ]
    },
    {
      title: 'Core Services',
      featured: true,
      links: [
        { name: 'Cybersecurity Solutions', href: '/services#cybersecurity', featured: true },
        { name: 'Cloud & DevOps', href: '/services#cloud-devops', featured: true },
        { name: 'Data Analytics', href: '/services#data-analytics', featured: true },
        { name: 'IT Infrastructure', href: '/services#it-infrastructure', featured: true },
        { name: 'Digital Twin Solutions', href: '/services#digital-twin', featured: true },
        { name: 'IoT & Edge Computing', href: '/services#iot-edge', featured: true },
        { name: 'Blockchain & Web3', href: '/services#blockchain', featured: true },
        { name: 'Quantum Computing', href: '/services#quantum-computing', featured: true },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: true },
        { name: 'Enterprise Solutions', href: '/solutions', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      links: [
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', featured: false },
        { name: 'Financial Services', href: '/solutions#financial', featured: false },
        { name: 'Legal Services', href: '/solutions#legal', featured: false },
        { name: 'Research & Academia', href: '/solutions#research', featured: false },
        { name: 'Manufacturing', href: '/solutions#manufacturing', featured: false },
        { name: 'Retail & E-commerce', href: '/solutions#retail', featured: false },
        { name: 'Government & Public Sector', href: '/solutions#government', featured: false },
        { name: 'Energy & Sustainability', href: '/solutions#energy', featured: false },
        { name: 'Space & Aerospace', href: '/solutions#space', featured: false },
        { name: 'Education & Training', href: '/solutions#education', featured: false }
      ]
    },
    {
      title: 'Resources & Support',
      featured: false,
      links: [
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true },
        { name: 'Blog & Insights', href: '/blog', featured: false },
        { name: 'FAQ & Help Center', href: '/faq', featured: false },
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'API Reference', href: '/api-docs', featured: false },
        { name: 'Developer Portal', href: '/developers', featured: false },
        { name: 'Training & Certification', href: '/training', featured: false },
        { name: 'Community Forum', href: '/community', featured: false },
        { name: 'Success Stories', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/whitepapers', featured: false }
      ]
    },
    {
      title: 'Company & Contact',
      featured: false,
      links: [
        { name: 'About Zion Tech Group', href: '/about', featured: false },
        { name: 'Our Team', href: '/about#team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Contact Us', href: '/contact', featured: true },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', featured: false },
        { name: 'Partnerships', href: '/partnerships', featured: false },
        { name: 'Investor Relations', href: '/investors', featured: false },
        { name: 'Press & Media', href: '/press', featured: false },
        { name: 'Legal & Privacy', href: '/legal', featured: false }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-cyan-400 text-sm">Future of Technology</p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading provider of innovative technology solutions including AI, Quantum Computing, 
              IoT, Blockchain, and Sustainable Technology for the modern enterprise.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Globe className="w-4 h-4 text-blue-400" />
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center"
                >
                  ziontechgroup.com
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
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
                  className={`p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Service Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className={`text-lg font-semibold mb-6 flex items-center ${
                section.featured ? 'text-cyan-400' : 'text-white'
              }`}>
                {section.title}
                {section.featured && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-400">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                )}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-sm transition-all duration-300 flex items-center group ${
                        link.featured 
                          ? 'text-cyan-400 hover:text-cyan-300' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <ArrowRight className={`w-3 h-3 mr-2 transition-transform duration-300 group-hover:translate-x-1 ${
                        link.featured ? 'text-cyan-400' : 'text-slate-500'
                      }`} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm">by Zion Tech Group</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="container-responsive py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUpRight className="w-5 h-5 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};