'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Mail, 
  Bell, 
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      href: '/dashboard'
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      href: '/users',
      children: [
        { label: 'All Users', href: '/users' },
        { label: 'Add User', href: '/users/add' },
        { label: 'User Roles', href: '/users/roles' }
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      href: '/analytics'
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: FileText,
      href: '/documents',
      children: [
        { label: 'All Documents', href: '/documents' },
        { label: 'Upload', href: '/documents/upload' },
        { label: 'Templates', href: '/documents/templates' }
      ]
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: Mail,
      href: '/messages'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      href: '/notifications'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      href: '/settings'
    }
  ]

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold">Zion Tech</h2>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-md hover:bg-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.id}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="p-1 hover:bg-slate-700 rounded"
                    >
                      {expandedItems.includes(item.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
                {item.children && expandedItems.includes(item.id) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.children.map((child, index) => (
                      <Link
                        key={index}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">User Name</p>
              <p className="text-xs text-gray-400 truncate">user@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar