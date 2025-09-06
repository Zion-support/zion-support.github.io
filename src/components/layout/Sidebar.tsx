<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, 
  Users, 
  Settings, 
  DollarSign, 
  Phone,
  Menu
} from 'lucide-react'

const Sidebar = () => {
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Contact', href: '/contact', icon: Phone }
  ]

  return (
    <aside className="hidden lg:block w-64 bg-white shadow-lg min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Zion Tech</span>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
;
export default Sidebar;
=======
import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-2">
          <a
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/services"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </aside>
  );
};
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
