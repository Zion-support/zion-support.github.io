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
  Scale
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { name: 'Finance', href: '/solutions/finance', icon: DollarSign },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Factory },
        { name: 'Retail', href: '/solutions/retail', icon: Store },
        { name: 'Education', href: '/solutions/education', icon: GraduationCap }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Building2 },
        { name: 'Leadership', href: '/leadership', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'News', href: '/news', icon: FileText },
        { name: 'Blog', href: '/blog', icon: BookOpen }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Research', href: '/research-development', icon: Lightbulb },
        { name: 'Training', href: '/training', icon: GraduationCap },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'White Papers', href: '/white-papers', icon: FileText }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Desk', href: '/helpdesk', icon: HelpCircle },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle },
        { name: 'Knowledge Base', href: '/knowledge-base', icon: BookOpen },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Status', href: '/status', icon: Activity },
        { name: 'Support Portal', href: '/support', icon: HelpCircle }
      ]
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-zion-cyan rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-zion-slate-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-zion-slate-light">Innovation • Technology • Growth</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Pioneering the future of technology through innovative AI, quantum computing, and cybersecurity solutions that transform businesses and drive sustainable growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan" />
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zion-cyan transition-colors"
                >
                  364 E Main St STE 1008, Middletown DE 19709
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
                  className="w-10 h-10 bg-zion-slate-dark border border-zion-purple/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/40 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 group"
                    >
                      <link.icon className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-zion-purple/20 bg-zion-slate-dark py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get the latest insights, product updates, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20 bg-zion-slate-dark py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 group"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}