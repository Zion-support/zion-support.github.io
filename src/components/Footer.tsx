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
  Gamepad2,
  Coins,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
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
  Newspaper,
  Eye,
  Camera,
  Film,
  Image
} from 'lucide-react';

interface FooterLink {
  name: string;
  path: string;
  icon: any;
  external?: boolean;
}

interface FooterSection {
  title: string;
  icon: any;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Company',
    icon: Building2,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Partners', path: '/partners', icon: Handshake },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'Contact', path: '/contact', icon: Phone },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Events', path: '/events', icon: Calendar },
      { name: 'Leadership', path: '/leadership', icon: Users },
      { name: 'Press', path: '/press', icon: PenTool }
    ]
  },
  {
    title: 'Services',
    icon: Zap,
    links: [
      { name: 'AI Solutions', path: '/services/ai', icon: Brain },
      { name: 'Cloud Services', path: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: TrendingUp },
      { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3 },
      { name: 'Enterprise Software', path: '/services/enterprise-software', icon: Building2 },
      { name: 'IT Consulting', path: '/services/it-consulting', icon: Users },
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'Blockchain', path: '/services/blockchain', icon: Network },
      { name: 'IoT Solutions', path: '/services/iot', icon: Wifi }
    ]
  },
  {
    title: 'Solutions',
    icon: Target,
    links: [
      { name: 'Healthcare', path: '/solutions/healthcare', icon: Heart },
      { name: 'Finance', path: '/solutions/finance', icon: DollarSign },
      { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Factory },
      { name: 'Retail', path: '/solutions/retail', icon: ShoppingCart },
      { name: 'Education', path: '/solutions/education', icon: GraduationCap },
      { name: 'Transportation', path: '/solutions/transportation', icon: Truck },
      { name: 'Energy', path: '/solutions/energy', icon: Zap },
      { name: 'Government', path: '/solutions/government', icon: Building },
      { name: 'Non-Profit', path: '/solutions/non-profit', icon: Heart },
      { name: 'Startups', path: '/solutions/startups', icon: Rocket }
    ]
  },
  {
    title: 'Resources',
    icon: BookOpen,
    links: [
      { name: 'Documentation', path: '/docs', icon: FileText },
      { name: 'API Reference', path: '/api', icon: Code },
      { name: 'Developer Portal', path: '/developers', icon: Cpu },
      { name: 'Knowledge Base', path: '/knowledge-base', icon: BookOpen },
      { name: 'Video Tutorials', path: '/tutorials', icon: Video },
      { name: 'Webinars', path: '/webinars', icon: Monitor },
      { name: 'Training', path: '/training', icon: GraduationCap },
      { name: 'White Papers', path: '/white-papers', icon: FileText },
      { name: 'Research', path: '/research-development', icon: Microscope },
      { name: 'Community', path: '/community', icon: Users }
    ]
  },
  {
    title: 'Support',
    icon: HelpCircle,
    links: [
      { name: 'Help Desk', path: '/helpdesk', icon: Headphones },
      { name: 'Contact Support', path: '/contact', icon: MessageCircle },
      { name: 'Status Page', path: '/status', icon: Activity },
      { name: 'System Status', path: '/system-status', icon: Monitor },
      { name: 'Bug Report', path: '/bug-report', icon: AlertTriangle },
      { name: 'Feature Request', path: '/feature-request', icon: Lightbulb },
      { name: 'Live Chat', path: '/live-chat', icon: MessageCircle },
      { name: 'Phone Support', path: 'tel:+13024640950', icon: Phone },
      { name: 'Email Support', path: 'mailto:support@ziontechgroup.com', icon: Mail },
      { name: 'Emergency', path: '/emergency', icon: AlertTriangle }
    ]
  }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-darker text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-zion-cyan rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-zion-slate-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-zion-slate-light">Innovation • Technology • Growth</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, quantum computing, and digital transformation solutions. 
              We help organizations thrive in the digital age through innovative technology and strategic insights.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+13024640950">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <MapPin className="w-4 h-4 mr-3" />
                <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank" rel="noopener noreferrer">
                  364 E Main St STE 1008, Middletown DE 19709
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" 
                 className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" 
                 className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" 
                 className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" target="_blank" rel="noopener noreferrer" 
                 className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer" 
                 className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <link.icon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zion-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors">Accessibility</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-slate-dark rounded-lg transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}