<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { X, Phone, Mail } from 'lucide-react';

interface SidebarSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: SidebarItem[];
  isExpanded?: boolean;
}

interface SidebarItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  isExternal?: boolean;
  description?: string;
}

const sidebarSections: SidebarSection[] = [
  {
    id: 'main',
    title: 'Main Navigation',
    icon: <Home className="w-5 h-5" />,
    items: [
      {
        id: 'home',
        title: 'Home',
        href: '/',
        icon: <Home className="w-4 h-4" />,
        description: 'Welcome to Zion Tech Group'
      },
      {
        id: 'about',
        title: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Learn about our company and mission'
      },
      {
        id: 'contact',
        title: 'Contact',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with our team'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    icon: <Zap className="w-5 h-5" />,
    items: [
      {
        id: 'comprehensive-services',
        title: 'Comprehensive Services',
        href: '/comprehensive-services',
        icon: <Database className="w-4 h-4" />,
        description: 'Full-service technology solutions',
        badge: 'Popular'
      },
      {
        id: 'ai-services',
        title: 'AI Services',
        href: '/ai-services',
        icon: <Sparkles className="w-4 h-4" />,
        description: 'Artificial Intelligence solutions',
        badge: 'New'
      },
      {
        id: 'micro-saas',
        title: 'Micro SAAS',
        href: '/micro-saas',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Custom software solutions'
      },
      {
        id: 'enterprise-solutions',
        title: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        icon: <Building2 className="w-4 h-4" />,
        description: 'Large-scale business solutions'
      },
      {
        id: 'services-pricing',
        title: 'Services Pricing',
        href: '/services-pricing',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Transparent pricing plans'
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & Support',
    icon: <BookOpen className="w-5 h-5" />,
    items: [
      {
        id: 'help-center',
        title: 'Help Center',
        href: '/help',
        icon: <HelpCircle className="w-4 h-4" />,
        description: 'Find answers and support'
      },
      {
        id: 'cookies',
        title: 'Cookie Policy',
        href: '/cookies',
        icon: <Lock className="w-4 h-4" />,
        description: 'Learn about our cookie usage'
      },
      {
        id: 'privacy',
        title: 'Privacy Policy',
        href: '/privacy',
        icon: <Shield className="w-4 h-4" />,
        description: 'Data protection and privacy'
      },
      {
        id: 'terms',
        title: 'Terms of Service',
        href: '/terms',
        icon: <Shield className="w-4 h-4" />,
        description: 'Service terms and conditions'
      }
    ]
  },
  {
    id: 'company',
    title: 'Company Information',
    icon: <Globe className="w-5 h-5" />,
    items: [
      {
        id: 'careers',
        title: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team',
        isExternal: true
      },
      {
        id: 'news',
        title: 'News & Updates',
        href: '/news',
        icon: <Globe className="w-4 h-4" />,
        description: 'Latest company news'
      },
      {
        id: 'partners',
        title: 'Partnerships',
        href: '/partners',
        icon: <Users className="w-4 h-4" />,
        description: 'Strategic partnerships'
      },
      {
        id: 'sitemap',
        title: 'Sitemap',
        href: '/sitemap',
        icon: <Database className="w-4 h-4" />,
        description: 'Site structure overview'
      }
    ]
  }
];
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
<<<<<<< HEAD
  ShoppingCart, 
  Users, 
  Settings, 
  FileText, 
  MessageSquare, 
  HelpCircle,
  Building,
  Briefcase,
  Globe,
  Zap,
  BookOpen
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
=======
  Briefcase, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  HelpCircle,
  Code,
  Smartphone,
  Globe,
  Building,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const location = useLocation();
<<<<<<< HEAD
<<<<<<< HEAD
  const [expandedSections, setExpandedSections] = useState<string[]>(['main']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleItemClick = (item: SidebarItem) => {
    if (item.isExternal) {
      window.open(item.href, '_blank');
    }
    // For internal links, the router will handle navigation
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      onClose();
    }
  };
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
<<<<<<< HEAD
        { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Talent', href: '/talent', icon: Users },
=======
        { name: 'About', href: '/about', icon: Building },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText },
      ]
    },
    {
      title: 'Marketplace',
      items: [
        { name: 'Products', href: '/marketplace', icon: Briefcase },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Equipment', href: '/equipment', icon: BarChart3 },
        { name: 'Categories', href: '/categories', icon: Globe },
        { name: 'Green IT', href: '/green-it', icon: Globe },
      ]
    },
    {
      title: 'Talent & Community',
      items: [
        { name: 'Find Talent', href: '/talent', icon: Users },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'AI Hiring', href: '/zion-hire-ai', icon: Smartphone },
        { name: 'Partners', href: '/partners', icon: Building },
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
      ]
    },
    {
      title: 'Resources',
      items: [
<<<<<<< HEAD
        { name: 'Equipment', href: '/equipment', icon: Zap },
        { name: 'Green IT', href: '/green-it', icon: Globe },
        { name: 'AI Hiring', href: '/zion-hire-ai', icon: Building },
        { name: 'Blog', href: '/blog', icon: BookOpen },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'API Docs', href: '/api-docs', icon: FileText },
        { name: 'Sitemap', href: '/sitemap', icon: FileText },
      ]
    }
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
<<<<<<< HEAD
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-zion-blue-dark border-r border-zion-purple/20 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:z-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="md:hidden text-zion-slate-light hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {sidebarSections.map((section) => (
            <div key={section.id} className="space-y-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-zion-purple/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-zion-cyan group-hover:text-zion-cyan-dark">
                    {section.icon}
                  </div>
                  <span className="font-semibold text-white group-hover:text-zion-cyan">
                    {section.title}
                  </span>
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-zion-slate-light" />
                )}
              </button>

              {expandedSections.includes(section.id) && (
                <div className="ml-8 space-y-1">
                  {section.items.map((item) => (
                    <div key={item.id} className="relative">
                      <Link
                        to={item.href}
                        onClick={() => handleItemClick(item)}
                        className={`
                          flex items-center gap-3 p-2 rounded-lg transition-colors group
                          ${isActive(item.href) 
                            ? 'bg-zion-purple/20 text-zion-cyan border-l-2 border-zion-cyan' 
                            : 'hover:bg-zion-purple/10 text-zion-slate-light hover:text-white'
                          }
                        `}
                      >
                        {item.icon && (
                          <div className={`
                            ${isActive(item.href) ? 'text-zion-cyan' : 'text-zion-slate-light group-hover:text-zion-cyan'}
                          `}>
                            {item.icon}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium truncate">{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {item.badge}
                              </Badge>
                            )}
                            {item.isExternal && (
                              <ExternalLink className="w-3 h-3 text-zion-slate-light" />
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-zion-slate-light truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zion-purple/20">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <MapPin className="w-4 h-4" />
              <span>Middletown DE 19709</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-zion-purple/20">
            <p className="text-xs text-zion-slate-light text-center">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
=======
=======
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Developer Portal', href: '/developers', icon: Code },
        { name: 'API Docs', href: '/api-docs', icon: Code },
        { name: 'Mobile App', href: '/mobile', icon: Smartphone },
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#location' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
<<<<<<< HEAD
        "fixed top-0 left-0 z-50 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
=======
        "fixed left-0 top-0 z-50 h-full w-64 bg-zion-blue-dark border-r border-zion-blue-light transform transition-transform duration-300 ease-in-out lg:translate-x-0",
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
<<<<<<< HEAD
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
=======
          <div className="flex items-center justify-between p-4 border-b border-zion-blue-light">
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
<<<<<<< HEAD
          <nav className="flex-1 overflow-y-auto py-4">
            {navigationItems.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="px-4 mb-2 text-xs font-semibold text-zion-slate-light uppercase tracking-wider">
=======
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigationItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
<<<<<<< HEAD
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href || 
                                   (item.href !== '/' && location.pathname.startsWith(item.href));
=======
                    const IconComponent = item.icon;
                    const isActive = location.pathname === item.href;
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
                    
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
<<<<<<< HEAD
                            "flex items-center px-4 py-2 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-zion-purple/20 text-zion-cyan border-r-2 border-zion-cyan"
                              : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                          )}
                        >
                          <Icon className="w-4 h-4 mr-3" />
=======
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            isActive
                              ? "bg-zion-purple/20 text-zion-cyan"
                              : "text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
                          )}
                        >
                          <IconComponent className="w-4 h-4 mr-3" />
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

<<<<<<< HEAD
          {/* Footer */}
          <div className="p-4 border-t border-zion-purple/20">
            <div className="text-xs text-zion-slate-light text-center">
              <p>&copy; {new Date().getFullYear()} Zion Tech Group</p>
              <div className="mt-2 space-x-2">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms</Link>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
=======
          {/* Contact Info */}
          <div className="p-4 border-t border-zion-blue-light">
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
              Contact Info
            </h3>
            <div className="space-y-2">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center text-xs text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <IconComponent className="w-3 h-3 mr-2" />
                    {contact.text}
                  </a>
                );
              })}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
          </div>
        </div>
      </div>
    </>
  );
}