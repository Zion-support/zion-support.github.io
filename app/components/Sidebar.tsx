import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Users } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Network } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { X, Home, Shield, Zap, Brain, Globe, Menu } from 'lucide-react';
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

  X,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  Shield,
  Cloud,
  Code,
  Brain,
  Zap,
  Database,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin  } from 'lucide-react';
} from 'lucide-react';import { Link  } from 'react-router-dom';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Sidebar({ className = '', children, ...props }: SidebarProps) {
    return (
        <div className="component" {...props}>
          {children}

interface SidebarProps {,
    isOpen: boolean;,
    onClose: () => void;

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = useCallback((item: string) => {
    setExpandedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const menuItems = useMemo(() => [
    {,
    name: 'Dashboard',
        path: '/',
        icon: <Home className="w-5 h-5" />,
        children: []
    },
    name: 'AI Services',
        path: '/ai-services',
        icon: <Brain className="w-5 h-5" />,
        children: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' }
      ]
    name: '5G Solutions',
        path: '/5g-solutions',
        icon: <Zap className="w-5 h-5" />,
        { name: '5G Network Design', path: '/5g-network-design' },
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Private Networks', path: '/5g-private-networks' }
    name: 'Micro SAAS',
        path: '/micro-saas',
        icon: <Cloud className="w-5 h-5" />,
    name: 'About',
        path: '/about',
        icon: <Users className="w-5 h-5" />,
    name: 'Contact',
        path: '/contact',
        icon: <Phone className="w-5 h-5" />,
  const navigationItems = [
    {
      name: 'Home',
      icon: <Home className="w-5 h-5" />
      icon: <Brain className="w-5 h-5" />
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-5 h-5" />
      icon: <Zap className="w-5 h-5" />
      icon: <Globe className="w-5 h-5" />
  ];

  if (!isOpen) return null;

    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative flex h-full">
        <div className="w-80 bg-slate-900 shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button>
  onClick={onClose}>
  className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center">
                  <Link>
  to={item.path}>
  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full ${>
  isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}>
  onClick={onClose}
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>

                  {item.children.length > 0 && (
  onClick={() => toggleExpanded(item.name)}
  className="ml-auto p-1 text-gray-400 hover:text-white transition-colors"
                      {expandedItems.includes(item.name) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}

                {item.children.length > 0 && expandedItems.includes(item.name) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}>
  to={child.path}>
  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${>
  isActive(child.path)
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        {child.name}
                    ))}
          </nav>

export default function Sidebar({ className = '', children }: SidebarProps) {
    <div className={`${className}`}>

import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          <button
            className="text-gray-300 hover:text-white focus:outline-none"

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                  to={item.path}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              </li>
          </ul>
    </>
import { X } from 'lucide-react';

  isOpen: boolean;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-64 bg-slate-900 p-4">
        <button onClick={onClose} className="text-white mb-4">
        <nav className="space-y-4">
          <a href="/" className="block text-white hover:text-cyan-400">Home</a>
          <a href="/services" className="block text-white hover:text-cyan-400">Services</a>
          <a href="/about" className="block text-white hover:text-cyan-400">About</a>
          <a href="/contact" className="block text-white hover:text-cyan-400">Contact</a>
};

export default Sidebar;
