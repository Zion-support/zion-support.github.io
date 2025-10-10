'use client';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Zion Tech Group</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/services" className="hover:text-blue-400">Services</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
