import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Home, Brain, Cloud, Server, Rocket, Users, Briefcase, FileText, HelpCircle, MessageCircle, Zap, Target, BookOpen, Building, ChevronRight, ChevronDown, Phone } from 'lucide-react';
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
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-white hover:bg-zion-blue-dark rounded-lg transition-colors"
        aria-label="Open mobile menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-zion-blue-dark shadow-2xl z-50 lg:hidden overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-blue-light">
                <div className="flex items-center gap-3">
                  <Building className="w-8 h-8 text-zion-cyan" />
                  <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:bg-zion-blue rounded-lg transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    {quickActions.map((action) => (
                      <Link
                        key={action.name}
                        to={action.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          action.variant === "primary"
                            ? "bg-zion-purple text-white hover:bg-zion-purple-dark"
                            : "text-zion-slate-light hover:bg-zion-blue hover:text-white"
                        }`}
                      >
                        <action.icon className="w-5 h-5" />
                        <span className="font-medium">{action.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Navigation Sections */}
                <div className="space-y-4">
                  {navigationSections.map((section) => (
                    <div key={section.title} className="space-y-2">
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-zion-blue rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <section.icon className="w-5 h-5 text-zion-cyan" />
                          <span className="font-medium">{section.title}</span>
                        </div>
                        {expandedSections.has(section.title) ? (
                          <ChevronDown className="w-5 h-5 text-zion-slate-light" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-zion-slate-light" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedSections.has(section.title) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 space-y-1"
                          >
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                                  isActive(item.href)
                                    ? "bg-zion-cyan/20 text-zion-cyan"
                                    : "text-zion-slate-light hover:bg-zion-blue hover:text-white"
                                }`}
                              >
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm">{item.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-zion-blue-light">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <MessageCircle className="w-5 h-5 text-zion-cyan" />
                      <span className="text-sm">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Phone className="w-5 h-5 text-zion-cyan" />
                      <span className="text-sm">+1 302 464 0950</span>
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
