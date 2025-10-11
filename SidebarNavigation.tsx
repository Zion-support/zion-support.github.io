import React from 'react'
import { X, Home, User, Settings, LogOut } from 'lucide-react'

interface SidebarNavigationProps {
  isOpen: boolean
  onClose: () => void
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <React.Fragment>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-white text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-4">
          <a
            href="/"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Home className="w-5 h-5 mr-3" />
            Home
          </a>
          <a
            href="/profile"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <User className="w-5 h-5 mr-3" />
            Profile
          </a>
          <a
            href="/settings"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </a>
          <a
            href="/logout"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </a>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default SidebarNavigation