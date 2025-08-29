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
  Calendar,
  User,
  Handshake,
  Briefcase,
  FileText as FileTextIcon,
  Users as UsersIcon,
  Code as CodeIcon,
  HelpCircle as HelpCircleIcon,
  DollarSign as DollarSignIcon,
  Users as UsersIcon2,
  Calendar as CalendarIcon,
  Shield as ShieldIcon,
  BookOpen as BookOpenIcon,
  Factory as FactoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Heart as HeartIcon,
  TrendingUp as TrendingUpIcon,
  Building as BuildingIcon,
  Rocket as RocketIcon,
  Atom as AtomIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon2,
  ShoppingCart as ShoppingCartIcon2,
  Users as UsersIcon3,
  BookOpen as BookOpenIcon2,
  FileText as FileTextIcon2,
  Users as UsersIcon4,
  Code as CodeIcon2,
  HelpCircle as HelpCircleIcon2,
  DollarSign as DollarSignIcon2,
  Users as UsersIcon5,
  Calendar as CalendarIcon2,
  Shield as ShieldIcon3,
  BookOpen as BookOpenIcon3,
  Factory as FactoryIcon2,
  ShoppingCart as ShoppingCartIcon3,
  Heart as HeartIcon2,
  TrendingUp as TrendingUpIcon2,
  Building as BuildingIcon2,
  Rocket as RocketIcon2,
  Atom as AtomIcon2,
  Cloud as CloudIcon2,
  Shield as ShieldIcon4,
  ShoppingCart as ShoppingCartIcon4,
  Users as UsersIcon6,
  BookOpen as BookOpenIcon4,
  FileText as FileTextIcon3,
  Users as UsersIcon7,
  Code as CodeIcon3,
  HelpCircle as HelpCircleIcon3,
  DollarSign as DollarSignIcon3,
  Users as UsersIcon8,
  Calendar as CalendarIcon3,
  Shield as ShieldIcon5} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Machine Learning Services',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', featured: true },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', featured: true },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', featured: true },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', featured: true }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      featured: true,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: true },
        { name: 'Micro CRM', href: '/services/micro-crm', featured: true },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', featured: true },
        { name: 'Website Analytics', href: '/services/website-analytics', featured: true },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', featured: true }
      ]
    },
    {
      title: 'Security & Compliance',
      featured: true,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      links: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', featured: true },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', featured: true },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', featured: true },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', featured: true },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', featured: true },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', featured: true },
        { name: 'SOC2 Compliance Automation', href: '/services/soc2-compliance-automation', featured: true },
        { name: 'GDPR Cookie Compliance', href: '/services/gdpr-cookie-compliance', featured: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      featured: true,
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', featured: true },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', featured: true },
        { name: 'Space Technology', href: '/services/space-tech', featured: true },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', featured: true },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', featured: true },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', featured: true },
        { name: 'Financial Solutions', href: '/solutions/financial', featured: true },
        { name: 'Government Solutions', href: '/solutions/government', featured: false },
        { name: 'SMB Solutions', href: '/solutions/smb', featured: false },
        { name: 'Startup Solutions', href: '/solutions/startup', featured: false },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', featured: false },
        { name: 'Retail Solutions', href: '/solutions/retail', featured: false },
        { name: 'Education Solutions', href: '/solutions/education', featured: false },
        { name: 'Energy Solutions', href: '/solutions/energy', featured: false }
      ]
    },
    {
      title: 'Resources & Support',
      featured: false,
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Comprehensive Pricing 2027', href: '/comprehensive-pricing-guide-2027', featured: true },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true },
        { name: 'Blog & Insights', href: '/blog', featured: false },
        { name: 'Case Studies', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/white-papers', featured: false },
        { name: 'Webinars', href: '/webinars', featured: false },
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'API Reference', href: '/api-docs', featured: false },
        { name: 'Developer Portal', href: '/developers', featured: false },
        { name: 'Training & Certification', href: '/training', featured: false },
        { name: 'Community Forum', href: '/community', featured: false },
        { name: 'FAQ & Help Center', href: '/faq', featured: false }
      ]
    },
    {
      title: 'Company & Contact',
      featured: false,
      icon: Users,
      color: 'from-slate-500 to-gray-500',
      links: [
        { name: 'About Zion Tech Group', href: '/about', featured: false },
        { name: 'Our Team', href: '/about#team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Contact Us', href: '/contact', featured: true },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', featured: true },
        { name: 'Partnerships', href: '/partners', featured: false },
        { name: 'Investor Relations', href: '/investors', featured: false },
        { name: 'Press & Media', href: '/press', featured: false },
        { name: 'Legal & Privacy', href: '/legal', featured: false },
        { name: 'Terms of Service', href: '/terms', featured: false },
        { name: 'Privacy Policy', href: '/privacy', featured: false }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
    { name: 'Request Quote', href: '/request-quote', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, color: 'from-purple-500 to-pink-500' },
    { name: 'View Pricing', href: '/pricing', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
  ];

  return (
          <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
        </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Revolutionizing business through cutting-edge AI, quantum computing, and innovative technology solutions.
            </motion.p>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {quickActions.map((action, index) => (
              <Link
                key={action.name}
                to={action.href}
                className={`group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 text-center`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {action.name}
                </h3>
              </Link>
            ))}
          </motion.div>

          {/* Footer Sections */}
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
                  <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                    <section.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="text-sm">{link.name}</span>
                      {link.featured && (
                        <Star className="w-3 h-3 text-yellow-400" />
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-slate-300 text-sm">
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>Follow Us</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-300 ${social.color} transition-all duration-300 hover:border-cyan-400/50 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <MailIcon className="w-5 h-5 text-cyan-400" />
                <span>Stay Updated</span>
              </h3>
              <p className="text-slate-300 text-sm">
                Get the latest insights on AI, quantum computing, and technology trends.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="border-t border-slate-700/50 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <span>•</span>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <span>•</span>
                <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>by Zion Tech Group</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}