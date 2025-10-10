'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
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
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-700 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
                <span className="text-xs text-cyan-400">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-2">
            <Link
              to="/"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={onClose}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            {/* AI Services */}
            <div>
              <button
                onClick={() => toggleSection('ai-services')}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5" />
                  <span>AI Services</span>
                </div>
                {expandedSections.has('ai-services') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSections.has('ai-services') && (
                <div className="ml-8 space-y-1 mt-2">
                  <Link
                    to="/ai-analytics"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={onClose}
                  >
                    AI Analytics
                  </Link>
                  <Link
                    to="/ai-automation"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={onClose}
                  >
                    AI Automation
                  </Link>
                  <Link
                    to="/ai-chatbot-builder"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={onClose}
                  >
                    AI Chatbot
                  </Link>
                  <Link
                    to="/ai-services"
                    className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    onClick={onClose}
                  >
                    View All AI Services →
                  </Link>
                </div>
              )}
            </div>

            {/* IT Services */}
            <div>
              <button
                onClick={() => toggleSection('it-services')}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Cloud className="w-5 h-5" />
                  <span>IT Services</span>
                </div>
                {expandedSections.has('it-services') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSections.has('it-services') && (
                <div className="ml-8 space-y-1 mt-2">
                  <Link
                    to="/cloud-infrastructure"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                    onClick={onClose}
                  >
                    Cloud Infrastructure
                  </Link>
                  <Link
                    to="/cybersecurity-solutions"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                    onClick={onClose}
                  >
                    Cybersecurity
                  </Link>
                  <Link
                    to="/web-development"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                    onClick={onClose}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/it-services"
                    className="block px-4 py-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    onClick={onClose}
                  >
                    View All IT Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Micro SAAS */}
            <div>
              <button
                onClick={() => toggleSection('micro-saas')}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5" />
                  <span>Micro SAAS</span>
                </div>
                {expandedSections.has('micro-saas') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSections.has('micro-saas') && (
                <div className="ml-8 space-y-1 mt-2">
                  <Link
                    to="/zion-analytics-pro"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    onClick={onClose}
                  >
                    Zion Analytics Pro
                  </Link>
                  <Link
                    to="/zion-chat-ai"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    onClick={onClose}
                  >
                    Zion Chat AI
                  </Link>
                  <Link
                    to="/zion-security-shield"
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    onClick={onClose}
                  >
                    Zion Security Shield
                  </Link>
                  <Link
                    to="/micro-saas"
                    className="block px-4 py-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
                    onClick={onClose}
                  >
                    View All Micro SAAS →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/about') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={onClose}
            >
              <Users className="w-5 h-5" />
              <span>About</span>
            </Link>

            <Link
              to="/pricing"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/pricing') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={onClose}
            >
              <BarChart className="w-5 h-5" />
              <span>Pricing</span>
            </Link>

            <Link
              to="/contact"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/contact') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={onClose}
            >
              <Phone className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;