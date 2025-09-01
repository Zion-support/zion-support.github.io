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
  BookOpen,
  Calendar,
  Settings
} from 'lucide - react';

  const currentYear = new Date () .getFullYear () ;

  const footerSections = [
    {
      title: 'Services',
      icon: Rocket,
      color: 'from - blue - 600 to - cyan - 600',
      links: [
        { name: 'Services Overview', href: '/services - overview' },
        { name: 'AI Services', href: '/ai - services' },
        { name: 'IT Services', href: '/it - services' },
        { name: 'Micro SaaS', href: '/micro - saas' },
        { name: 'Services Catalog', href: '/services - catalog' },
        { name: 'Services Comparison', href: '/services - comparison' }
      ]
    },
    {
      title: 'Core Technologies',
      title: 'AI & Machine Learning Services',
      featured: true,
      icon: Brain,
      color: 'from - indigo - 600 to - purple - 600',
      links: [
        { name: 'AI Business Intelligence', href: '/services / ai - business - intelligence', featured: true },
        { name: 'AI Workflow Orchestrator', href: '/services / ai - workflow - orchestrator', featured: true },
        { name: 'AI Data Governance Platform', href: '/services / ai - data - governance - platform', featured: true },
        { name: 'AI Customer Experience Analytics', href: '/services / ai - customer - experience - analytics', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services / ai - healthcare - analytics', featured: true },
        { name: 'AI Financial Trading', href: '/services / ai - financial - trading', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services / ai - supply - chain - optimization', featured: true },
        { name: 'AI Content Creation', href: '/services / ai - content - creation', featured: true },
        { name: 'AI HR Platform', href: '/services / ai - hr - platform', featured: true },
        { name: 'AI Marketing Automation', href: '/services / ai - marketing - automation', featured: true },
        { name: 'AI Customer Support', href: '/services / ai - customer - support - automation', featured: true },
        { name: 'AI Project Management', href: '/services / ai - project - management', featured: true },
        { name: 'AI Predictive Maintenance', href: '/services / ai - predictive - maintenance', featured: true },
        { name: 'AI Sales Copilot', href: '/services / ai - sales - copilot', featured: true }
      ]
    },
    {
      title: 'Innovation Hub',
      icon: Star,
      color: 'from - purple - 600 to - pink - 600',
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services#quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/services#neural-interface', featured: true },
        { name: 'Space Tech Solutions', href: '/services/space-tech', featured: true },
        { name: 'Biotech AI Platform', href: '/services/biotech-ai', featured: true },
        { name: 'Metaverse Enterprise', href: '/services/metaverse', featured: true },
        { name: 'Autonomous Systems', href: '/services/autonomous-systems', featured: true },
        { name: 'Green Tech Solutions', href: '/services/green-tech', featured: true }
      ]
    },
    {
      title: 'Solutions & Industries',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Startup Solutions', href: '/solutions/startup' },
        { name: 'SMB Solutions', href: '/solutions/smb' },
        { name: 'Industry Solutions', href: '/solutions/industry' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail & E-commerce', href: '/solutions/retail' },
        { name: 'Government & Public', href: '/solutions/government' }
      ]
    },
    {
      title: 'Resources & Learning',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Events', href: '/events' },
        { name: 'Press & Media', href: '/press' }
      ]
    },
    {
      title: 'Company & Support',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Support Center', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
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
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
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

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.featured && <Star className="w-4 h-4 text-yellow-400 mr-2" />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center ${
                        link.featured ? 'font-medium text-cyan-400' : ''
                      }`}
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