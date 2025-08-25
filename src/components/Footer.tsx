import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Heart,
  Eye,
  Target as TargetIcon,
  Home,
  Briefcase,
  BookOpen,
  MessageSquare,
  Info,
  Users,
  Award,
  FileText,
  Calendar,
  HelpCircle,
  ExternalLink,
  Globe,
  Building,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  BarChart3 as BarChart3Icon,
  Target as TargetIcon2,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Clock as ClockIcon,
  Heart as HeartIcon,
  Eye as EyeIcon,
  ShoppingCart,
  Truck,
  DollarSign,
  Handshake,
  Leaf,
  Activity,
  Video,
  Copy,
  Link as LinkIcon
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Core Services",
      icon: Briefcase,
      color: "from-cyan-500 to-blue-500",
      links: [
        { label: "AI & Machine Learning", path: "/ai-solutions", icon: BrainIcon },
        { label: "Cloud & DevOps", path: "/cloud-devops", icon: CloudIcon },
        { label: "Cybersecurity", path: "/services/cybersecurity", icon: ShieldIcon },
        { label: "Quantum Technology", path: "/services/quantum-technology", icon: ZapIcon },
        { label: "IT Infrastructure", path: "/services/it-infrastructure", icon: CpuIcon },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", icon: CodeIcon },
        { label: "Industry Solutions", path: "/services/industry-solutions", icon: Building },
        { label: "Digital Transformation", path: "/digital-transformation", icon: RocketIcon }
      ]
    },
    {
      title: "Solutions",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise", icon: Building },
        { label: "Healthcare Solutions", path: "/solutions/healthcare", icon: HeartIcon },
        { label: "Financial Services", path: "/services/financial-services", icon: BarChart3Icon },
        { label: "Manufacturing Intelligence", path: "/services/manufacturing-intelligence", icon: CpuIcon },
        { label: "Retail Technology", path: "/services/retail-technology", icon: ShoppingCart },
        { label: "Government Solutions", path: "/solutions/government", icon: ShieldIcon },
        { label: "Educational Technology", path: "/services/educational-technology", icon: BookOpen },
        { label: "Transportation & Logistics", path: "/services/transportation-logistics", icon: Truck }
      ]
    },
    {
      title: "Emerging Tech",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech", icon: ZapIcon },
        { label: "Blockchain & Web3", path: "/services/blockchain-solutions", icon: LinkIcon },
        { label: "IoT & Edge Computing", path: "/services/iot-platforms", icon: NetworkIcon },
        { label: "Extended Reality (XR)", path: "/services/ar-vr-solutions", icon: EyeIcon },
        { label: "5G & Networks", path: "/5g-enterprise-solutions", icon: NetworkIcon },
        { label: "Green Technology", path: "/services/green-tech", icon: Leaf },
        { label: "Digital Twins", path: "/services/digital-twins", icon: Copy },
        { label: "Metaverse Solutions", path: "/services/metaverse", icon: Globe }
      ]
    },
    {
      title: "Company",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      links: [
        { label: "About Us", path: "/about", icon: Info },
        { label: "Our Mission", path: "/mission", icon: Target },
        { label: "Team", path: "/team", icon: Users },
        { label: "Leadership", path: "/leadership", icon: Award },
        { label: "Pricing", path: "/pricing", icon: DollarSign },
        { label: "Careers", path: "/careers", icon: RocketIcon },
        { label: "Partners", path: "/partners", icon: Handshake },
        { label: "Contact", path: "/contact", icon: MessageSquare }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
      links: [
        { label: "Blog", path: "/blog", icon: FileText },
        { label: "News", path: "/news", icon: Calendar },
        { label: "Webinars", path: "/webinars", icon: Video },
        { label: "White Papers", path: "/white-papers", icon: FileText },
        { label: "Case Studies", path: "/case-studies", icon: BarChart3Icon },
        { label: "Help Center", path: "/help", icon: HelpCircle },
        { label: "Documentation", path: "/docs", icon: BookOpen },
        { label: "API Reference", path: "/api", icon: CodeIcon }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Code,
      color: "from-yellow-500 to-orange-500",
      links: [
        { label: "AI Matcher", path: "/ai-matcher", icon: BrainIcon },
        { label: "Talent Directory", path: "/talent-directory", icon: Users },
        { label: "Marketplace", path: "/marketplace", icon: ShoppingCart },
        { label: "Developer Portal", path: "/developer-portal", icon: CodeIcon },
        { label: "API Hub", path: "/api-hub", icon: DatabaseIcon },
        { label: "Analytics Dashboard", path: "/analytics", icon: BarChart3Icon },
        { label: "Performance Monitor", path: "/performance", icon: Activity },
        { label: "Security Scanner", path: "/security-scanner", icon: ShieldIcon }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { label: 'Get Started', path: '/contact', icon: ArrowRight, highlight: true },
    { label: 'View Pricing', path: '/pricing', icon: DollarSign },
    { label: 'Request Demo', path: '/demo', icon: Eye },
    { label: 'Support', path: '/help', icon: HelpCircle }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain opacity-10"></div>
      
      {/* Glowing Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white neon-glow-cyan">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />}
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-8"></div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg opacity-50 blur-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white neon-glow-cyan">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400 font-mono">
                    Innovation • Technology • Future
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Leading provider of AI-powered technology solutions, quantum computing, 
                cybersecurity, and enterprise digital transformation services.
              </p>
              
              {/* Quick Links */}
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-3 text-sm transition-all duration-200 group ${
                      link.highlight 
                        ? 'text-cyan-400 hover:text-cyan-300' 
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{link.label}</span>
                    {link.highlight && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white neon-glow-purple">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown DE 19709</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-gray-300">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 text-gray-400 hover:text-white transition-all duration-200 rounded-lg hover:bg-cyan-500/10 ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter & Updates */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white neon-glow-pink">
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm">
                Get the latest insights, news, and updates about emerging technologies 
                and AI innovations delivered to your inbox.
              </p>
              
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="text-xs text-gray-500">
                By subscribing, you agree to our{' '}
                <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/terms" className="text-cyan-400 hover:text-cyan-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 float-element"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 float-element-delayed"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 float-element"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full opacity-30 float-element-delayed"></div>
    </footer>
  );
}