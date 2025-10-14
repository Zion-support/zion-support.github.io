import React from 'react';
import { 
  XMarkIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

interface ImprovedSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ isOpen, onClose }) => {

const ImprovedSidebar: React.FC = () => {
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
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        shadow-2 xl border-r border-slate-700
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main Navigation
              </h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200
                        ${isActive(link.href) 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white hover:shadow-md'
                        }
                      `}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Sections */}
            {serviceSections.map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleSection(section.key)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider hover:text-white transition-colors rounded-lg hover:bg-slate-700"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </div>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.includes(section.key) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedSections.includes(section.key) && (
                  <ul className="mt-2 space-y-1 ml-8">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className={`
                            flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200
                            ${isActive(link.href) 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                              : 'text-gray-400 hover:bg-slate-700 hover:text-white hover:shadow-md'
                            }
                          `}
                        >
                          <link.icon className="w-4 h-4" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Additional Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Additional
              </h3>
              <ul className="space-y-2">
                {additionalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200
                        ${isActive(link.href) 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                          : 'text-gray-400 hover:bg-slate-700 hover:text-white hover:shadow-md'
                        }
                      `}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-700 bg-gradient-to-r from-slate-800 to-slate-700">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © 2024 Zion Tech Group
              </p>
              <p className="text-xs text-gray-500 mt-1">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImprovedSidebar;
