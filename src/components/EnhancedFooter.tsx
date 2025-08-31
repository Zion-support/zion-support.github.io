import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github,
  Facebook,
  Instagram,
  Zap,
  Brain,
  Server,
  Shield,
  Users,
  Building2,
  FileText,
  Rocket,
  Target,
  Atom,
  Network,
  Cloud,
  Lock,
  TrendingUp,
  Workflow,
  MessageCircle,
  Calendar,
  PenTool,
  Activity,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  Star,
  HelpCircle,
  BarChart3,
  ShoppingCart,
  Heart,
  Factory,
  DollarSign,
  Briefcase,
  Award,
  ExternalLink,
  ArrowUp,
  Sparkles,
  CheckCircle,
  Monitor,
  Headphones,
  Truck,
  Search,
  Layers,
  Database,
  Calculator,
  Leaf,
  Store,
  Plane,
  Ship,
  Train,
  Car,
  Warehouse,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  UserPlusCircle,
  UserMinusCircle,
  UserXCircle,
  UserCogCircle,
  UserEditCircle,
  UserSearchCircle,
  UserVoiceCircle,
  UserHeartCircle,
  UserStarCircle,
  Code,
  Home,
  Scale,
  ChevronUp
} from 'lucide-react';

export const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & Media', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-services' },
        { name: 'Quantum Computing', href: '/services/ai-quantum-computing-platform' },
        { name: 'Space Technology', href: '/services/ai-space-technology-platform' },
        { name: 'Financial Technology', href: '/services/ai-financial-technology-platform' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud & DevOps', href: '/cloud-devops' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'All Services', href: '/comprehensive-services-showcase-2025' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Government', href: '/solutions/government' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Pricing Guide', href: '/comprehensive-pricing-guide-2025' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'System Status', href: '/status' },
        { name: 'API Documentation', href: '/api' },
        { name: 'Developer Portal', href: '/developer-portal' },
        { name: 'Community', href: '/community' },
        { name: 'Contact Support', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const contactInfo = [
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, 
              quantum computing, and innovative micro SAAS services. 
              Transforming businesses through digital innovation.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  {contact.href !== '#' ? (
                    <a 
                      href={contact.href} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === 'Company' && <Building2 className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Services' && <Server className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Solutions' && <Target className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Support' && <HelpCircle className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
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

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Insights
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI advancements, quantum computing breakthroughs, 
              and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 border border-gray-600 hover:border-cyan-400 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </footer>
  );
};
