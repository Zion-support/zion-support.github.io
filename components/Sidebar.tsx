import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Home,
  Briefcase,
  Target,
  Building2,
  FileText,
  HelpCircle,
  Search,
  X,
  ChevronRight,
  Brain,
  Shield,
  Cloud,
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Globe
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Building2 },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Solutions', href: '/solutions', icon: Target },
    { name: 'Contact', href: '/contact', icon: Heart }
  ];

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Shield },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
    { name: 'Consulting', href: '/consulting', icon: GraduationCap }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api', icon: Globe },
    { name: 'Support', href: '/support', icon: HelpCircle },
    { name: 'FAQ', href: '/faq', icon: HelpCircle }
  ];

  const isActive = (href: string) => router.pathname === href;

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
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:shadow-none`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Main Navigation
              </div>
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="px-4 mt-6 space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Services
              </div>
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.name}
                    href={service.href}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive(service.href)
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {service.name}
                  </Link>
                );
              })}
            </div>

            <div className="px-4 mt-6 space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Resources
              </div>
              {resources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <Link
                    key={resource.name}
                    href={resource.href}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive(resource.href)
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {resource.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                Need help? Contact us
              </p>
              <a
                href="tel:+13024640950"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}