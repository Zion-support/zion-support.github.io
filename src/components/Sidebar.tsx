import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import '../styles/futuristic.css';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
=======
import { 
  Home, 
  Server, 
  Brain, 
  Users, 
  Info, 
  Mail, 
  ChevronRight, 
  Sparkles,
  Zap,
  Shield,
  Cloud,
  Database,
  Code,
  BarChart3,
  Lock,
  Globe,
  Bot,
  Cpu,
  Network,
  Atom,
  Eye,
  Phone
} from 'lucide-react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
>>>>>>> origin/zion-enhancements-v4
  const location = useLocation();

  const navigationSections = [
    {
<<<<<<< HEAD
      title: "Main",
      items: [
        { name: "Dashboard", path: "/", icon: "🏠", description: "Overview" },
        { name: "Services", path: "/services", icon: "🚀", description: "All Services" },
        { name: "AI Solutions", path: "/ai-solutions", icon: "🤖", description: "AI Services" },
        { name: "Micro SAAS", path: "/micro-saas", icon: "💻", description: "Software Solutions" }
      ]
    },
    {
      title: "Technology",
      items: [
        { name: "IT Services", path: "/it-services", icon: "🖥️", description: "Infrastructure" },
        { name: "Cybersecurity", path: "/cybersecurity", icon: "🔒", description: "Security" },
        { name: "Blockchain", path: "/blockchain", icon: "⛓️", description: "Web3" },
        { name: "Edge Computing", path: "/edge-computing", icon: "🌐", description: "IoT & Edge" },
        { name: "Quantum Computing", path: "/quantum", icon: "🔮", description: "Quantum Solutions" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { name: "Business Intelligence", path: "/solutions/bi", icon: "📊", description: "Analytics" },
        { name: "DevOps & Automation", path: "/solutions/devops", icon: "⚡", description: "Automation" },
        { name: "Data Analytics", path: "/solutions/analytics", icon: "📈", description: "Data Science" },
        { name: "Cloud Infrastructure", path: "/solutions/cloud", icon: "☁️", description: "Cloud Services" },
        { name: "Machine Learning", path: "/solutions/ml", icon: "🧠", description: "ML Models" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", path: "/about", icon: "ℹ️", description: "Company Info" },
        { name: "Our Team", path: "/team", icon: "👥", description: "Team Members" },
        { name: "Careers", path: "/careers", icon: "💼", description: "Job Opportunities" },
        { name: "News & Blog", path: "/blog", icon: "📰", description: "Latest Updates" },
        { name: "Case Studies", path: "/case-studies", icon: "📋", description: "Success Stories" }
      ]
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", path: "/help", icon: "❓", description: "Support" },
        { name: "Documentation", path: "/docs", icon: "📚", description: "Guides" },
        { name: "API Reference", path: "/api", icon: "🔌", description: "API Docs" },
        { name: "Status Page", path: "/status", icon: "📊", description: "System Status" },
        { name: "Contact Support", path: "/support", icon: "🆘", description: "Get Help" }
=======
      id: 'main',
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Contact', href: '/contact', icon: Mail },
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Server,
      items: [
        { name: 'All Services', href: '/services', icon: Server },
        { name: 'AI Services', href: '/services?category=AI Services', icon: Brain },
        { name: 'IT Services', href: '/services?category=IT Services', icon: Cpu },
        { name: 'Micro SAAS', href: '/services?category=Micro SAAS', icon: Code },
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      items: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: Bot },
        { name: 'AI Model Training', href: '/services/ai-model-training', icon: Brain },
        { name: 'Zion Hire AI', href: '/zion-hire-ai', icon: Users },
        { name: 'Voice AI Assistant', href: '/services/voice-ai-assistant', icon: Zap },
        { name: 'Visual Recognition', href: '/services/visual-recognition', icon: Eye },
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      icon: Cpu,
      items: [
        { name: 'API Gateway', href: '/services/api-gateway', icon: Network },
        { name: 'IoT Management', href: '/services/iot-management', icon: Globe },
        { name: 'Blockchain Integration', href: '/services/blockchain', icon: Atom },
        { name: 'Biometric Auth', href: '/services/biometric-auth', icon: Lock },
        { name: 'Global CDN', href: '/services/global-cdn', icon: Cloud },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: Code,
      items: [
        { name: 'AI Talent Matching', href: '/services/ai-talent-matching', icon: Users },
        { name: 'Cybersecurity Assessment', href: '/services/cybersecurity-assessment', icon: Shield },
        { name: 'Cloud Migration', href: '/services/cloud-migration', icon: Cloud },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'Network Infrastructure', href: '/services/network-infrastructure', icon: Network },
        { name: 'Video Production', href: '/services/video-production', icon: Zap },
>>>>>>> origin/zion-enhancements-v4
      ]
    }
  ];

<<<<<<< HEAD
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`fixed left-0 top-20 h-screen z-40 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="futuristic-sidebar h-full overflow-y-auto">
        {/* Toggle Button */}
        <div className="p-4 border-b border-cyan-400/30">
          <button
            onClick={toggleSidebar}
            className="w-full p-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="p-4 space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              {!isCollapsed && (
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-2 uppercase tracking-wider">
                  {section.title}
                </h3>
              )}
              
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`futuristic-sidebar-item flex items-center gap-3 group ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{item.name}</div>
                        <div className="text-xs text-gray-500 truncate">{item.description}</div>
                      </div>
                    )}
                    
                    {/* Active Indicator */}
                    {isActive(item.path) && !isCollapsed && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="p-4 border-t border-cyan-400/30">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-2 uppercase tracking-wider">
              Quick Actions
            </h3>
            
            <div className="space-y-2">
              <button className="futuristic-btn w-full py-2 text-sm">
                Get Started
              </button>
              <button className="w-full py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-border">
                Free Demo
              </button>
              <button className="w-full py-2 border border-gray-600 text-gray-300 rounded-lg text-sm hover:bg-gray-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        )}

        {/* Contact Info */}
        {!isCollapsed && (
          <div className="p-4 border-t border-cyan-400/30">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-2 uppercase tracking-wider">
              Contact
            </h3>
            
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span className="truncate">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span className="truncate">Middletown, DE</span>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed Contact Info */}
        {isCollapsed && (
          <div className="p-4 border-t border-cyan-400/30">
            <div className="space-y-2">
              <div className="text-center">
                <span className="text-cyan-400 text-lg">📱</span>
              </div>
              <div className="text-center">
                <span className="text-cyan-400 text-lg">✉️</span>
              </div>
              <div className="text-center">
                <span className="text-cyan-400 text-lg">📍</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
    </aside>
=======
  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-zion-blue-dark/95 to-zion-blue-dark/90 backdrop-blur-md border-r border-zion-cyan/20 transition-all duration-300 z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center text-white hover:bg-zion-purple transition-colors duration-300"
      >
        <ChevronRight className={`h-3 w-3 transition-transform duration-300 ${
          isCollapsed ? 'rotate-180' : ''
        }`} />
      </button>

      {/* Logo */}
      <div className="p-4 border-b border-zion-cyan/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-lg font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
        {navigationSections.map((section) => (
          <div key={section.id} className="space-y-1">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                expandedSection === section.id
                  ? 'bg-zion-cyan/20 text-zion-cyan'
                  : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
              }`}
            >
              <div className="flex items-center space-x-2">
                <section.icon className="h-4 w-4" />
                {!isCollapsed && <span className="text-sm font-medium">{section.title}</span>}
              </div>
              {!isCollapsed && (
                <ChevronRight className={`h-3 w-3 transition-transform duration-300 ${
                  expandedSection === section.id ? 'rotate-90' : ''
                }`} />
              )}
            </button>

            {/* Section Items */}
            {expandedSection === section.id && !isCollapsed && (
              <div className="ml-6 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 p-2 rounded-lg text-sm transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-zion-cyan/20 text-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    <item.icon className="h-3 w-3" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Info */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-cyan/20 bg-zion-blue-dark/50">
          <div className="space-y-2 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
          </div>
        </div>
      )}
    </div>
>>>>>>> origin/zion-enhancements-v4
  );
}