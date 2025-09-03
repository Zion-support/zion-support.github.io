import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ChevronRight,
  Home,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
  Building,
  TestTube,
  Newspaper,
  X,
  Code
} from 'lucide-react';

export default function Sidebar({ isOpen = false, onClose }) {
  const [expandedSections, setExpandedSections] = useState(['services', 'solutions']);

  const toggleSection = (sectionName) => {
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
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Intelligent Solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Zap, description: 'Custom Applications' },
        { name: 'IT Services', href: '/it-services', icon: Shield, description: 'Infrastructure & Support' },
        { name: 'Cloud Solutions', href: '/it-services#cloud', icon: Cloud, description: 'Infrastructure & Automation' },
        { name: 'Cybersecurity', href: '/it-services#cybersecurity', icon: Lock, description: 'Protection & Compliance' },
        { name: 'DevOps', href: '/it-services#devops', icon: Settings, description: 'Automation & Deployment' }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare AI', href: '/ai-services#healthcare', icon: Heart, description: 'Medical Technology' },
        { name: 'FinTech', href: '/ai-services#fintech', icon: DollarSign, description: 'Financial Technology' },
        { name: 'Smart Cities', href: '/ai-services#smart-cities', icon: Globe, description: 'Urban Innovation' },
        { name: 'Agriculture', href: '/ai-services#agriculture', icon: Target, description: 'Precision Farming' },
        { name: 'Manufacturing', href: '/solutions#manufacturing', icon: Cpu, description: 'Smart Factory' },
        { name: 'Education', href: '/micro-saas#education', icon: BookOpen, description: 'EdTech Solutions' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'Training', href: '/training', icon: BookOpen },
        { name: 'Support', href: '/support', icon: HelpCircle },
        { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign },
        { name: 'Partners', href: '/partners', icon: Users }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4">
          {navigationSections.map((section) => (
            <div key={section.title} className="mb-6">
              <button
                onClick={() => toggleSection(section.title.toLowerCase())}
                className="flex items-center justify-between w-full p-2 text-left text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                <span>{section.title}</span>
                {expandedSections.includes(section.title.toLowerCase()) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.includes(section.title.toLowerCase()) && (
                <div className="mt-2 space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        <Icon className="w-4 h-4" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-gray-500">{item.description}</div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-blue-600">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}