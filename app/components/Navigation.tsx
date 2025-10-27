import React from 'react';
import { Home } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Home className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Zion Tech Group</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/services" className="hover:text-blue-400">Services</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}