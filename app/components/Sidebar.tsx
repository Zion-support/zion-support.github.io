import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-slate-900 p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="space-y-4">
          <Link to="/" className="block text-gray-300 hover:text-white py-2">
            Home
          </Link>
          <Link to="/about" className="block text-gray-300 hover:text-white py-2">
            About
          </Link>
          <Link to="/services" className="block text-gray-300 hover:text-white py-2">
            Services
          </Link>
          <Link to="/contact" className="block text-gray-300 hover:text-white py-2">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
