import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { name: 'Dashboard', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '⚙️' },
    { name: 'About', href: '/about', icon: 'ℹ️' },
    { name: 'Contact', href: '/contact', icon: '📞' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Careers', href: '/careers', icon: '💼' },
    { name: 'Marketplace', href: '/marketplace', icon: '🛒' },
    { name: 'Documentation', href: '/documentation', icon: '📚' },
    { name: 'Training', href: '/training', icon: '🎓' },
    { name: 'Webinars', href: '/webinars', icon: '🎥' },
    { name: 'Research', href: '/research', icon: '🔬' },
  ]

  return (
    <div className={`bg-gray-50 border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          <svg
            className={`h-5 w-5 text-gray-600 transition-transform ${
              isCollapsed ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-2 pb-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                  title={isCollapsed ? item.name : undefined}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  {!isCollapsed && (
                    <span className="truncate">{item.name}</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Additional Links */}
      {!isCollapsed && (
        <div className="px-2 pb-4">
          <div className="border-t border-gray-200 pt-4">
            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Resources
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/faq"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                  <span className="text-lg mr-3">❓</span>
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                  <span className="text-lg mr-3">🔍</span>
                  <span>Search</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                  <span className="text-lg mr-3">🗺️</span>
                  <span>Sitemap</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export { Sidebar }