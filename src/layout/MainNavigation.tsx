
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { 
  MessageSquare, 
  ChevronDown, 
  Users, 
  Briefcase, 
  Settings, 
  BarChart3, 
  Brain, 
  Shield, 
  Cloud, 
  Zap,
  BookOpen,
  HelpCircle,
  DollarSign,
  Newspaper,
  FileText,
  Video,
  Beaker,
  Users2
} from 'lucide-react';

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const serviceItems = [
    { name: 'AI Services', href: '/services/ai', icon: Brain, description: 'Artificial Intelligence Solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security & Protection' },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud, description: 'Cloud & DevOps Services' },
    { name: 'IT Consulting', href: '/services/consulting', icon: Briefcase, description: 'Strategic IT Consulting' },
    { name: 'Infrastructure', href: '/services/infrastructure', icon: BarChart3, description: 'IT Infrastructure' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Digital Innovation' },
    { name: 'Quantum AI', href: '/services/quantum-ai', icon: Brain, description: 'Quantum Computing & AI' },
  ];

  const resourceItems = [
    { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest insights and news' },
    { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical documentation' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research and insights' },
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
    { name: 'Research & Development', href: '/research-development', icon: Beaker, description: 'Innovation projects' },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
  ];

  const supportItems = [
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Get help and support' },
    { name: 'Training', href: '/training', icon: BookOpen, description: 'Training programs' },
    { name: 'Community', href: '/community', icon: Users2, description: 'Join our community' },
    { name: 'Status', href: '/status', icon: BarChart3, description: 'Service status' },
  ];

  return (
    <nav className={cn('flex items-center space-x-6', className)}>
      {/* Main Navigation Items */}
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            'flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan',
            isActive(item.href)
              ? 'text-zion-cyan'
              : 'text-gray-700'
          )}
        >
          {item.icon && <item.icon className="w-4 h-4" />}
          <span>{item.name}</span>
        </Link>
      ))}

      {/* Services Dropdown */}
      <div className="relative" ref={servicesDropdownRef}>
        <button
          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
        >
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {servicesDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
              <p className="text-xs text-gray-500">Comprehensive technology solutions</p>
            </div>
            {serviceItems.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="flex items-start space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-zion-cyan hover:bg-gray-50 transition-colors"
                onClick={() => setServicesDropdownOpen(false)}
              >
                <service.icon className="w-5 h-5 mt-0.5 text-zion-cyan" />
                <div>
                  <div className="font-medium">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.description}</div>
                </div>
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-100">
              <Link
                to="/services"
                className="text-sm text-zion-cyan hover:text-zion-cyan-dark font-medium"
                onClick={() => setServicesDropdownOpen(false)}
              >
                View All Services →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative" ref={resourcesDropdownRef}>
        <button
          onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
          className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
        >
          <span>Resources</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {resourcesDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">Resources & Support</h3>
              <p className="text-xs text-gray-500">Knowledge and assistance</p>
            </div>
            {resourceItems.map((resource) => (
              <Link
                key={resource.name}
                to={resource.href}
                className="flex items-start space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-zion-cyan hover:bg-gray-50 transition-colors"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                <resource.icon className="w-5 h-5 mt-0.5 text-zion-cyan" />
                <div>
                  <div className="font-medium">{resource.name}</div>
                  <div className="text-xs text-gray-500">{resource.description}</div>
                </div>
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-100">
              <Link
                to="/help"
                className="text-sm text-zion-cyan hover:text-zion-cyan-dark font-medium"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                Get Help →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Additional Navigation Items */}
      <Link
        to="/pricing"
        className={cn(
          'flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan',
          isActive('/pricing')
            ? 'text-zion-cyan'
            : 'text-gray-700'
        )}
      >
        <DollarSign className="w-4 h-4" />
        <span>Pricing</span>
      </Link>

      {/* User Menu */}
      {isAuthenticated ? (
        <div className="flex items-center space-x-4">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Profile
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-zion-cyan text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zion-cyan-dark transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Admin Panel Link */}
      {isAdmin && (
        <Link
          to="/admin"
          className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
        >
          Admin Panel
        </Link>
      )}
    </nav>
  );
}
