import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Settings as Services, 
  Target as Solutions, 
  User as About, 
  Contact, 
  FileText as Blog, 
  Users as Team, 
  DollarSign as Pricing, 
  HelpCircle as Support, 
  BookOpen as Resources, 
  Newspaper as News, 
  Calendar as Events, 
  Handshake as Partners, 
  ChevronRight, 
  ChevronDown,
  Brain,
  Server,
  Store,
  Cloud,
  Shield,
  Database,
  Network,
  Zap,
  Users,
  Target,
  Building,
  BarChart3,
  Workflow,
  Globe,
  Lock,
  TrendingUp,
  Code,
  Settings,
  HelpCircle,
  FileText,
  Calendar,
  Bell,
  Star,
  Award,
  Lightbulb,
  Rocket,
  CheckCircle,
  X,
  Handshake
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['services', 'solutions']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section) 
        : [...prev, section]
    );
  };

  const isActive = (path: string) => pathname === path;

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: About },
        { name: 'Contact', href: '/contact', icon: Contact },
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'All Services', href: '/services', icon: Services },
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Store },
        { name: 'Cloud Solutions', href: '/solutions/cloud-migration', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: Database },
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'All Solutions', href: '/solutions', icon: Solutions },
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Target },
        { name: 'Finance', href: '/solutions/finance', icon: BarChart3 },
        { name: 'Government', href: '/solutions/government', icon: Globe },
        { name: 'Retail', href: '/solutions/retail', icon: Store },
        { name: 'Education', href: '/solutions/education', icon: Users },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Workflow },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'News', href: '/news', icon: News },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Calendar },
        { name: 'Tutorials', href: '/tutorials', icon: Code },
        { name: 'API Docs', href: '/api-docs', icon: Code },
        { name: 'Support', href: '/support', icon: HelpCircle },
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', href: '/privacy', icon: Lock },
        { name: 'Terms of Service', href: '/terms', icon: FileText },
        { name: 'Cookie Policy', href: '/cookies', icon: Settings },
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Zion Tech Group</h2>
                <p className="text-sm text-gray-500">AI & Technology Solutions</p>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <nav className="space-y-6">
            {navigationSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <p className="font-medium">Contact Us</p>
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                  Get Started
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;