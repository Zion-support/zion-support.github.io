import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Services, 
  Settings, 
  Users, 
  FileText, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Brain,
  Network,
  Cloud,
  Shield,
  Cpu,
  Database,
  Smartphone,
  Code,
  Server,
  BarChart3,
  Target,
  GraduationCap,
  Globe,
  MessageCircle,
  Eye,
  Workflow
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Dashboard', href: '/', icon: Home },
        { name: 'Services', href: '/services', icon: Services },
        { name: 'Solutions', href: '/solutions', icon: Target },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: HelpCircle }
      ]
    },
    {
      title: 'AI Services',
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'Machine Learning', href: '/ai-services', icon: Cpu },
        { name: 'Natural Language', href: '/ai-services', icon: MessageCircle },
        { name: 'Computer Vision', href: '/ai-services', icon: Eye },
        { name: 'AI Automation', href: '/ai-services', icon: Workflow }
      ]
    },
    {
      title: 'IT Services',
      items: [
        { name: 'IT Services', href: '/it-services', icon: Network },
        { name: 'Cloud Solutions', href: '/it-services', icon: Cloud },
        { name: 'Database Management', href: '/it-services', icon: Database },
        { name: 'Server Management', href: '/it-services', icon: Server },
        { name: 'Network Security', href: '/it-services', icon: Shield }
      ]
    },
    {
      title: 'Micro SaaS',
      items: [
        { name: 'Micro SaaS', href: '/micro-saas', icon: Smartphone },
        { name: 'API Development', href: '/micro-saas', icon: Code },
        { name: 'Mobile Apps', href: '/micro-saas', icon: Smartphone },
        { name: 'Web Applications', href: '/micro-saas', icon: Globe },
        { name: 'Integration Tools', href: '/micro-saas', icon: Settings }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Tutorials', href: '/tutorials', icon: GraduationCap },
        { name: 'Support', href: '/support', icon: HelpCircle }
      ]
    }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <aside className={`bg-gray-800 text-white transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } ${className}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">Zion Tech</span>
          </div>
        )}
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navigationSections.map((section) => (
          <div key={section.title} className="mb-6">
            {!isCollapsed && (
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
              >
                <span>{section.title}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  activeSection === section.title ? 'rotate-90' : ''
                }`} />
              </button>
            )}
            
            <div className={`space-y-1 ${
              isCollapsed || activeSection === section.title ? 'block' : 'hidden'
            }`}>
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 text-center">
            <p>Zion Tech Group</p>
            <p>Version 1.0.0</p>
          </div>
        </div>
      )}
    </aside>
  );
}