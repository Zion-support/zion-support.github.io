import React from 'react';

import { X } from 'lucide-react';




interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (



    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close sidebar"
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-white font-semibold">Menu</h2>


          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >


            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>



          </button>
        </div>
        
        <nav className="p-4">




          <div className="space-y-4">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-white transition-colors"

              onClick={onClose}
            >
              Home
            </Link>
            <Link 
              to="/about" 

              className="block text-gray-300 hover:text-white transition-colors"

              onClick={onClose}
            >
              About
            </Link>
            <Link 
              to="/services" 

              className="block text-gray-300 hover:text-white transition-colors"

              onClick={onClose}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 

              className="block text-gray-300 hover:text-white transition-colors"

              onClick={onClose}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 

              className="block text-gray-300 hover:text-white transition-colors"

              onClick={onClose}
            >
              Contact
            </Link>




          </div>

        </nav>
      </div>
    </div>

  );
};

export default Sidebar;