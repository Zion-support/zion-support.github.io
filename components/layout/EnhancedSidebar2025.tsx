import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, ChevronRight, Search, Settings, User, 
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, 
  BarChart3, Code, Smartphone, Server, Users, Award, 
  TrendingUp, BookOpen, FileText, GraduationCap, Headphones,
  Zap, Globe, Lock, Phone, Mail, MapPin, Star, MessageCircle,
  ExternalLink, Home, Briefcase, Info, HelpCircle, Shield as ShieldIcon, Play, Building,
  Heart, Palette, Target, Sparkles, Download
} from 'lucide-react';

const EnhancedSidebar2025: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ 
  isOpen, 
  onClose 
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['ai-services']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredServices = sidebarItems.flatMap(item =>
    item.children?.filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );
  const toggleItem = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
  ];

  const quickActions = [
    { label: 'Get Started', href: '/contact', icon: Play, color: 'from-cyan-500 to-purple-500' },
    { label: 'View Pricing', href: '/pricing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Schedule Demo', href: '/demo', icon: MessageCircle, color: 'from-blue-500 to-indigo-500' },
    { label: 'Download Resources', href: '/resources', icon: Download, color: 'from-purple-500 to-pink-500' }
  ];

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => router.pathname === href;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={onClose}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-white font-medium">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Sections */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                  Services & Solutions
                </h3>
                
                {filteredSections.map((section) => (
                  <div key={section.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                          <section.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">{section.title}</span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-white/60 transition-transform duration-300 ${
                          expandedSections.includes(section.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedSections.includes(section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10"
                      >
                        <div className="p-2 space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center justify-between px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all duration-300 group"
                              onClick={onClose}
                            >
                              <span className="truncate">{item.label}</span>
                              <div className="flex items-center space-x-2">
                                {item.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full">
                                    Hot
                                  </span>
                                )}
                                {item.badge && !item.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/60 rounded-full">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Contact Us
                </h3>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">Middletown, DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnhancedSidebar2025;