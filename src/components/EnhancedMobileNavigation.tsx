import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import {;
  Menu,;
  X,;
  ChevronDown,;
  Home,;
  Users,;
  Briefcase,;
  Phone,;
  Info,;
  Settings,;
  HelpCircle,;
  FileText,;
  Globe,;
  Zap,;
  Shield,;
  Cloud,;
  Brain,;
  Smartphone,;
  Monitor,;
  Server,;
  Database,;
  Lock,;
  Code,;
  Rocket,;
  Star,;
  TrendingUp,;
  Award,;
  BookOpen,;
  MessageCircle,;
  Mail,;
  MapPin,;
  Clock;
} from "lucide-react"
interface NavigationItem {;
  label: string,path: string,icon: React.ComponentType<{ size?: number, className?: string }>,;
  children?: NavigationItem[],;
  description?: string,;
};

const navigationItems: NavigationItem[] = [;
  {;
    label: 'Home',path: '/',icon: Home,description: 'Welcome to Zion Tech Group'
  };
  {;
    label: 'About',path: '/about',icon: Info,description: 'Learn about our company and mission'
  };
  {;
    label: 'Services',path: '/services',icon: Briefcase,children: [;
      {;
        label: 'AI & Machine Learning',path: '/services/ai',icon: Brain,description: 'Cutting-edge AI solutions'
      };
      {;
        label: 'Cybersecurity',path: '/services/cybersecurity',icon: Shield,description: 'Advanced security services'
      };
      {;
        label: 'Cloud Services',path: '/services/cloud',icon: Cloud,description: 'Scalable cloud solutions'
      };
      {;
        label: 'Digital Transformation',path: '/services/transformation',icon: Zap,description: 'Business transformation services'
      };
      {;
        label: 'Infrastructure',path: '/services/infrastructure',icon: Server,description: 'IT infrastructure solutions'
      };
      {;
        label: 'Consulting',path: '/services/consulting',icon: Users,description: 'Strategic IT consulting'
      };
    ];
  };
  {;
    label: 'Solutions',path: '/solutions',icon: Rocket,description: 'Industry-specific solutions'
  };
  {;
    label: 'Contact',path: '/contact',icon: Phone,description: 'Get in touch with us'
  };
];
const quickActions = [;
  {;
    label: 'Get Quote',path: '/request-quote',icon: MessageCircle,color: 'bg-zion-cyan'
  };
  {;
    label: 'Support',path: '/help',icon: HelpCircle,color: 'bg-zion-purple'
  };
  {;
    label: 'Documentation',path: '/docs',icon: FileText,color: 'bg-zion-blue'
  };
];
export const EnhancedMobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false),;
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set()),;
  const [activePath, setActivePath] = useState('/'),;
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {;
    setActivePath(location.pathname)
  }, [location]);
  useEffect(() => {;
    const handleClickOutside = (event: MouseEvent) => {;
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {;&& !menuRef.current.contains(event.target as Node)) {; !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      };
    };
    if (isOpen) {;
      document.addEventListener('mousedown', handleClickOutside),;
      document.body.style.overflow = 'hidden',;
    };

    return () => {;
      document.removeEventListener('mousedown', handleClickOutside),;
      document.body.style.overflow = 'unset',;
    },;
  }, [isOpen]),;

  const toggleExpanded = (label: string) => {;
    setExpandedItems(prev => {;
      const newSet = new Set(prev)
      if (newSet.has(label)) {;
        newSet.delete(label)
      } else {;
        newSet.add(label),;
      };
      return newSet,;
    }),;
  },;

  const handleNavigation = (path: string) => {;
    setIsOpen(false)
    setExpandedItems(new Set());
  },;

  const isActive = (path: string) => {;
    if (path === '/') {;
      return activePath === '/'
    };
    return activePath.startsWith(path)
  },;

  const renderNavigationItem = (item: NavigationItem, depth: number = 0) => {;
    const isExpanded = expandedItems.has(item.label)
    const hasChildren = item.children && item.children.length > 0;&& item.children.length > 0; item.children.length > 0
    const isItemActive = isActive(item.path)

    return (
      <div key={item.label} className="w-full">;
        <motion.div
          initial={false};
          animate={{ backgroundColor: isItemActive ? 'rgba(34, 221, 210, 0.1)' : 'transparent' }}
          className={`relative ${depth > 0 ? 'ml-4' : ''}`}
        >;
          <Link;
            to={item.path};
            onClick={() => handleNavigation(item.path)};
            className={`flex items-center justify-between w-full p-4 text-left transition-all duration-200 ${;
              isItemActive;
                ? 'text-zion-cyan border-l-2 border-zion-cyan'
                : 'text-white hover:text-zion-cyan'
            }`};
          >;
            <div className="flex items-center gap-3">;
              <item.icon
                size={20};
                className={isItemActive ? 'text-zion-cyan' : 'text-zion-slate-light'}
              />;
              <div>;
                <span className="font-medium">{item.label}</[^>]*>
                {item.description && (;&& (; (
                  <p className="text-sm text-zion-slate-light mt-1">{item.description}</[^>]*>
                )};
              </[^>]*>
            </[^>]*>
            {hasChildren && (;&& (; (
              <ChevronDown;
                size={16};
                className={`transition-transform duration-200 ${;
                  isExpanded ? 'rotate-180' : ''
                }`};
              />;
            )};
          </[^>]*>

          {hasChildren && (;&& (; (
            <button;
              onClick={() => toggleExpanded(item.label)};
              className="[^"]*"
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
            >;
              <ChevronDown;
                size={16};
                className={`transition-transform duration-200 ${;
                  isExpanded ? 'rotate-180' : ''
                }`};
              />;
            </[^>]*>
          )};
        </[^>]*>

        {hasChildren && (;&& (; (
          <AnimatePresence>;
            {isExpanded && (;&& (; (
              <motion.div
                initial={{ height: 0, opacity: 0 }};
                animate={{ height: 'auto', opacity: 1 }};
                exit={{ height: 0, opacity: 0 }};
                transition={{ duration: 0.3, ease: 'easeInOut' }};
                className="[^"]*"
              >;
                <div className="border-l border-zion-slate-light/20 ml-4">;
                  {item.children!.map(child => renderNavigationItem(child, depth + 1))};
                </[^>]*>
              </[^>]*>
            )};
          </[^>]*>
        )};
      </[^>]*>
    ),;
  },;

  return (
    <>;
      {/* Mobile Menu Toggle */};
      <button;
        onClick={() => setIsOpen(true)};
        className="[^"]*"
        aria-label="Open mobile navigation menu"
      >;
        <[^>]*/>
      </[^>]*>

      {/* Mobile Navigation Overlay */};
      <AnimatePresence>;
        {isOpen && (;&& (; (
          <motion.div
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
            exit={{ opacity: 0 }};
            transition={{ duration: 0.2 }};
            className="[^"]*"
          >;
            <motion.div
              ref={menuRef};
              initial={{ x: '100%' }};
              animate={{ x: 0 }};
              exit={{ x: '100%' }};
              transition={{ duration: 0.3, ease: 'easeOut' }};
              className="[^"]*"
            >;
              {/* Header */};
              <div className="flex items-center justify-between p-6 border-b border-zion-slate-light/20">;
                <div className="flex items-center gap-3">;
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h1 className="text-xl font-bold text-white">Zion Tech Group</[^>]*>
                    <p className="text-sm text-zion-slate-light">Technology Solutions</[^>]*>
                  </[^>]*>
                </[^>]*>
                <button;
                  onClick={() => setIsOpen(false)};
                  className="[^"]*"
                  aria-label="Close mobile navigation menu"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>

              {/* Navigation Content */};
              <div className="flex-1 overflow-y-auto">;
                {/* Quick Actions */};
                <div className="p-6 border-b border-zion-slate-light/20">;
                  <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">;
                    Quick Actions;
                  </[^>]*>
                  <div className="grid grid-cols-3 gap-3">;
                    {quickActions.map(action => (;
                      <Link;
                        key={action.label};
                        to={action.path};
                        onClick={() => handleNavigation(action.path)};
                        className={`${action.color} p-4 rounded-lg text-white text-center hover:scale-105 transition-transform duration-200`};
                      >;
                        <[^>]*/>
                        <span className="text-xs font-medium">{action.label}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Main Navigation */};
                <nav className="p-6">;
                  <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">;
                    Navigation;
                  </[^>]*>
                  <div className="space-y-1">;
                    {navigationItems.map(item => renderNavigationItem(item))};
                  </[^>]*>
                </[^>]*>

                {/* Contact Information */};
                <div className="p-6 border-t border-zion-slate-light/20">;
                  <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">;
                    Contact Info;
                  </[^>]*>
                  <div className="space-y-3 text-sm">;
                    <div className="flex items-center gap-3 text-zion-slate-light">;
                      <[^>]*/>
                      <span>info@ziontechgroup.com</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-3 text-zion-slate-light">;
                      <[^>]*/>
                      <span>+1 (555) 123-4567</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-3 text-zion-slate-light">;
                      <[^>]*/>
                      <span>123 Tech Street, Innovation City</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-3 text-zion-slate-light">;
                      <[^>]*/>
                      <span>Mon-Fri 9AM-6PM EST</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Footer */};
              <div className="p-6 border-t border-zion-slate-light/20">;
                <div className="flex items-center justify-between text-sm text-zion-slate-light">;
                  <span>© 2024 Zion Tech Group</[^>]*>
                  <div className="flex items-center gap-4">;
                    <Link to="/privacy" className="hover: text-white transition-colors">;
                      Privacy;
                    </[^>]*>
                    <Link to="/terms" className="hover:text-white transition-colors">;
                      Terms;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>
    </[^>]*>
  );
};