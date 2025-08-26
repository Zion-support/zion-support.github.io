import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, Brain, Bot, Server, Users, FileText, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { label: 'Home', path: '/', icon: Home },
        { label: 'About', path: '/about', icon: Users },
        { label: 'Services', path: '/services', icon: Settings },
        { label: 'Contact', path: '/contact', icon: HelpCircle }
      ]
    },
    {
      title: 'AI Platforms',
      items: [
        { label: 'Quantum Neural Network', path: '/quantum-neural-network-platform', icon: Brain },
        { label: 'Autonomous Business Ops', path: '/autonomous-business-operations-platform', icon: Bot },
        { label: 'IT Asset Management', path: '/ai-powered-it-asset-management', icon: Server },
        { label: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: Brain },
        { label: 'AI Content Generation', path: '/ai-content-generator', icon: FileText },
        { label: 'AI Code Review', path: '/ai-code-review', icon: FileText }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Case Studies', path: '/case-studies', icon: FileText },
        { label: 'White Papers', path: '/white-papers', icon: FileText },
        { label: 'News', path: '/news', icon: FileText },
        { label: 'Blog', path: '/blog', icon: FileText },
        { label: 'Documentation', path: '/docs', icon: FileText },
        { label: 'Training', path: '/training', icon: Users }
      ]
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800/95 backdrop-blur-lg border-r border-white/10 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-semibold">Navigation</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigationItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`
                          flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                          ${isActive(item.path) 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }
                        `}
                        onClick={() => {
                          if (window.innerWidth < 1024) {
                            onClose();
                          }
                        }}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        {isActive(item.path) && (
                          <ChevronRight className="h-4 w-4 text-blue-400" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">
                Need Help?
              </p>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onClose();
                  }
                }}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;