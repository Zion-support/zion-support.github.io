import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Info, 
  MessageCircle, 
  FileText, 
  HelpCircle, 
  Briefcase, 
  Shield, 
  Users,
  Settings,
  Activity,
  Brain,
  Code,
  Network,
  Rocket,
  ShoppingCart,
  ChevronRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navigationSections = [
    {
      id: 'main',
      title: 'Main Pages',
      icon: Home,
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Careers', href: '/careers', icon: Briefcase }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: Settings,
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Code },
        { name: 'IT Services', href: '/it-services', icon: Network },
        { name: 'Emerging Tech', href: '/emerging-tech', icon: Rocket },
        { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart }
      ]
    },
    {
      id: 'support',
      title: 'Support & Resources',
      icon: HelpCircle,
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'System Status', href: '/status', icon: Activity },
        { name: 'Security', href: '/security', icon: Shield },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Sitemap', href: '/sitemap', icon: FileText }
      ]
    },
    {
      id: 'legal',
      title: 'Legal & Privacy',
      icon: Shield,
      items: [
        { name: 'Privacy Policy', href: '/privacy', icon: Shield },
        { name: 'Terms of Service', href: '/terms', icon: FileText }
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zion-slate-dark/90 backdrop-blur-xl border border-zion-cyan/20 rounded-lg text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed left-0 top-0 h-full w-80 bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 z-50 lg:translate-x-0 lg:relative lg:block ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-zion-cyan/20">
            <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
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
                <p className="text-xs text-zion-slate-light font-medium">Navigation</p>
              </div>
            </Link>
          </div>

          {/* Navigation Sections */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigationSections.map((section) => (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-3 text-left text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  ) : (
                    <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-8 space-y-1"
                    >
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 text-sm ${
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/20 border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-zion-cyan/20">
            <div className="text-center">
              <p className="text-xs text-zion-slate-light mb-2">
                Need immediate help?
              </p>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
