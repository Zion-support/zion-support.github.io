import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X,
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  MessageSquare, 
  BarChart3, 
  ShoppingCart, 
  Wrench, 
  Globe, 
  Building, 
  Code, 
  Shield, 
  Zap, 
  ChevronRight, 
  ChevronDown,
  Star,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Brain,
  Leaf,
  Smartphone,
  DollarSign,
  BookOpen,
  Video,
  FileSearch,
  Lightbulb,
  Target,
  Users2,
  Handshake,
  Award,
  TrendingUp,
  Palette,
  Monitor,
  Server,
  Cloud,
  Key,
  Eye,
  ShieldCheck,
  Bug,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Menu,
  Atom,
  Microscope
} from 'lucide-react';

const navigation = [
  {
    name: 'Main',
    items: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Users },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Solutions', href: '/solutions', icon: Target },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'Contact', href: '/contact', icon: MessageSquare },
    ]
  },
  {
    name: 'Services',
    items: [
      { name: 'AI Solutions', href: '/services/ai', icon: Brain },
      { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
    ]
  },
  {
    name: 'Company',
    items: [
      { name: 'Careers', href: '/careers', icon: Users2 },
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'News', href: '/news', icon: FileText },
      { name: 'Events', href: '/events', icon: Calendar },
      { name: 'Research & Development', href: '/research-development', icon: Microscope },
    ]
  },
  {
    name: 'Resources',
    items: [
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Help Center', href: '/help-center', icon: HelpCircle },
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Tutorials', href: '/tutorials', icon: Video },
      { name: 'Webinars', href: '/webinars', icon: Video },
    ]
  }
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['Main']);
  const location = useLocation();

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className={`fixed left-0 top-0 h-full w-80 bg-zion-slate-dark border-r border-zion-slate-light/20 z-50 lg:relative lg:translate-x-0 lg:border-r-0 lg:bg-transparent`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zion-slate-light/20">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {navigation.map((section) => (
                <div key={section.name}>
                  <button
                    onClick={() => toggleSection(section.name)}
                    className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 mb-3"
                  >
                    <span className="font-semibold text-sm uppercase tracking-wider">
                      {section.name}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSections.includes(section.name) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.name) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                              isActive(item.href)
                                ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                                : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-slate-light/10'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className={`w-4 h-4 flex-shrink-0 ${
                              isActive(item.href) ? 'text-zion-cyan' : 'text-zion-slate-light group-hover:text-zion-cyan'
                            }`} />
                            <span className="text-sm font-medium">{item.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-zion-slate-light/20">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              <p className="text-xs text-zion-slate-light">
                Zion Tech Group
              </p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 lg:hidden p-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>
    </>
  );
}
