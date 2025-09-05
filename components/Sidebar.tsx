import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  X,
  Home,
  Settings,
  Shield,
  Building,
  FileText,
  Users,
  Phone,
  Brain,
  Network,
  Cloud,
  BarChart3,
  Code,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Award,
  Heart,
  Target,
  TrendingUp,
  Lock,
  Globe,
  Zap,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Network },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
      { name: 'Startup Solutions', href: '/solutions/startup', icon: TrendingUp },
      { name: 'Industry Solutions', href: '/solutions/industry', icon: BarChart3 },
      { name: 'Custom Development', href: '/solutions/custom', icon: Code },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Settings }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building,
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: Award },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Government', href: '/industries/government', icon: Shield },
      { name: 'Retail', href: '/industries/retail', icon: Target },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'API Reference', href: '/api-docs', icon: Code },
      { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
      { name: 'Guides', href: '/guides', icon: HelpCircle },
      { name: 'FAQ', href: '/faq', icon: HelpCircle },
      { name: 'Support', href: '/support', icon: HelpCircle }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
    children: [
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Award },
      { name: 'Talent', href: '/talent', icon: Users },
      { name: 'Partners', href: '/partners', icon: Building }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

const quickLinks = [
  { name: 'Pricing', href: '/pricing', icon: Award },
  { name: 'News', href: '/news', icon: MessageSquare },
  { name: 'Webinars', href: '/webinars', icon: Globe },
  { name: 'White Papers', href: '/whitepapers', icon: FileText },
  { name: 'Newsletter', href: '/newsletter', icon: MessageSquare },
  { name: 'Sitemap', href: '/sitemap', icon: Globe }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  const hasActiveChild = (children: any[]) => {
    return children?.some(child => router.pathname === child.href);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:shadow-none`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href) || (item.children && hasActiveChild(item.children))
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={!item.children ? onClose : undefined}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.children && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Link>
                  
                  {/* Submenu */}
                  {item.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive(child.href)
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                          onClick={onClose}
                        >
                          <child.icon className="w-3 h-3" />
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="px-4 mt-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Links
              </h3>
              <div className="space-y-1">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(link.href)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              © 2024 Zion Tech Group
            </div>
          </div>
        </div>
      </div>
    </>
  );
}