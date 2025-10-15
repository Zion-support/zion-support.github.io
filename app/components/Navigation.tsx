import React from 'react';
import { Menu } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <a href="/" className="text-xl font-bold hover:text-blue-400">
            Zion Tech Group
          </a>
        </div>
        <div className="hidden lg:flex space-x-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/services" className="hover:text-blue-400">Services</a>
          <a href="/ai-solutions" className="hover:text-blue-400">AI Solutions</a>
          <a href="/it-solutions" className="hover:text-blue-400">IT Solutions</a>
          <a href="/cybersecurity" className="hover:text-blue-400">Cybersecurity</a>
          <a href="/cloud-solutions" className="hover:text-blue-400">Cloud</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
