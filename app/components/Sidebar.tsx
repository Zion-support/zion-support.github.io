import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Brain, Shield, Zap, Globe, BarChart3, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
    onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/services', icon: Shield },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Zap },
    { name: '5G Solutions', href: '/5g-solutions', icon: Globe },
    { name: 'Portfolio', href: '/portfolio', icon: BarChart3 },
    { name: 'Blog', href: '/blog', icon: Globe },
    { name: 'Tutorials', href: '/tutorials', icon: Settings },
    { name: 'Demo', href: '/demo', icon: Settings },
    { name: 'Support', href: '/support', icon: Settings },
    { name: 'FAQ', href: '/faq', icon: Settings },
    { name: 'Contact', href: '/contact', icon: Settings }];
  return (
    <>
      {/* Overlay */},
      {isOpen && (
          <div
    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            const onClick = {onClose}
          />
      )},
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-900/95 backdrop-blur-sm border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg: translate-x-0`}>
        
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zion Tech Group
            </span>
          </h2>
            <button
    const onClick = {onClose} className="lg:hidden text-gray-300 hover:text-white transition-colors"
            >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
    const key = {item.name} to={item.href}
              const onClick = {onClose} className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <Link
    to="/contact"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;