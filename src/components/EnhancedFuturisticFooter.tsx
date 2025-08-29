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
  Calendar,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Home,
  Car,
  Factory,
  Plane,
  Ship,
  Train,
  Wifi,
  Satellite,
  Microscope,
  Pill,
  Stethoscope,
  Calculator,
  ChartBar,
  PresentationChartLine,
  Users,
  Cog,
  Wrench,
  Hammer,
  Screwdriver,
  Palette,
  Camera,
  Video,
  Music,
  Headphones,
  Gamepad2,
  Monitor,
  Smartphone as PhoneIcon,
  Tablet,
  Watch,
  Printer,
  Scanner,
  Projector,
  Speaker,
  Keyboard,
  Mouse,
  HardDrive,
  MemoryStick,
  Power,
  Battery,
  WifiOff,
  Signal,
  Bluetooth,
  Nfc,
  QrCode,
  Barcode,
  CreditCard,
  Wallet,
  PiggyBank,
  Coins,
  Banknote,
  Receipt,
  Ticket,
  Gift,
  Package,
  Box,
  Archive,
  Folder,
  File,
  Image,
  Film,
  Book,
  Newspaper,
  CalendarDays,
  Clock3,
  Timer,
  Stopwatch,
  AlarmClock,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarSearch,
  CalendarEdit,
  CalendarTrash,
  CalendarLock,
  CalendarUnlock,
  CalendarSettings,
  CalendarOff,
  CalendarRepeat,
  CalendarRepeat1,
  CalendarRepeat2,
  CalendarRepeat3,
  CalendarRepeat4,
  CalendarRepeat5,
  CalendarRepeat6,
  CalendarRepeat7,
  CalendarRepeat8,
  CalendarRepeat9,
  CalendarRepeat10,
  CalendarRepeat11,
  CalendarRepeat12,
  CalendarRepeat13,
  CalendarRepeat14,
  CalendarRepeat15,
  CalendarRepeat16,
  CalendarRepeat17,
  CalendarRepeat18,
  CalendarRepeat19,
  CalendarRepeat20,
  CalendarRepeat21,
  CalendarRepeat22,
  CalendarRepeat23,
  CalendarRepeat24,
  CalendarRepeat25,
  CalendarRepeat26,
  CalendarRepeat27,
  CalendarRepeat28,
  CalendarRepeat29,
  CalendarRepeat30,
  CalendarRepeat31,
  Users
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-operations', featured: true, icon: Brain },
        { name: 'Quantum AI Cybersecurity', href: '/services/quantum-ai-cybersecurity', featured: true, icon: Shield },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-studio', featured: true, icon: PenTool },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence', featured: true, icon: TrendingUp },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support', featured: true, icon: MessageCircle },
        { name: 'AI Data Analytics & BI', href: '/services/ai-analytics-bi', featured: true, icon: BarChart3 },
        { name: 'Cloud Infrastructure & DevOps', href: '/services/cloud-devops', featured: true, icon: Cloud },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true, icon: Cpu },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true, icon: Eye },
        { name: 'Blockchain Web3 Platform', href: '/services/blockchain-web3', featured: true, icon: Lock }
      ]
    },
    {
      title: 'Specialized Industry Solutions',
      featured: true,
      links: [
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare', featured: true, icon: Stethoscope },
        { name: 'AI Financial Intelligence', href: '/services/ai-financial', featured: true, icon: Calculator },
        { name: 'AI Education Personalization', href: '/services/ai-education', featured: true, icon: GraduationCap },
        { name: 'AI Real Estate Intelligence', href: '/services/ai-real-estate', featured: true, icon: Building },
        { name: 'AI E-commerce Optimization', href: '/services/ai-ecommerce', featured: true, icon: ShoppingCart },
        { name: 'AI Manufacturing Optimization', href: '/services/ai-manufacturing', featured: true, icon: Factory },
        { name: 'AI Logistics Optimization', href: '/services/ai-logistics', featured: true, icon: Truck },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-studio', featured: true, icon: PenTool },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence', featured: true, icon: TrendingUp },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', featured: true, icon: MessageCircle }
      ]
    },
    {
      title: 'Core Technology Services',
      featured: false,
      links: [
        { name: 'AI & Machine Learning', href: '/services/ai-machine-learning', featured: false, icon: Brain },
        { name: 'Cybersecurity Solutions', href: '/services/cybersecurity', featured: false, icon: Shield },
        { name: 'Cloud Computing', href: '/services/cloud-computing', featured: false, icon: Cloud },
        { name: 'DevOps & Automation', href: '/services/devops-automation', featured: false, icon: Cog },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: false, icon: BarChart3 },
        { name: 'IoT Development', href: '/services/iot-development', featured: false, icon: Wifi },
        { name: 'Blockchain Development', href: '/services/blockchain-development', featured: false, icon: Lock },
        { name: 'Mobile App Development', href: '/services/mobile-development', featured: false, icon: Smartphone },
        { name: 'Web Development', href: '/services/web-development', featured: false, icon: Globe },
        { name: 'API Development', href: '/services/api-development', featured: false, icon: Code }
      ]
    },
    {
      title: 'Enterprise Solutions',
      featured: false,
      links: [
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', featured: false, icon: Rocket },
        { name: 'Enterprise AI Platform', href: '/solutions/enterprise-ai', featured: false, icon: Building },
        { name: 'Legacy System Migration', href: '/solutions/legacy-migration', featured: false, icon: Server },
        { name: 'Cloud Migration', href: '/solutions/cloud-migration', featured: false, icon: Cloud },
        { name: 'Data Migration', href: '/solutions/data-migration', featured: false, icon: Database },
        { name: 'API Integration', href: '/solutions/api-integration', featured: false, icon: Network },
        { name: 'Microservices Architecture', href: '/solutions/microservices', featured: false, icon: GitFork },
        { name: 'Container Orchestration', href: '/solutions/container-orchestration', featured: false, icon: Box },
        { name: 'CI/CD Pipelines', href: '/solutions/cicd-pipelines', featured: false, icon: GitFork },
        { name: 'Monitoring & Observability', href: '/solutions/monitoring', featured: false, icon: Eye }
      ]
    },
    {
      title: 'Startup & SMB Solutions',
      featured: false,
      links: [
        { name: 'Startup Acceleration', href: '/solutions/startup-acceleration', featured: false, icon: Rocket },
        { name: 'Micro SaaS Products', href: '/solutions/micro-saas', featured: false, icon: ShoppingCart },
        { name: 'Growth Hacking AI', href: '/solutions/growth-hacking', featured: false, icon: TrendingUp },
        { name: 'MVP Development', href: '/solutions/mvp-development', featured: false, icon: Lightbulb },
        { name: 'Product Strategy', href: '/solutions/product-strategy', featured: false, icon: Target },
        { name: 'Market Research', href: '/solutions/market-research', featured: false, icon: Search },
        { name: 'Competitive Analysis', href: '/solutions/competitive-analysis', featured: false, icon: Eye },
        { name: 'Business Model Canvas', href: '/solutions/business-model', featured: false, icon: Briefcase },
        { name: 'Funding Strategy', href: '/solutions/funding-strategy', featured: false, icon: DollarSign },
        { name: 'Go-to-Market Strategy', href: '/solutions/gtm-strategy', featured: false, icon: Rocket }
      ]
    },
    {
      title: 'Industry-Specific Solutions',
      featured: false,
      links: [
        { name: 'Healthcare Technology', href: '/solutions/healthcare', featured: false, icon: Heart },
        { name: 'Financial Services', href: '/solutions/financial-services', featured: false, icon: Banknote },
        { name: 'Manufacturing 4.0', href: '/solutions/manufacturing-4', featured: false, icon: Factory },
        { name: 'Retail & E-commerce', href: '/solutions/retail-ecommerce', featured: false, icon: ShoppingCart },
        { name: 'Real Estate Technology', href: '/solutions/real-estate-tech', featured: false, icon: Building },
        { name: 'Education Technology', href: '/solutions/education-tech', featured: false, icon: GraduationCap },
        { name: 'Logistics & Supply Chain', href: '/solutions/logistics-supply-chain', featured: false, icon: Truck },
        { name: 'Energy & Utilities', href: '/solutions/energy-utilities', featured: false, icon: Zap },
        { name: 'Transportation & Mobility', href: '/solutions/transportation-mobility', featured: false, icon: Car },
        { name: 'Media & Entertainment', href: '/solutions/media-entertainment', featured: false, icon: Video }
      ]
    },
    {
      title: 'Resources & Learning',
      featured: false,
      links: [
        { name: 'AI Academy', href: '/resources/ai-academy', featured: false, icon: GraduationCap },
        { name: 'Webinars', href: '/webinars', featured: false, icon: Calendar },
        { name: 'White Papers', href: '/white-papers', featured: false, icon: FileText },
        { name: 'Case Studies', href: '/case-studies', featured: false, icon: Briefcase },
        { name: 'Blog', href: '/blog', featured: false, icon: BookOpen },
        { name: 'Documentation', href: '/docs', featured: false, icon: FileText },
        { name: 'API Reference', href: '/docs/api', featured: false, icon: Code },
        { name: 'Integration Guides', href: '/docs/integrations', featured: false, icon: Network },
        { name: 'Developer Tools', href: '/resources/developer-tools', featured: false, icon: Wrench },
        { name: 'Community Forum', href: '/community', featured: false, icon: Users }
      ]
    },
    {
      title: 'Support & Services',
      featured: false,
      links: [
        { name: 'Support Center', href: '/support', featured: false, icon: HelpCircle },
        { name: 'Contact Us', href: '/contact', featured: false, icon: MessageCircle },
        { name: 'Request Quote', href: '/request-quote', featured: false, icon: DollarSign },
        { name: 'Careers', href: '/careers', featured: false, icon: Briefcase },
        { name: 'Partners', href: '/partners', featured: false, icon: Users },
        { name: 'About Us', href: '/about', featured: false, icon: Users },
        { name: 'Team', href: '/team', featured: false, icon: Users },
        { name: 'News & Updates', href: '/news', featured: false, icon: Newspaper },
        { name: 'Events', href: '/events', featured: false, icon: Calendar },
        { name: 'Privacy Policy', href: '/privacy', featured: false, icon: Shield }
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

  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: Rocket, featured: true },
    { name: 'Request Demo', href: '/request-demo', icon: Eye },
    { name: 'Download Brochure', href: '/downloads/brochure', icon: FileText },
    { name: 'Schedule Call', href: '/schedule-call', icon: Calendar },
    { name: 'Join Webinar', href: '/webinars', icon: Users },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          {/* Top Section - Logo and Description */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Revolutionizing business through cutting-edge AI, quantum computing, and innovative technology solutions. 
              Empowering enterprises to achieve unprecedented growth and efficiency in the digital age.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, sectionIdx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  {section.featured && <Star className="w-5 h-5 text-cyan-400" />}
                  <h3 className={`text-lg font-semibold ${section.featured ? 'text-cyan-400' : 'text-white'}`}>
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.href}
                      className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />}
                      <span className="text-sm">{link.name}</span>
                      {link.featured && <Star className="w-3 h-3 text-cyan-400" />}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, idx) => (
                <Link
                  key={idx}
                  to={action.href}
                  className={`p-4 rounded-xl transition-all duration-200 group ${
                    action.featured
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white border border-slate-700/50 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <action.icon className={`w-6 h-6 ${action.featured ? 'text-white' : 'text-cyan-400 group-hover:text-cyan-300'}`} />
                    <span className="text-sm font-medium">{action.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">https://ziontechgroup.com</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Connect With Us</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200 group ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest Tech Trends</h3>
              <p className="text-slate-300 mb-6">Get insights on AI, quantum computing, and emerging technologies delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright & Links */}
        <div className="border-t border-slate-700/50">
          <div className="container-responsive py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}