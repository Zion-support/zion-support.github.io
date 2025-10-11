'use client';
import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Zion Tech Group</div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/services" className="hover:text-gray-300">Services</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
        <button 
          className="md:hidden"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
}