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
export default Sidebar
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {;
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">;
      <div className="p-6">;
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>;
        <nav className="space-y-2">;
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Home;
          </Link>;
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            About;
          </Link>;
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Services;
          </Link>;
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Contact;
          </Link>;
          <Link
            to="/pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Pricing;
          </Link>;
        </nav>;
      </div>;
    </div>;
  );
};

export default Sidebar;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
