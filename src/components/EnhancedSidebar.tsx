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
  User,
  Star,
  Video,
  GraduationCap
} from 'lucide-react';

export const EnhancedSidebar: React.FC = (): JSX.Element => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationSections = [
    {
      title: "Main Navigation",
      icon: Home,
      items: [
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/about", icon: Users },
        { name: "Team", href: "/team", icon: Award },
        { name: "Leadership", href: "/leadership", icon: Star },
        { name: "Contact", href: "/contact", icon: MessageCircle }
      ]
    },
    {
      title: "Services",
      icon: Zap,
      items: [
        { name: "All Services", href: "/services", icon: Code },
        { name: "AI Solutions", href: "/ai-solutions", icon: Brain },
        { name: "IT Services", href: "/it-services", icon: Server },
        { name: "Micro SAAS", href: "/micro-saas", icon: Rocket },
        { name: "Quantum Computing", href: "/services/quantum-computing", icon: Atom }
      ]
    },
    {
      title: "Solutions",
      icon: Target,
      items: [
        { name: "Enterprise Solutions", href: "/solutions/enterprise", icon: Building },
        { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: HeartPulse },
        { name: "Financial Solutions", href: "/solutions/financial", icon: TrendingUp },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing", icon: Cpu },
        { name: "Retail Solutions", href: "/solutions/retail", icon: ShoppingCart }
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      items: [
        { name: "Blog", href: "/blog", icon: BookOpen },
        { name: "News", href: "/news", icon: FileText },
        { name: "Documentation", href: "/documentation", icon: HelpCircle },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Training", href: "/training", icon: GraduationCap }
      ]
    },
    {
      title: "Events & Media",
      icon: Calendar,
      items: [
        { name: "Events", href: "/events", icon: Calendar },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Press", href: "/press", icon: BookOpen },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 }
      ]
    },
    {
      title: "Support",
      icon: HelpCircle,
      items: [
        { name: "Support Center", href: "/support", icon: HelpCircle },
        { name: "Help Documentation", href: "/documentation", icon: FileText },
        { name: "Contact Support", href: "/contact", icon: MessageCircle },
        { name: "FAQ", href: "/faq", icon: HelpCircle }
      ]
    },
    {
      title: "Company",
      icon: Building,
      items: [
        { name: "Careers", href: "/careers", icon: Briefcase },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "Privacy Policy", href: "/privacy", icon: Shield },
        { name: "Terms of Service", href: "/terms", icon: FileText }
      ]
    }
  ];
  const quickActions = [
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },
    { name: "Book Demo", href: "/request-quote", icon: Calendar, variant: "secondary" },
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" }
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
        </motion.div>
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
              </motion.div>
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
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 group ${
                            isActive(item.href)
                              ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm">{item.name}</span>
                          {isActive(item.href) && (
                            <div className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"></div>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Contact Info */}
        <motion.div
          className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-cyan-400 mb-3">Need Help?</h3>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </aside>
  );
};
