import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cloud,
  Shield, 
  Code,
  Database, 
  Network,
  Users, 
  Award,
  ShoppingCart, 
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Home,
  Building,
  Briefcase,
  Target,
  FileText,
  TestTube,
  Video,
  Newspaper,
  Mail,
  MessageCircle,
  DollarSign,
  BookOpen,
  BarChart3,
  X,
  Globe,
  Rocket,
  Heart,
  Cpu,
  Zap,
  Lock,
  Server,
  Smartphone,
  Search,
  Calendar,
  Info,
  Phone,
  MapPin
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['services', 'solutions']);

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(s => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Solutions', href: '/solutions', icon: Target },
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Intelligent Solutions' },
        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Infrastructure & Support' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable Solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protection & Compliance' },
        { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud, description: 'Infrastructure & Migration' },
        { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business Evolution' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides' },
        { name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources' },
        { name: 'Training', href: '/training', icon: Award, description: 'Skill Development' },
        { name: 'Support', href: '/support', icon: HelpCircle, description: 'Get Help' },
        { name: 'Status Page', href: '/status', icon: BarChart3, description: 'System Health' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Team', href: '/team', icon: Users, description: 'Meet Our Team' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team' },
        { name: 'Partners', href: '/partners', icon: Users, description: 'Become a Partner' },
        { name: 'Press', href: '/press', icon: Newspaper, description: 'News & Updates' }
      ]
    }
  ];

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
        fixed top-0 left-0 h-full w-80 bg-gray-900 border-r border-gray-700 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:relative lg:inset-0
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-semibold">Zion Tech Group</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {navigationSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-6">
              <h3 className="px-4 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <div key={item.name}>
                    <Link 
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm transition-colors group text-gray-300 hover:text-white hover:bg-gray-800"
                      onClick={onClose}
                    >
                      <item.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="flex-1">{item.name}</span>
                      {item.description && (
                        <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">
              Need help? Contact our support team
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center text-xs text-cyan-400 hover:text-white transition-colors"
              onClick={onClose}
            >
              <MessageCircle className="h-3 w-3 mr-1" />
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}