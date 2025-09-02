import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Home, Briefcase, Target, Building, FileText, Video, Mail, Brain, Cloud, Shield, Server, Rocket, Users, HelpCircle, DollarSign } from 'lucide-react';

export function MobileMenu({ isOpen, onClose, user, onNavigate }) {
  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      children: [
        { name: 'AI Services', href: '/services/ai', icon: Brain },
        { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server },
        { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      children: [
        { name: 'Industry Solutions', href: '/solutions/industry' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Retail', href: '/solutions/retail' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Building,
      children: [
        { name: 'Company', href: '/about' },
        { name: 'Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      icon: FileText,
      children: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Events', href: '/events' },
        { name: 'News', href: '/news' },
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' }
      ]
    },
    {
      name: 'Support',
      href: '/support',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', href: '/support' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Training', href: '/training' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const handleNavigation = (path) => {
    onNavigate(path);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Content */}
      <div className="absolute right-0 top-0 h-full w-80 bg-zion-blue-dark border-l border-zion-purple/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-semibold">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-4 py-3 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="pl-8 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="flex items-center px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                          onClick={() => handleNavigation(child.href)}
                        >
                          {child.icon && <child.icon className="h-4 w-4 mr-3" />}
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-3 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                    onClick={() => handleNavigation(item.href)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* User Actions */}
        <div className="p-4 border-t border-zion-purple/20 space-y-3">
          {user ? (
            <div className="text-center">
              <p className="text-sm text-zion-slate-light mb-2">Welcome back, {user.name}</p>
              <Link
                to="/dashboard"
                className="block w-full px-4 py-2 bg-zion-purple text-white text-center rounded-lg hover:bg-zion-purple/80 transition-colors"
                onClick={() => handleNavigation('/dashboard')}
              >
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              <Link
                to="/login"
                className="block w-full px-4 py-2 border border-zion-purple/30 text-zion-cyan text-center rounded-lg hover:bg-zion-purple/10 transition-colors"
                onClick={() => handleNavigation('/login')}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block w-full px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-center rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300"
                onClick={() => handleNavigation('/register')}
              >
                Get Started
              </Link>
            </div>
          )}
          
          {/* Quick Actions */}
          <div className="pt-3 border-t border-zion-purple/20">
            <Link
              to="/request-quote"
              className="flex items-center justify-center space-x-2 px-4 py-2 text-zion-cyan hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              onClick={() => handleNavigation('/request-quote')}
            >
              <DollarSign className="h-4 w-4" />
              <span>Request Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}