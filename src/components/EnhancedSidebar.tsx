import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  MessageCircle,
  Calendar,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  Brain,
  Code,
  Cloud,
  Shield,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Rocket,
  Target,
  Lightbulb,
  Award,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Star,
  Heart,
  TrendingUp,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Menu,
  X as CloseIcon
} from 'lucide-react';

interface EnhancedSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnhancedSidebar: React.FC<EnhancedSidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['services', 'solutions']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'main',
      title: 'Main',
      items: [
        { label: 'Dashboard', href: '/dashboard', icon: Home },
        { label: 'Home', href: '/', icon: Home },
        { label: 'About', href: '/about', icon: Users },
        { label: 'Contact', href: '/contact', icon: Phone }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      items: [
        { label: 'All Services', href: '/services', icon: Settings },
        { label: 'AI Services', href: '/services/ai-services', icon: Brain },
        { label: 'Micro SAAS', href: '/services/micro-saas', icon: Code },
        { label: 'IT Services', href: '/services/it-services', icon: Cloud },
        { label: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Globe }
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      items: [
        { label: 'All Solutions', href: '/solutions', icon: Target },
        { label: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { label: 'Small Business', href: '/solutions/small-business', icon: Briefcase },
        { label: 'Startups', href: '/solutions/startups', icon: Rocket },
        { label: 'Custom Development', href: '/solutions/custom-development', icon: Code },
        { label: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog', icon: FileText },
        { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { label: 'White Papers', href: '/white-papers', icon: FileText },
        { label: 'Webinars', href: '/webinars', icon: MessageCircle },
        { label: 'Documentation', href: '/documentation', icon: FileText },
        { label: 'FAQ', href: '/faq', icon: MessageCircle },
        { label: 'Help Center', href: '/help', icon: MessageCircle }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      items: [
        { label: 'Our Team', href: '/team', icon: Users },
        { label: 'Careers', href: '/careers', icon: Briefcase },
        { label: 'Partners', href: '/partners', icon: Users },
        { label: 'Pricing', href: '/pricing', icon: TrendingUp },
        { label: 'Pricing Guide', href: '/pricing-guide', icon: FileText }
      ]
    },
    {
      id: 'actions',
      title: 'Quick Actions',
      items: [
        { label: 'Request Quote', href: '/request-quote', icon: ArrowRight },
        { label: 'Book Demo', href: '/demo', icon: Calendar },
        { label: 'Download Brochure', href: '/brochure', icon: Download },
        { label: 'Sign In', href: '/login', icon: ArrowRight },
        { label: 'Register', href: '/register', icon: Plus }
      ]
    }
  ];

  const quickStats = [
    { label: 'Active Projects', value: '12', icon: BarChart3, color: 'text-blue-500' },
    { label: 'Team Members', value: '8', icon: Users, color: 'text-green-500' },
    { label: 'Happy Clients', value: '500+', icon: Heart, color: 'text-red-500' },
    { label: 'Years Experience', value: '15+', icon: Award, color: 'text-purple-500' }
  ];

  const recentActivity = [
    { label: 'New project assigned', time: '2 hours ago', icon: Plus, color: 'text-blue-500' },
    { label: 'Meeting reminder', time: '30 minutes ago', icon: Bell, color: 'text-yellow-500' },
    { label: 'Project completed', time: '1 day ago', icon: Check, color: 'text-green-500' },
    { label: 'New team member', time: '2 days ago', icon: Users, color: 'text-purple-500' }
  ];

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
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">Zion Tech</div>
              <div className="text-xs text-gray-500">Tech Group</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {navigationSections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-900 mb-3"
                >
                  <span>{section.title}</span>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {expandedSections.includes(section.id) && (
                  <div className="space-y-1 ml-2">
                    {section.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="p-4 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</h4>
          <div className="grid grid-cols-2 gap-3">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-4 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h4>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
                <div className="flex-1">
                  <div className="text-gray-900">{activity.label}</div>
                  <div className="text-gray-500 text-xs">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-start space-x-2 text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};