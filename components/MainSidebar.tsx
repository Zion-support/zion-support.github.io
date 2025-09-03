import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Home,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Shield,
  Handshake,
  ChevronDown,
  ChevronRight,
  Brain,
  Cpu,
  Database,
  Network,
  Code,
  Palette,
  Target,
  Rocket,
  Eye,
  DollarSign,
  ShoppingCart,
  Clock,
  Cloud,
  Search,
  Building,
  Zap,
  Heart,
  Lightbulb,
  TrendingUp,
  BarChart3,
  Lock,
  AlertTriangle,
  Server,
  CheckCircle,
  Truck,
  Car,
  TestTube,
  PenTool,
  Building2,
  Atom,
  FileText,
  Quote,
  Newspaper,
  Calendar,
  Video,
  HelpCircle,
  LifeBuoy,
  Store,
  PieChart,
  Share2,
  Monitor,
  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,
  Wind
} from 'lucide-react';

interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean;
  onClose: () => void;
}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => router.pathname === path;

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Building },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Solutions', href: '/solutions', icon: Target },
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'Careers', href: '/careers', icon: Users },
      { name: 'Blog', href: '/blog', icon: Newspaper },
      { name: 'Contact', href: '/contact', icon: Phone },
    ],
    services: [
      { name: 'AI Development', href: '/services/ai-development', icon: Brain },
      { name: 'Cloud Architecture', href: '/services/cloud-architecture', icon: Cloud },
      { name: 'Web Development', href: '/services/web-development', icon: Code },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'IoT Platforms', href: '/services/iot-platforms', icon: Network },
      { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
      { name: 'SaaS Platforms', href: '/solutions/saas', icon: Server },
      { name: 'Mobile Apps', href: '/solutions/mobile', icon: Smartphone },
      { name: 'E-commerce', href: '/solutions/ecommerce', icon: ShoppingCart },
      { name: 'Analytics', href: '/solutions/analytics', icon: BarChart3 },
      { name: 'Automation', href: '/solutions/automation', icon: Zap },
    ],
    technologies: [
      { name: 'React & Next.js', href: '/technologies/react', icon: Code },
      { name: 'Node.js', href: '/technologies/nodejs', icon: Server },
      { name: 'Python', href: '/technologies/python', icon: Cpu },
      { name: 'AWS', href: '/technologies/aws', icon: Cloud },
      { name: 'Docker', href: '/technologies/docker', icon: Database },
      { name: 'Kubernetes', href: '/technologies/kubernetes', icon: Network },
    ],
    resources: [
      { name: 'Documentation', href: '/docs', icon: BookOpen },
      { name: 'API Reference', href: '/api', icon: Code },
      { name: 'Tutorials', href: '/tutorials', icon: Video },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'White Papers', href: '/whitepapers', icon: FileText },
      { name: 'Support', href: '/support', icon: HelpCircle },
    ]
  };

  const renderNavItem = (item: any, level = 0) => {
    const hasChildren = typeof item === 'object' && item.children;
    const isExpanded = expandedSections.includes(item.name);

    if (hasChildren) {
      return (
        <div key={item.name} className="mb-2">
          <button
            onClick={() => toggleSection(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
              level === 0
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              {item.icon && <item.icon className="w-5 h-5 mr-3" />}
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {isExpanded && (
            <div className="ml-4 mt-2 space-y-1">
              {item.children.map((child: any) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
          isActive(item.href)
            ? 'bg-blue-100 text-blue-700 font-medium'
            : level === 0
            ? 'text-gray-700 hover:bg-gray-100'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
        onClick={onClose}
      >
        {item.icon && <item.icon className="w-5 h-5 mr-3" />}
        <span>{item.name}</span>
      </Link>
    );
  };

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
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {/* Main Navigation */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Main
                </h3>
                <div className="space-y-1">
                  {navigation.main.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Services
                </h3>
                <div className="space-y-1">
                  {navigation.services.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Solutions */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Solutions
                </h3>
                <div className="space-y-1">
                  {navigation.solutions.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="space-y-1">
                  {navigation.technologies.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Resources */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Resources
                </h3>
                <div className="space-y-1">
                  {navigation.resources.map(item => renderNavItem(item))}
                </div>
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;