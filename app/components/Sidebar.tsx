'use client';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
        <h1>Sidebar</h1>
      </div>
    </div>
  );
};

export default Sidebar;