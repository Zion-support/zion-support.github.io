import React, { useState } from 'react';
import { Link, useLocation    } from 'react-router-dom';
import { motion, AnimatePresence    } from 'framer-motion';
import { Home,
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
  User
   } from 'lucide-react';


interface SidebarItem {
  id: string;
  title: string;
  href: string;
  icon: React.ComponentType<any>;
  description?: string;
  featured?: boolean;
  children?: SidebarItem[];
}

const EnhancedSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (section: string)    => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
  ];

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (path: string)    => location.pathname === path;

  const isItemExpanded = (itemId: string) => {
    return expandedItems.includes(itemId);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-slate-700/90 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-white/10 z-50 lg:translate-x-0 lg:static lg:block ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Zion Tech</h1>
                <p className="text-xs text-gray-400">AI Solutions</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {sidebarItems.map((item) => (
              <div key={item.id}>
                <Link
                  to={item.href}
                  onClick={() => item.children && toggleItem(item.id)}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                    isItemActive(item.href)
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  } ${item.featured ? 'border-l-4 border-l-cyan-500' : ''}`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={`w-5 h-5 ${item.featured ? 'text-cyan-400' : ''}`} />
                    <div>
                      <span className="font-medium">{item.title}</span>
                      {item.description && (
                        <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                  {item.children && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isItemExpanded(item.id) ? 'rotate-90' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Children */}
                {item.children && (
                  <AnimatePresence>
                    {isItemExpanded(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-2 space-y-1"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.href}
                            className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 ${
                              isItemActive(child.href)
                                ? 'bg-blue-500/10 text-blue-300'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <child.icon className="w-4 h-4" />
                            <span className="text-sm">{child.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="text-xs text-gray-500">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default EnhancedSidebar;