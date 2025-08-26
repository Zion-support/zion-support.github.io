import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const quickActions = [
    {
      name: 'Get Quote',
      href: '/contact',
      icon: '💬',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Schedule Demo',
      href: '/demo',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Support',
      href: '/support',
      icon: '🆘',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const recentServices = [
    { name: 'AI Solutions', href: '/services/ai', icon: '🤖' },
    { name: 'Cloud Services', href: '/services/cloud', icon: '☁️' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: '🔒' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' }
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
      >
        <svg className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="p-4">
        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className={`font-semibold text-gray-900 mb-3 ${isCollapsed ? 'sr-only' : ''}`}>
            Quick Actions
          </h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.href}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
              >
                <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center text-lg ${
                  isCollapsed ? 'mr-0' : 'mr-3'
                }`}>
                  {action.icon}
                </div>
                {!isCollapsed && (
                  <span className="text-sm font-medium text-gray-700">{action.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Services */}
        <div className="mb-6">
          <h3 className={`font-semibold text-gray-900 mb-3 ${isCollapsed ? 'sr-only' : ''}`}>
            Popular Services
          </h3>
          <div className="space-y-2">
            {recentServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 ${
                  isActive(service.href) ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg ${
                  isCollapsed ? 'mr-0' : 'mr-3'
                }">
                  {service.icon}
                </div>
                {!isCollapsed && (
                  <span className="text-sm font-medium">{service.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <h3 className={`font-semibold text-gray-900 mb-3 ${isCollapsed ? 'sr-only' : ''}`}>
            Quick Links
          </h3>
          <div className="space-y-1">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`block px-2 py-1 text-sm rounded hover:bg-gray-50 transition-colors duration-300 ${
                  isActive(link.href) ? 'text-blue-600 font-medium' : 'text-gray-600'
                } ${isCollapsed ? 'text-center' : ''}`}
              >
                {isCollapsed ? link.name.charAt(0) : link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        {!isCollapsed && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Our team is here to assist you with any questions or concerns.
            </p>
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}