import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  CheckCircle,
  Monitor,
  Settings,
  Target,
  Database,
  Cpu,
  Smartphone,
  Tablet,
  Server,
  Wifi,
  Activity,
  Rocket,
  Heart,
  Lock,
  FileText,
  Calendar,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Loader2,
  Check,
  XCircle,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Layers,
  Package,
  Archive,
  Bookmark,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MessageSquare as MessageSquareIcon,
  Send,
  Paperclip,
  Image,
  Video,
  Music,
  File,
  Folder,
  FolderOpen,
  HardDrive,
  Cpu as Processor,
  MemoryStick,
  HardDrive as Storage,
  Wifi as Network,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Video as VideoIcon,
  VideoOff,
  Headphones,
  Speaker,
  Monitor as Display,
  Tv,
  Smartphone as Mobile,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Fax,
  Router,
  Modem,
  Switch,
  Hub,
  Cable,
  Plug,
  Unplug,
  Zap as Lightning,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Umbrella,
  Sun as Sunny,
  Moon as MoonIcon,
  Star as StarIcon,
  Sparkles,
  Flame,
  Snowflake as Snow,
  Droplet,
  Waves,
  Mountain,
  TreePine,
  Trees,
  Leaf,
  Flower,
  Seedling,
  Sprout
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions' },
        { name: 'AI Neural Memory Assistant', href: '/ai-neural-memory-assistant', description: 'Cognitive enhancement platform' },
        { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', description: '3D immersive collaboration' },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', description: 'Environmental AI solutions' },
        { name: 'AI Space Technology Pro', href: '/ai-space-technology-pro', description: 'Space exploration AI' },
        { name: 'AI Financial Crime Detection Pro', href: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare', description: 'Medical AI platform' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision', description: 'Image recognition solutions' },
        { name: 'AI Quantum Computing', href: '/ai-quantum-computing', description: 'Quantum AI platform' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security suite' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure', description: 'Scalable architecture' },
        { name: '24/7 IT Support', href: '/it-support', description: 'Round-the-clock support' },
        { name: 'Custom Development', href: '/custom-development', description: 'Tailored software solutions' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', description: 'Automated deployment' },
        { name: 'Database Management', href: '/database-management', description: 'Data optimization' },
        { name: 'Network Design', href: '/network-design', description: 'Secure networking' },
        { name: 'AI Infrastructure Monitoring', href: '/ai-infrastructure-monitoring', description: 'Intelligent monitoring' },
        { name: 'Blockchain Integration', href: '/blockchain-integration-services', description: 'Web3 solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager', description: 'Intelligent project management' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', description: 'Business intelligence' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', description: 'Smart email campaigns' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', description: '24/7 AI support' },
        { name: 'AI Content Studio', href: '/ai-content-studio', description: 'Content creation suite' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor', description: 'Personalized finance' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI Smart Calendar', href: '/ai-smart-calendar', description: 'Intelligent scheduling' },
        { name: 'AI Content Writer', href: '/ai-content-writer', description: 'AI-powered writing' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'text-pink-400',
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing', description: 'Next-gen quantum AI' },
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', href: '/ai-blockchain-solutions', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', href: '/iot-platform', description: 'Connected devices' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', href: '/smart-cities', description: 'Urban technology' },
        { name: 'Digital Transformation', href: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', href: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Business Intelligence', href: '/ai-business-intelligence', description: 'Advanced analytics' },
        { name: 'Robotics Solutions', href: '/robotics', description: 'AI-powered robotics' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Blog', href: '/blog', icon: MessageSquare },
    { name: 'Pricing', href: '/pricing', icon: BarChart },
    { name: 'News', href: '/news', icon: Newspaper },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Investors', href: '/investors', icon: TrendingUp }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact', icon: Phone },
    { name: 'Support Center', href: '/support', icon: HelpCircle },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api-docs', icon: Code },
    { name: 'Status Page', href: '/status', icon: Activity },
    { name: 'System Health', href: '/health', icon: Heart },
    { name: 'Help Center', href: '/help', icon: Info },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie },
    { name: 'GDPR Compliance', href: '/gdpr', icon: Lock },
    { name: 'Security', href: '/security', icon: Shield },
    { name: 'Compliance', href: '/compliance', icon: CheckCircle },
    { name: 'Accessibility', href: '/accessibility', icon: Eye },
    { name: 'Sitemap', href: '/sitemap', icon: Map }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
                <span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
              Transform your business with our advanced AI capabilities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Our Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center mb-4">
                    <category.icon className={`w-5 h-5 mr-2 ${category.color}`} />
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.slice(0, 5).map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm block"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                    {category.services.length > 5 && (
                      <li>
                        <Link
                          to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                        >
                          View All {category.title} →
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company & Support Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center"
                      >
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center"
                      >
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center"
                      >
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-cyan-400/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-white font-bold text-lg mb-2">Stay Updated</h3>
                <p className="text-gray-300 text-sm">
                  Get the latest AI and IT insights delivered to your inbox
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 bg-slate-800/50 border border-cyan-400/20 rounded-l-lg text-white placeholder-gray-400 focus:border-cyan-400/40 focus:outline-none"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-r-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-400/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in Delaware, USA</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;