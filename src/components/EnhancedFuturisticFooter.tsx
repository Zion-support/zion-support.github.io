import { Link } from 'react - router - dom';
import React from 'react';
export const EnhancedFuturisticFooter: React.FC = () => {
export const EnhancedFuturisticFooter: React.FC = () => {
import { 
import { motion } from 'framer - motion';


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
  Atom,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
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
  Shield as ShieldIcon5,
  BookOpen as BookOpenIcon5
} from 'lucide - react';

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
  ShoppingCart,
  Building,
  MailIcon,
  Calendar,
  Settings
} from 'lucide - react';

  const currentYear = new Date () .getFullYear () ;

  const footerSections = [
    {
      title: 'Comprehensive Services 2026',
      featured: true,
      links: [
        { name: 'All Services & Pricing', href: '/comprehensive-services-showcase-2026', featured: true },
        { name: 'Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026', featured: true },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas', featured: true },
        { name: 'AI Solutions', href: '/services/ai-business-intelligence', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Blockchain Solutions', href: '/services#blockchain', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true }
      ]
    },
    {
      title: 'Innovative Micro SAAS 2026',
      featured: true,
      links: [
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success', featured: true },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence', featured: true },
        { name: 'AI HR & Talent Management', href: '/services/ai-hr-talent', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI Financial Planning', href: '/services/ai-financial-planning', featured: true },
        { name: 'AI Learning Platform', href: '/services/ai-learning-development', featured: true },
        { name: 'AI Supply Chain Risk', href: '/services/ai-supply-chain-risk', featured: true },
        { name: 'AI Compliance Management', href: '/services/ai-compliance-management', featured: true },
        { name: 'AI Innovation Platform', href: '/services/ai-innovation-management', featured: true }
      ]
    },
    {
      title: 'AI Services 2026',
      featured: true,
      links: [
        { name: 'Autonomous Business Operations', href: '/services/ai-autonomous-business', featured: true },
        { name: 'Neural Interface Platform', href: '/services/ai-neural-interface', featured: true },
        { name: 'Quantum Machine Learning', href: '/services/ai-quantum-ml', featured: true },
        { name: 'Synthetic Biology AI', href: '/services/ai-synthetic-biology', featured: true },
        { name: 'Space Technology AI', href: '/services/ai-space-technology', featured: true },
        { name: 'Climate Intelligence AI', href: '/services/ai-climate-intelligence', featured: true },
        { name: 'Autonomous Vehicles AI', href: '/services/ai-autonomous-vehicles', featured: true },
        { name: 'Digital Twin & Metaverse', href: '/services/ai-digital-twin-metaverse', featured: true },
        { name: 'Blockchain & Web3 AI', href: '/services/ai-blockchain-web3', featured: true },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', featured: true }
      ]
    },
    {
      title: 'IT Infrastructure 2026',
      featured: true,
      links: [
        { name: 'Cloud Infrastructure Optimization', href: '/services/ai-cloud-optimization', featured: true },
        { name: 'Edge Computing & 5G', href: '/services/edge-computing-5g', featured: true },
        { name: 'Data Center Management', href: '/services/ai-data-center-management', featured: true },
        { name: 'Zero-Trust Security', href: '/services/zero-trust-security', featured: true },
        { name: 'DevOps & CI/CD Automation', href: '/services/ai-devops-automation', featured: true },
        { name: 'Multi-Cloud Management', href: '/services/hybrid-multi-cloud', featured: true },
        { name: 'Network Performance AI', href: '/services/ai-network-performance', featured: true },
        { name: 'Green IT & Sustainability', href: '/services/green-it-sustainability', featured: true },
        { name: 'Disaster Recovery AI', href: '/services/ai-disaster-recovery', featured: true },
        { name: 'IT Asset Management AI', href: '/services/ai-it-asset-management', featured: true }
      ]
    },
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services#quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/services#neural-interface', featured: true },
        { name: 'Space Technology Solutions', href: '/services#space-technology', featured: true },
        { name: 'Synthetic Biology Platform', href: '/services#synthetic-biology', featured: true },
        { name: 'Climate Intelligence Platform', href: '/services#climate-intelligence', featured: true },
        { name: 'Autonomous Systems Platform', href: '/services#autonomous-systems', featured: true },
        { name: 'Digital Twin Metaverse', href: '/services#digital-twin-metaverse', featured: true },
        { name: 'Blockchain Web3 Platform', href: '/services#blockchain-web3', featured: true },
        { name: 'Advanced AI Solutions', href: '/services#advanced-ai', featured: true }
      ]
    },
    {
      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' }
      ]
    },
    {
      title: 'Infrastructure & Security',
      featured: true,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Cybersecurity Solutions', href: '/services/ai-cybersecurity', featured: true },
        { name: 'Zero Trust Security', href: '/services/ai-cybersecurity', featured: true },
        { name: 'AI Ethics & Governance', href: '/services/ai-cybersecurity', featured: true },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: false },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: false },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', featured: false },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-threat-detection', featured: false },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: false },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: false },
        { name: 'Digital Twin', href: '/services/digital-twin', featured: false },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: false },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: false },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: false }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const contactInfo = {
    phone: '+1 (800) 123-4567',
    email: 'info@ziontechgroup.com',
    address: '123 Innovation Drive, Tech City, TC 12345'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Pioneering the Future</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI solutions, quantum technology, and innovative IT services 
              that transform businesses and drive unprecedented growth worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <a 
                href={contactInfo.website}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{contactInfo.website.replace('https://', '')}</span>
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
                  className={`p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-gray-400 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
                <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
                <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
                <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ziontechgroup.com
                </a>
                <p className="text-sm text-slate-400 mt-2">Explore our services online</p>
              </div>
            </div>
            
            {/* Additional Contact Methods */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Emergency Support</h4>
                  <p className="text-sm text-slate-500">Critical issues: +1 302 464 0950</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Business Hours</h4>
                  <p className="text-sm text-slate-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Response Time</h4>
                  <p className="text-sm text-slate-500">Urgent: 1 hour, Normal: 4 hours</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Global Support</h4>
                  <p className="text-sm text-slate-500">24/7 availability worldwide</p>
                </div>
              </div>
            </div>
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
                      {link.featured && <ArrowRight className="w-3 h-3 mr-2" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into emerging technologies, industry trends, and breakthrough solutions 
              that are shaping the future of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookies</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUpRight className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};