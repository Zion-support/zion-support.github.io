import React, { useState } from 'react';
import { 
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  Cloud,
  Code,
  Star,
  MessageSquare,
  FileText,
  DollarSign,
  Briefcase,
  Zap,
  Globe,
  Shield,
  Database,
  Cpu,
  Network,
  Smartphone,
  Wifi,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const menuItems = [
    {
      id: 'main',
      label: 'Main',
      icon: Home,
      children: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      icon: Settings,
      children: [
        { label: 'AI Services', href: '/ai-services' },
        { label: 'IT Services', href: '/it-services' },
        { label: '5G Solutions', href: '/5g-solutions' },
        { label: 'Micro SaaS', href: '/micro-saas-solutions' }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      icon: Lightbulb,
      children: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Digital Transformation', href: '/digital-transformation' },
        { label: 'AI Content Generator', href: '/ai-content-generator' }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: FileText,
      children: [
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'Pricing', href: '/pricing' }
      ]
    },
    {
      id: 'legal',
      label: 'Legal',
      icon: Shield,
      children: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' }
      ]
    }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none
      `}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                  {expandedItems.includes(item.id) ? (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  )}
                </button>
                
                {expandedItems.includes(item.id) && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          className="block p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <a
                href="/contact"
                className="flex items-center p-3 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                onClick={onClose}
              >
                <MessageSquare className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">Get Quote</span>
              </a>
              <a
                href="/pricing"
                className="flex items-center p-3 rounded-md bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                onClick={onClose}
              >
                <DollarSign className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">View Pricing</span>
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}