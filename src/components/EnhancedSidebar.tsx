import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Brain,
  Cloud,
  Server,
  Rocket,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  MessageCircle,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  ShoppingCart,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Handshake,
  Atom,
  Link as LinkIcon,
  Wifi,
  HeartPulse,
  DollarSign,
  Leaf,
  Building,
 } from 'lucide-react';
  User,
  Factory,
  Heart,
  PenTool,
  Eye,
  Smartphone,
  Truck,
  Car,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon,
  User as UserIcon,
  Handshake as HandshakeIcon,
  Briefcase as BriefcaseIcon,
  FileText as FileTextIcon,
  HelpCircle as HelpCircleIcon,
  MessageCircle as MessageCircleIcon,
  Settings as SettingsIcon,
  BarChart3 as BarChart3Icon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Code as CodeIcon,
  ShoppingCart as ShoppingCartIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  Award as AwardIcon,
  TrendingUp as TrendingUpIcon,
  BookOpen as BookOpenIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  Handshake as HandshakeIcon2,
  Atom as AtomIcon,
  Link as LinkIcon2,
  Wifi as WifiIcon,
  HeartPulse as HeartPulseIcon,
  DollarSign as DollarSignIcon,
  Leaf as LeafIcon,
  Building as BuildingIcon,
  User as UserIcon2,
  Factory as FactoryIcon,
  Heart as HeartIcon,
  PenTool as PenToolIcon,
  Eye as EyeIcon,
  Smartphone as SmartphoneIcon,
  Truck as TruckIcon,
  Car as CarIcon,
  City as CityIcon,
  CheckCircle as CheckCircleIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Play as PlayIcon,
  MailIcon as MailIcon2
} from 'lucide-react';

export const EnhancedSidebar: React.FC = () => {;
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();

  const toggleSection: React.FC = ($2) => {;
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section)} else {
      newExpanded.add(section)}
    setExpandedSections(newExpanded)};

  const isActive = (path: string)  => location.pathname === path;

  const navigationSections = [
    {
      title: "Main Navigation",
      icon: Home,
      items[;
        { name: "Home", href: "/", icon: Home },
        { name: "Solutions", href: "/solutions", icon: Target },
        { name: "Services", href: "/services", icon: Zap },
        { name: "Case Studies", href: "/case-studies", icon: FileText },
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "About", href: "/about", icon: Users },
        { name: "Contact", href: "/contact", icon: MessageCircle },
        { name: "Careers", href: "/careers", icon: Briefcase },
        { name: "Partners", href: "/partners", icon: Handshake }
      ]
    },;
    {
      title: "Service Areas",
      icon: Zap,
      items[;
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server },
        { name: "Digital Twin Platform", href: "/services/digital-twin", icon: Cpu },
        { name: "IoT Edge Computing", href: "/services/iot-edge-computing", icon: Wifi },
        { name: "Data Analytics", href: "/services/data-analytics", icon: BarChart3 },
        { name: "Micro SaaS Products", href: "/services/micro-saas", icon: ShoppingCart },
        { name: "Micro CRM", href: "/services/micro-crm", icon: Users },
        { name: "Helpdesk Platform", href: "/services/helpdesk", icon: HelpCircle },
        { name: "Website Analytics", href: "/services/website-analytics", icon: Eye },
        { name: "IT Helpdesk", href: "/services/it-helpdesk", icon: Settings }
      ]
    },;
    {
      title: "Security & Compliance",
      icon: Shield,
      items: [
        { name: "Documentation", href: "/documentation", icon: FileText },
        { name: "API Reference", href: "/api", icon: Code },
        { name: "Developer Portal", href: "/developer", icon: Cpu },
        { name: "Support Center", href: "/help-center", icon: HelpCircle },
        { name: "FAQ", href: "/faq", icon: HelpCircle },
        { name: "Request a Quote", href: "/request-quote", icon: MessageCircle },
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
        { name: "Login", href: "/login", icon: User },
        { name: "Support", href: "/support", icon: HelpCircle }
      ]

  ];

  const quickActions = [
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },
    { name: "Book Demo", href: "/request-quote", icon: Calendar, variant: "secondary" },
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" }
  ];

  return (
    <div className = "w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 h-screen overflow-y-auto">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">;
        { name: "Sitemap", href: "/sitemap", icon: Globe },;
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },;
        { name: "Login", href: "/login", icon: User };
      ];
    };
  ];

  const quickActions = [;
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },;
    { name: "Book Demo", href: "/enterprise-demo", icon: Calendar, variant: "secondary" },;
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" };
  ];

  return (
    <aside className = "hidden lg:block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">
      <div className="p-6">
        {/* Logo Section */}
        <motion.div
          className="mb-8"
          initial = {
  { opacity: 0,
  y: -20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Zion Tech Group
            </h1>
          </Link>
        </div>

        {/* Quick Actions */}
        <motion.div
          className="mb-8"
          initial = {
  { opacity: 0,
  y: -20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.5,
  delay: 0.1 






}}
        >
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3 uppercase tracking-wide">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial = {
  { opacity: 0,
  x: -20 






}}
                animate = {
  { opacity: 1,
  x: 0 






}}
                transition = {
  { duration: 0.3,
  delay: index * 0.1 






}}
              >
                <Link
                  to={action.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 border border-zion-cyan/20 hover:border-zion-cyan/40'
                  }`}

                  <action.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{action.name}</span>
                </Link>
              </motion.div>;
            ))}
          </div>
        </motion.div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {navigationSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial = {
  { opacity: 0,
  y: -20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.5,
  delay: sectionIndex * 0.1 






}}
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    {section.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    expandedSections.has(section.title) ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
                    initial = {
  { opacity: 0,
  height: 0 






}}
                    animate = {
  { opacity: 1,
  height: 'auto' 






}}
                    exit = {
  { opacity: 0,
  height: 0 






}}
                    transition={{ duration: 0.3 }}
                    className="ml-7 mt-2 space-y-1"
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        initial = {
  { opacity: 0,
  x: -20 






}}
                        animate = {
  { opacity: 1,
  x: 0 






}}
                        transition = {
  { duration: 0.2,
  delay: itemIndex * 0.05 






}}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        {isActive(item.href) && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"></div>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <motion.div
          className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg"
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.5,
  delay: 0.5 






}}
        >
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
          <div className="space-y-2 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className = "flex items-center space-x-2">
              <MapPin className="w-3 h-3" />;
              <span>Middletown, DE</span>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </aside>;
  );
};
