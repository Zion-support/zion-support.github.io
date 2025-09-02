import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Server,
  Brain,
  Shield,
  Cloud,
  Database,
  BarChart3,
  Users,
  Rocket,
  Atom,
  Globe,
  Cpu,
  Lock,
  Zap,
  Settings,
  HelpCircle,
  BookOpen,
  Video,
  GraduationCap,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Search,
  Bell,
  User,
  LogOut,
  Sun,
  Moon,
  TrendingUp,
  Target,
  Building2,
  Factory,
  Heart,
  ShoppingCart,
  Car,
  Plane,
  Ship,
  Train,
  Truck,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Tree,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa,
  Activity,
  AlertTriangle,
  Calendar,
  Code,
  FileText
} from 'lucide-react';

export const EnhancedSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Close sidebar when route changes on mobile
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add dark mode toggle logic here
  };

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Blog', href: '/blog', icon: BookOpen }
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'AI Solutions', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Cloud & DevOps', href: '/cloud-devops', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/data-analytics', icon: BarChart3 },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Rocket }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Services', href: '/solutions/financial', icon: Bank },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Factory },
        { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart },
        { name: 'Government', href: '/solutions/government', icon: Users }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Case Studies', href: '/case-studies', icon: Target },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Documentation', href: '/documentation', icon: BookOpen },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Training', href: '/training', icon: GraduationCap },
        { name: 'Help Center', href: '/help', icon: HelpCircle }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'System Status', href: '/status', icon: Activity },
        { name: 'API Documentation', href: '/api', icon: Code },
        { name: 'Developer Portal', href: '/developer-portal', icon: Cpu },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle }
      ]
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: TrendingUp },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },
    { name: 'Join Community', href: '/community', icon: Users },
    { name: 'Report Issue', href: '/report-issue', icon: AlertTriangle }
  ];

  const filteredNavigation = navigationSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-cyan-500/20 z-50 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col h-full w-80">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech
              </span>
            </div>
            
            {/* Mobile Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-cyan-500/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search navigation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-6">
              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
                    >
                      <action.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                      <span className="text-sm">{action.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Sections */}
              {filteredNavigation.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                          location.pathname === item.href
                            ? 'text-white bg-cyan-500/20 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-cyan-500/10'
                        }`}
                      >
                        <item.icon className={`w-4 h-4 ${
                          location.pathname === item.href
                            ? 'text-cyan-400'
                            : 'text-cyan-400 group-hover:text-cyan-300'
                        }`} />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-cyan-500/20 space-y-4">
            {/* User Info */}
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">User Name</p>
                <p className="text-xs text-gray-400 truncate">user@ziontechgroup.com</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                title="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors" title="Notifications">
                <Bell className="w-4 h-4" />
              </button>
              
              <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors" title="Settings">
                <Settings className="w-4 h-4" />
              </button>
              
              <button className="p-2 text-gray-400 hover:text-red-400 transition-colors" title="Logout">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 lg:hidden p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg"
      >
        <Menu className="w-5 h-5" />
      </button>
    </>
  );
};
