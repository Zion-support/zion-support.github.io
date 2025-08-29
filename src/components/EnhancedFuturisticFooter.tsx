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
      title: 'Core Services',
      featured: true,
      links: [
        { name: 'All Services', href: '/services', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Digital Twin', href: '/services/digital-twin', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: true,
      links: [
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', featured: true },
        { name: 'Financial Services', href: '/solutions#financial', featured: true },
        { name: 'Legal Services', href: '/solutions#legal', featured: true },
        { name: 'Manufacturing', href: '/solutions#manufacturing', featured: true },
        { name: 'Retail & E-commerce', href: '/solutions#retail', featured: true },
        { name: 'Government & Public Sector', href: '/solutions#government', featured: false },
        { name: 'Education & Training', href: '/solutions#education', featured: false },
        { name: 'Space & Aerospace', href: '/solutions#space', featured: false }
      ]
    },
    {
      title: 'Resources & Support',
      featured: true,
      links: [
        { name: 'Blog & Insights', href: '/blog', featured: true },
        { name: 'Case Studies', href: '/case-studies', featured: true },
        { name: 'White Papers', href: '/white-papers', featured: true },
        { name: 'Webinars', href: '/webinars', featured: true },
        { name: 'Documentation', href: '/docs', featured: true },
        { name: 'FAQ & Support', href: '/faq', featured: true },
        { name: 'Pricing Guide 2027', href: '/comprehensive-pricing-guide-2027', featured: true }
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
        { name: 'Partnerships', href: '/partners', featured: false },
        { name: 'Legal & Privacy', href: '/legal', featured: false }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: ArrowRight, color: 'from-cyan-500 to-blue-600' },
    { name: 'View Pricing', href: '/comprehensive-pricing-guide-2027', icon: DollarSign, color: 'from-green-500 to-emerald-600' },
    { name: 'Browse Services', href: '/services', icon: Rocket, color: 'from-purple-500 to-pink-600' },
    { name: 'Read Blog', href: '/blog', icon: BookOpen, color: 'from-orange-500 to-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, cloud infrastructure, 
              and digital transformation services. Empowering businesses to innovate and grow.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="w-4 h-4 text-purple-400 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-slate-300">
                <MapPin className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
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
                  className={`w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50`}
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
                {section.featured && (
                  <Star className="w-4 h-4 text-yellow-400 mr-2 fill-current" />
                )}
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      {link.featured && (
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></div>
                      )}
                      {link.name}
                      {link.featured && (
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose your next step and let's transform your business together
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className="group p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                  {action.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>by Zion Tech Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup - Optional */}
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-t border-slate-700/50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Get the latest insights, updates, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};