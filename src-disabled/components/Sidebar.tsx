import React from 'react';
:src_backup/components/Sidebar.tsx
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
interface SidebarProps {
  isOpen: boolean;,
  onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">",
            className="p-2 hover:bg-gray-100 rounded-lg""
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50""
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}'
        role="button""
        tabIndex={0}
        aria-label="Close sidebar""
      />
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl">"
        <div className="flex items-center justify-between p-4 border-b border-gray-700">"
          <h2 className="text-white font-semibold">Menu</h2>"
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white""
          >
            <X className="h-6 w-6" />"
          </button>
        </div>
        <nav className="p-4">"
          <div className="space-y-2">"
            <a href="/" className="block text-gray-300 hover:text-white py-2">Home</a>"
            <a href="/about" className="block text-gray-300 hover:text-white py-2">About</a>"
            <a href="/services" className="block text-gray-300 hover:text-white py-2">Services</a>"
            <a href="/pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>"
            <a href="/contact" className="block text-gray-300 hover:text-white py-2">Contact</a>"
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
