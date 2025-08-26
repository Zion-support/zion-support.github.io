import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  Globe,
  Shield,
  Cloud,
  Cpu,
  Database,
  Zap,
  Target,
  TrendingUp,
  BookOpen,
  Calendar,
  MessageSquare,
  Star,
  Award,
  Users2,
  Handshake,
  Newspaper,
  DollarSign,
  Headphones,
  FileCode,
  Code2,
  BookMarked,
  Users3
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    services: false,
    talent: false,
    company: false,
    resources: false,
    support: false,
    analytics: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const services = [
    { name: 'AI Solutions', href: '/services/ai', icon: Cpu, description: 'Machine Learning & AI' },
    { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Cloud Migration & Automation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security & Protection' },
    { name: 'IT Infrastructure', href: '/services/infrastructure', icon: Database, description: 'Network & Systems' },
    { name: 'Digital Transformation', href: '/services/transformation', icon: Zap, description: 'Business Optimization' },
    { name: 'Quantum Computing', href: '/services/quantum-ai', icon: Target, description: 'Next-Gen Computing' },
    { name: 'Blockchain Solutions', href: '/blockchain-enterprise-solutions', icon: Building2, description: 'Distributed Ledger' },
    { name: 'IoT & Data Analytics', href: '/iot-data-analytics', icon: TrendingUp, description: 'Connected Devices' }
  ];

  const talent = [
    { name: 'Hire Developers', href: '/talent/developers', icon: Users, description: 'Expert developers' },
    { name: 'Hire Designers', href: '/talent/designers', icon: Users2, description: 'Creative designers' },
    { name: 'Hire Engineers', href: '/talent/engineers', icon: Code2, description: 'Skilled engineers' },
    { name: 'Hire Consultants', href: '/talent/consultants', icon: Briefcase, description: 'Business consultants' }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Building2, description: 'Our story and mission' },
    { name: 'Our Team', href: '/team', icon: Users, description: 'Leadership and experts' },
    { name: 'Mission & Vision', href: '/about', icon: Target, description: 'Our purpose and goals' },
    { name: 'Careers', href: '/careers', icon: Star, description: 'Join our team' },
    { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Company updates' },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service plans' },
    { name: 'Contact', href: '/contact', icon: MessageSquare, description: 'Get in touch' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Insights and articles' },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen, description: 'Success stories' },
    { name: 'Webinars', href: '/webinars', icon: Calendar, description: 'Educational sessions' },
    { name: 'Events', href: '/events', icon: Calendar, description: 'Industry conferences' },
    { name: 'Documentation', href: '/docs', icon: FileCode, description: 'Technical guides' },
    { name: 'Community', href: '/community', icon: Users3, description: 'User community' }
  ];

  const support = [
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support articles' },
    { name: 'Contact Support', href: '/contact', icon: Headphones, description: 'Get help' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions' },
    { name: 'Status Page', href: '/status', icon: BarChart3, description: 'Service status' },
    { name: 'Training', href: '/training', icon: BookOpen, description: 'Learning resources' },
    { name: 'API Documentation', href: '/api', icon: Code2, description: 'Developer guides' }
  ];

  const analytics = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, description: 'Main dashboard' },
    { name: 'Performance', href: '/analytics/performance', icon: TrendingUp, description: 'Performance metrics' },
    { name: 'Reports', href: '/analytics/reports', icon: BarChart3, description: 'Analytics reports' },
    { name: 'Insights', href: '/analytics/insights', icon: Target, description: 'Data insights' }
  ];

  const renderMenuItem = (item, isSubItem = false) => {
    const IconComponent = item.icon;
    return (
      <Link
        key={item.name}
        to={item.href}
        className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 group ${
          isSubItem 
            ? 'ml-4 text-gray-400 hover:text-white hover:bg-white/10' 
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <IconComponent className={`w-4 h-4 mr-3 ${isSubItem ? 'w-3 h-3' : ''}`} />
        <div className="flex-1">
          <div className="font-medium">{item.name}</div>
          {!isCollapsed && (
            <div className="text-xs text-gray-500 group-hover:text-gray-400">
              {item.description}
            </div>
          )}
        </div>
      </Link>
    );
  };

  const renderSection = (title, items, sectionKey, icon: IconComponent) => {
    const isExpanded = expandedSections[sectionKey];
    
    return (
      <div key={sectionKey}>
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <div className="flex items-center">
            <IconComponent className="w-4 h-4 mr-3" />
            {!isCollapsed && title}
          </div>
          {!isCollapsed && (
            isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          )}
        </button>
        
        {isExpanded && !isCollapsed && (
          <div className="mt-1 space-y-1">
            {items.map(item => renderMenuItem(item, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`bg-slate-800/95 backdrop-blur-lg border-r border-white/10 h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-80'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-300" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {/* Home */}
        <Link
          to="/"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <Home className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Home'}
        </Link>

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <LayoutDashboard className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Dashboard'}
        </Link>

        {/* Services Section */}
        {renderSection('Services', services, 'services', Briefcase)}

        {/* Talent Section */}
        {renderSection('Talent', talent, 'talent', Users)}

        {/* Company Section */}
        {renderSection('Company', company, 'company', Building2)}

        {/* Resources Section */}
        {renderSection('Resources', resources, 'resources', FileText)}

        {/* Support Section */}
        {renderSection('Support', support, 'support', HelpCircle)}

        {/* Analytics Section */}
        {renderSection('Analytics', analytics, 'analytics', BarChart3)}

        {/* Settings */}
        <Link
          to="/settings"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <Settings className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Settings'}
        </Link>
      </nav>

      {/* Collapsed State Icons Only */}
      {isCollapsed && (
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-2">
          {services.slice(0, 4).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                title={service.name}
              >
                <IconComponent className="w-4 h-4 text-gray-300 hover:text-white" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
