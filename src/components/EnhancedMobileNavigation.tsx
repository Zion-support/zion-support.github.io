import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Settings,
  Users,
  Shield,
  Brain,
  Cpu,
  Rocket,
  TrendingUp,
  Briefcase,
  FileText,
  Phone,
  Mail,
  MapPin,
  Globe,
  Search,
  User,
  Bell,
  HelpCircle,
  Info,
  Star,
  Award,
  Zap,
  Target,
  Lock,
  Database,
  Cloud,
  Code,
  Palette,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  MessageSquare,
  Video,
  Image,
  Music,
  Film,
  BookOpen,
  Lightbulb,
  Puzzle,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitBranchPlus,
  GitCommitPlus,
  GitPullRequestPlus,
  GitMergePlus,
  GitComparePlus,
  Atom,
  Heart,
  Building,
  DollarSign,
  GraduationCap,
  Handshake,
  Newspaper
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<any>;
  children?: NavigationItem[];
  badge?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch?: (query: string) => void;
}

const EnhancedMobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onSearch
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  // Navigation structure
  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: Home
    },
    {
      id: 'services',
      label: 'Services',
      path: '/services',
      icon: Settings,
      children: [
        {
          id: 'ai-solutions',
          label: 'AI Solutions',
          path: '/ai-solutions',
          icon: Brain,
          isFeatured: true
        },
        {
          id: 'enterprise-it',
          label: 'Enterprise IT',
          path: '/enterprise-solutions',
          icon: Shield
        },
        {
          id: 'cloud-devops',
          label: 'Cloud & DevOps',
          path: '/cloud-devops',
          icon: Cloud
        },
        {
          id: 'cybersecurity',
          label: 'Cybersecurity',
          path: '/services/cybersecurity',
          icon: Lock
        },
        {
          id: 'quantum-tech',
          label: 'Quantum Technology',
          path: '/services/quantum-technology',
          icon: Atom
        },
        {
          id: 'micro-saas',
          label: 'Micro SAAS',
          path: '/innovative-micro-saas-services',
          icon: Code,
          isNew: true
        }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      path: '/solutions',
      icon: Target,
      children: [
        {
          id: 'healthcare',
          label: 'Healthcare',
          path: '/solutions/healthcare',
          icon: Heart
        },
        {
          id: 'enterprise',
          label: 'Enterprise',
          path: '/services/enterprise',
          icon: Building
        },
        {
          id: 'finance',
          label: 'Finance',
          path: '/solutions/finance',
          icon: DollarSign
        },
        {
          id: 'education',
          label: 'Education',
          path: '/solutions/education',
          icon: GraduationCap
        }
      ]
    },
    {
      id: 'about',
      label: 'About',
      path: '/about',
      icon: Info,
      children: [
        {
          id: 'mission',
          label: 'Mission',
          path: '/mission',
          icon: Target
        },
        {
          id: 'team',
          label: 'Team',
          path: '/team',
          icon: Users
        },
        {
          id: 'careers',
          label: 'Careers',
          path: '/careers',
          icon: Briefcase
        },
        {
          id: 'partners',
          label: 'Partners',
          path: '/partners',
          icon: Handshake
        }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      path: '/resources',
      icon: FileText,
      children: [
        {
          id: 'blog',
          label: 'Blog',
          path: '/blog',
          icon: BookOpen
        },
        {
          id: 'news',
          label: 'News',
          path: '/news',
          icon: Newspaper
        },
        {
          id: 'case-studies',
          label: 'Case Studies',
          path: '/case-studies',
          icon: BarChart3
        },
        {
          id: 'help-center',
          label: 'Help Center',
          path: '/help',
          icon: HelpCircle
        }
      ]
    },
    {
      id: 'contact',
      label: 'Contact',
      path: '/contact',
      icon: Phone
    }
  ];

  // Quick actions
  const quickActions = [
    {
      id: 'ai-matcher',
      label: 'AI Service Matcher',
      path: '/match',
      icon: Zap,
      description: 'Find the perfect AI solution for your business',
      isFeatured: true
    },
    {
      id: 'talent-directory',
      label: 'Talent Directory',
      path: '/talent',
      icon: Users,
      description: 'Connect with top tech talent'
    },
    {
      id: 'emerging-tech',
      label: 'Emerging Tech',
      path: '/emerging-tech',
      icon: Rocket,
      description: 'Explore cutting-edge technologies'
    }
  ];

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Innovation Drive, Wilmington, DE 19801',
      action: 'https://maps.google.com/?q=123+Innovation+Drive+Wilmington+DE'
    }
  ];

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
      setSearchQuery('');
      onClose();
    }
  };

  // Handle submenu toggle
  const toggleSubmenu = (itemId: string) => {
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId);
  };

  // Handle navigation item click
  const handleNavigationClick = (item: NavigationItem) => {
    if (item.children) {
      toggleSubmenu(item.id);
    } else {
      onClose();
      setActiveSubmenu(null);
    }
  };

  // Close navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Reset state when location changes
  useEffect(() => {
    setActiveSubmenu(null);
    setSearchQuery('');
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div
        ref={navigationRef}
        className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-100">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search services, solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            {isSearchFocused && searchQuery && (
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Search className="w-3 h-3" />
              </button>
            )}
          </form>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            Quick Actions
          </h3>
          <div className="space-y-2">
            {quickActions.map((action) => (
              <Link
                key={action.id}
                to={action.path}
                onClick={onClose}
                className={`block p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${
                  action.isFeatured 
                    ? 'border-blue-200 bg-blue-50 hover:bg-blue-100' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    action.isFeatured ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <action.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{action.label}</span>
                      {action.isFeatured && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleNavigationClick(item)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                    location.pathname === item.path ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.isNew && (
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        New
                      </span>
                    )}
                    {item.isFeatured && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  {item.children && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeSubmenu === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Submenu */}
                {item.children && activeSubmenu === item.id && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        to={child.path}
                        onClick={onClose}
                        className={`block p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                          location.pathname === child.path ? 'bg-blue-50 text-blue-700' : 'text-gray-600'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <child.icon className="w-4 h-4" />
                          <span className="text-sm">{child.label}</span>
                          {child.isNew && (
                            <span className="px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                              New
                            </span>
                          )}
                          {child.isFeatured && (
                            <span className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <Phone className="w-4 h-4 mr-2 text-gray-600" />
            Contact Us
          </h3>
          <div className="space-y-2">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white transition-colors"
              >
                <contact.icon className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">{contact.label}</p>
                  <p className="text-sm font-medium text-gray-900">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>© 2025 Zion Tech Group</span>
            <div className="flex items-center space-x-2">
              <Link to="/privacy" className="hover:text-gray-700">Privacy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-gray-700">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedMobileNavigation;