'use client';
import React from 'react';
import { X, Home, Users, Settings, HelpCircle, MessageCircle, FileText, ExternalLink } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0">
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-4 px-4">
          <div className="space-y-2">
            <a
              href="/"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              <Home className="w-4 h-4 mr-3" />
              Home
            </a>
            
            <a
              href="/about"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              <Users className="w-4 h-4 mr-3" />
              About Us
            </a>
            
            <a
              href="/services"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              <Settings className="w-4 h-4 mr-3" />
              Services
            </a>
            
            <a
              href="/contact"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              <MessageCircle className="w-4 h-4 mr-3" />
              Contact
            </a>
          </div>
          
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Support & Resources
            </h3>
            <div className="mt-2 space-y-1">
              <a
                href="/help"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                <HelpCircle className="w-4 h-4 mr-3" />
                Help Center
              </a>
              
              <a
                href="/live-chat"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                <MessageCircle className="w-4 h-4 mr-3" />
                Live Chat
              </a>
              
              <a
                href="/documentation"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                <FileText className="w-4 h-4 mr-3" />
                Documentation
              </a>
              
              <a
                href="https://status.ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                <ExternalLink className="w-4 h-4 mr-3" />
                System Status
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;