<<<<<<< HEAD
'use client';

import Link from 'next/link';
import { Phone, Mail, Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check, ChevronRight, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const SidebarPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionKey: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionKey)) {
      newExpanded.delete(sectionKey);
    } else {
      newExpanded.add(sectionKey);
    }
    setExpandedSections(newExpanded);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies and insights.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive intelligence', 'ROI optimization']
    }
  ];

  const navigationSections = [
    {
      title: 'AI Solutions',
      key: 'ai-solutions',
      items: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Financial Analytics', href: '/ai-financial-analytics-pro' }
      ]
    },
    {
      title: 'Services',
      key: 'services',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'IT Services', href: '/it-services' }
      ]
    },
    {
      title: 'Company',
      key: 'company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of technology solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Navigation</h3>
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="space-y-2 px-4">
                    {navigationSections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-1">
                        <button
                          onClick={() => section.key && toggleSection(section.key)}
                          className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{section.title}</span>
                          {section.key && (
                            expandedSections.has(section.key) ?
                            <ChevronDown className="w-4 h-4" /> :
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        {(!section.key || expandedSections.has(section.key)) && (
                          <div className="ml-4 space-y-1">
                            {section.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={item.href}
                                className="block px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {/* Features Section */}
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Features</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Discover the powerful features that make our solutions stand out
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                          </div>
                          <p className="text-gray-300 mb-4">{feature.description}</p>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                                <Check className="w-4 h-4 text-emerald-400 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                  <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                      Contact us today to learn more about our solutions and how they can help your business grow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                        View All Solutions
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SidebarPage;
=======
<<<<<<< HEAD
'use client';;
import React, {Suspense, lazy}from 'react';
import {Link, useLocation}}from 'react-router-dom';
import {X,}
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  ChevronDown,
  ChevronRight,
=======
'use client';
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

import React, { useState } from 'react';
import { _Menu, X, Home, User, Settings, LogOut, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems?: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
    submenu?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { label: 'Profile', href: '/profile', icon: <User className="w-5 h-5" /> },
    { label: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" /> },
  ],
  user,
  onLogout,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Info */}
          {user && (
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                >
                  <div className="flex items-center">
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    {item.label}
                  </div>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeSubmenu === item.label ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  )}
                </a>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

<<<<<<< HEAD
=======
          {/* Logout */}
          {onLogout && (
            <div className="p-4 border-t">
              <button
                onClick={onLogout}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
  );
};

export default Sidebar;
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
