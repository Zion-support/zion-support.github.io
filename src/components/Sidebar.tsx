import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3, 
  Settings, 
  ChevronRight, 
  ChevronDown,
  Cloud,
  Smartphone,
  Database,
  Globe
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const menuItems = [
    {
      name: 'Home',
      icon: Home,
      path: '/',
      children: []
    },
    {
      name: 'Services',
      icon: Zap,
      path: '/services',
      children: [
        { name: 'AI Services', path: '/services/ai-services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Cloud Migration', path: '/services/cloud-migration' },
        { name: 'DevOps', path: '/services/devops' },
        { name: 'Mobile Development', path: '/services/mobile-development' }
      ]
    },
    {
      name: 'About',
      icon: Brain,
      path: '/about',
      children: []
    },
    {
      name: 'Pricing',
      icon: TrendingUp,
      path: '/pricing',
      children: []
    },
    {
      name: 'Contact',
      icon: Users,
      path: '/contact',
      children: []
    }
  ];

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Navigation</h2>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            <div
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-slate-700'
              }`}
              onClick={() => {
                if (item.children.length > 0) {
                  toggleExpanded(item.name);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.children.length > 0 && (
                expandedItems.includes(item.name) ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
              )}
            </div>
            
            {item.children.length > 0 && expandedItems.includes(item.name) && (
              <div className="ml-6 mt-2 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.path}
                    className={`block p-2 rounded-lg text-sm transition-colors ${
                      location.pathname === child.path
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;