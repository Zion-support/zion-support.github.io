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
  Link,
  Wifi,
  HeartPulse,
  DollarSign,
  Leaf,
  Building
} from 'lucide-react';

export const EnhancedSidebar: React.FC = () => {
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
      title: "Main",
      icon: Home,
      items: [
        { name: "Home", href: "/", icon: Home },
        { name: "About Us", href: "/about", icon: Users },
        { name: "Contact", href: "/contact", icon: MessageCircle },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "Careers", href: "/careers", icon: Briefcase }
      ]
    },
    {
      title: "Services",
      icon: Zap,
      items: [
        { name: "AI & Analytics", href: "/services/ai-analytics", icon: Brain },
        { name: "Micro SAAS Solutions", href: "/micro-saas", icon: Cloud },
        { name: "IT Services", href: "/it-services", icon: Server },
        { name: "Emerging Technologies", href: "/services/quantum-computing", icon: Rocket },
        { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Code },
        { name: "Data & Analytics", href: "/services/data-analytics", icon: Database }
      ]
    },
    {
      title: "Solutions",
      icon: Target,
      items: [
        { name: "Quantum Computing", href: "/services/quantum-computing", icon: Atom },
        { name: "Blockchain & Web3", href: "/services/blockchain", icon: Link },
        { name: "Edge Computing", href: "/services/iot-edge", icon: Network },
        { name: "IoT Solutions", href: "/services/iot-edge", icon: Wifi },
        { name: "Healthcare AI", href: "/ai-services/healthcare", icon: HeartPulse },
        { name: "Financial AI", href: "/ai-services/financial", icon: DollarSign },
        { name: "Green Technology", href: "/green-it", icon: Leaf }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      items: [
        { name: "Documentation", href: "/docs", icon: FileText },
        { name: "API Reference", href: "/api", icon: Code },
        { name: "Developer Portal", href: "/developer", icon: Cpu },
        { name: "Support Center", href: "/help", icon: HelpCircle },
        { name: "FAQ", href: "/faq", icon: HelpCircle },
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 }
      ]
    },
    {
      title: "Company",
      icon: Building,
      items: [
        { name: "Our Team", href: "/about#team", icon: Users },
        { name: "Press Kit", href: "/press", icon: FileText },
        { name: "News & Updates", href: "/news", icon: Calendar },
        { name: "Investor Relations", href: "/investors", icon: TrendingUp },
        { name: "Sustainability", href: "/sustainability", icon: Leaf }
      ]
    }
  ];

  const quickActions = [
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },
    { name: "Book Demo", href: "/demo", icon: Calendar, variant: "secondary" },
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" }
  ];

  return (
    <aside className="hidden lg:block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">
      <div className="p-6">
        {/* Logo Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-zion-cyan/25">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                ZION TECH GROUP
              </h2>
              <p className="text-xs text-zion-slate-light">Navigation</p>
            </div>
          </Link>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3 uppercase tracking-wide">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={action.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 border border-zion-cyan/20 hover:border-zion-cyan/40'
                  }`}
                >
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-4 h-4 group-hover:text-zion-cyan transition-colors duration-300" />
                  <span className="font-medium">{section.title}</span>
                </div>
                {expandedSections.has(section.title) ? (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                )}
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
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
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 group ${
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-cyan/5'
                          }`}
                        >
                          <item.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm">{item.name}</span>
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
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
          <div className="space-y-2 text-xs text-zion-slate-light">
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