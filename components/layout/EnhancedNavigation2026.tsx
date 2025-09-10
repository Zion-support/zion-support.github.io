import React from 'react';

export default function EnhancedNavigation2026() {
  return (
    <nav className="bg-black/80 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Zion Tech Group</div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white/80 hover:text-white">Home</a>
            <a href="/services" className="text-white/80 hover:text-white">Services</a>
            <a href="/about" className="text-white/80 hover:text-white">About</a>
            <a href="/contact" className="text-white/80 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
