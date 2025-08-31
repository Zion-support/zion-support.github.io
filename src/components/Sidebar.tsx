import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, ChevronDown, ChevronRight, Home, Brain, Server, Cloud, 
  Shield, Zap, Rocket, Heart, DollarSign, Building2, ShoppingCart,
  Building, Users, Handshake, Briefcase, Newspaper, BookOpen, 
  FileText, Video, GraduationCap, HelpCircle, MessageCircle, 
  Activity, Code, Settings, Star, TrendingUp, Award, Globe,
  Lock, Atom, Cpu, Database, Network, Clock, ArrowRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['services', 'solutions']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationSections = [
    {
      id: 'main',
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home, badge: null }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, badge: 'New' },
        { name: 'IT Services', href: '/it-services', icon: Server, badge: null },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, badge: null },
        { name: 'Cybersecurity', href: '/security', icon: Shield, badge: 'Hot' },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap, badge: null },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, badge: 'Trending' }
      ]
    },
    {
      id: 'solutions',
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, badge: null },
        { name: 'Financial', href: '/solutions/financial', icon: DollarSign, badge: null },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Building2, badge: null },
        { name: 'Government', href: '/solutions/government', icon: Shield, badge: null },
        { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, badge: null }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about', icon: Building, badge: null },
        { name: 'Leadership', href: '/leadership', icon: Users, badge: null },
        { name: 'Partners', href: '/partners', icon: Handshake, badge: null },
        { name: 'Careers', href: '/careers', icon: Briefcase, badge: null },
        { name: 'News', href: '/news', icon: Newspaper, badge: null }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: BookOpen, badge: null },
        { name: 'Case Studies', href: '/case-studies', icon: FileText, badge: null },
        { name: 'White Papers', href: '/white-papers', icon: FileText, badge: null },
        { name: 'Webinars', href: '/webinars', icon: Video, badge: null },
        { name: 'Training', href: '/training', icon: GraduationCap, badge: null },
        { name: 'Documentation', href: '/docs', icon: BookOpen, badge: null }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle, badge: null },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle, badge: null },
        { name: 'Status Page', href: '/status', icon: Activity, badge: null },
        { name: 'API Docs', href: '/api-docs', icon: Code, badge: null }
      ]
    }
  ];

  const quickActions = [
    { name: 'Request Demo', href: '/request-demo', icon: Star, color: 'bg-gradient-to-r from-blue-600 to-purple-600' },
    { name: 'Get Quote', href: '/get-quote', icon: TrendingUp, color: 'bg-gradient-to-r from-green-600 to-emerald-600' },
    { name: 'Contact Sales', href: '/contact-sales', icon: MessageCircle, color: 'bg-gradient-to-r from-orange-600 to-red-600' }
  ];

  const featuredServices = [
    {
      name: 'AI Autonomous Business Operations',
      href: '/services/ai-autonomous-business-operations-platform',
      icon: Brain,
      description: 'Intelligent automation for enterprise operations',
      category: 'AI Services'
    },
    {
      name: 'AI Customer Experience Platform',
      href: '/services/ai-customer-experience-analytics-platform',
      icon: Users,
      description: 'Personalized customer experience across all touchpoints',
      category: 'AI Services'
    },
    {
      name: 'Quantum Edge Computing',
      href: '/services/quantum-edge-computing-solutions',
      icon: Atom,
      description: 'Next-generation computing at the edge',
      category: 'Emerging Tech'
    }
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
        fixed top-0 left-0 h-full w-80 bg-white border-r border-gray-200 shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Navigation</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Quick Actions */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className={`${action.color} text-white p-3 rounded-lg flex items-center space-x-3 hover:scale-105 transition-all duration-200`}
                  onClick={onClose}
                >
                  <action.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="p-4">
            {navigationSections.map((section) => (
              <div key={section.id} className="mb-6">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200"
                >
                  {section.title}
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {expandedSections.includes(section.id) && (
                  <div className="space-y-1 ml-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group
                          ${isActive(item.href) 
                            ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-600' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }
                        `}
                        onClick={onClose}
                      >
                        <item.icon className={`w-4 h-4 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                          <span className={`
                            px-2 py-1 text-xs font-medium rounded-full
                            ${item.badge === 'New' ? 'bg-green-100 text-green-800' : ''}
                            ${item.badge === 'Hot' ? 'bg-red-100 text-red-800' : ''}
                            ${item.badge === 'Trending' ? 'bg-purple-100 text-purple-800' : ''}
                          `}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Featured Services */}
          <div className="p-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Featured Services</h3>
            <div className="space-y-3">
              {featuredServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  onClick={onClose}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-200">
                      <service.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {service.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                      <span className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full mt-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4">
              <Link
                to="/services"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                onClick={onClose}
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Need help? Contact our support team
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              onClick={onClose}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
