import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Settings, 
  Search, 
  Star, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  X, 
  Home, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Calendar, 
  DollarSign, 
  Play, 
  Code, 
  Network,
  Workflow, 
  Video 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImprovedSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      href: '/ai-services',
      children: [
        { title: 'AI Analytics', href: '/ai-analytics' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'AI Customer Support', href: '/ai-customer-support' },
        { title: 'AI Data Analytics', href: '/ai-data-analytics' },
        { title: 'AI Cybersecurity', href: '/ai-cybersecurity' },
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      href: '/cloud-services',
      children: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { title: 'Cloud Security', href: '/cloud-security' },
        { title: 'Cloud Cost Optimization', href: '/cloud-cost-optimization' },
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500',
      href: '/security',
      children: [
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'Security Monitoring', href: '/security-monitoring' },
        { title: 'Compliance', href: '/compliance' },
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'from-green-500 to-teal-500',
      href: '/analytics',
      children: [
        { title: 'Business Intelligence', href: '/business-intelligence' },
        { title: 'Data Visualization', href: '/data-visualization' },
        { title: 'Performance Monitoring', href: '/performance-monitoring' },
      ]
    }
  ];

  const mainNavigation = [
    { title: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { title: 'About', href: '/about', icon: <Users className="w-5 h-5" /> },
    { title: 'Services', href: '/services', icon: <Settings className="w-5 h-5" /> },
    { title: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const filteredSections = navigationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.children?.some(child => 
      child.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-2">
              {/* Main Navigation */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Main
                </h3>
                <div className="space-y-1">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Sections */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Services
                </h3>
                <div className="space-y-1">
                  {filteredSections.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1 rounded-lg bg-gradient-to-r ${section.color}`}>
                            {section.icon}
                          </div>
                          {section.title}
                        </div>
                        {section.children && (
                          expandedSections.includes(section.id) ? 
                            <ChevronDown className="w-4 h-4" /> : 
                            <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      
                      {section.children && expandedSections.includes(section.id) && (
                        <div className="ml-8 mt-1 space-y-1">
                          {section.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">
                Need help? Contact our support team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImprovedSidebar;