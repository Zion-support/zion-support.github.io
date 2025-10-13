import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cloud,
  Code,
  Database,
  Users,
  Award,
  Star,
  Package,
  Settings,
  Network,
  Cpu,
  Smartphone,
  Monitor,
  Target,
  FileText,
  Heart,
  Receipt,
  TrendingUp,
  MessageSquare,
  Calendar,
  CreditCard,
  Lock,
  PieChart,
  Bot,
  Palette,
  Video,
  Music,
  Camera,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Edit,
  Plus,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  Maximize,
  Minimize,
  Copy,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  Quote,
  Link as LinkIcon,
  ExternalLink,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Diamond,
  Zap as Lightning,
  Flame,
  Sun,
  Moon,
  Droplets,
  Wind,
  Snowflake,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Thermometer,
  Gauge,
  Activity,
  Pulse,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Kiss,
  Wink,
  Tongue,
  Sad,
  Happy,
  Neutral,
  Excited,
  Proud,
  Shy,
  Cool,
  Hot,
  Cold,
  Warm,
  Fresh,
  Stale,
  New,
  Old,
  Young,
  Mature,
  Beginner,
  Expert,
  Pro,
  Amateur,
  Rookie,
  Veteran,
  Master,
  Legend,
  Hero,
  Champion,
  Winner,
  Loser,
  Success,
  Failure,
  Victory,
  Defeat,
  Win,
  Lose,
  Draw,
  Tie,
  Equal,
  Different,
  Same,
  Similar,
  Unique,
  Common,
  Rare,
  Frequent,
  Occasional,
  Regular,
  Irregular,
  Normal,
  Abnormal,
  Standard,
  Custom,
  Default,
  Special,
  General,
  Specific,
  Broad,
  Narrow,
  Wide,
  Thin,
  Thick,
  Large,
  Small,
  Big,
  Tiny,
  Huge,
  Massive,
  Mini,
  Micro,
  Macro,
  Mega,
  Giga,
  Tera,
  Peta,
  Exa,
  Zetta,
  Yotta,
  Kilo,
  Hecto,
  Deca,
  Deci,
  Centi,
  Milli,
  Micro as MicroIcon,
  Nano,
  Pico,
  Femto,
  Atto,
  Zepto,
  Yocto
} from "lucide-react";
import FuturisticButton from "./FuturisticButton";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(() => [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
    },
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", path: "/ai-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Content Generation", path: "/ai-content-generation", icon: <FileText className="w-4 h-4" /> },
    { name: "AI Customer Support", path: "/ai-customer-support", icon: <Users className="w-4 h-4" /> },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity", icon: <Shield className="w-4 h-4" /> },
    { name: "AI Data Analytics", path: "/ai-data-analytics", icon: <Database className="w-4 h-4" /> },
    { name: "AI Document Processing", path: "/ai-document-processing", icon: <FileText className="w-4 h-4" /> },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation", icon: <Target className="w-4 h-4" /> },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant", icon: <Smartphone className="w-4 h-4" /> },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation", icon: <Zap className="w-4 h-4" /> },
    { name: "AI Chatbot Builder", path: "/ai-chatbot-builder", icon: <Bot className="w-4 h-4" /> },
    { name: "AI Code Assistant", path: "/ai-code-assistant", icon: <Code className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Migration", path: "/cloud-migration", icon: <Cloud className="w-4 h-4" /> },
    { name: "DevOps Services", path: "/devops-services", icon: <Settings className="w-4 h-4" /> },
    { name: "IT Consulting", path: "/it-consulting", icon: <Users className="w-4 h-4" /> },
    { name: "Network Security", path: "/network-security", icon: <Shield className="w-4 h-4" /> },
    { name: "Software Development", path: "/software-development", icon: <Code className="w-4 h-4" /> },
    { name: "System Integration", path: "/system-integration", icon: <Database className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Globe className="w-4 h-4" /> },
    { name: "Mobile Development", path: "/mobile-development", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Database Management", path: "/database-management", icon: <Database className="w-4 h-4" /> },
    { name: "IT Support", path: "/it-support", icon: <Monitor className="w-4 h-4" /> },
    { name: "Managed Services", path: "/managed-services", icon: <Settings className="w-4 h-4" /> },
    { name: "Security Audit", path: "/security-audit", icon: <Shield className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "AI Email Analyzer", path: "/ai-powered-email-analyzer", icon: <Mail className="w-4 h-4" />, featured: true },
    { name: "Smart Inventory Optimizer", path: "/smart-inventory-optimizer", icon: <Package className="w-4 h-4" />, featured: true },
    { name: "AI Customer Sentiment Tracker", path: "/ai-customer-sentiment-tracker", icon: <Heart className="w-4 h-4" />, featured: true },
    { name: "Smart Expense Categorizer", path: "/smart-expense-categorizer", icon: <Receipt className="w-4 h-4" />, featured: true },
    { name: "AI Project Manager Pro", path: "/ai-project-manager-pro", icon: <Calendar className="w-4 h-4" /> },
    { name: "AI CRM Assistant Pro", path: "/ai-crm-assistant", icon: <Users className="w-4 h-4" /> },
    { name: "AI Time Tracker Pro", path: "/ai-time-tracker", icon: <Clock className="w-4 h-4" /> },
    { name: "AI Content Generator Pro", path: "/ai-content-generator", icon: <FileText className="w-4 h-4" /> },
    { name: "AI Social Media Scheduler", path: "/ai-social-media-scheduler", icon: <Globe className="w-4 h-4" /> },
    { name: "AI Email Marketing Pro", path: "/ai-email-marketing-pro", icon: <Mail className="w-4 h-4" /> },
    { name: "AI Analytics Dashboard Pro", path: "/ai-analytics-dashboard-pro", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Financial Analyzer Pro", path: "/ai-financial-analyzer", icon: <TrendingUp className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Solutions", path: "/5g-solutions", icon: <Network className="w-4 h-4" /> },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure", icon: <Cpu className="w-4 h-4" /> },
    { name: "5G Edge Computing", path: "/5g-edge-computing", icon: <Cloud className="w-4 h-4" /> },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions", icon: <Smartphone className="w-4 h-4" /> },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "5G Private Networks", path: "/5g-private-networks", icon: <Shield className="w-4 h-4" /> },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications", icon: <Smartphone className="w-4 h-4" /> },
    { name: "5G Data Analytics", path: "/5g-data-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "5G Implementation", path: "/5g-implementation", icon: <Zap className="w-4 h-4" /> }
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" },
    { name: "Investors", path: "/investors" },
    { name: "Leadership", path: "/leadership" }
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Contact", path: "/contact" },
    { name: "Support Center", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Pricing", path: "/pricing" },
    { name: "Free Consultation", path: "/consultation" },
    { name: "Status Page", path: "/status" }
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Sitemap", path: "/sitemap" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Compliance", path: "/compliance" }
  ], []);

  const stats = useMemo(() => [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation 
                for modern businesses. Transform your operations with cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                AI Services
              </h4>
              <ul className="space-y-3">
                {aiServices.slice(0, 8).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/ai-services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center group"
                  >
                    View All AI Services
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                IT Services
              </h4>
              <ul className="space-y-3">
                {itServices.slice(0, 8).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/it-services"
                    className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium flex items-center group"
                  >
                    View All IT Services
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Micro SAAS */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-400 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Micro SAAS
              </h4>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 8).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <div className="flex items-center">
                        <span>{service.name}</span>
                        {service.featured && (
                          <Star className="w-3 h-3 text-yellow-400 fill-current ml-1" />
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/micro-saas-services"
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium flex items-center group"
                  >
                    View All Micro SAAS
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5G Solutions */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400 flex items-center">
                <Network className="w-5 h-5 mr-2" />
                5G Solutions
              </h4>
              <ul className="space-y-3">
                {fiveGServices.slice(0, 8).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group text-sm"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/5g-solutions"
                    className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium flex items-center group"
                  >
                    View All 5G Solutions
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
                <Link
                  to="/accessibility"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;