import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Home, Brain, Cloud, Server, Rocket, Users, Briefcase, FileText, HelpCircle, MessageCircle, Zap, Target, BookOpen, Building, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const MobileSidebarToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        { name: "Partners", href: "/partners", icon: Users },
        { name: "Careers", href: "/careers", icon: Briefcase }
      ]
    },
    {
      title: "Services",
      icon: Zap,
      items: [
        { name: "AI & Machine Learning", href: "/ai-services", icon: Brain },
        { name: "Micro SAAS Solutions", href: "/micro-saas", icon: Cloud },
        { name: "IT Infrastructure", href: "/it-services", icon: Server },
        { name: "Emerging Technologies", href: "/emerging-tech", icon: Rocket }
      ]
    },
    {
      title: "Solutions",
      icon: Target,
      items: [
        { name: "Quantum Computing", href: "/emerging-tech/quantum", icon: Rocket },
        { name: "Blockchain & Web3", href: "/emerging-tech/blockchain", icon: Cloud },
        { name: "Edge Computing", href: "/emerging-tech/edge", icon: Server },
        { name: "IoT Solutions", href: "/emerging-tech/iot", icon: Brain }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      items: [
        { name: "Documentation", href: "/docs", icon: FileText },
        { name: "API Reference", href: "/api", icon: FileText },
        { name: "Developer Portal", href: "/developer", icon: Server },
        { name: "Support Center", href: "/support", icon: HelpCircle }
      ]
    }
  ];

  const quickActions = [
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },
    { name: "Book Demo", href: "/demo", icon: Users, variant: "secondary" },
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed left-0 top-0 h-full w-80 bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center">
                      <span className="text-xl font-bold text-white">Z</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                        ZION TECH GROUP
                      </h2>
                      <p className="text-xs text-zion-slate-light">Mobile Navigation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="mb-8">
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
                          onClick={() => setIsOpen(false)}
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
                </div>

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
                                  onClick={() => setIsOpen(false)}
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
                <div className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg">
                  <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
                  <div className="space-y-2 text-xs text-zion-slate-light">
                    <div className="flex items-center space-x-2">
                      <span>📞 +1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>✉️ kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📍 Middletown, DE</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};