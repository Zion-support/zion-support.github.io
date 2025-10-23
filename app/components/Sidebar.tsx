"use client";
import React from "react";


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close sidebar"
        >
          ×
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    
    
    
    </div>
  );
};

export default Page;

