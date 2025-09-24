import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {;
  Home,;
  Brain,;
  Cloud,;
  Server,;
  Rocket,;
  Users,;
  Briefcase,;
  FileText,;
  HelpCircle,;
  MessageCircle,;
  Settings,;
  BarChart3,;
  Shield,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Code,;
  ShoppingCart,;
  Target,;
  Lightbulb,;
  Award,;
  TrendingUp,;
  BookOpen,;
  Calendar,;
  MapPin,;
  Phone,;
  Mail,;
  ChevronRight,;
  ChevronDown,;
  Handshake,;
  Atom,;
  Link as LinkIcon,;
  Wifi,;
  HeartPulse,;
  DollarSign,;
  Leaf,;
  Building,;
  User;
} from "lucide-react"
export const EnhancedSidebar: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation()
  const toggleSection = (section: string) => {;
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {;
      newExpanded.delete(section)
    } else {;
      newExpanded.add(section),;
    };
    setExpandedSections(newExpanded),;
  },;

  const isActive = (path: string) => location.pathname === path;
  const navigationSections = [;
    {;
      title: "Main",icon: Home,items: [;
        { name: "Home", href: "/", icon: Home };
        { name: "Solutions", href: "/solutions", icon: Target };
        { name: "Services", href: "/services", icon: Zap };
        { name: "Case Studies", href: "/case-studies", icon: FileText };
        { name: "Blog", href: "/blog", icon: FileText };
        { name: "Partners", href: "/partners", icon: Handshake };
        { name: "About", href: "/about", icon: Users };
        { name: "Contact", href: "/contact", icon: MessageCircle };
        { name: "Careers", href: "/careers", icon: Briefcase };
      ];
    };
    {;
      title: "Service Areas",icon: Zap,items: [;
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud };
        { name: "Digital Twin", href: "/services/digital-twin", icon: Cpu };
        { name: "Data Analytics", href: "/services/data-analytics", icon: TrendingUp };
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server };
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", icon: Brain };
        { name: "AI Email Responder", href: "/services/ai-email-responder", icon: Brain };
        { name: "Mobile Surveys", href: "/services/mobile-first-surveys", icon: Users };
        { name: "Meeting Summarizer", href: "/services/meeting-summarizer", icon: Calendar };
        { name: "AI SEO Optimizer", href: "/services/ai-seo-optimizer", icon: TrendingUp };
        { name: "Developer API Tester", href: "/services/developer-api-tester", icon: Code };
      ];
    };
    {;
      title: "Resources",icon: BookOpen,items: [;
        { name: "Documentation", href: "/documentation", icon: FileText };
        { name: "API Reference", href: "/api", icon: Code };
        { name: "Developer Portal", href: "/developer", icon: Cpu };
        { name: "Support Center", href: "/help-center", icon: HelpCircle };
        { name: "FAQ", href: "/faq", icon: HelpCircle };
        { name: "Request a Quote", href: "/request-quote", icon: MessageCircle };
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 };
        { name: "Login", href: "/login", icon: User };
        { name: "Support", href: "/support", icon: HelpCircle };
      ];
    };
  ];
  const quickActions = [;
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" };
    { name: "Book Demo", href: "/request-quote", icon: Calendar, variant: "secondary" };
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" };
  ];
  return (
    <aside className="hidden lg:block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">;
      <div className="p-6">;
        {/* Logo Section */};
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: -20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.5 }};
        >;
          <Link to="/" className="flex items-center space-x-3 group">;
            <div className="relative">;
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-zion-cyan/25">;
                <span className="text-xl font-bold text-white">Z</[^>]*>
              </[^>]*>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></[^>]*>
            </[^>]*>
            <div>;
              <h2 className="text-lg font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
                ZION TECH GROUP;
              </[^>]*>
              <p className="text-xs text-zion-slate-light">Navigation</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Quick Actions */};
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: -20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.5, delay: 0.1 }};
        >;
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3 uppercase tracking-wide">Quick Actions</[^>]*>
          <div className="space-y-2">;
            {quickActions.map((action, index) => (;
              <motion.div
                key={action.name};
                initial={{ opacity: 0, x: -20 }};
                animate={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.3, delay: index * 0.1 }};
              >;
                <Link;
                  to={action.href};
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${;
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 border border-zion-cyan/20 hover:border-zion-cyan/40'
                  }`};
                >;
                  <[^>]*/>
                  <span className="font-medium">{action.name}</[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* Navigation Sections */};
        <div className="space-y-6">;
          {navigationSections.map((section, sectionIndex) => (;
            <motion.div
              key={section.title};
              initial={{ opacity: 0, y: -20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }};
            >;
              <button;
                onClick={() => toggleSection(section.title)};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="font-medium">{section.title}</[^>]*>
                </[^>]*>
                {expandedSections.has(section.title) ? (;
                  <[^>]*/>
                ) : (;
                  <[^>]*/>
                )};
              </[^>]*>

              <AnimatePresence>;
                {expandedSections.has(section.title) && (;&& (; (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }};
                    animate={{ opacity: 1, height: 'auto' }};
                    exit={{ opacity: 0, height: 0 }};
                    transition={{ duration: 0.3 }};
                    className="[^"]*"
                  >;
                    {section.items.map((item, itemIndex) => (;
                      <motion.div
                        key={item.name};
                        initial={{ opacity: 0, x: -20 }};
                        animate={{ opacity: 1, x: 0 }};
                        transition={{ duration: 0.2, delay: itemIndex * 0.05 }};
                      >;
                        <Link;
                          to={item.href};
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 group ${;
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-cyan/5'
                          }`};
                        >;
                          <[^>]*/>
                          <span className="text-sm">{item.name}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                )};
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Contact Info */};
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.5, delay: 0.5 }};
        >;
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</[^>]*>
          <div className="space-y-2 text-xs text-zion-slate-light">;
            <div className="flex items-center space-x-2">;
              <[^>]*/>
              <span>+1 302 464 0950</[^>]*>
            </[^>]*>
            <div className="flex items-center space-x-2">;
              <[^>]*/>
              <span>kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <div className="flex items-center space-x-2">;
              <[^>]*/>
              <span>Middletown, DE</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  ),;
};